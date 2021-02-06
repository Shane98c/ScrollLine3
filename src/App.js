import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";

const addInaturalist = (map) => {
  map.addSource("iNatProjectArea", {
    type: "raster",
    tiles: [
      "https://api.inaturalist.org/v1/places/164277/{z}/{x}/{y}.png?tile_size=256",
    ],
  });
  map.addLayer({
    id: "iNatProjectArea",
    source: "iNatProjectArea",
    type: "raster",
  });
  map.addSource("iNatProjectPts", {
    type: "raster",
    tiles: [
      "https://api.inaturalist.org/v1/points/{z}/{x}/{y}.png?captive=any&project_id=94178&ttl=120&style=geotilegrid&tile_size=256&color=%23FF4500",
    ],
  });
  map.addLayer({
    id: "iNatProjectPts",
    source: "iNatProjectPts",
    type: "raster",
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
};

const alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
};

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=journalismScrollytelling"
    : "?pluginName=journalismScrollytelling";
  return {
    url: url + suffix,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: props.chapters[0],
    };
    // this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const config = this.props;
    const mapStart = config.chapters[0].location;

    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: config.style,
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing,
      transformRequest: transformRequest,
      interactive: false,
    });

    const marker = new mapboxgl.Marker();
    if (config.showMarkers) {
      marker.setLngLat(mapStart.center).addTo(map);
    }

    function getLayerPaintType(layer) {
      var layerType = map.getLayer(layer).type;
      return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
      var paintProps = getLayerPaintType(layer.layer);
      paintProps.forEach(function (prop) {
        var options = {};
        if (layer.duration) {
          var transitionProp = prop + "-transition";
          options = { duration: layer.duration };
          map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
      });
    }

    const setState = this.setState.bind(this);

    // instantiate the scrollama
    const scroller = scrollama();
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    const createSpillInfoPopup = (e) => {
      if (this.state.currentChapter.id !== "spills") return;
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = ReactDOMServer.renderToStaticMarkup(
        <div>
          {e.features[0].properties["Local Datetime"] ? (
            <div>{e.features[0].properties["Local Datetime"]}</div>
          ) : null}
          {e.features[0].properties["Unintentional Release Bbls"] ? (
            <div>
              Barrels Spilled:{" "}
              <b>
                {numberWithCommas(
                  e.features[0].properties["Unintentional Release Bbls"]
                )}
              </b>
            </div>
          ) : null}
          {e.features[0].properties["Est Cost Oper Paid"] ? (
            <div>
              Total Cost:{" "}
              <b>${numberWithCommas(e.features[0].properties["Total Cost"])}</b>
            </div>
          ) : null}
          {e.features[0].properties["Est Cost Oper Paid"] ? (
            <div>
              Cost Operator Paid:{" "}
              <b>
                $
                {numberWithCommas(
                  e.features[0].properties["Est Cost Oper Paid"]
                )}
              </b>
            </div>
          ) : null}
        </div>
      );
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    };

    map.on("load", () => {
      // setup the instance, pass callback functions
      scroller
        .setup({
          step: ".step",
          offset: 0.5,
          progress: true,
        })
        .onStepEnter((response) => {
          popup.remove();

          const chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          setState({ currentChapter: chapter });
          map[chapter.mapAnimation || "flyTo"](chapter.location);
          if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
          }
          if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
          }
        })
        .onStepExit((response) => {
          var chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
          }
        });

      addInaturalist(map);

      //Map interaction events
      map.on("mouseenter", "spills", (e) => {
        createSpillInfoPopup(e);
      });
      map.on("click", "spills", (e) => {
        createSpillInfoPopup(e);
      });
      map.on("mouseleave", "spills", () => {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });

    window.addEventListener("resize", scroller.resize);
  }

  render() {
    const config = this.props;
    const theme = config.theme;
    const currentChapterID = this.state.currentChapter.id;
    return (
      <div>
        {config.title && (
          <div id="header" className={theme}>
            <h1>{config.title}</h1>
            {config.subtitle && <h3>{config.subtitle}</h3>}
            {config.byline && <p>{config.byline}</p>}
            {/* <img
              src="./giniw.jpg"
              alt="Water Protectors stop construction on Line 3."
            /> */}
          </div>
        )}
        <div ref={(el) => (this.mapContainer = el)} id="map" />
        <div id="story">
          <div id="features" className={alignments[config.alignment]}>
            {config.chapters.map((chapter) => (
              <Chapter
                key={chapter.id}
                theme={theme}
                {...chapter}
                currentChapterID={currentChapterID}
              />
            ))}
          </div>
          {config.footer && (
            <div id="footer" className={theme}>
              <h2>Support the Movement to #StopLine3</h2>
              <div className="callToAction">
                <a href="https://linktr.ee/stopline3" target="_blank">
                  <div className="actionContainer">Donate or Join</div>
                </a>
                {/* <a href="https://linktr.ee/stopline3" target="_blank">
                  <div className="actionContainer">
                    <div>Follow</div>
                  </div>
                </a> */}
              </div>
              <div className="credits">
                This map was created in collaboration with the
                <div>
                  <a href="https://www.facebook.com/SftPTC" target="_blank">
                    Twin Cities Branch of Science for the People
                  </a>
                </div>
              </div>
              <div>
                Please suggest or submit content, data, imagery, or any changes
                to Shane Loeffler.{" "}
                <div>
                  <a href="mailto:shane98c@gmail.com">shane98c@gmail.com</a>{" "}
                  {" | "}
                  <a target="_blank" href="https://twitter.com/shane98c">
                    @shane98c
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function Chapter({ id, theme, title, image, description, currentChapterID }) {
  const classList = id === currentChapterID ? "step active" : "step";
  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {title && <h3 className="title">{title}</h3>}
        {image && <img src={image} alt={title}></img>}

        {description && (
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";

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
        map.setPaintProperty(layer.layer, prop, layer.opacity);
      });
    }

    const setState = this.setState.bind(this);

    // instantiate the scrollama
    const scroller = scrollama();

    map.on("load", () => {
      // setup the instance, pass callback functions
      scroller
        .setup({
          step: ".step",
          offset: 0.5,
          progress: true,
        })
        .onStepEnter((response) => {
          const chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          setState({ currentChapter: chapter });
          map.flyTo(chapter.location);
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
      // addLine3();
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });
      map.on("mouseenter", "spills", (e) => {
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
                <b>
                  ${numberWithCommas(e.features[0].properties["Total Cost"])}
                </b>
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

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
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
            {config.subtitle && <h2>{config.subtitle}</h2>}
            {config.byline && <p>{config.byline}</p>}
            <img
              src="./giniw.jpg"
              alt="Water Protectors stop construction on Line 3."
            />
            vvv Scroll vvv
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
              <p>{config.footer}</p>
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
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default App;

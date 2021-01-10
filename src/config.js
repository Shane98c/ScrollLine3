var config = {
  style: "mapbox://styles/shane98c/ckii8dkdt2k8y19qyhtov5dda",
  accessToken:
    "pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",
  showMarkers: false,
  theme: "dark",
  alignment: "right",
  // use3dTerrain: true,
  title: "Line 3 Tar Sands Oil Pipeline",
  //   subtitle: "A descriptive and interesting subtitle to draw in the reader",
  //   byline: "By a Digital Storyteller",
  //   footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "tarSands",
      title: "Canadian Tar Sands are extremely gross and bad",
      image: "./tar.jpeg",
      description: "They should stay where they are.",
      mapAnimation: "easeTo",
      location: {
        center: [-111.56756, 57.325189],
        zoom: 17,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "mapbox-satellite",
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "expandTar",
      title: "Canadian Tar Sands are extremely gross and bad",
      // image: "./tar.jpeg",
      description:
        "If we have any chance of keeping our climeate habitable they must stay in the ground",
      location: {
        center: [-111.556856, 57.311989],
        zoom: 12,
        pitch: 60,
        bearing: 0,
        speed: 0.2,
      },
      onChapterEnter: [
        {
          layer: "mapbox-satellite",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "mapbox-satellite",
          opacity: 0,
        },
      ],
    },
    {
      id: "leavingTar",
      title: "Pipelines are used to transport a toxic slurry",
      // image: "./tar.jpeg",
      description: "Across our entire continent",
      mapAnimation: "jumpTo",

      location: {
        center: [-100.57581, 49.34759],
        zoom: 5,
        pitch: 0,
        // bearing: 180,
        // speed: 0.4,
      },
      onChapterEnter: [
        {
          layer: "vt-pipeline",
          opacity: 1,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "mapbox-satellite",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "spills",
      title: "Pipelines spill, everytime",
      // image: "./tar.jpeg",
      description: "Hover for spill details.",
      location: {
        center: [-97.61394, 38.46505],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [
        {
          layer: "spills",
          "circle-opacity": 1,
        },
        {
          layer: "vt-pipeline",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "spills",
          opacity: 0,
        },
      ],
    },
    {
      id: "other-id5",
      title: "These Tarsands aren't for Minnesota",
      // image: "./tar.jpeg",
      description: "Yet the risks are.",
      location: {
        center: [-94, 46.803],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [],
      onChapterExit: [
        {
          layer: "vt-pipeline",
          opacity: 0,
        },
      ],
    },
    {
      id: "other-id3",
      title: "Pipelines cross hundreds of waterbodies",
      // image: "./tar.jpeg",
      description: "Risking drinking water, and the entire Mississippi River.",
      alignment: "left",
      location: {
        center: [-94, 46.803],
        zoom: 7,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [
        {
          layer: "l3permroute",
          opacity: 1,
        },
        {
          layer: "mapbox-satellite",
          opacity: 0,
          duratiion: 2000,
        },
        {
          layer: "streams",
          opacity: ["interpolate", ["linear"], ["zoom"], 6, 0, 9, 1],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "palisade",
      title: "Waterprotectors are fighting for a future for all of us",
      // image: "./tar.jpeg",
      description:
        "At the site of one of two locations where the proposed pipeline crosses the Mississippii River.",
      location: {
        center: [-93.34358, 46.8377],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [
        {
          layer: "l3permroute",
          "circle-opacity": 1,
        },
        {
          layer: "mapbox-satellite",
          opacity: 1,
          duratiion: 2000,
        },
        {
          layer: "streams",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
  ],
};

export default config;

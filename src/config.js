var config = {
  style: "mapbox://styles/shane98c/ckii8dkdt2k8y19qyhtov5dda",
  accessToken:
    "pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",
  showMarkers: false,
  theme: "dark",
  alignment: "right",
  use3dTerrain: true,
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
        // {
        //     layer: 'layer-name',
        //     opacity: 1
        // }
      ],
      onChapterExit: [
        // {
        //   layer: "mapbox-satellite",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "expandTar",
      title: "Canadian Tar Sands are extremely gross and bad",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-111.556856, 57.311989],
        zoom: 12,
        pitch: 60,
        bearing: 0,
        speed: 0.2,
      },
      onChapterEnter: [],
      onChapterExit: [
        // {
        //   layer: "mapbox-satellite",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "leavingTar",
      title: "Canadian Tar Sands are extremely gross and bad",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-111.556856, 57.325189],
        zoom: 7,
        pitch: 60,
        bearing: 180,
        speed: 0.4,
      },
      onChapterEnter: [
        {
          layer: "mapbox-satellite",
          opacity: 0,
          duration: 2000,
        },
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
      id: "other-id5",
      title: "not for MN",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-94, 46.803],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "other-id3",
      title: "not for MN",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-94, 46.803],
        zoom: 7,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;

var config = {
  style: "mapbox://styles/shane98c/ckgkxpw270tm219mh4rt8bdf4",
  accessToken:
    "pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",
  showMarkers: false,
  theme: "dark",
  alignment: "right",
  title: "Line 3 Tar Sands Oil Pipeline",
  //   subtitle: "A descriptive and interesting subtitle to draw in the reader",
  //   byline: "By a Digital Storyteller",
  //   footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "slug-style-id",
      title: "Indigenous lands in MN",
      image: "./manomin.jpg",
      description: "Are cool and good",
      location: {
        center: [-91, 46.803],
        zoom: 6,
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
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "other-identifier",
      title: "Canadian Tar Sands are extremely gross and bad",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-96.228, 47.403],
        zoom: 5.5,
        pitch: 60,
        bearing: -43.2,
        speed: 0.2,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "other-id",
      title: "Canadian Tar Sands are extremely gross and bad",
      image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-111.020636, 55.8869],
        zoom: 5.5,
        pitch: 60,
        bearing: -43.2,
        speed: 0.2,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "other-id2",
      title: "not for MN",
      // image: "./tar.jpeg",
      description: "They should stay where they are.",
      location: {
        center: [-91, 46.803],
        zoom: 6,
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

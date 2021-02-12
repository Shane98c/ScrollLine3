var config = {
  style: "mapbox://styles/shane98c/ckii8dkdt2k8y19qyhtov5dda",
  accessToken:
    "pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",
  showMarkers: false,
  theme: "dark",
  alignment: "right",
  // use3dTerrain: true,
  title: "Mapping the Black Snake",
  subtitle: "Line 3 and the fight for our future",
  byline: "Scroll to explore",
  footer:
    "Please suggest/submit content, changes, etc to this map to Shane Loeffler shane98c@gmail.com @shane98c",
  chapters: [
    {
      id: "tarSands",
      title: "Canadian Tar Sands - the dirtiest fossil fuel",
      // image: "./tar.jpeg",
      description:
        "Tar sands are mined in Alberta, disrupting pristine ecosystems in order to extract the dirtiest form of fossil fuels. ",
      // mapAnimation: "easeTo",
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
        {
          layer: "water",
          opacity: 0,
          // duration: 1000,
        },
        {
          layer: "waterway",
          opacity: 0,
          // duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "expandTar",
      title: "The science on climate change is clear",
      // image: "./tar.jpeg",
      description:
        "The future of our planet and civilization are gravely threatened by the continued extraction of Tar Sands. At this late stage in the fight against climate change, extracting more fossil fuels, especially the dirty and wasteful tar sands of Alberta, is clear science denial. <p><small>Further reading: '<a href='https://nymag.com/intelligencer/2017/07/climate-change-earth-too-hot-for-humans.html' target='_blank'>It is, I promise, worse than you think.</a>'</small></p>",
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
        {
          layer: "water",
          opacity: 0,
          // duration: 1000,
        },
        {
          layer: "waterway",
          opacity: 0,
          // duration: 1000,
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
      id: "leavingTar",
      title: "Pipelines are used to transport a toxic slurry",
      // image: "./tar.jpeg",
      description:
        "The economics of tar sands require them to be shipped by pipeline. Arguments about the relative safety of train transport vs pipeline transport are a distraction. If we stop pipeline expansion we stop the expansion of tar sand extraction.",
      // mapAnimation: "easeTo",

      location: {
        center: [-89.64654, 47.34759],
        zoom: 4,
        pitch: 0,
        // bearing: 180,
        speed: 0.7,
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
      description:
        "Just in the last decade of easily accessible data, the scope and cost of pipeline spills is staggering. There are no safe pipelines. <p><b>Hover over or tap</b> the spill locations for detailed information.</p> <small>Data: <a href='https://www.phmsa.dot.gov/data-and-statistics/pipeline/pipeline-incident-flagged-files' target='_blank'>PHMSA.gov</a> | <a href='https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/data_statistics/pipeline/PHMSA_Pipeline_Safety_Flagged_Incidents.zip' target='_blank'>Download raw</a></small> <br><small>Viz inspiration: David Bartecchi <a href='https://nativeland.info/' target='_blank'>NativeLand.info</a></small>",
      location: {
        center: [-97.61394, 38.46505],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        speed: 0.4,
      },
      onChapterEnter: [
        {
          layer: "spills",
          opacity: 0.5,
        },
        {
          layer: "vt-pipeline",
          opacity: 0.5,
        },
        {
          layer: "crudeoil-pipelines-us-eia",
          opacity: 0.5,
        },
        {
          layer: "l3permroute",
          opacity: 0,
        },
        {
          layer: "mapbox-satellite",
          opacity: 0,
        },
        {
          layer: "water",
          opacity: 1,
          // duration: 1000,
        },
        {
          layer: "waterway",
          opacity: 1,
          // duration: 1000,
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
      id: "Existing",
      title: "Line 3 is pitched as a replacement project",
      // image: "./tar.jpeg",
      description:
        "That's a lie. It's an expansion project that follows a new route, exposing an entirely new corridor to destruction and inevitable contamination, and significantly increases capacity. On top of that - the oil isn’t even for Minnesota, the risks are. The oil transported, and the energy to do so, is equivalent to <a target='_blank' href='https://www.mepartnership.org/wp-content/uploads/2020/03/Giant-Step-Backward-report-01-29-19-FINAL-online-version-2.pdf'>50 new coal power plants or adding 38 million vehicles to our roads.</a>",
      location: {
        center: [-94, 46.803],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [
        {
          layer: "vt-pipeline",
          opacity: 0,
        },
        {
          layer: "crudeoil-pipelines-us-eia",
          opacity: 0,
        },
        {
          layer: "l3permroute",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "l3can",
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },

    {
      id: "water",
      title: "A threat to water",
      // image: "./tar.jpeg",
      description:
        "So-called Minnesota is home to well over 10,000 lakes and countless streams. Line 3 cuts through the heart of the state’s waterways, crossing hundreds of waterbodies, including the Mississippi River, twice. Construction and the inevitable spills of toxic crude oil threaten the water quality of not just Minnesota’s pristine waters, but the entire Mississippi River. ",
      location: {
        center: [-94, 46.803],
        zoom: 7,
        pitch: 0,
        bearing: 0,
        speed: 0.3,
      },
      onChapterEnter: [
        {
          layer: "l3can",
          opacity: 0,
        },
        {
          layer: "mapbox-satellite",
          opacity: 0,
          duration: 2000,
        },
        {
          layer: "streams",
          opacity: ["interpolate", ["linear"], ["zoom"], 6, 0, 9, 1],
        },
        {
          layer: "treatiesselected",
          opacity: 0,
        },
        {
          layer: "treatiesLine",
          opacity: 0,
        },
        {
          layer: "treatyLabels",
          opacity: 0,
        },
        {
          layer: "water",
          opacity: 1,
          // duration: 1000,
        },
        {
          layer: "waterway",
          opacity: 1,
          // duration: 1000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "treaties",
      title:
        "The construction and inevitable spills will desecrate treaty lands",
      // image: "./tar.jpeg",
      description:
        "The expanded Line 3 cuts through the soil and water of four separate treaty lands. These treaties protect the rights of Indigenous people to hunt, fish, and gather on their lands. The destruction, both from construction and inevitable spills, is already disrupting the ability of native communities to gather the sustenance they need and exercise their rights on their own lands.",
      location: {
        center: [-94, 47.803],
        zoom: 6,
        pitch: 0,
        bearing: 0,
        speed: 0.5,
      },
      onChapterEnter: [
        {
          layer: "treatiesselected",
          opacity: 1,
        },
        {
          layer: "treatiesLine",
          opacity: 1,
        },
        {
          layer: "treatyLabels",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "spills",
          opacity: 0,
        },
        {
          layer: "streams",
          opacity: 0,
        },
      ],
    },
    {
      id: "stp",
      title: "Minnesota Governor Tim Walz has so far failed to stop Line 3",
      // image: "./lockdown.jpg",
      description:
        "Despite claims of following science and process, the Minnesota Pollution Control Agency failed to account for even basic climate impacts. The MPCA, in concert with the governor and other state agencies played a cowardly game of '<a href='https://youtu.be/OiaRW33EtCI' target='_blank'>hot potato</a>' with the project - each dodging their duty to protect Minnesota's land, water, and future.",
      location: {
        center: [-93.10223, 44.9552],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      onChapterEnter: [
        {
          layer: "govlabels",
          opacity: 1,
          duration: 5000,
        },
        {
          layer: "mapbox-satellite",
          opacity: 1,
          duration: 2000,
        },
        // {
        //   layer: "streams",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatiesselected",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatiesLine",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatyLabels",
        //   opacity: 0,
        // },
      ],
      onChapterExit: [
        {
          layer: "govlabels",
          opacity: 0,
          duration: 2000,
        },
      ],
    },
    {
      id: "biden",
      title: "Biden can reverse Trump's permits",
      image: "./Optimized-march.png",
      description:
        "<p>In late January hundreds of people marched to the US Army Corps of Engineers building in St Paul to demand that the office, which approved the federal water permits for Line 3 under Trump, revoke them.</p> Biden's cancellation of the Keystone XL tar sands pipeline set a clear and important precedent. The same logic applies to Line 3 and Dakota Access. We must pressure his administration to cancel the federal permits. <a href='https://addup.sierraclub.org/campaigns/tell-federal-officials-do-everything-in-your-power-to-stopline3-pipeline-construction-now/petition' target='_blank'>Sign the petition</a>. ",

      location: {
        center: [-93.08865, 44.94794],
        zoom: 16.5,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      onChapterEnter: [
        {
          layer: "govlabels",
          opacity: 1,
          duration: 2000,
        },
        // {
        //   layer: "l3permroute",
        //   opacity: 1,
        // },
        // {
        //   layer: "mapbox-satellite",
        //   opacity: 1,
        //   duration: 2000,
        // },
        // {
        //   layer: "streams",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatiesselected",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatiesLine",
        //   opacity: 0,
        // },
        // {
        //   layer: "treatyLabels",
        //   opacity: 0,
        // },
      ],
      onChapterExit: [
        {
          layer: "govlabels",
          opacity: 0,
          duration: 2000,
        },
      ],
    },
    {
      id: "workers",
      title: "Enbridge is now rushing construction",
      // image: "./lockdown.jpg",
      description:
        "As soon as the final state and federal permits were granted by Trump and Walz, Enbridge began construction at unsafe speeds. Thousands of workers from out of state have flooded small rural towns in Northern Minnesota, increasing resident's Covid-19 risk and being put in unsafe working environments themselves. One Enbridge employee has already <a href='https://www.mprnews.org/story/2020/12/21/contractor-at-enbridge-line-3-pipeline-site-dies-in-accident' target='_blank'>lost his life</a> as Enbridge rushes to get pipeline into the ground before legal appeals can be heard.",
      location: {
        center: [-94.42717, 47.14278],
        zoom: 6.5,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      onChapterEnter: [
        {
          layer: "mapbox-satellite",
          opacity: 1,
          duration: 2000,
        },
        {
          layer: "treatiesselected",
          opacity: 1,
        },
        {
          layer: "treatiesLine",
          opacity: 1,
        },
        {
          layer: "treatyLabels",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "treatiesselected",
          opacity: 0,
        },
        {
          layer: "treatiesLine",
          opacity: 0,
        },
        {
          layer: "treatyLabels",
          opacity: 0,
        },
      ],
    },
    {
      id: "MMIWR",
      title:
        "Pipeline construction exacerbates the epidemic of Missing and Murdered Indigenous Women and Relatives (MMIWR)",
      // image: "./lockdown.jpg",
      description:
        "The <a href='https://dps.mn.gov/divisions/ojp/Documents/missing-murdered-indigenous-women-task-force-report.pdf' target='_blank'>2020 report</a> by the MN MMIWR Taskforce names extractive industries like oil pipeline construction as a major factor contributing to the violence against indigenous women, LGBTQ+ and two spirit communities. These groups experience disproportionate rates of sexual violence. 'Man camps', like the one adjacent to the pipeyard coursely visible in this snowy January satellite image, have been found to be a source of this violence.",
      location: {
        center: [-94.5166, 46.81615],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        speed: 1,
      },
      onChapterEnter: [
        {
          layer: "sentinel",
          opacity: 1,
          // duration: 1000,
        },
        {
          layer: "backuspipeyard",
          opacity: 1,
          duration: 4000,
        },
        {
          layer: "backuspipeyardLabel",
          opacity: 1,
          duration: 4000,
        },
        {
          layer: "water",
          opacity: 0,
          // duration: 1000,
        },
        {
          layer: "waterway",
          opacity: 0,
          // duration: 1000,
        },
        {
          layer: "streams",
          opacity: 0,
          // duration: 1000,
        },
      ],
      onChapterExit: [
        {
          layer: "sentinel",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "backuspipeyard",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "backuspipeyardLabel",
          opacity: 0,
          duration: 1000,
        },
      ],
    },

    {
      id: "palisade",
      title: "Resistance is building",
      image: "./lockdown.jpg",
      description:
        "As Enbridge rushes ahead, Water Protectors are putting their bodies on the line to block the destruction of Native lands and to protect future generations. <p><small>Photo: <a href='https://twitter.com/GiniwCollective' target='_blank'> @GiniwCollective</a></small> </p>",
      // mapAnimation: "easeTo",

      location: {
        center: [-93.365487, 46.873162],
        zoom: 14.5,
        pitch: 60,
        bearing: 91,
        speed: 0.3,
      },
      onChapterEnter: [
        {
          layer: "l3permroute",
          opacity: 1,
        },
        {
          layer: "mapbox-satellite",
          opacity: 1,
          duration: 2000,
        },
        {
          layer: "streams",
          opacity: 0,
        },
        {
          layer: "treatiesselected",
          opacity: 0,
        },
        {
          layer: "treatiesLine",
          opacity: 0,
        },
        {
          layer: "treatyLabels",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
  ],
};

export default config;

(window["webpackJsonpreact-js"]=window["webpackJsonpreact-js"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),o=a.n(r),c=(a(15),a(4)),s=a(5),l=a(8),p=a(6),h=a(9),d=(a(16),a(1)),m=a.n(d),u=a(7),y=a.n(u),f={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},g={left:"lefty",center:"centered",right:"righty"},E=function(e){var t=-1!==e.indexOf("?");return{url:e+(t?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function v(e){var t=e.id,a=e.theme,n=e.title,r=e.image,o=e.description,c=t===e.currentChapterID?"step active":"step";return i.a.createElement("div",{id:t,className:c},i.a.createElement("div",{className:a},n&&i.a.createElement("h3",{className:"title"},n),r&&i.a.createElement("img",{src:r,alt:n}),o&&i.a.createElement("p",null,o)))}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={currentChapter:e.chapters[0]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chapters[0].location;m.a.accessToken=e.accessToken;var a=new m.a.Map({container:this.mapContainer,style:e.style,center:t.center,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,transformRequest:E}),n=new m.a.Marker;function i(e){(function(e){var t=a.getLayer(e).type;return f[t]})(e.layer).forEach(function(t){a.setPaintProperty(e.layer,t,e.opacity)})}e.showMarkers&&n.setLngLat(t.center).addTo(a);var r=this.setState.bind(this),o=y()();a.on("load",function(){o.setup({step:".step",offset:.5,progress:!0}).onStepEnter(function(t){var o=e.chapters.find(function(e){return e.id===t.element.id});r({currentChapter:o}),a.flyTo(o.location),e.showMarkers&&n.setLngLat(o.location.center),o.onChapterEnter.length>0&&o.onChapterEnter.forEach(i)}).onStepExit(function(t){var a=e.chapters.find(function(e){return e.id===t.element.id});a.onChapterExit.length>0&&a.onChapterExit.forEach(i)})}),window.addEventListener("resize",o.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=this.state.currentChapter.id;return i.a.createElement("div",null,t.title&&i.a.createElement("div",{id:"header",className:a},i.a.createElement("h1",null,t.title),t.subtitle&&i.a.createElement("h2",null,t.subtitle),t.byline&&i.a.createElement("p",null,t.byline),i.a.createElement("img",{src:"./giniw.jpg",alt:"Water Protectors stop construction on Line 3."}),"vvv Scroll vvv"),i.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"absolute top right left bottom"}),i.a.createElement("div",{id:"story"},i.a.createElement("div",{id:"features",className:g[t.alignment]},t.chapters.map(function(e){return i.a.createElement(v,Object.assign({key:e.id,theme:a},e,{currentChapterID:n}))})),t.footer&&i.a.createElement("div",{id:"footer",className:a},i.a.createElement("p",null,t.footer))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C={style:"mapbox://styles/shane98c/ckii8dkdt2k8y19qyhtov5dda",accessToken:"pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",showMarkers:!1,theme:"dark",alignment:"right",title:"Line 3 Tar Sands Oil Pipeline",chapters:[{id:"tarSands",title:"Canadian Tar Sands are extremely gross and bad",image:"./tar.jpeg",description:"They should stay where they are.",mapAnimation:"easeTo",location:{center:[-111.56756,57.325189],zoom:17,pitch:0,bearing:0},onChapterEnter:[],onChapterExit:[]},{id:"expandTar",title:"Canadian Tar Sands are extremely gross and bad",description:"If we have any chance of keeping our climeate habitable they must stay in the ground",location:{center:[-111.556856,57.311989],zoom:12,pitch:60,bearing:0,speed:.2},onChapterEnter:[],onChapterExit:[]},{id:"leavingTar",title:"Pipelines are used to transport a toxic slurry",description:"Across our entire continent",mapAnimation:"jumpTo",location:{center:[-100.57581,49.34759],zoom:5,pitch:0},onChapterEnter:[{layer:"mapbox-satellite",opacity:0,duration:2e3},{layer:"vt-pipeline",opacity:1}],onChapterExit:[]},{id:"spills",title:"Pipelines spill, everytime",description:"These are spills within the US",location:{center:[-97.61394,38.46505],zoom:4,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"spills","circle-opacity":1}],onChapterExit:[]},{id:"other-id5",title:"These Tarsands aren't for Minnesota",description:"Yet the risks are.",location:{center:[-94,46.803],zoom:6,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"spills",opacity:0}],onChapterExit:[{layer:"vt-pipeline",opacity:0}]},{id:"other-id3",title:"Pipelines cross hundreds of waterbodies",description:"Risking drinking water, and the entire Mississippi River.",alignment:"left",location:{center:[-94,46.803],zoom:7,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"l3permroute","circle-opacity":1}],onChapterExit:[]},{id:"palisade",title:"Waterprotectors are fighting for a future for all of us",description:"At the site of one of two locations where the proposed pipeline crosses the Mississippii River.",location:{center:[-93.34358,46.8377],zoom:10.5,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"l3permroute","circle-opacity":1},{layer:"mapbox-satellite",opacity:1,duratiion:2e3},{layer:"streams",opacity:0}],onChapterExit:[]}]};o.a.render(i.a.createElement(b,C),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.54713795.chunk.js.map
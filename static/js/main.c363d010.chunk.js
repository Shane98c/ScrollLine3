(window["webpackJsonpreact-js"]=window["webpackJsonpreact-js"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(3),o=a.n(n),l=(a(16),a(4)),s=a(5),c=a(9),p=a(6),u=a(10),d=a(7),h=a.n(d),m=(a(18),a(1)),y=a.n(m),f=a(8),E=a.n(f);function g(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var v={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},b={left:"lefty",center:"centered",right:"righty"},C=function(e){var t=-1!==e.indexOf("?");return{url:e+(t?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function k(e){var t=e.id,a=e.theme,r=e.title,n=e.image,o=e.description,l=t===e.currentChapterID?"step active":"step";return i.a.createElement("div",{id:t,className:l},i.a.createElement("div",{className:a},r&&i.a.createElement("h3",{className:"title"},r),n&&i.a.createElement("img",{src:n,alt:r}),o&&i.a.createElement("p",null,o)))}var w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={currentChapter:e.chapters[0]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.chapters[0].location;y.a.accessToken=t.accessToken;var r=new y.a.Map({container:"map",style:t.style,center:a.center,zoom:a.zoom,pitch:a.pitch,bearing:a.bearing,transformRequest:C,interactive:!1}),n=new y.a.Marker;function o(e){(function(e){var t=r.getLayer(e).type;return v[t]})(e.layer).forEach(function(t){r.setPaintProperty(e.layer,t,e.opacity)})}t.showMarkers&&n.setLngLat(a.center).addTo(r);var l=this.setState.bind(this),s=E()(),c=new y.a.Popup({closeButton:!1,closeOnClick:!1}),p=function(t){if("spills"===e.state.currentChapter.id){r.getCanvas().style.cursor="pointer";var a=t.features[0].geometry.coordinates.slice(),n=h.a.renderToStaticMarkup(i.a.createElement("div",null,t.features[0].properties["Local Datetime"]?i.a.createElement("div",null,t.features[0].properties["Local Datetime"]):null,t.features[0].properties["Unintentional Release Bbls"]?i.a.createElement("div",null,"Barrels Spilled:"," ",i.a.createElement("b",null,g(t.features[0].properties["Unintentional Release Bbls"]))):null,t.features[0].properties["Est Cost Oper Paid"]?i.a.createElement("div",null,"Total Cost:"," ",i.a.createElement("b",null,"$",g(t.features[0].properties["Total Cost"]))):null,t.features[0].properties["Est Cost Oper Paid"]?i.a.createElement("div",null,"Cost Operator Paid:"," ",i.a.createElement("b",null,"$",g(t.features[0].properties["Est Cost Oper Paid"]))):null));c.setLngLat(a).setHTML(n).addTo(r)}};r.on("load",function(){s.setup({step:".step",offset:.5,progress:!0}).onStepEnter(function(e){c.remove();var a=t.chapters.find(function(t){return t.id===e.element.id});l({currentChapter:a}),r.flyTo(a.location),t.showMarkers&&n.setLngLat(a.location.center),a.onChapterEnter.length>0&&a.onChapterEnter.forEach(o)}).onStepExit(function(e){var a=t.chapters.find(function(t){return t.id===e.element.id});a.onChapterExit.length>0&&a.onChapterExit.forEach(o)}),r.on("mouseenter","spills",function(e){p(e)}),r.on("click","spills",function(e){p(e)}),r.on("mouseleave","spills",function(){r.getCanvas().style.cursor="",c.remove()})}),window.addEventListener("resize",s.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.theme,r=this.state.currentChapter.id;return i.a.createElement("div",null,t.title&&i.a.createElement("div",{id:"header",className:a},i.a.createElement("h1",null,t.title),t.subtitle&&i.a.createElement("h2",null,t.subtitle),t.byline&&i.a.createElement("p",null,t.byline),i.a.createElement("img",{src:"./giniw.jpg",alt:"Water Protectors stop construction on Line 3."})),i.a.createElement("div",{ref:function(t){return e.mapContainer=t},id:"map"}),i.a.createElement("div",{id:"story"},i.a.createElement("div",{id:"features",className:b[t.alignment]},t.chapters.map(function(e){return i.a.createElement(k,Object.assign({key:e.id,theme:a},e,{currentChapterID:r}))})),t.footer&&i.a.createElement("div",{id:"footer",className:a},i.a.createElement("p",null,t.footer))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x={style:"mapbox://styles/shane98c/ckii8dkdt2k8y19qyhtov5dda",accessToken:"pk.eyJ1Ijoic2hhbmU5OGMiLCJhIjoiY2o3dzk2anVtMG5hOTMzbzIyZzZja3ZhMyJ9.JdJS0IEbZZ7S6r3Nr87MJg",showMarkers:!1,theme:"dark",alignment:"right",title:"Line 3 Tar Sands Oil Pipeline",chapters:[{id:"tarSands",title:"Canadian Tar Sands are extremely gross and bad",image:"./tar.jpeg",description:"They should stay where they are.",mapAnimation:"easeTo",location:{center:[-111.56756,57.325189],zoom:17,pitch:0,bearing:0},onChapterEnter:[{layer:"mapbox-satellite",opacity:1}],onChapterExit:[]},{id:"expandTar",title:"Canadian Tar Sands are extremely gross and bad",description:"If we have any chance of keeping our climeate habitable they must stay in the ground",location:{center:[-111.556856,57.311989],zoom:12,pitch:60,bearing:0,speed:.2},onChapterEnter:[{layer:"mapbox-satellite",opacity:1}],onChapterExit:[{layer:"mapbox-satellite",opacity:0}]},{id:"leavingTar",title:"Pipelines are used to transport a toxic slurry",description:"Across our entire continent",mapAnimation:"jumpTo",location:{center:[-100.57581,49.34759],zoom:5,pitch:0},onChapterEnter:[{layer:"vt-pipeline",opacity:1}],onChapterExit:[]},{id:"spills",title:"Pipelines spill, everytime",description:"Hover for spill details.",location:{center:[-97.61394,38.46505],zoom:4,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"spills","circle-opacity":1},{layer:"vt-pipeline",opacity:1},{layer:"crudeoil-pipelines-us-eia",opacity:1}],onChapterExit:[{layer:"spills",opacity:0}]},{id:"other-id5",title:"These Tarsands aren't for Minnesota",description:"Yet the risks are.",location:{center:[-94,46.803],zoom:6,pitch:0,bearing:0,speed:.5},onChapterEnter:[],onChapterExit:[{layer:"vt-pipeline",opacity:0},{layer:"crudeoil-pipelines-us-eia",opacity:0},{layer:"l3permroute",opacity:0}]},{id:"other-id3",title:"Pipelines cross hundreds of waterbodies",description:"Risking drinking water, and the entire Mississippi River.",alignment:"left",location:{center:[-94,46.803],zoom:7,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"l3permroute",opacity:1},{layer:"mapbox-satellite",opacity:0,duratiion:2e3},{layer:"streams",opacity:["interpolate",["linear"],["zoom"],6,0,9,1]}],onChapterExit:[]},{id:"palisade",title:"Waterprotectors are fighting for a future for all of us",description:"At the site of one of two locations where the proposed pipeline crosses the Mississippii River.",location:{center:[-93.34358,46.8377],zoom:10.5,pitch:0,bearing:0,speed:.5},onChapterEnter:[{layer:"l3permroute","circle-opacity":1},{layer:"mapbox-satellite",opacity:1,duratiion:2e3},{layer:"streams",opacity:0}],onChapterExit:[]}]};o.a.render(i.a.createElement(w,x),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.c363d010.chunk.js.map
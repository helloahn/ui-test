webpackJsonp([1],[,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(31),i=n(130),i=n(3)(a.a,i.a,!1,null,null,null);t.a=i.exports},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(71),n=n(132);t.a={name:"app",data:function(){return{isLoading:!0}},mounted:function(){var e=this;setTimeout(function(){e.isLoading=!1},3e3)},components:{Splash:a.a,NaviPage:n.a}}},function(e,t,n){"use strict";n=n(12);t.a={name:"splash",props:["isLoading"],components:{LottieView:n.a}}},function(e,t,n){"use strict";var a=n(73),i=n.n(a),a=n(76),o=n.n(a),a=n(112),r=n.n(a),a=n(19),s=n.n(a);t.a={props:{path:{required:!0},speed:{type:Number,required:!1,default:1},width:{type:Number|String,required:!1,default:-1},height:{type:Number|String,required:!1,default:-1},loop:{type:Boolean,required:!1,default:!0},autoPlay:{type:Boolean,required:!1,default:!0},loopDelayMin:{type:Number,required:!1,default:0},loopDelayMax:{type:Number,required:!1,default:0}},data:function(){return{name:"lottie-view",rendererSettings:{scaleMode:"centerCrop",clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0},anim:null,style:null}},methods:{getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},executeLoop:function(){var e=this;this.anim.play(),setTimeout(function(){e.anim.stop(),e.executeLoop()},this.getRandomInt(this.loopDelayMin,0===this.loopDelayMax?this.loopDelayMin:this.loopDelayMax))},sizeText:function(e){return isNaN(e)?e:e+"px"},init:function(){var n=this;return o()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.style={width:-1!==n.width?n.sizeText(n.width):"100%",height:-1!==n.height?n.sizeText(n.height):"100%",overflow:"hidden",margin:"0 auto"},e.next=3,s.a.get(n.path).then(function(e){return e.data});case 3:t=e.sent,n.anim&&n.anim.destroy(),n.anim=r.a.loadAnimation({container:n.$refs.lavContainer,renderer:"svg",loop:n.loop,autoplay:n.autoPlay,animationData:t,rendererSettings:n.rendererSettings}),n.anim.addEventListener("complete",function(){n.$emit("complete",n.anim)}),n.$emit("AnimControl",n.anim),n.anim.setSpeed(n.speed),0<n.loopDelayMin&&(n.anim.loop=!1,n.anim.autoplay=!1,n.executeLoop());case 10:case"end":return e.stop()}},e,n)}))()}},mounted:function(){this.init()}}},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(133);t.a={name:"navigation",data:function(){return{pageStack:[a.a]}},methods:{goHome:function(){this.pageStack.pop(),this.pageStack.push(a.a)}},components:{HomePage:a.a}}},function(e,t,n){"use strict";var a=n(12),i=n(135),o=n(57);t.a={name:"home",data:function(){return{menuIsOpen:!1,msg:"This is LightWarp!",canvasPage:i.a,editPage:o.a}},methods:{goTo:function(e){window.open(e,"_blank")}},components:{CanvasPage:i.a,LottieView:a.a,EditPage:o.a}}},function(e,t,n){"use strict";var a=n(12),i=n(137),o=n(19),r=n.n(o),s=n(57),c=n(143),l=n(144),u=100;t.a={name:"CanvasPage",data:function(){return{app:null,isLoading:!0,photoState:null,imageCapture:null,canvasStatus:null,detailView:null,corners:[]}},mounted:function(){var a=this;navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:screen.width,height:screen.height}}).then(function(e){a.isLoading=!1;e=(a.$refs.camera.srcObject=e).getVideoTracks()[0];a.imageCapture=new window.ImageCapture(e)}).catch(function(e){a.isLoading=!1,console.error("Platform Webview does not support getUserMedia video."),console.error(e)});var e=screen.width,i=screen.height;this.$refs.uiCanvas.width=e,this.$refs.uiCanvas.height=i,this.$refs.cachedCamera.width=e,this.$refs.cachedCamera.height=i,this.corners=[[.3*e,.3*i],[.7*e,.3*i],[.7*e,.7*i],[.3*e,.7*i]];var o=document.querySelectorAll(".drag-handle");o.forEach(function(e,t){var n=a.corners[t];o[t].style.left=n[0]+"px",o[t].style.top=n[1]+"px"}),this.updatePolygon(),this.detailView=document.querySelector("#detailView"),document.querySelector("#processingText").style.lineHeight=screen.height+"px",Object(c.a)({container:document.querySelector("#canvas-wrapper"),selector:".drag-handle",handleOffset:"center",callbackDragStart:function(e,t){var n=a.getDetailViewPos(t,i);a.detailView.style.display="block",a.detailView.style.left=n[0]+"px",a.detailView.style.top=n[1]+"px",a.updatedetailView(t)},callbackDragEnd:function(e,t){a.detailView.style.display="none"},callback:function(e,t){e=parseInt(e.dataset.corner);a.corners[e]=t,o[e].style.left=t[0]+"px",o[e].style.top=t[1]+"px";e=a.getDetailViewPos(t,i);a.detailView.style.left=e[0]+"px",a.detailView.style.top=e[1]+"px",a.updatePolygon(),a.updatedetailView(t)}})},methods:{updatePolygon:function(){var e=this.$refs.uiCanvas,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.strokeStyle="#5af854",t.lineWidth=2,t.beginPath(),t.setLineDash([10,5]);var n=this.corners[0];t.moveTo(n[0],n[1]);for(var a=1;a<this.corners.length;a++)n=this.corners[a],t.lineTo(n[0],n[1]);n=this.corners[0],t.lineTo(n[0],n[1]),t.closePath(),t.stroke()},updatedetailView:function(e){var t=this.$refs.detailViewCanvas.getContext("2d");t.clearRect(0,0,u,u),t.drawImage(this.$refs.cachedCamera,e[0]-50,e[1]-50,u,u,0,0,u,u),t.drawImage(this.$refs.uiCanvas,e[0]-50,e[1]-50,u,u,0,0,u,u)},getDetailViewPos:function(e){var t=[e[0]-u,e[1]];return e[0]<u&&(t[0]=e[0]),e[1]>screen.height-u&&(t[1]=e[1]-u),t},progressStart:function(){},progressEnd:function(){this.photoState=null},onClick:function(){var t=this;"vectorize"!==this.photoState&&(this.photoState?"photoTaken"===this.photoState&&(this.photoState="vectorize",this.cropPhoto().then(function(e){return t.vectorize(e)})):(this.photoState="photoTaken",this.grabFrame()))},onComplete:function(){this.$emit("replace-page",s.a)},retakePhoto:function(){this.photoState=null;var e=this.$refs.cachedCamera;e.getContext("2d").clearRect(0,0,e.width,e.height)},grabFrame:function(){var t=this;this.isLoading?console.log("camera is not ready"):(this.progressStart(),this.imageCapture.grabFrame().then(function(e){return createImageBitmap(e,{resizeWidth:screen.width,resizeHeight:screen.height,resizeQuality:"medium"})}).then(function(e){t.$refs.cachedCamera.getContext("2d").drawImage(e,0,0)}))},cropPhoto:function(){var a=this,e=this.$refs.cachedCamera;return createImageBitmap(e).then(function(e){var t=screen.height,n=4*t/3;return l.a.Warp(e,a.corners,[[0,0],[n,0],[n,t],[0,t]])})},vectorize:function(e){var t=this;i.a.blobToUrl(e).then(function(e){return localStorage.setItem("raster",e)});var n=new FormData;return n.append("hierarchial","cutout"),n.append("filter_speckle",4),n.append("color_precision",6),n.append("layer_difference",16),n.append("file",e),r.a.post("https://fierce-lake-44609.herokuapp.com/vision/",n,{header:{"Content-Type":"multipart/form-data"}}).then(function(e){localStorage.setItem("vectorized",e.data),t.progressEnd(),t.onComplete()}).catch(function(e){console.log("error..."),console.log(e),t.isProcessing=!1,t.progressEnd()})}},components:{LottieView:a.a,EditPage:s.a}}},function(e,t,n){"use strict";var a=n(58),i=n(142);i=n(3)(a.a,i.a,!1,function(e){n(138),n(139)},"data-v-49fa8e5c",null);t.a=i.exports},function(e,t,n){"use strict";var a=n(140),i=n.n(a),o=n(141),r=n(12),a=n(19),s=n.n(a),c="http://www.w3.org/2000/svg";t.a={name:"EditPage",data:function(){return{libraryOpened:!1,contents:[],lastClicked:null,progressed:!1,svg:null}},mounted:function(){var a=this,e=localStorage.getItem("raster");document.querySelector("#original-image").src=e;var t=localStorage.getItem("vectorized"),n=document.querySelector("#svg-wrapper");n.innerHTML=t;e=n.querySelector("svg"),t=e.getBBox();e.classList.add("vectorsurface"),e.setAttribute("viewBox","0, 0, "+t.width+", "+t.height),e.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg=e;n=document.querySelector("#physics-world"),t=i.a.Engine.create(),n=i.a.Render.create({element:document.getElementById("physics-world"),engine:t,options:{width:n.clientWidth,height:n.clientHeight,background:"transparent",wireframeBackground:"rgba(0, 0, 0, 0.2)"}});i.a.Render.run(n);n=i.a.Runner.create();i.a.Runner.run(n,t),e.querySelectorAll("path").forEach(function(e){e.setAttribute("stroke-width",0),e.removeAttribute("fill"),e.removeAttribute("fill-opacity"),e.addEventListener("click",function(e){a.libraryOpened=!a.libraryOpened,a.lastClicked=e.target})}),o.a.getContentsAsync().then(function(e){for(var t in e){var n=e[t].contents.trim();n.startsWith("<pattern")&&(e[t].contents=n.replace("<pattern",'<pattern id="patternx'+t+'"'))}a.contents=e})},methods:{mapit:function(e,t){var n,a=this.contents[e];"svg-pattern"===a.type&&((n=document.createElementNS(c,"template")).innerHTML=a.contents,a=n.firstChild,(n=this.svg.querySelector("defs"))||(n=document.createElementNS(c,"defs"),this.svg.append(n)),n.append(a),this.lastClicked&&(this.lastClicked.setAttribute("fill","url(#patternx"+e+")"),this.lastClicked.setAttribute("fill-opacity","1")))},onClick:function(){console.log("save...");var e=document.createElementNS(c,"template");e.innerHTML=this.svg.outerHTML;e=e.querySelector("svg");e.querySelectorAll("path").forEach(function(e){e.getAttribute("fill")||e.parentNode.removeChild(e)}),s.a.post("https://fierce-lake-44609.herokuapp.com/screen/1234",{data:e.outerHTML})}},components:{LottieView:r.a}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(61),i=(n.n(a),n(63)),o=(n.n(i),n(64)),r=(n.n(o),n(65)),t=n(67),a=n.n(t),i=n(69),o=n(59),t=n(149),n=n(150);screen.orientation.lock("landscape"),o.c.add(t.a),r.a.component("font-awesome-icon",n.a),r.a.config.productionTip=!1,r.a.use(a.a),new r.a({el:"#app",template:"<App/>",components:{App:i.a}})},function(e,t){},,function(e,t){},function(e,t){},,,,,function(e,t,n){"use strict";var a=n(29),i=n(148);i=n(3)(a.a,i.a,!1,function(e){n(70)},"data-v-4d1de804",null);t.a=i.exports},function(e,t){},function(e,t,n){"use strict";var a=n(30),i=n(131);i=n(3)(a.a,i.a,!1,function(e){n(72)},"data-v-6915d949",null);t.a=i.exports},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return t.style?e("div",{ref:"lavContainer",style:t.style,on:{click:function(e){return t.$emit("click")},mousedown:function(e){return t.$emit("down")},mouseup:function(e){return t.$emit("up")}}}):t._e()},staticRenderFns:[]}},function(e,t,n){"use strict";t.a={render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",{class:{fadeout:!this.isLoading}},[e("lottie-view",{attrs:{path:"static/4-dots.json"}})],1)},staticRenderFns:[]}},function(e,t,n){"use strict";var a=n(54),i=n(147),i=n(3)(a.a,i.a,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";var a=n(55),i=n(146);i=n(3)(a.a,i.a,!1,function(e){n(134)},"data-v-cf82cb5c",null);t.a=i.exports},function(e,t){},function(e,t,n){"use strict";var a=n(56),i=n(145);i=n(3)(a.a,i.a,!1,function(e){n(136)},"data-v-00b28988",null);t.a=i.exports},function(e,t){},function(e,t,n){"use strict";var a=n(32),i=n.n(a);t.a={crop:function(e,t,n,a,i,o,r){console.log("x: "+t+", y: "+n+", width: "+a+", height: "+i);var s=a,c=i;return i<a?c=i/a*(s=o):s=a/i*(c=r),o=new OffscreenCanvas(s,c),(r=o.getContext("2d")).clearRect(0,0,o.width,o.height),r.drawImage(e,t,n,a,i,0,0,s,c),{blob:o.convertToBlob({type:"image/png"}),bitmap:o.transferToImageBitmap()}},blobToUrl:function(a){return new i.a(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=t,n.readAsDataURL(a)})}}},function(e,t){},function(e,t){},,function(e,t,n){"use strict";var a=n(19),i=n.n(a);t.a={getContentsAsync:function(){return i.a.get("https://fierce-lake-44609.herokuapp.com/contents").then(function(e){return e.data})}}},function(e,t,n){"use strict";t.a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-ons-page",[a("button",{class:["showBtn",{buttonProgressed:n.progressed}],on:{click:n.onClick}},[n._v("Show")]),n._v(" "),a("img",{attrs:{id:"original-image"}}),n._v(" "),a("div",{attrs:{id:"physics-world"}}),n._v(" "),a("div",{attrs:{id:"svg-wrapper"}}),n._v(" "),a("div",{ref:"library",class:["slide-page",n.libraryOpened?"slide-open":"slide-close"],on:{click:function(e){n.libraryOpened=!1}}},[a("ul",[0===n.contents.length?a("lottie-view",{attrs:{width:"100px",height:"100px",speed:1,loop:!0,autoPlay:!0,path:"static/progress-dots-blue.json"}}):n._e(),n._v(" "),n._l(n.contents,function(e,t){return a("li",{key:t,staticClass:"contents-item",on:{click:function(e){return n.mapit(t,e)}}},[a("svg",{attrs:{width:"200",height:"200",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 100 100"}},[a("defs",{domProps:{innerHTML:n._s(e.contents)}}),n._v(" "),a("circle",{attrs:{cx:"100",cy:"100",r:"100",fill:"url(#patternx"+t+")"}})])])})],2)])])},staticRenderFns:[]}},,function(e,t,n){"use strict";function o(e,t,n,a,i,o,r,s){var c=o[0],l=o[1],u=r[0],d=r[1],p=s[0],h=s[1],v=n[0],o=n[1],r=a[0],s=a[1],n=i[0],a=i[1];e.save(),e.beginPath(),e.moveTo(c,l),e.lineTo(u,d),e.lineTo(p,h),e.closePath(),e.clip();i=v*s+o*n+r*a-s*n-o*r-v*a;e.transform((c*s+o*p+u*a-s*p-o*u-c*a)/i,(l*s+o*h+d*a-s*h-o*d-l*a)/i,(v*u+c*n+r*p-u*n-c*r-v*p)/i,(v*d+l*n+r*h-d*n-l*r-v*h)/i,(v*s*p+o*u*n+c*r*a-c*s*n-o*r*p-v*u*a)/i,(v*s*h+o*d*n+l*r*a-l*s*n-o*r*h-v*d*a)/i),e.drawImage(t,0,0),e.restore()}t.a={Warp:function(e,t,n){var a=new OffscreenCanvas(n[2][0],n[2][1]),i=a.getContext("2d");return i.clearRect(0,0,a.width,a.height),o(i,e,t[0],t[2],t[3],n[0],n[2],n[3]),i.translate(-1,1),o(i,e,t[0],t[1],t[2],n[0],n[1],n[2]),a.convertToBlob({type:"image/png"})}}},function(e,t,n){"use strict";t.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("v-ons-page",[t("video",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],ref:"camera",staticClass:"camera-surface",attrs:{autoplay:""}}),e._v(" "),t("div",{attrs:{id:"canvas-wrapper"}},[t("canvas",{ref:"cachedCamera"}),e._v(" "),t("canvas",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],ref:"uiCanvas"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"0"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"1"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"2"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"3"}}),e._v(" "),t("div",{attrs:{id:"detailView"}},[t("canvas",{ref:"detailViewCanvas"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"vectorize"===e.photoState,expression:"photoState === 'vectorize'"}],attrs:{id:"processing"}},[t("div",{attrs:{id:"processingText"}},[e._v("Processing...")])]),e._v(" "),t("button",{class:["okBtn",{photoTake:"photoTaken"===e.photoState},{vectorize:"vectorize"===e.photoState}],on:{click:e.onClick}},[t("div",{staticClass:"inner-circle"})]),e._v(" "),"photoTaken"===e.photoState?t("div",{staticClass:"retake-photo",on:{click:e.retakePhoto}}):e._e()])])},staticRenderFns:[]}},function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("v-ons-page",{on:{toggleMenu:function(e){t.menuIsOpen=!t.menuIsOpen}}},[e("v-ons-toolbar",{staticClass:"home-toolbar"},[e("div",{staticClass:"left"},[e("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("toggleMenu")}}},[e("v-ons-icon",{attrs:{icon:"ion-navicon, material:md-menu"}})],1)],1),t._v(" "),e("div",{staticClass:"center"},[t._v(t._s(t.msg))])]),t._v(" "),e("div",{staticClass:"guide-text"},[t._v(" Connect your Projector to Mobile ")]),t._v(" "),e("lottie-view",{attrs:{width:"min(100vw, 100vh)",height:"min(100vw, 100vh)",path:"static/yoga-developer.json"}}),t._v(" "),e("v-ons-button",{staticClass:"guide-ok",attrs:{modifier:"large"},on:{click:function(e){return t.$emit("replace-page",t.canvasPage)}}},[t._v("Ok, I connected.")]),t._v(" "),e("v-ons-button",{staticClass:"guide-edit",attrs:{modifier:"large"},on:{click:function(e){return t.$emit("replace-page",t.editPage)}}},[t._v("Go Edit.")])],1)},staticRenderFns:[]}},function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack},on:{"push-page":function(e){return t.pageStack.push(e)},"replace-page":function(e){t.pageStack.pop(),t.pageStack.push(e)},"home-page":function(e){return t.goHome()}}})},staticRenderFns:[]}},function(e,t,n){"use strict";t.a={render:function(){var e=this.$createElement,e=this._self._c||e;return this.isLoading?e("splash",{attrs:{isLoading:this.isLoading}}):e("navi-page")},staticRenderFns:[]}}],[60]);
//# sourceMappingURL=app.e07708e67a48b951a576.js.map
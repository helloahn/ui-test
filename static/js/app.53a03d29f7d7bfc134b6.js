webpackJsonp([1],{130:function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return t.style?e("div",{ref:"lavContainer",style:t.style,on:{click:function(e){return t.$emit("click")},mousedown:function(e){return t.$emit("down")},mouseup:function(e){return t.$emit("up")}}}):t._e()},staticRenderFns:[]}},131:function(e,t,n){"use strict";t.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{class:{fadeout:!e.isLoading}},[t("lottie-view",{attrs:{path:"static/4-dots.json"}})],1)},staticRenderFns:[]}},132:function(e,t,n){"use strict";var a=n(54),i=n(149),i=n(3)(a.a,i.a,!1,null,null,null);t.a=i.exports},133:function(e,t,n){"use strict";var a=n(55),i=n(148);i=n(3)(a.a,i.a,!1,function(e){n(134)},"data-v-f78b6d48",null);t.a=i.exports},134:function(e,t){},135:function(e,t,n){"use strict";var a=n(56),i=n(147);i=n(3)(a.a,i.a,!1,function(e){n(136)},"data-v-f6a9d450",null);t.a=i.exports},136:function(e,t){},137:function(e,t,n){"use strict";var a=n(32),i=n.n(a);t.a={crop:function(e,t,n,a,i,o,r){console.log("x: "+t+", y: "+n+", width: "+a+", height: "+i);var s=a,c=i;return i<a?c=i/a*(s=o):s=a/i*(c=r),o=new OffscreenCanvas(s,c),(r=o.getContext("2d")).clearRect(0,0,o.width,o.height),r.drawImage(e,t,n,a,i,0,0,s,c),{blob:o.convertToBlob({type:"image/png"}),bitmap:o.transferToImageBitmap()}},blobToUrl:function(a){return new i.a(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=t,n.readAsDataURL(a)})}}},138:function(e,t){},139:function(e,t){},141:function(e,t,n){"use strict";var a=n(18),i=n.n(a);t.a={getContentsAsync:function(){return i.a.get("https://fierce-lake-44609.herokuapp.com/contents").then(function(e){return e.data})}}},143:function(e,t,i){"use strict";t.a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-ons-page",[a("img",{attrs:{id:"original-image"}}),n._v(" "),a("div",{attrs:{id:"physics-world"}}),n._v(" "),a("div",{attrs:{id:"svg-wrapper"}}),n._v(" "),a("div",{staticClass:"library-placeholder"},[n.lastClicked?a("div",{ref:"library",staticClass:"slide-page"},[a("h1",[n._v("컨텐츠 선택")]),n._v(" "),a("ul",[a("li",{staticClass:"contents-item",on:{click:n.openColorPick}},[a("img",{attrs:{src:i(144)}}),n._v(" "),n.currentMapped&&isNaN(n.currentMapped)?a("font-awesome-icon",{attrs:{icon:"check"}}):n._e()],1),n._v(" "),0===n.contents.length?a("li",[a("lottie-view",{attrs:{width:"100px",height:"100px",speed:1,loop:!0,autoPlay:!0,path:"static/progress-dots-blue.json"}})],1):n._e(),n._v(" "),n._l(n.contents,function(e,t){return a("li",{key:t,staticClass:"contents-item",on:{click:function(e){return n.mapit(t,e)}}},[a("svg",{attrs:{width:"64",height:"64",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 64 64"}},[a("defs",{domProps:{innerHTML:n._s(e.contents)}}),n._v(" "),a("rect",{attrs:{width:"64",height:"64",fill:"url(#patternx"+t+")"}})]),n._v(" "),n.currentMapped===t?a("font-awesome-icon",{attrs:{icon:"check"}}):n._e()],1)})],2)]):a("div",{staticClass:"placeholder-msg"},[0===n.mappingCount?a("p",[a("font-awesome-icon",{style:{color:"#DD9781"},attrs:{icon:"exclamation-circle"}}),n._v(" "),a("br"),n._v("\n        구역을 선택하여 "),a("br"),n._v("\n        맵핑 컨텐츠를 입혀보세요\n      ")],1):a("p",[a("font-awesome-icon",{style:{color:"#A4DD81"},attrs:{icon:"check-circle"}}),n._v(" "),a("br"),n._v("\n        원하시는 컨텐츠를 선택 하셨나요?"),a("br"),n._v("\n        아래 버튼을 눌러 맵핑을 완료하세요.\n      ")],1)]),n._v(" "),a("button",{staticClass:"mapping-btn",on:{click:n.save}},[n._v("맵핑하기")]),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:n.colorPickerWindowOpened,expression:"colorPickerWindowOpened"}],staticClass:"color-picker-back"},[a("div",{staticClass:"color-picker-window"},[a("h1",[n._v("색상 선택")]),n._v(" "),a("font-awesome-icon",{attrs:{icon:"times"},on:{click:function(e){n.colorPickerWindowOpened=!1}}}),n._v(" "),a("div",{attrs:{id:"color-picker"}}),n._v(" "),a("button",{staticClass:"apply-color",on:{click:function(e){return n.mapit(n.colorPicker.color.hexString,e)}}},[n._v("적용 하기")])],1)])])])},staticRenderFns:[]}},144:function(e,t){e.exports="data:image/png;base64,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"},146:function(e,t,n){"use strict";function o(e,t,n,a,i,o,r,s){var c=o[0],l=o[1],d=r[0],u=r[1],p=s[0],h=s[1],v=n[0],o=n[1],r=a[0],s=a[1],n=i[0],a=i[1];e.save(),e.beginPath(),e.moveTo(c,l),e.lineTo(d,u),e.lineTo(p,h),e.closePath(),e.clip();i=v*s+o*n+r*a-s*n-o*r-v*a;e.transform((c*s+o*p+d*a-s*p-o*d-c*a)/i,(l*s+o*h+u*a-s*h-o*u-l*a)/i,(v*d+c*n+r*p-d*n-c*r-v*p)/i,(v*u+l*n+r*h-u*n-l*r-v*h)/i,(v*s*p+o*d*n+c*r*a-c*s*n-o*r*p-v*d*a)/i,(v*s*h+o*u*n+l*r*a-l*s*n-o*r*h-v*u*a)/i),e.drawImage(t,0,0),e.restore()}t.a={Warp:function(e,t,n){var a=new OffscreenCanvas(n[2][0],n[2][1]),i=a.getContext("2d");return i.clearRect(0,0,a.width,a.height),o(i,e,t[0],t[2],t[3],n[0],n[2],n[3]),i.translate(-1,1),o(i,e,t[0],t[1],t[2],n[0],n[1],n[2]),a.convertToBlob({type:"image/png"})}}},147:function(e,t,n){"use strict";t.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("v-ons-page",[t("video",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],ref:"camera",staticClass:"camera-surface",attrs:{autoplay:""}}),e._v(" "),t("div",{attrs:{id:"canvas-wrapper"}},[t("canvas",{ref:"cachedCamera"}),e._v(" "),t("canvas",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],ref:"uiCanvas"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"init"===e.photoState,expression:"photoState === 'init'"}],attrs:{id:"test-grid"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"0"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"1"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"2"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"3"}}),e._v(" "),t("div",{attrs:{id:"detailView"}},[t("canvas",{ref:"detailViewCanvas"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"vectorize"===e.photoState,expression:"photoState === 'vectorize'"}],attrs:{id:"processing"}},[t("div",{attrs:{id:"processingTextBox"}},[t("p",{attrs:{id:"processingText"}},[e._v("맵핑할 공간을 인식하는 중이에요"),t("br"),e._v("잠시만 기다려주세요")]),e._v(" "),t("lottie-view",{staticClass:"lottie-processing",attrs:{path:"static/processing.json"}})],1)]),e._v(" "),t("button",{class:["okBtn",{photoTake:"photoTaken"===e.photoState},{vectorize:"vectorize"===e.photoState}],on:{click:e.onClick}},[t("div",{staticClass:"inner-circle"})]),e._v(" "),"photoTaken"===e.photoState?t("div",{staticClass:"retake-photo",on:{click:e.retakePhoto}}):e._e()])])},staticRenderFns:[]}},148:function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("v-ons-page",{on:{toggleMenu:function(e){t.menuIsOpen=!t.menuIsOpen}}},[e("div",{staticClass:"welcome"},[t._v(t._s(t.msg)),e("br"),t._v("먼저 프로젝터를 연결해주세요")]),t._v(" "),e("div",{staticClass:"guide-text"},[t._v("\n  프로젝터를 연결하려면, 와이파이를 통해 프로젝터와 모바일을 연결하거나,"),e("br"),t._v("\n  PC와 프로젝터를 연결한 뒤 워프에 접속해 주세요."),e("br"),t._v(" "),e("br"),e("b",[t._v("※ 휴대폰을 가로모드로 사용해주세요!")])]),t._v(" "),e("v-ons-button",{staticClass:"guide-btn",attrs:{id:"take-photo",modifier:"large"},on:{click:function(e){return t.$emit("replace-page",t.canvasPage)}}},[t._v("연결완료")]),t._v(" "),e("v-ons-button",{staticClass:"guide-btn",attrs:{id:"goto-edit",modifier:"large"},on:{click:function(e){return t.$emit("replace-page",t.editPage)}}},[t._v("편집하기")])],1)},staticRenderFns:[]}},149:function(e,t,n){"use strict";t.a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-ons-navigator",{attrs:{swipeable:"","page-stack":t.pageStack},on:{"push-page":function(e){return t.pageStack.push(e)},"replace-page":function(e){t.pageStack.pop(),t.pageStack.push(e)},"home-page":function(e){return t.goHome()}}})},staticRenderFns:[]}},150:function(e,t,n){"use strict";t.a={render:function(){var e=this.$createElement,e=this._self._c||e;return this.isLoading?e("splash",{attrs:{isLoading:this.isLoading}}):e("navi-page")},staticRenderFns:[]}},20:function(e,t,n){"use strict";var a=n(31),i=n(130),i=n(3)(a.a,i.a,!1,null,null,null);t.a=i.exports},29:function(e,t,n){"use strict";var a=n(71),n=n(132);t.a={name:"app",data:function(){return{isLoading:!0}},mounted:function(){var e=this;setTimeout(function(){e.isLoading=!1},600)},components:{Splash:a.a,NaviPage:n.a}}},30:function(e,t,n){"use strict";n=n(20);t.a={name:"splash",props:["isLoading"],components:{LottieView:n.a}}},31:function(e,t,n){"use strict";var a=n(73),i=n.n(a),a=n(76),o=n.n(a),a=n(112),r=n.n(a),a=n(18),s=n.n(a);t.a={props:{path:{required:!0},speed:{type:Number,required:!1,default:1},width:{type:Number|String,required:!1,default:-1},height:{type:Number|String,required:!1,default:-1},loop:{type:Boolean,required:!1,default:!0},autoPlay:{type:Boolean,required:!1,default:!0},loopDelayMin:{type:Number,required:!1,default:0},loopDelayMax:{type:Number,required:!1,default:0}},data:function(){return{name:"lottie-view",rendererSettings:{scaleMode:"centerCrop",clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0},anim:null,style:null}},methods:{getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},executeLoop:function(){var e=this;this.anim.play(),setTimeout(function(){e.anim.stop(),e.executeLoop()},this.getRandomInt(this.loopDelayMin,0===this.loopDelayMax?this.loopDelayMin:this.loopDelayMax))},sizeText:function(e){return isNaN(e)?e:e+"px"},init:function(){var n=this;return o()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.style={width:-1!==n.width?n.sizeText(n.width):"100%",height:-1!==n.height?n.sizeText(n.height):"100%",overflow:"hidden",margin:"0 auto"},e.next=3,s.a.get(n.path).then(function(e){return e.data});case 3:t=e.sent,n.anim&&n.anim.destroy(),n.anim=r.a.loadAnimation({container:n.$refs.lavContainer,renderer:"svg",loop:n.loop,autoplay:n.autoPlay,animationData:t,rendererSettings:n.rendererSettings}),n.anim.addEventListener("complete",function(){n.$emit("complete",n.anim)}),n.$emit("AnimControl",n.anim),n.anim.setSpeed(n.speed),0<n.loopDelayMin&&(n.anim.loop=!1,n.anim.autoplay=!1,n.executeLoop());case 10:case"end":return e.stop()}},e,n)}))()}},mounted:function(){this.init()}}},54:function(e,t,n){"use strict";var a=n(133);t.a={name:"navigation",data:function(){return{pageStack:[a.a]}},methods:{goHome:function(){this.pageStack.pop(),this.pageStack.push(a.a)}},components:{HomePage:a.a}}},55:function(e,t,n){"use strict";var a=n(135),i=n(57);t.a={name:"home",data:function(){return{menuIsOpen:!1,msg:"반가워요!",canvasPage:a.a,editPage:i.a}},methods:{goTo:function(e){window.open(e,"_blank")}},components:{CanvasPage:a.a,EditPage:i.a}}},56:function(e,t,n){"use strict";var a=n(20),i=n(137),o=n(18),r=n.n(o),s=n(57),c=n(145),l=n(146),d=100;t.a={name:"CanvasPage",data:function(){return{app:null,isLoading:!0,photoState:null,imageCapture:null,canvasStatus:null,detailView:null,corners:[]}},mounted:function(){var a=this;this.photoState="init",navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:window.innerWidth,height:window.innerHeight}}).then(function(e){a.isLoading=!1;e=(a.$refs.camera.srcObject=e).getVideoTracks()[0];a.imageCapture=new window.ImageCapture(e)}).catch(function(e){a.isLoading=!1,console.error("Platform Webview does not support getUserMedia video."),console.error(e)});var e=window.innerWidth,i=window.innerHeight;this.$refs.uiCanvas.width=e,this.$refs.uiCanvas.height=i,this.$refs.cachedCamera.width=e,this.$refs.cachedCamera.height=i,this.corners=[[.3*e,.3*i],[.7*e,.3*i],[.7*e,.7*i],[.3*e,.7*i]];var o=document.querySelectorAll(".drag-handle");o.forEach(function(e,t){var n=a.corners[t];o[t].style.left=n[0]+"px",o[t].style.top=n[1]+"px"}),this.updatePolygon(),this.detailView=document.querySelector("#detailView"),Object(c.a)({container:document.querySelector("#canvas-wrapper"),selector:".drag-handle",handleOffset:"center",callbackDragStart:function(e,t){var n=a.getDetailViewPos(t,i);a.detailView.style.display="block",a.detailView.style.left=n[0]+"px",a.detailView.style.top=n[1]+"px",a.updatedetailView(t)},callbackDragEnd:function(e,t){a.detailView.style.display="none"},callback:function(e,t){e=parseInt(e.dataset.corner);a.corners[e]=t,o[e].style.left=t[0]+"px",o[e].style.top=t[1]+"px";e=a.getDetailViewPos(t,i);a.detailView.style.left=e[0]+"px",a.detailView.style.top=e[1]+"px",a.updatePolygon(),a.updatedetailView(t)}})},methods:{updatePolygon:function(){var e=this.$refs.uiCanvas,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.strokeStyle="#5af854",t.lineWidth=2,t.beginPath(),t.setLineDash([10,5]);var n=this.corners[0];t.moveTo(n[0],n[1]);for(var a=1;a<this.corners.length;a++)n=this.corners[a],t.lineTo(n[0],n[1]);n=this.corners[0],t.lineTo(n[0],n[1]),t.closePath(),t.stroke()},updatedetailView:function(e){var t=this.$refs.detailViewCanvas.getContext("2d");t.clearRect(0,0,d,d),t.drawImage(this.$refs.cachedCamera,e[0]-50,e[1]-50,d,d,0,0,d,d),t.drawImage(this.$refs.uiCanvas,e[0]-50,e[1]-50,d,d,0,0,d,d)},getDetailViewPos:function(e){var t=[e[0]-d,e[1]];return e[0]<d&&(t[0]=e[0]),e[1]>window.innerHeight-d&&(t[1]=e[1]-d),t},progressStart:function(){},progressEnd:function(){this.photoState="init"},onClick:function(){var t=this;"vectorize"!==this.photoState&&("init"===this.photoState?(this.photoState="photoTaken",this.grabFrame()):"photoTaken"===this.photoState&&(this.photoState="vectorize",this.cropPhoto().then(function(e){return t.vectorize(e)})))},onComplete:function(){this.$emit("replace-page",s.a)},retakePhoto:function(){this.photoState="init";var e=this.$refs.cachedCamera;e.getContext("2d").clearRect(0,0,e.width,e.height)},grabFrame:function(){var t=this;this.isLoading?console.log("camera is not ready"):(this.progressStart(),this.imageCapture.grabFrame().then(function(e){return createImageBitmap(e,{resizeWidth:window.innerWidth,resizeHeight:window.innerHeight,resizeQuality:"medium"})}).then(function(e){t.$refs.cachedCamera.getContext("2d").drawImage(e,0,0)}))},cropPhoto:function(){var a=this,e=this.$refs.cachedCamera;return createImageBitmap(e).then(function(e){var t=screen.height,n=4*t/3;return l.a.Warp(e,a.corners,[[0,0],[n,0],[n,t],[0,t]])})},vectorize:function(e){var t=this;i.a.blobToUrl(e).then(function(e){return localStorage.setItem("raster",e)});var n=new FormData;n.append("hierarchial","cutout"),n.append("filter_speckle",4),n.append("color_precision",6),n.append("layer_difference",16),n.append("file",e),console.log("https://fierce-lake-44609.herokuapp.com");return r.a.post("https://fierce-lake-44609.herokuapp.com/vision/",n,{header:{"Content-Type":"multipart/form-data"}}).then(function(e){localStorage.setItem("vectorized",e.data),t.progressEnd(),t.onComplete()}).catch(function(e){console.log("error..."),console.log(e),t.progressEnd()})}},components:{LottieView:a.a,EditPage:s.a}}},57:function(e,t,n){"use strict";var a=n(58),i=n(143);i=n(3)(a.a,i.a,!1,function(e){n(138),n(139)},"data-v-1e5942c0",null);t.a=i.exports},58:function(e,t,n){"use strict";var a=n(140),i=n.n(a),o=n(141),r=n(20),a=n(18),s=n.n(a),c=n(142),l="http://www.w3.org/2000/svg";t.a={name:"EditPage",data:function(){return{libraryOpened:!1,contents:[],lastClicked:null,progressed:!1,svg:null,mappingCount:0,currentMapped:-1,colorPickerWindowOpened:!1,colorPicker:null}},mounted:function(){var a=this,e=localStorage.getItem("raster");document.querySelector("#original-image").src=e;var t=localStorage.getItem("vectorized"),n=document.querySelector("#svg-wrapper");n.innerHTML=t;e=n.querySelector("svg"),t=e.getBBox();e.classList.add("vectorsurface"),e.setAttribute("viewBox","0, 0, "+t.width+", "+t.height),e.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg=e;n=document.querySelector("#physics-world"),t=i.a.Engine.create(),n=i.a.Render.create({element:document.getElementById("physics-world"),engine:t,options:{width:n.clientWidth,height:n.clientHeight,background:"transparent",wireframeBackground:"rgba(0, 0, 0, 0.2)"}});i.a.Render.run(n);n=i.a.Runner.create();i.a.Runner.run(n,t),e.querySelectorAll("path").forEach(function(e){e.setAttribute("stroke-width",0),e.removeAttribute("fill"),e.removeAttribute("fill-opacity"),e.addEventListener("click",function(e){a.lastClicked!==e.target?(null!==a.lastClicked&&a.lastClicked.classList.remove("selected-path"),a.currentMapped=parseInt(e.target.dataset.contentIndex),a.lastClicked=e.target,a.lastClicked.classList.add("selected-path")):(a.lastClicked.classList.remove("selected-path"),a.lastClicked=null,a.currentMapped=-1)})}),o.a.getContentsAsync().then(function(e){for(var t in e){var n=e[t].contents.trim();n.startsWith("<pattern")&&(e[t].contents=n.replace("<pattern",'<pattern id="patternx'+t+'"'))}a.contents=e}),this.colorPicker=new c.a.ColorPicker("#color-picker",{width:150,color:"#f00",layoutDirection:"horizontal",layout:[{component:c.a.ui.Slider},{component:c.a.ui.Wheel}]})},methods:{openColorPick:function(){this.lastClicked.dataset.contentIndex&&isNaN(this.lastClicked.dataset.contentIndex)?(delete this.lastClicked.dataset.contentIndex,this.lastClicked.removeAttribute("fill"),this.lastClicked.removeAttribute("fill-opacity"),this.currentMapped=-1):this.colorPickerWindowOpened=!0},mapit:function(e,t){var n,a;this.lastClicked.dataset.contentIndex===String(e)?(delete this.lastClicked.dataset.contentIndex,this.lastClicked.removeAttribute("fill"),this.lastClicked.removeAttribute("fill-opacity"),this.currentMapped=-1):isNaN(e)?(this.lastClicked&&(this.lastClicked.setAttribute("fill",e),this.lastClicked.setAttribute("fill-opacity","1"),this.lastClicked.dataset.contentIndex=e,this.mappingCount++,this.currentMapped=e),this.colorPickerWindowOpened=!1):"svg-pattern"===(n=this.contents[e]).type&&((a=document.createElementNS(l,"template")).innerHTML=n.contents,n=a.firstChild,(a=this.svg.querySelector("defs"))||(a=document.createElementNS(l,"defs"),this.svg.append(a)),a.append(n),this.lastClicked&&(this.lastClicked.setAttribute("fill","url(#patternx"+e+")"),this.lastClicked.setAttribute("fill-opacity","1"),this.lastClicked.dataset.contentIndex=e,this.mappingCount++,this.currentMapped=e))},save:function(){var e=document.createElementNS(l,"template");e.innerHTML=this.svg.outerHTML;e=e.querySelector("svg");e.querySelectorAll("path").forEach(function(e){e.getAttribute("fill")||e.parentNode.removeChild(e)});s.a.post("https://fierce-lake-44609.herokuapp.com/screen/1234",{data:e.outerHTML}).then(function(){console.log("screen save success")}).catch(function(e){console.log(e)})},onSwipe:function(){this.libraryOpened=!1}},components:{LottieView:r.a}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(61),i=(n.n(a),n(63)),o=(n.n(i),n(64)),r=(n.n(o),n(65)),s=n(67),t=n.n(s),a=n(69),i=n(151),o=n.n(i),s=n(59),i=n(152),n=n(153);s.c.add(i.c),s.c.add(i.b),s.c.add(i.d),s.c.add(i.a),s.c.add(i.e),r.a.component("font-awesome-icon",n.a),r.a.config.productionTip=!1,r.a.use(t.a),r.a.use(o.a),new r.a({el:"#app",template:"<App/>",components:{App:a.a}})},61:function(e,t){},63:function(e,t){},64:function(e,t){},69:function(e,t,n){"use strict";var a=n(29),i=n(150);i=n(3)(a.a,i.a,!1,function(e){n(70)},"data-v-8941bd9e",null);t.a=i.exports},70:function(e,t){},71:function(e,t,n){"use strict";var a=n(30),i=n(131);i=n(3)(a.a,i.a,!1,function(e){n(72)},"data-v-08521938",null);t.a=i.exports},72:function(e,t){}},[60]);
//# sourceMappingURL=app.53a03d29f7d7bfc134b6.js.map
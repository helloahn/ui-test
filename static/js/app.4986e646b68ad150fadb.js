webpackJsonp([1],Array(19).concat([function(t,e,n){"use strict";var a=n(56),i=n(156);i=n(3)(a.a,i.a,!1,function(t){n(136)},"data-v-3300ed36",null);e.a=i.exports},,function(t,e,n){"use strict";var a=n(32),i=n(133),i=n(3)(a.a,i.a,!1,null,null,null);e.a=i.exports},,,,,,,,,function(t,e,n){"use strict";var a=n(74),n=n(135);e.a={name:"app",data:function(){return{isLoading:!0}},mounted:function(){var t=this;setTimeout(function(){t.isLoading=!1},2e3)},components:{Splash:a.a,NaviPage:n.a}}},function(t,e,n){"use strict";n=n(21);e.a={name:"splash",props:["isLoading"],components:{LottieView:n.a}}},function(t,e,n){"use strict";var a=n(76),i=n.n(a),a=n(79),o=n.n(a),a=n(115),r=n.n(a),a=n(18),s=n.n(a);e.a={props:{path:{required:!0},speed:{type:Number,required:!1,default:1},width:{type:Number|String,required:!1,default:-1},height:{type:Number|String,required:!1,default:-1},loop:{type:Boolean,required:!1,default:!0},autoPlay:{type:Boolean,required:!1,default:!0},loopDelayMin:{type:Number,required:!1,default:0},loopDelayMax:{type:Number,required:!1,default:0}},data:function(){return{name:"lottie-view",rendererSettings:{scaleMode:"centerCrop",clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0},anim:null,style:null}},methods:{getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t},executeLoop:function(){var t=this;this.anim.play(),setTimeout(function(){t.anim.stop(),t.executeLoop()},this.getRandomInt(this.loopDelayMin,0===this.loopDelayMax?this.loopDelayMin:this.loopDelayMax))},sizeText:function(t){return isNaN(t)?t:t+"px"},init:function(){var n=this;return o()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.style={width:-1!==n.width?n.sizeText(n.width):"100%",height:-1!==n.height?n.sizeText(n.height):"100%",overflow:"hidden",margin:"0 auto"},t.next=3,s.a.get(n.path).then(function(t){return t.data});case 3:e=t.sent,n.anim&&n.anim.destroy(),n.anim=r.a.loadAnimation({container:n.$refs.lavContainer,renderer:"svg",loop:n.loop,autoplay:n.autoPlay,animationData:e,rendererSettings:n.rendererSettings}),n.anim.addEventListener("complete",function(){n.$emit("complete",n.anim)}),n.$emit("AnimControl",n.anim),n.anim.setSpeed(n.speed),0<n.loopDelayMin&&(n.anim.loop=!1,n.anim.autoplay=!1,n.executeLoop());case 10:case"end":return t.stop()}},t,n)}))()}},mounted:function(){this.init()}}},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(19);e.a={name:"navigation",data:function(){return{pageStack:[a.a]}},methods:{goHome:function(){this.pageStack.pop(),this.pageStack.push(a.a)}},components:{HomePage:a.a}}},function(t,e,n){"use strict";var a=n(137),i=n(58),o=n(150),r=n(153);e.a={name:"home",data:function(){return{menuIsOpen:!1,msg:"반가워요!",modalVisible:!1,isConnected:!1,canvasPage:a.a,editPage:i.a,helpPage:o.a,storePage:r.a}},mounted:function(){document.getElementById("conn-status-txt").innerHTML="연결 안됨"},methods:{showModal:function(){this.modalVisible=!0},connectToProjector:function(){var t=document.getElementById("conn-status-txt");this.isConnected=!0,t.innerHTML="연결 됨",this.modalVisible=!1},disconnectToProjector:function(){var t=document.getElementById("conn-status-txt");this.isConnected=!1,t.innerHTML="연결 안됨",this.modalVisible=!1},openDetail:function(){this.modalVisible=!1}},components:{CanvasPage:a.a,EditPage:i.a}}},function(t,e,n){"use strict";var a=n(21),i=n(139),o=n(18),r=n.n(o),s=n(58),c=n(19),l=n(147),d=n(148),u=100;e.a={name:"CanvasPage",data:function(){return{app:null,isLoading:!0,photoState:"ready",currentRatioIdx:null,imageCapture:null,canvasStatus:null,selectRatioMode:!1,corners:[]}},mounted:function(){var o=this;navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:window.innerWidth,height:window.innerHeight}}).then(function(t){o.isLoading=!1;t=(o.$refs.camera.srcObject=t).getVideoTracks()[0];o.imageCapture=new window.ImageCapture(t)}).catch(function(t){o.isLoading=!1,console.error("Platform Webview does not support getUserMedia video."),console.error(t)});var t=window.innerWidth,a=window.innerHeight;this.$refs.uiCanvas.width=t,this.$refs.uiCanvas.height=a,this.$refs.cachedCamera.width=t,this.$refs.cachedCamera.height=a;var i=document.querySelectorAll(".drag-handle"),r=document.querySelector("#detailView");Object(l.a)({container:document.querySelector("#canvas-wrapper"),selector:".drag-handle",handleOffset:"center",callbackDragStart:function(t,e){var n=parseInt(t.dataset.corner),t=o.getDetailViewPos(e,a);n%3==0&&(t[0]+=u),r.style.display="block",r.style.left=t[0]+"px",r.style.top=t[1]+"px",o.updatedetailView(e)},callbackDragEnd:function(t,e){r.style.display="none"},callback:function(t,e){var n=parseInt(t.dataset.corner);o.corners[n]=e,i[n].style.left=e[0]+"px",i[n].style.top=e[1]+"px";t=o.getDetailViewPos(e,a);n%3==0&&(t[0]+=u),r.style.left=t[0]+"px",r.style.top=t[1]+"px",o.updatePolygon(),o.updatedetailView(e)}}),this.changeRatio(0),this.initFreeGuideButtons(),Object(l.a)({container:document.querySelector("#canvas-wrapper"),selector:".free-guide-handle",handleOffset:"center",callback:function(t,e){var n=document.querySelectorAll(".free-guide-handle"),a=parseInt(t.dataset.corner),i=document.querySelector("#screen-guide");a<2?(t=e[0]<window.innerWidth/2?e[0]:window.innerWidth-e[0],i.style.width=window.innerWidth-2*t+"px",n[0].style.left=t-6+"px",n[1].style.right=t-6+"px"):2<=a&&(e=e[1]<window.innerHeight/2?e[1]:window.innerHeight-e[1],i.style.height=window.innerHeight-2*e+"px",n[2].style.top=e-6+"px",n[3].style.bottom=e-6+"px"),o.updateCornerDrag(),o.updatePolygon()}})},methods:{updatePolygon:function(){var t=this.$refs.uiCanvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.strokeStyle="#5af854",e.lineWidth=2,e.beginPath(),e.setLineDash([10,5]);var n=this.corners[0];e.moveTo(n[0],n[1]);for(var a=1;a<this.corners.length;a++)n=this.corners[a],e.lineTo(n[0],n[1]);n=this.corners[0],e.lineTo(n[0],n[1]),e.closePath(),e.stroke()},updatedetailView:function(t){var e=this.$refs.detailViewCanvas.getContext("2d");e.clearRect(0,0,u,u),e.drawImage(this.$refs.cachedCamera,t[0]-50,t[1]-50,u,u,0,0,u,u),e.drawImage(this.$refs.uiCanvas,t[0]-50,t[1]-50,u,u,0,0,u,u)},getDetailViewPos:function(t){var e=[t[0]-u,t[1]];return t[0]<u&&(e[0]=t[0]),t[1]>window.innerHeight-u&&(e[1]=t[1]-u),e},progressStart:function(){},progressEnd:function(){this.photoState="ready"},onClick:function(){var e=this;"vectorize"!==this.photoState&&("ready"===this.photoState?(this.photoState="photoTaken",this.grabFrame()):"photoTaken"===this.photoState&&(this.photoState="vectorize",this.cropPhoto().then(function(t){return e.vectorize(t)})))},onComplete:function(){this.$emit("replace-page",s.a)},retakePhoto:function(){var t;"photoTaken"===this.photoState?(this.photoState="ready",(t=this.$refs.cachedCamera).getContext("2d").clearRect(0,0,t.width,t.height)):"ready"===this.photoState&&this.$emit("replace-page",c.a)},grabFrame:function(){var e=this;this.isLoading?console.log("camera is not ready"):(this.progressStart(),this.imageCapture.grabFrame().then(function(t){return createImageBitmap(t,{resizeWidth:window.innerWidth,resizeHeight:window.innerHeight,resizeQuality:"medium"})}).then(function(t){e.$refs.cachedCamera.getContext("2d").drawImage(t,0,0)}))},cropPhoto:function(){var a=this,t=this.$refs.cachedCamera;return createImageBitmap(t).then(function(t){var e=screen.height,n=4*e/3;return d.a.Warp(t,a.corners,[[0,0],[n,0],[n,e],[0,e]])})},vectorize:function(t){var e=this;i.a.blobToUrl(t).then(function(t){return localStorage.setItem("raster",t)});var n=new FormData;n.append("hierarchial","cutout"),n.append("filter_speckle",4),n.append("color_precision",6),n.append("layer_difference",16),n.append("file",t),console.log("https://fierce-lake-44609.herokuapp.com");return r.a.post("https://fierce-lake-44609.herokuapp.com/vision/",n,{header:{"Content-Type":"multipart/form-data"}}).then(function(t){localStorage.setItem("vectorized",t.data),e.progressEnd(),e.onComplete()}).catch(function(t){console.log("error..."),console.log(t),e.progressEnd()})},selectRatio:function(){this.selectRatioMode?this.selectRatioMode=!1:this.selectRatioMode=!0},initFreeGuideButtons:function(){var t=document.querySelectorAll(".free-guide-handle"),e=window.innerWidth/100*36;t[0].style.left=(window.innerWidth-e)/2-6+"px",t[0].style.top=window.innerHeight/2-28+"px",t[1].style.right=(window.innerWidth-e)/2-6+"px",t[1].style.top=window.innerHeight/2-28+"px",t[2].style.left=window.innerWidth/2-28+"px",t[2].style.top=(window.innerHeight-e)/2-6+"px",t[3].style.left=window.innerWidth/2-28+"px",t[3].style.bottom=(window.innerHeight-e)/2-6+"px"},changeRatio:function(t){if(this.selectRatioMode=!1,t!==this.currentRatioIdx){var e=document.querySelector("#screen-guide"),n=document.querySelector("#currentRatioBtn");switch(t){case 0:n.textContent="4:3",e.style.width="48vw",e.style.height="36vw";break;case 1:n.textContent="16:9",e.style.width="64vw",e.style.height="36vw";break;case 2:n.textContent="16:10",e.style.width="48vw",e.style.height="30vw";break;case 3:n.textContent="21:9",e.style.width="63vw",e.style.height="27vw";break;case 4:n.textContent="FREE",e.style.width="36vw",e.style.height="36vw",this.initFreeGuideButtons();break;default:console.log("Not Supported")}this.currentRatioIdx=t,this.updateCornerDrag(),this.updatePolygon()}},updateCornerDrag:function(){var a=this,t=document.querySelector("#screen-guide"),e=t.style.width.match(/(\d+)/)[0],n=t.style.height.match(/(\d+)/)[0];t.style.width.includes("vw")&&(e*=window.innerWidth/100),t.style.height.includes("vw")&&(n*=window.innerWidth/100),this.corners=[[(window.innerWidth-e)/2,(window.innerHeight-n)/2],[(window.innerWidth-e)/2+ +e,(window.innerHeight-n)/2],[(window.innerWidth-e)/2+ +e,(window.innerHeight-n)/2+ +n],[(window.innerWidth-e)/2,(window.innerHeight-n)/2+ +n]];var i=document.querySelectorAll(".drag-handle");i.forEach(function(t,e){var n=a.corners[e];i[e].style.left=n[0]+"px",i[e].style.top=n[1]+"px"})}},components:{LottieView:a.a,EditPage:s.a,HomePage:c.a}}},function(t,e,n){"use strict";var a=n(59),i=n(145);i=n(3)(a.a,i.a,!1,function(t){n(140),n(141)},"data-v-1e5942c0",null);e.a=i.exports},function(t,e,n){"use strict";var a=n(142),i=n.n(a),o=n(143),r=n(21),a=n(18),s=n.n(a),c=n(144),l="http://www.w3.org/2000/svg";e.a={name:"EditPage",data:function(){return{libraryOpened:!1,contents:[],lastClicked:null,progressed:!1,svg:null,mappingCount:0,currentMapped:-1,colorPickerWindowOpened:!1,colorPicker:null}},mounted:function(){var a=this,t=localStorage.getItem("raster");document.querySelector("#original-image").src=t;var e=localStorage.getItem("vectorized"),n=document.querySelector("#svg-wrapper");n.innerHTML=e;t=n.querySelector("svg"),e=t.getBBox();t.classList.add("vectorsurface"),t.setAttribute("viewBox","0, 0, "+e.width+", "+e.height),t.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg=t;n=document.querySelector("#physics-world"),e=i.a.Engine.create(),n=i.a.Render.create({element:document.getElementById("physics-world"),engine:e,options:{width:n.clientWidth,height:n.clientHeight,background:"transparent",wireframeBackground:"rgba(0, 0, 0, 0.2)"}});i.a.Render.run(n);n=i.a.Runner.create();i.a.Runner.run(n,e),t.querySelectorAll("path").forEach(function(t){t.setAttribute("stroke-width",0),t.removeAttribute("fill"),t.removeAttribute("fill-opacity"),t.addEventListener("click",function(t){a.lastClicked!==t.target?(null!==a.lastClicked&&a.lastClicked.classList.remove("selected-path"),a.currentMapped=parseInt(t.target.dataset.contentIndex),a.lastClicked=t.target,a.lastClicked.classList.add("selected-path")):(a.lastClicked.classList.remove("selected-path"),a.lastClicked=null,a.currentMapped=-1)})}),o.a.getContentsAsync().then(function(t){for(var e in t){var n=t[e].contents.trim();n.startsWith("<pattern")&&(t[e].contents=n.replace("<pattern",'<pattern id="patternx'+e+'"'))}a.contents=t}),this.colorPicker=new c.a.ColorPicker("#color-picker",{width:150,color:"#f00",layoutDirection:"horizontal",layout:[{component:c.a.ui.Slider},{component:c.a.ui.Wheel}]})},methods:{openColorPick:function(){this.lastClicked.dataset.contentIndex&&isNaN(this.lastClicked.dataset.contentIndex)?(delete this.lastClicked.dataset.contentIndex,this.lastClicked.removeAttribute("fill"),this.lastClicked.removeAttribute("fill-opacity"),this.currentMapped=-1):this.colorPickerWindowOpened=!0},mapit:function(t,e){var n,a;this.lastClicked.dataset.contentIndex===String(t)?(delete this.lastClicked.dataset.contentIndex,this.lastClicked.removeAttribute("fill"),this.lastClicked.removeAttribute("fill-opacity"),this.currentMapped=-1):isNaN(t)?(this.lastClicked&&(this.lastClicked.setAttribute("fill",t),this.lastClicked.setAttribute("fill-opacity","1"),this.lastClicked.dataset.contentIndex=t,this.mappingCount++,this.currentMapped=t),this.colorPickerWindowOpened=!1):"svg-pattern"===(n=this.contents[t]).type&&((a=document.createElementNS(l,"template")).innerHTML=n.contents,n=a.firstChild,(a=this.svg.querySelector("defs"))||(a=document.createElementNS(l,"defs"),this.svg.append(a)),a.append(n),this.lastClicked&&(this.lastClicked.setAttribute("fill","url(#patternx"+t+")"),this.lastClicked.setAttribute("fill-opacity","1"),this.lastClicked.dataset.contentIndex=t,this.mappingCount++,this.currentMapped=t))},save:function(){var t=document.createElementNS(l,"template");t.innerHTML=this.svg.outerHTML;t=t.querySelector("svg");t.querySelectorAll("path").forEach(function(t){t.getAttribute("fill")||t.parentNode.removeChild(t)});s.a.post("https://fierce-lake-44609.herokuapp.com/screen/1234",{data:t.outerHTML}).then(function(){console.log("screen save success")}).catch(function(t){console.log(t)})},onSwipe:function(){this.libraryOpened=!1}},components:{LottieView:r.a}}},function(t,e,n){"use strict";var a=n(19);e.a={name:"HelpPage",data:function(){return{app:null,homePage:a.a,carouselIndex:0,items:{BLUE:"#085078",DARK:"#373B44",RED:"#FF0000",ORANGE:"#D38312"},dots:{textAlign:"center",fontSize:"30px",color:"#fff",position:"absolute",bottom:"40px",left:0,right:0}}},mounted:function(){},methods:{},components:{HomePage:a.a}}},function(t,e,n){"use strict";var a=n(19);e.a={name:"StorePage",data:function(){return{app:null,homePage:a.a}},mounted:function(){},methods:{},components:{HomePage:a.a}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(64),i=(n.n(a),n(66)),o=(n.n(i),n(67)),r=(n.n(o),n(68)),s=n(70),e=n.n(s),a=n(72),i=n(159),o=n.n(i),s=n(62),i=n(160),n=n(161);s.c.add(i.c),s.c.add(i.b),s.c.add(i.d),s.c.add(i.a),s.c.add(i.e),r.a.component("font-awesome-icon",n.a),r.a.config.productionTip=!1,r.a.use(e.a),r.a.use(o.a),new r.a({el:"#app",template:"<App/>",components:{App:a.a}})},function(t,e){},,function(t,e){},function(t,e){},,,,,function(t,e,n){"use strict";var a=n(30),i=n(158);i=n(3)(a.a,i.a,!1,function(t){n(73)},"data-v-2f6b789c",null);e.a=i.exports},function(t,e){},function(t,e,n){"use strict";var a=n(31),i=n(134);i=n(3)(a.a,i.a,!1,function(t){n(75)},"data-v-7b8c9d44",null);e.a=i.exports},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";e.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return e.style?t("div",{ref:"lavContainer",style:e.style,on:{click:function(t){return e.$emit("click")},mousedown:function(t){return e.$emit("down")},mouseup:function(t){return e.$emit("up")}}}):e._e()},staticRenderFns:[]}},function(t,e,n){"use strict";e.a={render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",{staticClass:"mounting"},[t("lottie-view",{attrs:{id:"mounting-lottie",path:"static/4-dots.json"}})],1)},staticRenderFns:[]}},function(t,e,n){"use strict";var a=n(55),i=n(157),i=n(3)(a.a,i.a,!1,null,null,null);e.a=i.exports},function(t,e){},function(t,e,n){"use strict";var a=n(57),i=n(149);i=n(3)(a.a,i.a,!1,function(t){n(138)},"data-v-5af04385",null);e.a=i.exports},function(t,e){},function(t,e,n){"use strict";var a=n(33),i=n.n(a);e.a={crop:function(t,e,n,a,i,o,r){console.log("x: "+e+", y: "+n+", width: "+a+", height: "+i);var s=a,c=i;return i<a?c=i/a*(s=o):s=a/i*(c=r),o=new OffscreenCanvas(s,c),(r=o.getContext("2d")).clearRect(0,0,o.width,o.height),r.drawImage(t,e,n,a,i,0,0,s,c),{blob:o.convertToBlob({type:"image/png"}),bitmap:o.transferToImageBitmap()}},blobToUrl:function(a){return new i.a(function(t,e){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=e,n.readAsDataURL(a)})}}},function(t,e){},function(t,e){},,function(t,e,n){"use strict";var a=n(18),i=n.n(a);e.a={getContentsAsync:function(){return i.a.get("https://fierce-lake-44609.herokuapp.com/contents").then(function(t){return t.data})}}},,function(t,e,i){"use strict";e.a={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-ons-page",[a("img",{attrs:{id:"original-image"}}),n._v(" "),a("div",{attrs:{id:"physics-world"}}),n._v(" "),a("div",{attrs:{id:"svg-wrapper"}}),n._v(" "),a("div",{staticClass:"library-placeholder"},[n.lastClicked?a("div",{ref:"library",staticClass:"slide-page"},[a("h1",[n._v("컨텐츠 선택")]),n._v(" "),a("ul",[a("li",{staticClass:"contents-item",on:{click:n.openColorPick}},[a("img",{attrs:{src:i(146)}}),n._v(" "),n.currentMapped&&isNaN(n.currentMapped)?a("font-awesome-icon",{attrs:{icon:"check"}}):n._e()],1),n._v(" "),0===n.contents.length?a("li",[a("lottie-view",{attrs:{width:"100px",height:"100px",speed:1,loop:!0,autoPlay:!0,path:"static/progress-dots-blue.json"}})],1):n._e(),n._v(" "),n._l(n.contents,function(t,e){return a("li",{key:e,staticClass:"contents-item",on:{click:function(t){return n.mapit(e,t)}}},[a("svg",{attrs:{width:"64",height:"64",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 64 64"}},[a("defs",{domProps:{innerHTML:n._s(t.contents)}}),n._v(" "),a("rect",{attrs:{width:"64",height:"64",fill:"url(#patternx"+e+")"}})]),n._v(" "),n.currentMapped===e?a("font-awesome-icon",{attrs:{icon:"check"}}):n._e()],1)})],2)]):a("div",{staticClass:"placeholder-msg"},[0===n.mappingCount?a("p",[a("font-awesome-icon",{style:{color:"#DD9781"},attrs:{icon:"exclamation-circle"}}),n._v(" "),a("br"),n._v("\n        구역을 선택하여 "),a("br"),n._v("\n        맵핑 컨텐츠를 입혀보세요\n      ")],1):a("p",[a("font-awesome-icon",{style:{color:"#A4DD81"},attrs:{icon:"check-circle"}}),n._v(" "),a("br"),n._v("\n        원하시는 컨텐츠를 선택 하셨나요?"),a("br"),n._v("\n        아래 버튼을 눌러 맵핑을 완료하세요.\n      ")],1)]),n._v(" "),a("button",{staticClass:"mapping-btn",on:{click:n.save}},[n._v("맵핑하기")]),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:n.colorPickerWindowOpened,expression:"colorPickerWindowOpened"}],staticClass:"color-picker-back"},[a("div",{staticClass:"color-picker-window"},[a("h1",[n._v("색상 선택")]),n._v(" "),a("font-awesome-icon",{attrs:{icon:"times"},on:{click:function(t){n.colorPickerWindowOpened=!1}}}),n._v(" "),a("div",{attrs:{id:"color-picker"}}),n._v(" "),a("button",{staticClass:"apply-color",on:{click:function(t){return n.mapit(n.colorPicker.color.hexString,t)}}},[n._v("적용 하기")])],1)])])])},staticRenderFns:[]}},function(t,e){t.exports="data:image/png;base64,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"},,function(t,e,n){"use strict";function o(t,e,n,a,i,o,r,s){var c=o[0],l=o[1],d=r[0],u=r[1],p=s[0],h=s[1],v=n[0],o=n[1],r=a[0],s=a[1],n=i[0],a=i[1];t.save(),t.beginPath(),t.moveTo(c,l),t.lineTo(d,u),t.lineTo(p,h),t.closePath(),t.clip();i=v*s+o*n+r*a-s*n-o*r-v*a;t.transform((c*s+o*p+d*a-s*p-o*d-c*a)/i,(l*s+o*h+u*a-s*h-o*u-l*a)/i,(v*d+c*n+r*p-d*n-c*r-v*p)/i,(v*u+l*n+r*h-u*n-l*r-v*h)/i,(v*s*p+o*d*n+c*r*a-c*s*n-o*r*p-v*d*a)/i,(v*s*h+o*u*n+l*r*a-l*s*n-o*r*h-v*u*a)/i),t.drawImage(e,0,0),t.restore()}e.a={Warp:function(t,e,n){var a=new OffscreenCanvas(n[2][0],n[2][1]),i=a.getContext("2d");return i.clearRect(0,0,a.width,a.height),o(i,t,e[0],e[2],e[3],n[0],n[2],n[3]),i.translate(-1,1),o(i,t,e[0],e[1],e[2],n[0],n[1],n[2]),a.convertToBlob({type:"image/png"})}}},function(t,e,n){"use strict";e.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("v-ons-page",[t("video",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],ref:"camera",staticClass:"camera-surface",attrs:{autoplay:""}}),e._v(" "),t("div",{attrs:{id:"canvas-wrapper"}},[t("canvas",{ref:"cachedCamera"}),e._v(" "),t("canvas",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],ref:"uiCanvas"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState,expression:"photoState === 'ready'"}],attrs:{id:"screen-guide"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState&&4===e.currentRatioIdx,expression:"photoState === 'ready' && currentRatioIdx === 4"}],staticClass:"free-guide-handle",attrs:{id:"guide-handle-width-1","data-corner":"0"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState&&4===e.currentRatioIdx,expression:"photoState === 'ready' && currentRatioIdx === 4"}],staticClass:"free-guide-handle",attrs:{id:"guide-handle-width-2","data-corner":"1"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState&&4===e.currentRatioIdx,expression:"photoState === 'ready' && currentRatioIdx === 4"}],staticClass:"free-guide-handle",attrs:{id:"guide-handle-height-1","data-corner":"2"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState&&4===e.currentRatioIdx,expression:"photoState === 'ready' && currentRatioIdx === 4"}],staticClass:"free-guide-handle",attrs:{id:"guide-handle-height-2","data-corner":"3"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"0"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"1"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"2"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"photoTaken"===e.photoState,expression:"photoState === 'photoTaken'"}],staticClass:"drag-handle",attrs:{"data-corner":"3"}}),e._v(" "),t("div",{attrs:{id:"detailView"}},[t("canvas",{ref:"detailViewCanvas"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"vectorize"===e.photoState,expression:"photoState === 'vectorize'"}],attrs:{id:"processing"}},[t("div",{attrs:{id:"processingTextBox"}},[t("p",{attrs:{id:"processingText"}},[e._v("맵핑할 공간을 인식하는 중이에요"),t("br"),e._v("잠시만 기다려주세요")]),e._v(" "),t("lottie-view",{staticClass:"lottie-processing",attrs:{path:"static/processing.json"}})],1)]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:"ready"===e.photoState,expression:"photoState === 'ready'"}],staticClass:"circle-btn",attrs:{id:"currentRatioBtn"},on:{click:e.selectRatio}},[e._v("4:3")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.selectRatioMode,expression:"selectRatioMode == true"}],attrs:{id:"ratioMenu"}},[t("button",{staticClass:"circle-btn ratioOption",on:{click:function(t){return e.changeRatio(0)}}},[e._v("4:3")]),e._v(" "),t("button",{staticClass:"circle-btn ratioOption",on:{click:function(t){return e.changeRatio(1)}}},[e._v("16:9")]),e._v(" "),t("button",{staticClass:"circle-btn ratioOption",on:{click:function(t){return e.changeRatio(2)}}},[e._v("16:10")]),e._v(" "),t("button",{staticClass:"circle-btn ratioOption",on:{click:function(t){return e.changeRatio(3)}}},[e._v("21:9")]),e._v(" "),t("button",{staticClass:"circle-btn ratioOption",on:{click:function(t){return e.changeRatio(4)}}},[e._v("FREE")])]),e._v(" "),t("button",{class:["okBtn",{photoTake:"photoTaken"===e.photoState},{vectorize:"vectorize"===e.photoState}],on:{click:e.onClick}},[t("div",{staticClass:"inner-circle"})]),e._v(" "),t("button",{class:["circle-btn",{"retake-photo":"ready"!==e.photoState}],attrs:{id:"back-btn"},on:{click:e.retakePhoto}},[e._v("HOME")])])])},staticRenderFns:[]}},function(t,e,n){"use strict";var a=n(60),i=n(152);i=n(3)(a.a,i.a,!1,function(t){n(151)},"data-v-7348a6ab",null);e.a=i.exports},function(t,e){},function(t,e,n){"use strict";e.a={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-ons-page",[a("div",{attrs:{id:"guide-page"}},[a("div",{staticStyle:{display:"table-row",width:"100%",height:"15vh"}},[a("div",{attrs:{id:"guide-page-title"}},[n._v("도움말")])]),n._v(" "),a("div",{staticStyle:{display:"table-row",height:"85vh"}},[a("div",{attrs:{id:"guide-menu"}},[a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("프로잭션 맵핑이란?")]),n._v(" "),a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("사용 환경")]),n._v(" "),a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("프로젝터 연결")]),n._v(" "),a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("촬영하기")]),n._v(" "),a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("편집하기")]),n._v(" "),a("button",{staticClass:"guide-menu-btn",attrs:{id:""}},[n._v("연결끊기")])]),n._v(" "),a("div",{attrs:{id:"guide-area"}},[a("v-ons-carousel",{attrs:{fullscreen:"",swipeable:"","auto-scroll":"",overscrollable:"",index:n.carouselIndex},on:{"update:index":function(t){n.carouselIndex=t}}},n._l(n.items,function(t,e){return a("v-ons-carousel-item",{style:{backgroundColor:t}},[a("div",{staticStyle:{"text-align":"center","font-size":"30px","margin-top":"20px",color:"#fff"}},[n._v(n._s(e))])])}),1),n._v(" "),a("div",{style:n.dots},n._l(Object.keys(n.items).length,function(e){return a("span",{key:e,staticStyle:{cursor:"pointer"},attrs:{index:e-1},on:{click:function(t){n.carouselIndex=e-1}}},[n._v("\n            "+n._s(n.carouselIndex===e-1?"●":"○")+"\n          ")])}),0)],1)])])])},staticRenderFns:[]}},function(t,e,n){"use strict";var a=n(61),i=n(155);i=n(3)(a.a,i.a,!1,function(t){n(154)},"data-v-93e86170",null);e.a=i.exports},function(t,e){},function(t,e,n){"use strict";e.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("v-ons-page",[t("button",{on:{click:function(t){return e.$emit("replace-page",e.homePage)}}},[e._v("To Be Updated")])])},staticRenderFns:[]}},function(t,e,n){"use strict";e.a={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("v-ons-page",{on:{toggleMenu:function(t){e.menuIsOpen=!e.menuIsOpen}}},[t("div",{attrs:{id:"conn-status"},on:{click:e.showModal}},[t("div",{class:[{"disconn-sign":!e.isConnected,"conn-sign":e.isConnected}],attrs:{id:"conn-status-sign"}}),e._v(" "),t("div",{attrs:{id:"conn-status-txt"}})]),e._v(" "),t("button",{staticClass:"side-btn",attrs:{id:"store"},on:{click:function(t){return e.$emit("replace-page",e.storePage)}}},[e._v("스토어")]),e._v(" "),t("button",{staticClass:"side-btn",attrs:{id:"help"},on:{click:function(t){return e.$emit("replace-page",e.helpPage)}}},[e._v("도움말")]),e._v(" "),t("button",{staticClass:"guide-btn",attrs:{id:"take-photo"},on:{click:function(t){return e.$emit("replace-page",e.canvasPage)}}},[e._v("촬영하기")]),e._v(" "),t("button",{staticClass:"guide-btn",attrs:{id:"goto-edit"},on:{click:function(t){return e.$emit("replace-page",e.editPage)}}},[e._v("편집하기")]),e._v(" "),t("v-ons-modal",{attrs:{visible:e.modalVisible},on:{click:function(t){e.modalVisible=!1}}},[t("div",{staticClass:"conn-setting-popup"},[t("div",{staticClass:"popup-image"}),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected,expression:"isConnected"}],staticClass:"conn-popup-header"},[e._v("\n        프로젝터가 연결 돼 있어요."),t("br"),e._v("\n        연결을 끊을까요?\n      ")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.isConnected,expression:"isConnected"}],staticClass:"conn-popup-paragraph"},[e._v("\n        연결을 끊으면 프로젝터 화면과 연결이 끊어져요.\n      ")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.isConnected,expression:"!isConnected"}],staticClass:"conn-popup-header"},[e._v("\n        연결 프로젝터가 없어요.\n      ")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.isConnected,expression:"!isConnected"}],staticClass:"conn-popup-paragraph"},[e._v("\n        프로젝터를 연결하려면 와이파이를 통해 프로젝터와 모바일을 연결하거나, PC와 프로젝터를 연결한 뒤 PC에서 WARP를 접속해주세요.\n      ")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:!e.isConnected,expression:"!isConnected"}],staticClass:"btns-in-popup",attrs:{id:"detail"},on:{click:e.connectToProjector}},[e._v("자세히")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isConnected,expression:"isConnected"}],staticClass:"btns-in-popup",attrs:{id:"disconnect"},on:{click:e.disconnectToProjector}},[e._v("연결 끊기")]),e._v(" "),t("button",{staticClass:"btns-in-popup",attrs:{id:"exit-popup"},on:{click:function(t){e.modalVisible=!1}}},[e._v("닫기")])])])],1)},staticRenderFns:[]}},function(t,e,n){"use strict";e.a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-ons-navigator",{attrs:{swipeable:"","page-stack":e.pageStack},on:{"push-page":function(t){return e.pageStack.push(t)},"replace-page":function(t){e.pageStack.pop(),e.pageStack.push(t)},"home-page":function(t){return e.goHome()}}})},staticRenderFns:[]}},function(t,e,n){"use strict";e.a={render:function(){var t=this.$createElement,t=this._self._c||t;return this.isLoading?t("splash",{attrs:{isLoading:this.isLoading}}):t("navi-page")},staticRenderFns:[]}}]),[63]);
//# sourceMappingURL=app.4986e646b68ad150fadb.js.map
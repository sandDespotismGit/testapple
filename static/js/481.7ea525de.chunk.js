(self.webpackChunkapplepods_react=self.webpackChunkapplepods_react||[]).push([[481],{4481:function(e,t,r){"use strict";r.r(t);var o=r(7762),n=r(9439),a=r(8870),i=r(9705),_=r(1010),l=r(2791),s=(r(4142),r(1235),r(6497),r(7576),r(184));t.default=function(){(0,i.oc)();var e=(0,l.useState)(["\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","\u0446\u0435\u043d\u0430",["url","url"]]),t=(0,n.Z)(e,2),r=t[0],u=t[1],c=null,d=(0,l.useState)(""),p=(0,n.Z)(d,2),f=p[0],y=p[1],h=(0,l.useState)("\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0435"),P=(0,n.Z)(h,2),v=P[0],E=P[1],b=(0,l.useState)(""),O=(0,n.Z)(b,2),m=O[0],M=O[1],L=(0,l.useState)(""),T=(0,n.Z)(L,2),C=T[0],D=T[1],g=(0,l.useState)(0),I=(0,n.Z)(g,2),R=I[0],w=I[1],k=(0,l.useState)("RUB"),j=(0,n.Z)(k,2),x=(j[0],j[1],(0,l.useState)(null)),A=(0,n.Z)(x,2),U=A[0],B=A[1],W=(0,l.useState)(""),K=(0,n.Z)(W,2),S=K[0],G=K[1],z=(0,l.useState)(["variant","variant","variant"]),H=(0,n.Z)(z,2),Z=H[0];return H[1],(0,l.useEffect)((function(){fetch("https://pop.applepodsblack.ru/api/products?populate=deep").then((function(e){return e.json()})).then((function(e){var t=e.data,r=[],n=[];r[0]=t[window.GlobalProductId-1].attributes.name,r[1]=t[window.GlobalProductId-1].attributes.rub_price,n[0]="https://pop.applepodsblack.ru/"+t[window.GlobalProductId-1].attributes.main_photo.data.attributes.url;var a,_=[],l=(0,o.Z)(t[window.GlobalProductId-1].attributes.colors.data);try{for(l.s();!(a=l.n()).done;){var d=a.value;n.push("https://pop.applepodsblack.ru/"+d.attributes.photo.data[0].attributes.url),_.push(d.attributes.name)}}catch(R){l.e(R)}finally{l.f()}r[2]=n,r[3]=t[window.GlobalProductId-1].attributes.eur_price,r[4]=t[window.GlobalProductId-1].attributes.byn_price;var p=[],f=[];window.GlobalProductCategory=t[window.GlobalProductId-1].attributes.category;for(var h=0;h<n.length;h++)p.push((0,s.jsx)(i.o5,{children:(0,s.jsx)("img",{src:n[h],className:"product_img_carousel"})}));for(var P=function(e){f.push((0,s.jsx)("img",{className:Z[e],src:n[e],onClick:function(){var t;t=e,c.slideTo(t),window.GlobalProductColor=_[e-1]}}))},v=1;v<n.length;v++)P(v);if("headphones"==t[window.GlobalProductId-1].attributes.category){var b,O=[],m=[],L=(0,o.Z)(t[window.GlobalProductId-1].attributes.audio.data);try{for(L.s();!(b=L.n()).done;){var T=b.value;O.push((0,s.jsx)("audio",{controls:!0,src:"https://pop.applepodsblack.ru/"+T.attributes.url}))}}catch(R){L.e(R)}finally{L.f()}var C,g=(0,o.Z)(t[window.GlobalProductId-1].attributes.information.data);try{var I=function(){var e=C.value;m.push((0,s.jsx)(i.o5,{children:(0,s.jsx)("div",{className:"story_block",onClick:function(){B((0,s.jsxs)("div",{id:"story_video",children:[(0,s.jsx)("p",{onClick:function(){return B(null)},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,s.jsx)("video",{src:"https://pop.applepodsblack.ru/"+e.attributes.url,controls:!0})]}))},children:(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:e.attributes.name})})})}))};for(g.s();!(C=g.n()).done;)I()}catch(R){g.e(R)}finally{g.f()}G(O),D(m)}y(f),M(p),console.log(n.length),u(r),w(r[1]),E(t[window.GlobalProductId-1].attributes.info)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.tq,{onSwiper:function(e){console.log(e),c=e},slidesPerView:1,modules:[a.Rv],freeMode:!0,children:m})}),(0,s.jsxs)("div",{id:"main_product_info",children:[(0,s.jsx)("p",{id:"main_info_product_name",children:r[0]}),(0,s.jsx)("div",{className:"select_currency",children:(0,s.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"})}),(0,s.jsxs)("div",{id:"main_info_product_price",children:[(0,s.jsx)("p",{id:"gold_price",children:R}),(0,s.jsx)("div",{id:"main_info_currencylogo",children:(0,s.jsxs)("select",{id:"currency_choose",onChange:function(e){"rub"==e.target.value?w(r[1]):"eur"==e.target.value?w(r[3]):w(r[4])},children:[(0,s.jsx)("option",{value:"rub",children:"RUB"}),(0,s.jsx)("option",{value:"eur",children:"EUR"}),(0,s.jsx)("option",{value:"byn",children:"Br"})]})})]}),(0,s.jsxs)("div",{id:"choose_color",children:[(0,s.jsx)("p",{children:"\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430"}),(0,s.jsx)("div",{className:"color_variants",children:f})]}),U,(0,s.jsx)("div",{id:"info_dropdown",children:(0,s.jsx)(_.Z,{content:v,header:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),"accessories"==window.GlobalProductCategory?(0,s.jsx)("div",{}):(0,s.jsxs)("div",{id:"stories",children:[(0,s.jsx)("p",{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,s.jsx)(i.tq,{slidesPerView:3,children:C})]}),(0,s.jsx)("div",{id:"audio_ex",children:S})]})]})}},888:function(e,t,r){"use strict";var o=r(9047);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,i){if(i!==o){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4142:function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=__webpack_require__(2007)},function(e,t){e.exports=__webpack_require__(2791)},function(module,__nested_webpack_exports__,__nested_webpack_require_1455__){"use strict";__nested_webpack_require_1455__.r(__nested_webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_1455__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_1455__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_1455__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_1455__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(r))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",(function(t){var r,o;return null===(r=(o=e.props).onError)||void 0===r?void 0:r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlay",(function(t){var r,o;return null===(r=(o=e.props).onCanPlay)||void 0===r?void 0:r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",(function(t){var r,o;return null===(r=(o=e.props).onCanPlayThrough)||void 0===r?void 0:r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onPlay",(function(t){var r,o;e.setListenTrack(),null===(r=(o=e.props).onPlay)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onAbort",(function(t){var r,o;e.clearListenTrack(),null===(r=(o=e.props).onAbort)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onEnded",(function(t){var r,o;e.clearListenTrack(),null===(r=(o=e.props).onEnded)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onPause",(function(t){var r,o;e.clearListenTrack(),null===(r=(o=e.props).onPause)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onSeeked",(function(t){var r,o;null===(r=(o=e.props).onSeeked)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",(function(t){var r,o;null===(r=(o=e.props).onLoadedMetadata)||void 0===r||r.call(o,t)})),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",(function(t){var r,o;null===(r=(o=e.props).onVolumeChanged)||void 0===r||r.call(o,t)})),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval((function(){var t,r;e.audioEl.current&&(null===(t=(r=e.props).onListen)||void 0===t||t.call(r,e.audioEl.current.currentTime))}),t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;null!==t&&"number"==typeof e&&e!==(null==t?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,o={};return this.props.controlsList&&(o.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:r},o),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__nested_webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__nested_webpack_require_1455__(3)(module))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}])}}]);
//# sourceMappingURL=481.7ea525de.chunk.js.map
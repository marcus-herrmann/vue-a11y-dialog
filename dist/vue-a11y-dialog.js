(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],b):(a=a||self,b(a.VueA11yDialog={},a.vue))})(this,function(a,b){'use strict';var l=Math.round;function c(a){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},c(a)}function d(a){return e(a)||f(a)||g()}function e(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function f(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(a){return Array.isArray(a)||"object"===c(a)?Object.freeze(a):a}function i(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return a.reduce(function(a,c){var d=c.passengers[0],e="function"==typeof d?d(b):c.passengers;return a.concat(e)},[])}function j(a,c){return a.map(function(a,b){return[b,a]}).sort(function(d,a){return c(d[1],a[1])||d[0]-a[0]}).map(function(a){return a[1]})}function k(a,b){return b.reduce(function(b,c){return a.hasOwnProperty(c)&&(b[c]=a[c]),b},{})}b=b&&b.hasOwnProperty("default")?b["default"]:b;var m=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){(function(){function b(a,b){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=a,this.dialog=a.querySelector("dialog, [role=\"dialog\"], [role=\"alertdialog\"]"),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(b)}function c(a){return Array.prototype.slice.call(a)}function d(a,b){return c((b||document).querySelectorAll(a))}function e(a){return NodeList.prototype.isPrototypeOf(a)?c(a):Element.prototype.isPrototypeOf(a)?[a]:"string"==typeof a?d(a):void 0}function f(a){var b=g(a),c=a.querySelector("[autofocus]")||b[0];c&&c.focus()}function g(a){return d(k.join(","),a).filter(function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)})}function h(a,b){var c=g(a),d=c.indexOf(document.activeElement);b.shiftKey&&0===d?(c[c.length-1].focus(),b.preventDefault()):!b.shiftKey&&d===c.length-1&&(c[0].focus(),b.preventDefault())}function i(a){var b=c(a.parentNode.childNodes),d=b.filter(function(a){return 1===a.nodeType});return d.splice(d.indexOf(a),1),d}var j,k=["a[href]:not([tabindex^=\"-\"]):not([inert])","area[href]:not([tabindex^=\"-\"]):not([inert])","input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])","iframe:not([tabindex^=\"-\"]):not([inert])","audio:not([tabindex^=\"-\"]):not([inert])","video:not([tabindex^=\"-\"]):not([inert])","[contenteditable]:not([tabindex^=\"-\"]):not([inert])","[tabindex]:not([tabindex^=\"-\"]):not([inert])"];b.prototype.create=function(a){return this._targets=this._targets||e(a)||i(this.container),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=d("[data-a11y-dialog-show=\""+this.container.id+"\"]"),this._openers.forEach(function(a){a.addEventListener("click",this._show)}.bind(this)),this._closers=d("[data-a11y-dialog-hide]",this.container).concat(d("[data-a11y-dialog-hide=\""+this.container.id+"\"]")),this._closers.forEach(function(a){a.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},b.prototype.show=function(a){return this.shown?this:(this.shown=!0,j=document.activeElement,this.useDialog?this.dialog.showModal(a instanceof Event?void 0:a):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(a){a.setAttribute("aria-hidden","true")})),f(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",a),this)},b.prototype.hide=function(a){return this.shown?(this.shown=!1,this.useDialog?this.dialog.close(a instanceof Event?void 0:a):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(a){a.removeAttribute("aria-hidden")})),j&&j.focus&&j.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",a),this):this},b.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(a){a.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(a){a.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},b.prototype.on=function(a,b){return"undefined"==typeof this._listeners[a]&&(this._listeners[a]=[]),this._listeners[a].push(b),this},b.prototype.off=function(a,b){var c=this._listeners[a].indexOf(b);return-1<c&&this._listeners[a].splice(c,1),this},b.prototype._fire=function(a,b){var c=this._listeners[a]||[];c.forEach(function(a){a(this.container,b)}.bind(this))},b.prototype._bindKeypress=function(a){this.shown&&a.which===27&&"alertdialog"!==this.role&&(a.preventDefault(),this.hide(a)),this.shown&&a.which===9&&h(this.dialog,a)},b.prototype._maintainFocus=function(a){this.shown&&!this.container.contains(a.target)&&f(this.dialog)},a.exports=b})()}),n="undefined"!=typeof window,o={},p={},q={},r=b.extend({data:function(){return{transports:o,targets:p,sources:q,trackInstances:n}},methods:{open:function(a){if(n){var c=a.to,d=a.from,e=a.passengers,f=a.order,g=void 0===f?1/0:f;if(c&&d&&e){var i={to:c,from:d,passengers:h(e),order:g},k=Object.keys(this.transports);-1===k.indexOf(c)&&b.set(this.transports,c,[]);var l=this.$_getTransportIndex(i),m=this.transports[c].slice(0);-1===l?m.push(i):m[l]=i,this.transports[c]=j(m,function(c,a){return c.order-a.order})}}},close:function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],c=a.to,d=a.from;if(c&&(d||!1!==b)&&this.transports[c])if(b)this.transports[c]=[];else{var e=this.$_getTransportIndex(a);if(0<=e){var f=this.transports[c].slice(0);f.splice(e,1),this.transports[c]=f}}},registerTarget:function(a,b,c){n&&(this.trackInstances&&!c&&this.targets[a]&&console.warn("[portal-vue]: Target ".concat(a," already exists")),this.$set(this.targets,a,Object.freeze([b])))},unregisterTarget:function(a){this.$delete(this.targets,a)},registerSource:function(a,b,c){n&&(this.trackInstances&&!c&&this.sources[a]&&console.warn("[portal-vue]: source ".concat(a," already exists")),this.$set(this.sources,a,Object.freeze([b])))},unregisterSource:function(a){this.$delete(this.sources,a)},hasTarget:function(a){return!!(this.targets[a]&&this.targets[a][0])},hasSource:function(a){return!!(this.sources[a]&&this.sources[a][0])},hasContentFor:function(a){return!!this.transports[a]&&!!this.transports[a].length},$_getTransportIndex:function(a){var b=a.to,c=a.from;for(var d in this.transports[b])if(this.transports[b][d].from===c)return+d;return-1}}}),s=new r(o),t=1,u=b.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return t++ +""}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return l(1e7*Math.random())+""}}},created:function(){var a=this;this.$nextTick(function(){s.registerSource(a.name,a)})},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){s.unregisterSource(this.name),this.clear()},watch:{to:function(a,b){b&&b!==a&&this.clear(b),this.sendUpdate()}},methods:{clear:function(a){var b={from:this.name,to:a||this.to};s.close(b)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(a){return"function"==typeof a?a(this.slotProps):a},sendUpdate:function(){var a=this.normalizeSlots();if(a){var b={from:this.name,to:this.to,passengers:d(a),order:this.order};s.open(b)}else this.clear()}},render:function(a){var b=this.$slots.default||this.$scopedSlots.default||[],c=this.tag;return b&&this.disabled?1>=b.length&&this.slim?this.normalizeOwnChildren(b)[0]:a(c,[this.normalizeOwnChildren(b)]):this.slim?a():a(c,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),v=b.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:s.transports,firstRender:!0}},created:function(){var a=this;this.$nextTick(function(){s.registerTarget(a.name,a)})},watch:{ownTransports:function(){this.$emit("change",0<this.children().length)},name:function(a,b){s.unregisterTarget(b),s.registerTarget(a,this)}},mounted:function(){var a=this;this.transition&&this.$nextTick(function(){a.firstRender=!1})},beforeDestroy:function(){s.unregisterTarget(this.name)},computed:{ownTransports:function(){var a=this.transports[this.name]||[];return this.multiple?a:0===a.length?[]:[a[a.length-1]]},passengers:function(){return i(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0===this.passengers.length?this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]:this.passengers},noWrapper:function a(){var a=this.slim&&!this.transition;return a&&1<this.children().length&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),a}},render:function(a){var b=this.noWrapper(),c=this.children(),d=this.transition||this.tag;return b?c[0]:this.slim&&!d?a():a(d,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},c)}}),w=0,x=["disabled","name","order","slim","slotProps","tag","to"],y=["multiple","transition"],z=b.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+(w++ +"")}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return l(1e7*Math.random())+""}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!=typeof document){var a=document.querySelector(this.mountTo);if(!a)return void console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"));var b=this.$props;if(s.targets[b.name])return void(b.bail?console.warn("[portal-vue]: Target ".concat(b.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=s.targets[b.name]);var c=b.append;if(c){var d="string"==typeof c?c:"DIV",e=document.createElement(d);a.appendChild(e),a=e}var f=k(this.$props,y);f.slim=this.targetSlim,f.tag=this.targetTag,f.slotProps=this.targetSlotProps,f.name=this.to,this.portalTarget=new v({el:a,parent:this.$parent||this,propsData:f})}},beforeDestroy:function(){var a=this.portalTarget;if(this.append){var b=a.$el;b.parentNode.removeChild(b)}a.$destroy()},render:function(a){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),a();if(!this.$scopedSlots.manual){var b=k(this.$props,x);return a(u,{props:b,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var c=this.$scopedSlots.manual({to:this.to});return Array.isArray(c)&&(c=c[0]),c?c:a()}}),A={name:"VueA11yDialog",props:{id:{type:String,required:!0},appRoot:{type:[String,Array],required:!0},dialogRoot:{type:String,required:!0},classNames:{type:Object,default(){return{}}},titleId:{type:String},closeButtonLabel:{type:String,default:"Close this dialog window"},disableNative:{type:Boolean,default:!1},role:{type:String,default:"dialog"}},components:{MountingPortal:z},computed:{fullTitleId(){return this.titleId||this.id+"-title"},dialogElement(){return this.disableNative?"div":"dialog"},roleAttribute(){return["dialog","alertdialog"].includes(this.role)?this.role:"dialog"},portalTarget(){return this.dialogRoot||this.appRoot}},data(){return{dialog:null}},methods:{close(){this.dialog.hide()}},mounted(){this.$nextTick(function(){this.dialog=new m(this.$refs.rootElement,this.appRoot),this.$emit("dialog-ref",this.dialog)}.bind(this))},destroyed(){this.dialog&&this.dialog.destroy(),this.$emit("dialog-ref")}};const B=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);const k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);let l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(a){b.call(this,j(a,this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){const a=k.render;k.render=function(b,c){return l.call(c),a(b,c)}}else{const a=k.beforeCreate;k.beforeCreate=a?[].concat(a,l):[l]}return c}({render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("mounting-portal",{attrs:{append:"","mount-to":a.portalTarget}},[c("div",{ref:"rootElement",class:a.classNames.base,attrs:{id:a.id}},[c("div",{class:a.classNames.overlay,attrs:{"data-a11y-dialog-hide":"",tabIndex:"-1"},on:{click:function(){"alertdialog"===a.role?void 0:a.close}}}),a._v(" "),c(a.dialogElement,{tag:"component",class:a.classNames.element,attrs:{role:a.roleAttribute,"aria-labelledby":a.fullTitleId}},[c("div",{class:a.classNames.document,attrs:{role:"document"}},[c("button",{class:a.classNames.closeButton,attrs:{"data-a11y-dialog-hide":"",type:"button","aria-label":a.closeButtonLabel},on:{click:a.close}},[a._t("closeButtonContent",[a._v("\n            "+a._s("\xD7")+"\n          ")])],2),a._v(" "),c("h1",{class:a.classNames.title,attrs:{id:a.fullTitleId}},[a._t("title")],2),a._v(" "),a._t("default")],2)])],1)])},staticRenderFns:[]},void 0,A,void 0,!1,void 0,!1,void 0,void 0,void 0);var C={install(a){a.component("a11y-dialog",B)}};a.A11yDialog=B,a.default=C,Object.defineProperty(a,"__esModule",{value:!0})});

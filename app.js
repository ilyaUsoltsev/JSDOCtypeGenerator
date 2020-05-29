!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return g}));class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:s,options:r}=n;return r.delay?this.delay(t,s,e,r):s.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let r;const o="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;o.app&&o._AppRunVersions?r=o.app:(r=new s,o.app=r,o._AppRunVersions="AppRun-2");var i=r;function a(t,e,n=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>a(t,e,n++));let r=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:s,props:r,children:o}=t;let a="_"+n,c=r&&r.id;c?a=c:c=`_${n}${Date.now()}`,e.i||(e.i={});let l=e.i[a];l&&l instanceof s||(l=e.i[a]=new s(Object.assign(Object.assign({},r),{children:o})).mount(c));let u=l.state;if(l.mounted){const t=l.mounted(r,o,u);void 0!==t&&(u=l.state=t)}if(u instanceof Promise){const t=t=>{l.element=t,l.setState(u)};return i.createElement("section",Object.assign({},r,{ref:e=>t(e),_component:l}))}{const t=l._view(u,r),e=e=>{l.element=e,l.renderState(u,t)};return i.createElement("section",Object.assign({},r,{ref:t=>e(t),_component:l}),t)}}(t,e,n)),r&&Array.isArray(r.children)){const t=null===(s=r.props)||void 0===s?void 0:s._component;if(t){let e=0;r.children=r.children.map(n=>a(n,t,e++))}else r.children=r.children.map(t=>a(t,e,n++))}return r}function c(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}const l=new WeakMap;function u(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=""+(e.tag||"");return n.toUpperCase()===s.toUpperCase()}(t,e)?(!(2&e._op)&&h(t,e.children,n),!(1&e._op)&&f(t,e.props,n)):t.parentNode.replaceChild(p(e,n),t))}function h(t,e,n){var s;const r=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,o=(null==e?void 0:e.length)||0,i=Math.min(r,o);for(let s=0;s<i;s++){const r=e[s];if(3===r._op)continue;const o=t.childNodes[s];if("string"==typeof r)o.textContent!==r&&(3===o.nodeType?o.nodeValue=r:t.replaceChild(d(r),o));else if(r instanceof HTMLElement||r instanceof SVGElement)t.insertBefore(r,o);else{const e=r.props&&r.props.key;if(e)if(o.key===e)u(t.childNodes[s],r,n);else{const i=l[e];if(i){const e=i.nextSibling;t.insertBefore(i,o),e?t.insertBefore(o,e):t.appendChild(o)}u(t.childNodes[s],r,n)}else u(t.childNodes[s],r,n)}}let a=t.childNodes.length;for(;a>i;)t.removeChild(t.lastChild),a--;if(o>i){const s=document.createDocumentFragment();for(let t=i;t<e.length;t++)s.appendChild(p(e[t],n));t.appendChild(s)}}function d(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return d(t);if(!t.tag||"function"==typeof t.tag)return d(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function f(t,e,n){const s=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(s,e||{}),t._props=e;for(const s in e){const r=e[s];if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==r&&(r||""===r?t.dataset[e]=r:delete t.dataset[e])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof r)t.style.cssText=r;else for(const e in r)t.style[e]!==r[e]&&(t.style[e]=r[e]);else if(s.startsWith("xlink")){const e=s.replace("xlink","").toLowerCase();null==r||!1===r?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,r)}else s.startsWith("on")?r&&"function"!=typeof r?"string"==typeof r&&(r?t.setAttribute(s,r):t.removeAttribute(s)):t[s]=r:/^id$|^class$|^readonly$|^contenteditable$|^role|-/g.test(s)||n?t.getAttribute(s)!==r&&(r?t.setAttribute(s,r):t.removeAttribute(s)):t[s]!==r&&(t[s]=r);"key"===s&&r&&(l[r]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}const m=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return e.observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),(n.observedAttributes||[]).forEach(t=>{void 0!==this[t]&&(s[t]=this[t]),Object.defineProperty(this,t,{get:()=>s[t],set(e){this.attributeChangedCallback(t,s[t],e)},configurable:!0,enumerable:!0})});const r=this.children?Array.from(this.children):[];if(r.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},s),{children:r})).mount(this._shadowRoot,n),this._component._props=s,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(s,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(t,n,s){var r;null===(r=this._component)||void 0===r||r.run("attributeChanged",t,n,s),this._component&&(this._component._props[t]=s),s!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{var t;null===(t=this._component)||void 0===t||t.run(".")})}};var b=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,m(e,n))};const y={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function g(t,e={}){return function(n,s){const r=t?t.toString():s;y.defineMetadata("apprun-update:"+r,{name:r,key:s,options:e},n)}}const v=(t,e)=>(e?t.state[e]:t.state)||"",_=(t,e,n)=>{if(e){const s=t.state||{};s[e]=n,t.setState(s)}else t.setState(n)},w={};i.on("get-components",t=>t.components=w);const E=t=>t;class j{constructor(t,e,n,r){this.state=t,this.view=e,this.update=n,this.options=r,this._app=new s,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){i.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=i.createElement;i.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[r,...o]=n;"string"==typeof r?e[t]=t=>s.run(r,...o,t):"function"==typeof r&&(e[t]=t=>s.setState(r(s.state,...o,t)))}}else if("$bind"===t){const r=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(r){case"checkbox":e.checked=v(s,o),e.onclick=t=>_(s,o||t.target.name,t.target.checked);break;case"radio":e.checked=v(s,o)===e.value,e.onclick=t=>_(s,o||t.target.name,t.target.value);break;case"number":case"range":e.value=v(s,o),e.oninput=t=>_(s,o||t.target.name,Number(t.target.value));break;default:e.value=v(s,o),e.oninput=t=>_(s,o||t.target.name,t.target.value)}else"select"===n?(e.value=v(s,o),e.onchange=t=>{t.target.multiple||_(s,o||t.target.name,t.target.value)}):"option"===n?(e.selected=v(s,o),e.onclick=t=>_(s,o||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=v(s,o),e.oninput=t=>_(s,o||t.target.name,t.target.value))}else i.run("$",{key:t,tag:n,props:e,component:s})})(n,e,t,this),delete e[n])}),n(t,e,...s));const s=e?this.view(t,e):this.view(t);return i.createElement=n,s}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(i.debug&&i.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}e||this.render(s,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=E),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),i.debug){const e="string"==typeof t?t:t.id;w[e]=w[e]||[],w[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...s)=>{const r=e(this.state,...s);i.debug&&i.run("debug",{component:this,event:t,e:s,state:this.state,newState:r,options:n}),this.setState(r,n)},n))}add_actions(){const t=this.update||{};y.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=y.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,r]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,r])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=E),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?i.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?i.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?i.off(e,n):this._app.off(e,n)})}}j.t=!0;const O=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");i.run(e,...n)||i.run("///",e,...n),i.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");i.run("/"+n,...s)||i.run("///","/"+n,...s),i.run("//","/"+n,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.h=i.createElement=function(t,e,...n){const s=c(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error("Unknown tag in vdom "+t)},i.render=function(t,e,n){!function(t,e,n={}){if(null==e||!1===e)return;e=a(e,n);const s="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?h(t,e,s):h(t,[e],s))}(t,e,n)},i.Fragment=function(t,...e){return c(e)},i.webComponent=b,i.start=(t,e,n,s,r)=>{const o=Object.assign(Object.assign({},r),{render:!0,global_event:!0}),i=new j(e,n,s);return r&&r.rendered&&(i.rendered=r.rendered),i.mount(t,o),i};const A=t=>{};i.on("$",A),i.on("debug",t=>A),i.on("//",A),i.on("#",A),i.route=O,i.on("route",t=>i.route&&i.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{i.route===O&&(window.onpopstate=()=>O(location.hash),O(location.hash))}),"object"==typeof window&&(window.Component=j,window.React=i,window.on=g,window.customElement=function(t,e){return function(n){return b(t,n,e),n}}),e.c=i}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var s=n(0);function r(t){return(t=String(t))[0].toUpperCase()+t.slice(1)}var o=function(t,e,n){let s={};const o=n?e:"";!function t(e,n){s[n]=[],s[n].push("{Object} "+r(n));for(let i of Object.keys(e))"number"==typeof e[i]?s[n].push("{number} "+i):null===e[i]?s[n].push("{null} "+i):"boolean"==typeof e[i]?s[n].push("{boolean} "+i):"string"==typeof e[i]?s[n].push("{string} "+i):"object"!=typeof e[i]||Array.isArray(e[i])?"object"==typeof e[i]&&Array.isArray(e[i])?"object"==typeof e[i][0]&&null!==e[i][0]?(s[n].push(`{${o+r(i)}[]} ${i}`),t(e[i][0],o+r(i))):s[n].push(`{${typeof i}[]} ${i}`):"function"==typeof e[i]?s[n].push("{Function} "+i):s[n].push("{***UNKNOWN***} "+i):(s[n].push(`{${o+r(i)}} ${i}`),t(e[i],o+r(i)));return s}(t,e);let i="";for(let t of Object.keys(s))i+="/**\n",s[t].forEach((t,e)=>{i=0===e?i+" * @typedef "+t+"\n":i+" * @property "+t+"\n"}),i+=" */\n";return i},i=function(t,e,n,s){var r,o=arguments.length,i=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(o<3?r(i):o>3?r(e,n,i):r(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i};var a=(()=>{class t extends s.a{constructor(){super(...arguments),this.state={input:"",result:""},this.view=t=>s.b.createElement("div",{style:{width:"100vw"}},s.b.createElement("h1",null,"Paste JSON to get JSDOC types"),s.b.createElement("div",{className:"row"},s.b.createElement("div",{className:"col-4"},s.b.createElement("form",{onsubmit:t=>this.run("process",t)},s.b.createElement("label",{htmlFor:"json"},"Your object"),s.b.createElement("textarea",{style:{width:"100%"},name:"json",id:"",placeholder:"paste your object in JSON format here...",rows:"20"}),s.b.createElement("label",{htmlFor:"typeName"},"Type Name"),s.b.createElement("input",{className:"form-control mb-3",type:"text",placeholder:"e.g. MyType",name:"typeName"}),s.b.createElement("input",{type:"checkbox",name:"prefix",value:"cream"}),"Prefix nested objects with parent type name?",s.b.createElement("br",null),s.b.createElement("button",{className:"btn btn-primary float-right",type:"submit"},"Run"))),s.b.createElement("div",{className:"col-4"},t.result&&s.b.createElement("div",null,s.b.createElement("label",{htmlFor:"result"},"Result"),s.b.createElement("textarea",{style:{width:"100%"},name:"result",id:"",rows:"20",value:t.result}))))),this.processInput=(t,e)=>{e.preventDefault();try{const n=e.target.typeName.value.trim()||"MyNewType",s=e.target.prefix.checked,r=JSON.parse(e.target.json.value);return"object"!=typeof r||0==r?Object.assign(Object.assign({},t),{result:"Provide valid object in JSON format"}):Object.assign(Object.assign({},t),{result:o(r,n,s)})}catch(e){return Object.assign(Object.assign({},t),{result:"Provide valid object in JSON format"})}}}}return i([Object(s.d)("process")],t.prototype,"processInput",void 0),t})();class c extends s.a{constructor(){super(...arguments),this.state="About",this.view=t=>s.b.createElement("div",null,s.b.createElement("h1",null,t),s.b.createElement("p",null,"This application is built with"," ",s.b.createElement("a",{href:"https://apprun.js.org/",target:"_blank"},"AppRun")))}}class l extends s.a{constructor(){super(...arguments),this.state="Contact",this.view=t=>s.b.createElement("div",null,s.b.createElement("h1",null,t))}}s.c.on("//",t=>{const e=document.querySelectorAll(".navbar-nav li");for(let t=0;t<e.length;++t)e[t].classList.remove("active");const n=document.querySelector(`[href='${t}']`);n&&n.parentElement.classList.add("active")});s.c.render(document.body,s.c.createElement(()=>s.c.createElement("div",{class:"container"},s.c.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},s.c.createElement("a",{class:"navbar-brand",href:"#"},"Project Name"),s.c.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.c.createElement("span",{class:"navbar-toggler-icon"})),s.c.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},s.c.createElement("ul",{class:"navbar-nav mr-auto"},s.c.createElement("li",{class:"nav-item active"},s.c.createElement("a",{class:"nav-link",href:"#Home"},"Home",s.c.createElement("span",{class:"sr-only"},"(current)"))),s.c.createElement("li",{class:"nav-item"},s.c.createElement("a",{class:"nav-link",href:"#About"},"About")),s.c.createElement("li",{class:"nav-item"},s.c.createElement("a",{class:"nav-link",href:"#Contact"},"Contact"))))),s.c.createElement("div",{class:"container",id:"my-app"})),null));(new a).start("my-app",{route:"#, #Home"}),(new c).mount("my-app",{route:"#About"}),(new l).mount("my-app",{route:"#Contact"})}]);
//# sourceMappingURL=app.js.map
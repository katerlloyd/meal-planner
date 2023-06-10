/*! For license information please see vendors.react-router.a890be06.js.LICENSE.txt */
"use strict";(self.webpackChunkmeal_planner=self.webpackChunkmeal_planner||[]).push([[616],{250:function(e,t,n){var r;n.d(t,{AW:function(){return L},F0:function(){return N},TH:function(){return y},Us:function(){return f},WU:function(){return J},Z5:function(){return M},j3:function(){return j},oQ:function(){return x},s0:function(){return R}});var o=n(599),a=n(294);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const l="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},{useState:i,useEffect:s,useLayoutEffect:c,useDebugValue:p}=r||(r=n.t(a,2));function h(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!l(n,e)}catch(r){return!0}}"undefined"===typeof window||"undefined"===typeof window.document||window.document.createElement,(r||(r=n.t(a,2))).useSyncExternalStore;const d=a.createContext(null);const m=a.createContext(null);const f=a.createContext(null);const v=a.createContext(null);const g=a.createContext({outlet:null,matches:[]});const C=a.createContext(null);function x(e,t){let{relative:n}=void 0===t?{}:t;E()||(0,o.J0)(!1);let{basename:r,navigator:u}=a.useContext(f),{hash:l,pathname:i,search:s}=J(e,{relative:n}),c=i;return"/"!==r&&(c="/"===i?r:(0,o.RQ)([r,i])),u.createHref({pathname:c,search:s,hash:l})}function E(){return null!=a.useContext(v)}function y(){return E()||(0,o.J0)(!1),a.useContext(v).location}function R(){E()||(0,o.J0)(!1);let{basename:e,navigator:t}=a.useContext(f),{matches:n}=a.useContext(g),{pathname:r}=y(),u=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase))),l=a.useRef(!1);return a.useEffect((()=>{l.current=!0})),a.useCallback((function(n,a){if(void 0===a&&(a={}),!l.current)return;if("number"===typeof n)return void t.go(n);let i=(0,o.pC)(n,JSON.parse(u),r,"path"===a.relative);"/"!==e&&(i.pathname="/"===i.pathname?e:(0,o.RQ)([e,i.pathname])),(a.replace?t.replace:t.push)(i,a.state,a)}),[e,t,u,r])}const b=a.createContext(null);function J(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=a.useContext(g),{pathname:u}=y(),l=JSON.stringify((0,o.Zq)(r).map((e=>e.pathnameBase)));return a.useMemo((()=>(0,o.pC)(e,JSON.parse(l),u,"path"===n)),[e,l,u,n])}function U(){let e=function(){var e;let t=a.useContext(C),n=B(w.UseRouteError),r=D(w.UseRouteError);if(t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:r};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),n?a.createElement("pre",{style:u},n):null,null)}class P extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(g.Provider,{value:this.props.routeContext},a.createElement(C.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S(e){let{routeContext:t,match:n,children:r}=e,o=a.useContext(d);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),a.createElement(g.Provider,{value:t},r)}function O(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,u=null==n?void 0:n.errors;if(null!=u){let e=r.findIndex((e=>e.route.id&&(null==u?void 0:u[e.route.id])));e>=0||(0,o.J0)(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,o,l)=>{let i=o.route.id?null==u?void 0:u[o.route.id]:null,s=n?o.route.errorElement||a.createElement(U,null):null,c=t.concat(r.slice(0,l+1)),p=()=>a.createElement(S,{match:o,routeContext:{outlet:e,matches:c}},i?s:void 0!==o.route.element?o.route.element:e);return n&&(o.route.errorElement||0===l)?a.createElement(P,{location:n.location,component:s,error:i,children:p(),routeContext:{outlet:null,matches:c}}):p()}),null)}var k,w;function B(e){let t=a.useContext(m);return t||(0,o.J0)(!1),t}function D(e){let t=function(e){let t=a.useContext(g);return t||(0,o.J0)(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||(0,o.J0)(!1),n.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(k||(k={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(w||(w={}));function j(e){return function(e){let t=a.useContext(g).outlet;return t?a.createElement(b.Provider,{value:e},t):t}(e.context)}function L(e){(0,o.J0)(!1)}function N(e){let{basename:t="/",children:n=null,location:r,navigationType:u=o.aU.Pop,navigator:l,static:i=!1}=e;E()&&(0,o.J0)(!1);let s=t.replace(/^\/*/,"/"),c=a.useMemo((()=>({basename:s,navigator:l,static:i})),[s,l,i]);"string"===typeof r&&(r=(0,o.cP)(r));let{pathname:p="/",search:h="",hash:d="",state:m=null,key:g="default"}=r,C=a.useMemo((()=>{let e=(0,o.Zn)(p,s);return null==e?null:{pathname:e,search:h,hash:d,state:m,key:g}}),[s,p,h,d,m,g]);return null==C?null:a.createElement(f.Provider,{value:c},a.createElement(v.Provider,{children:n,value:{location:C,navigationType:u}}))}function M(e){let{children:t,location:n}=e,r=a.useContext(d);return function(e,t){E()||(0,o.J0)(!1);let{navigator:n}=a.useContext(f),r=a.useContext(m),{matches:l}=a.useContext(g),i=l[l.length-1],s=i?i.params:{},c=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let p,h=y();if(t){var d;let e="string"===typeof t?(0,o.cP)(t):t;"/"===c||(null==(d=e.pathname)?void 0:d.startsWith(c))||(0,o.J0)(!1),p=e}else p=h;let C=p.pathname||"/",x="/"===c?C:C.slice(c.length)||"/",R=(0,o.fp)(e,{pathname:x}),b=O(R&&R.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:(0,o.RQ)([c,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:(0,o.RQ)([c,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r||void 0);return t&&b?a.createElement(v.Provider,{value:{location:u({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:o.aU.Pop}},b):b}(r&&!t?r.router.routes:Q(t),n)}var F;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(F||(F={}));new Promise((()=>{}));a.Component;function Q(e,t){void 0===t&&(t=[]);let n=[];return a.Children.forEach(e,((e,r)=>{if(!a.isValidElement(e))return;if(e.type===a.Fragment)return void n.push.apply(n,Q(e.props.children,t));e.type!==L&&(0,o.J0)(!1),e.props.index&&e.props.children&&(0,o.J0)(!1);let u=[...t,r],l={id:e.props.id||u.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(l.children=Q(e.props.children,u)),n.push(l)})),n}}}]);
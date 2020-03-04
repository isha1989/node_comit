/*! For license information please see ad3790ce.f24e4be4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{355:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(458),r(457)),l={},u={id:"exercises/js/ex_154",title:"ex_154",description:"# Exercise 154",source:"@site/../docs/exercises/js/ex_154.md",permalink:"/node_comit/docs/exercises/js/ex_154",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_154.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_153",permalink:"/node_comit/docs/exercises/js/ex_153"},next:{title:"ex_155",permalink:"/node_comit/docs/exercises/js/ex_155"}},c=[{value:"Methods",id:"methods",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Play Time!!!",id:"play-time",children:[]}],i={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-154"},"Exercise 154"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new index154.js"),Object(a.b)("li",{parentName:"ul"},"Define a player variable and assign a literal object with the following properties and methods:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"property: name, value: null"),Object(a.b)("li",{parentName:"ul"},"property: energy, value: 100"),Object(a.b)("li",{parentName:"ul"},"property: lives, value: 3"),Object(a.b)("li",{parentName:"ul"},"method: loseEnergy"),Object(a.b)("li",{parentName:"ul"},"method: recoverEnergy"),Object(a.b)("li",{parentName:"ul"},"method: loseLife"),Object(a.b)("li",{parentName:"ul"},"method: recoverLife")))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value"),Object(a.b)("li",{parentName:"ul"},"The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value"),Object(a.b)("li",{parentName:"ul"},"The loseLife doesn't accept parameters and just subtract one player life every time you call it"),Object(a.b)("li",{parentName:"ul"},"The recoverLife doesn't accept parameters and just adds one player life every time you call it")),Object(a.b)("h2",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The player energy can't be negative"),Object(a.b)("li",{parentName:"ul"},"The player energy can't be more than 100"),Object(a.b)("li",{parentName:"ul"},"The player lives can't be bigger thant 99"),Object(a.b)("li",{parentName:"ul"},"If the player energy is equal or lees than 0 then the player will lose a life")),Object(a.b)("h2",{id:"play-time"},"Play Time!!!"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Set the player name"),Object(a.b)("li",{parentName:"ol"},"Player lose a life"),Object(a.b)("li",{parentName:"ol"},"Player lose 10 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose 5 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose 15 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose 20 energy value"),Object(a.b)("li",{parentName:"ol"},"Player earn 10 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose 30 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose 40 energy value"),Object(a.b)("li",{parentName:"ol"},"Player lose a life"),Object(a.b)("li",{parentName:"ol"},"Player wins a life"),Object(a.b)("li",{parentName:"ol"},"Player wins a life")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Simulate each game play using the players object methods"),Object(a.b)("li",{parentName:"ul"},"Show the following output after doing all the object methods calls")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"The %player name% has %energy% energy % and  %lifes% lifes\n")))}s.isMDXComponent=!0},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=s(r),y=n,b=f["".concat(l,".").concat(y)]||f[y]||p[y]||a;return r?o.a.createElement(b,u({ref:t},i,{components:r})):o.a.createElement(b,u({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},458:function(e,t,r){"use strict";e.exports=r(459)},459:function(e,t,r){"use strict";var n=r(460),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function w(){}function x(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw j(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=g.prototype;var P=x.prototype=new w;P.constructor=x,n(P,g.prototype),P.isPureReactComponent=!0;var S={current:null},_={suspense:null},N={current:null},E=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},l=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(l=""+t.key),t)E.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var i=Array(c),s=0;s<c;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,R=[];function A(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function L(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case l:c=!0}}if(c)return n(o,t,""===r?"."+M(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var i=0;i<t.length;i++){var s=r+M(u=t[i],i);c+=e(u,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),i=0;!(u=t.next()).done;)c+=e(u=u.value,s=r+M(u,i++),n,o);else if("object"===u)throw n=""+t,j(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace($,"$&/")+"/"),L(e,I,t=A(t,a,n,o)),D(t)}function F(){var e=S.current;if(null===e)throw j(Error(321));return e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;L(e,U,t=A(null,null,t,r)),D(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw j(Error(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:u,Profiler:i,StrictMode:c,Suspense:y,unstable_SuspenseList:b,createElement:C,cloneElement:function(e,t,r){if(null==e)throw j(Error(267),e);var o=n({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=N.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)E.call(t,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:a,type:e.type,key:l,ref:u,props:o,_owner:c}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:_,ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n}},V={default:B},X=V&&B||V;e.exports=X.default||X},460:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=l(e),i=1;i<arguments.length;i++){for(var s in r=Object(arguments[i]))o.call(r,s)&&(c[s]=r[s]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(c[u[f]]=r[u[f]])}}return c}}}]);
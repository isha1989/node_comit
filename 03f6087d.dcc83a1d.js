/*! For license information please see 03f6087d.dcc83a1d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(458),r(457)),i={},u={id:"exercises/js/ex_42",title:"ex_42",description:"# Exercise 42",source:"@site/../docs/exercises/js/ex_42.md",permalink:"/node_comit/docs/exercises/js/ex_42",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_42.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_41",permalink:"/node_comit/docs/exercises/js/ex_41"},next:{title:"ex_43",permalink:"/node_comit/docs/exercises/js/ex_43"}},c=[],l={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-42"},"Exercise 42"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new index42.js file"),Object(a.b)("li",{parentName:"ul"},"Define the message and assign the following value:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Show the following output:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"message text all in uppercase"),Object(a.b)("li",{parentName:"ul"},"message text all in lowercase"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Transform the following text to uppercase:"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune.\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transform the following text to lowercase:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add ",Object(a.b)("inlineCode",{parentName:"li"},"\\n")," special character to create new lines after each paragraph for both texts"),Object(a.b)("li",{parentName:"ul"},"Combine both texts into one variable (upper and lower case)"),Object(a.b)("li",{parentName:"ul"},"Show the final result using concat"),Object(a.b)("li",{parentName:"ul"},"Show the result character length with a descriptive message: ",Object(a.b)("inlineCode",{parentName:"li"},"The message has %chars% characters long"))))}s.isMDXComponent=!0},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(b,u({ref:t},l,{components:r})):o.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},458:function(e,t,r){"use strict";e.exports=r(459)},459:function(e,t,r){"use strict";var n=r(460),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function O(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||g}function j(){}function x(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=x.prototype=new j;S.constructor=x,n(S,O.prototype),S.isPureReactComponent=!0;var _={current:null},k={suspense:null},C={current:null},P=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:C.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,$=[];function T(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return n(o,t,""===r?"."+L(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+L(u=t[l],l);c+=e(u,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,s=r+L(u,l++),n,o);else if("object"===u)throw n=""+t,v(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?W(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function W(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),I(e,M,t=T(t,a,n,o)),D(t)}function q(){var e=_.current;if(null===e)throw v(Error(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return W(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,U,t=T(null,null,t,r)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return W(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:u,Profiler:l,StrictMode:c,Suspense:d,unstable_SuspenseList:b,createElement:A,cloneElement:function(e,t,r){if(null==e)throw v(Error(267),e);var o=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)P.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:c}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentBatchConfig:k,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:F},H=B&&F||B;e.exports=H.default||H},460:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(c[s]=r[s]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(c[u[f]]=r[u[f]])}}return c}}}]);
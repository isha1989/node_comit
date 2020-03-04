/*! For license information please see 35099fc1.12ef9ff7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),u=(n(458),n(457)),c={},i={id:"exercises/browser/ex_34",title:"ex_34",description:"# Exercise 34",source:"@site/../docs/exercises/browser/ex_34.md",permalink:"/node_comit/docs/exercises/browser/ex_34",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_34.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_33",permalink:"/node_comit/docs/exercises/browser/ex_33"},next:{title:"ex_35",permalink:"/node_comit/docs/exercises/browser/ex_35"}},l=[{value:"index.html",id:"indexhtml",children:[]}],a={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"exercise-34"},"Exercise 34"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_34\n  |-- index.html\n")),Object(u.b)("h2",{id:"indexhtml"},"index.html"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(u.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(u.b)("li",{parentName:"ul"},"Add the following html code")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Events</title>\n  </head>\n  <body>\n    <button id="firstButton">Click Me!!</button>\n    <button id="secondButton">Remove event listener</button>\n  </body>\n</html>\n')),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Copy and paste the code from exercise 33"),Object(u.b)("li",{parentName:"ul"},"Add the secondButton id element as shown in the html example"),Object(u.b)("li",{parentName:"ul"},"Select the secondButton id element using the ",Object(u.b)("inlineCode",{parentName:"li"},"getElementById")," method"),Object(u.b)("li",{parentName:"ul"},"Create a greeting function that will show the alert message that we're using as firstButton event listener"),Object(u.b)("li",{parentName:"ul"},"Use the greeting function as ",Object(u.b)("inlineCode",{parentName:"li"},"addEventListener")," callback"),Object(u.b)("li",{parentName:"ul"},"Add a new event handler to the secondButton element using ",Object(u.b)("inlineCode",{parentName:"li"},"onclick")),Object(u.b)("li",{parentName:"ul"},"Clicking the second button must remove the click listener from the first one"),Object(u.b)("li",{parentName:"ul"},"At the end the functionality must work this way:")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"Click first button to see the alert message\nClick on the second button to remove the event listener from the first button\nClick on the first button again to make sure the event listener is gone and that we're no longer see the alert message\n")),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"If everything is working... CONGRATS!! you're rocking it with events!!")))}s.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},f=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||u;return n?o.a.createElement(d,i({ref:t},a,{components:n})):o.a.createElement(d,i({ref:t},a))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,c=new Array(u);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var a=2;a<u;a++)c[a]=n[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},458:function(e,t,n){"use strict";e.exports=n(459)},459:function(e,t,n){"use strict";var r=n(460),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function w(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw v(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var _=x.prototype=new w;_.constructor=x,r(_,j.prototype),_.isPureReactComponent=!0;var k={current:null},S={suspense:null},C={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:C.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,A=[];function T(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function B(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case c:l=!0}}if(l)return r(o,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var s=n+I(i=t[a],a);l+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),a=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+I(i,a++),r,o);else if("object"===i)throw r=""+t,v(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),B(e,U,t=T(t,u,r,o)),D(t)}function q(){var e=k.current;if(null===e)throw v(Error(321));return e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;B(e,M,t=T(null,null,t,n)),D(t)},count:function(e){return B(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!$(e))throw v(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:i,Profiler:a,StrictMode:l,Suspense:b,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,t,n){if(null==e)throw v(Error(267),e);var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)E.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=S.suspense;S.suspense=void 0===t?null:t;try{e()}finally{S.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:S,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},V={default:F},H=V&&F||V;e.exports=H.default||H},460:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),a=1;a<arguments.length;a++){for(var s in n=Object(arguments[a]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var f=0;f<i.length;f++)u.call(n,i[f])&&(l[i[f]]=n[i[f]])}}return l}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{453:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(457)),o={},c={id:"exercises/mongo/ex_13",title:"ex_13",description:"# Exercise 13",source:"@site/../docs/exercises/mongo/ex_13.md",permalink:"/node_comit/docs/exercises/mongo/ex_13",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/mongo/ex_13.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_12",permalink:"/node_comit/docs/exercises/mongo/ex_12"},next:{title:"ex_1",permalink:"/node_comit/docs/exercises/debug/ex_1"}},l=[{value:"index.js",id:"indexjs",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-13"},"Exercise 13"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_13\n  |-- index.js\n")),Object(i.b)("h2",{id:"indexjs"},"index.js"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a Express web server using port 3000"),Object(i.b)("li",{parentName:"ul"},"Connect to MongoDB database ",Object(i.b)("inlineCode",{parentName:"li"},"social")," with the npm package ",Object(i.b)("inlineCode",{parentName:"li"},"mongoose")),Object(i.b)("li",{parentName:"ul"},"Create a schema ",Object(i.b)("inlineCode",{parentName:"li"},"user")," with the following properties:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"firstName - required, minlength of 2"),Object(i.b)("li",{parentName:"ul"},"lastName - required, minlength of 2"),Object(i.b)("li",{parentName:"ul"},"email - required, - required, minlength of 3, regex of email"),Object(i.b)("li",{parentName:"ul"},"about"),Object(i.b)("li",{parentName:"ul"},"date of birth - date - required"))),Object(i.b)("li",{parentName:"ul"},"Create the following routes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"GET '/users'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Find all documents in the users collection"),Object(i.b)("li",{parentName:"ul"},"Returns an JSON array of users"))),Object(i.b)("li",{parentName:"ul"},"GET '/users/:id'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Find one document by id in companies collection"),Object(i.b)("li",{parentName:"ul"},"Returns an JSON object of the user"))),Object(i.b)("li",{parentName:"ul"},"POST '/users'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Creates a documents in the users collection"),Object(i.b)("li",{parentName:"ul"},"Returns an JSON object of the user"))),Object(i.b)("li",{parentName:"ul"},"PUT '/users/:id'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Updates document with the id in the users collection"),Object(i.b)("li",{parentName:"ul"},"Returns an JSON object of the user"))),Object(i.b)("li",{parentName:"ul"},"DELETE '/users/:id'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Deletes documents with id in the users collection"),Object(i.b)("li",{parentName:"ul"},"Returns an empty JSON object")))))))}b.isMDXComponent=!0},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return r?a.a.createElement(d,c({ref:t},u,{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
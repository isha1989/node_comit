(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(457)),i={},c={id:"exercises/browser/ex_44",title:"ex_44",description:"# Exercise 44",source:"@site/../docs/exercises/browser/ex_44.md",permalink:"/node_comit/docs/exercises/browser/ex_44",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_44.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_43",permalink:"/node_comit/docs/exercises/browser/ex_43"},next:{title:"ex_45",permalink:"/node_comit/docs/exercises/browser/ex_45"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-44"},"Exercise 44"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_44\n  |-- index.html\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Form Properties</title>\n  </head>\n  <body>\n    <form\n      action="save_user.html"\n      method="post"\n      enctype="application/x-www-form-urlencoded"\n      name="login"\n    >\n      <input type="text" id="username" name="username" />\n      <input type="password" id="pass" name="pass" />\n      <button>Show Username and Password</button>\n    </form>\n    <div></div>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Select the form element using any of the JavaScript selectors"),Object(o.b)("li",{parentName:"ul"},"Define a variable for each form element"),Object(o.b)("li",{parentName:"ul"},"Using the form elements property set each variable the right element reference"),Object(o.b)("li",{parentName:"ul"},"Example: define a username variable and assign the first form element using form elements property"),Object(o.b)("li",{parentName:"ul"},"Set the username to morty"),Object(o.b)("li",{parentName:"ul"},"Set the password to 12345"),Object(o.b)("li",{parentName:"ul"},"Add the button a click event handler to show an alert with the username and passord values"),Object(o.b)("li",{parentName:"ul"},"Change the username and password values using the browser and click the button again to check that it's working")))}u.isMDXComponent=!0},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c({ref:t},s,{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
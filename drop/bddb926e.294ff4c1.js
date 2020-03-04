(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),c=(n(0),n(457)),o={},i={id:"exercises/browser/ex_22",title:"ex_22",description:"# Exercise 22",source:"@site/../docs/exercises/browser/ex_22.md",permalink:"/node_comit/docs/exercises/browser/ex_22",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_22.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_21",permalink:"/node_comit/docs/exercises/browser/ex_21"},next:{title:"ex_23",permalink:"/node_comit/docs/exercises/browser/ex_23"}},l=[{value:"index.html",id:"indexhtml",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"exercise-22"},"Exercise 22"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_22\n  |-- index.html\n")),Object(c.b)("h2",{id:"indexhtml"},"index.html"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(c.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(c.b)("li",{parentName:"ul"},"Add the following html code")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Texts</title>\n  </head>\n  <body>\n    <h1>Main Title</h1>\n    <p>This is a paragraph</p>\n  </body>\n</html>\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Select the h1 element"),Object(c.b)("li",{parentName:"ul"},"Define a new variable and store the h1 element content using ",Object(c.b)("inlineCode",{parentName:"li"},"innerText")),Object(c.b)("li",{parentName:"ul"},"Select the p element"),Object(c.b)("li",{parentName:"ul"},"Define a new variable and store the p element content using ",Object(c.b)("inlineCode",{parentName:"li"},"textContent")),Object(c.b)("li",{parentName:"ul"},"Replace the h1 element content for the paragraph one"),Object(c.b)("li",{parentName:"ul"},"Replace the p element content for the title one"),Object(c.b)("li",{parentName:"ul"},"Once this code gets executed we get the following result:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<h1>This is a paragraph</h1>\n<p>Main Title</p>\n")))}b.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(d,i({ref:t},p,{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
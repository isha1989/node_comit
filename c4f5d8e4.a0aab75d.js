(window.webpackJsonp=window.webpackJsonp||[]).push([[266,38],{391:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(462),c=t.n(l),o=t(475),s=t(466),i=t(461),u=t(465),h=t(392),m=t.n(h);a.default=function(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(o.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:c()("hero hero--primary",m.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},a.title),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(s.a,{className:c()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/01-intro")},"Get Started")))),r.a.createElement("main",null,r.a.createElement("section",{className:m.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Resources"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Slack"),": Joined the slack through the workspace link: ",r.a.createElement("a",{href:"https://noderegjan23.slack.com"},"Node.js Regina 2020")),r.a.createElement("li",null,r.a.createElement("strong",null,"Articles"),": Check the ",r.a.createElement("a",{href:"https://medium.com/topic/javascript"},"Medium.com")," for hot topics on Javascript"),r.a.createElement("li",null,r.a.createElement("strong",null,"Extra Content"),": Several examples ara avaliable at ",r.a.createElement("a",{href:"http://www.w3schools.com/"},"W3Schools")),r.a.createElement("li",null,r.a.createElement("strong",null,"JavaScript new Features"),": An excellent reference can be found on ",r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"},"MDN Web Docs"))),r.a.createElement("h3",null,"Content"),r.a.createElement("p",null,"This is the official course program! The course content will be distributed on a weekly basis, feel free to read it all and even pull request (more on that on the git lesson) suggestions."),"               "))))))}},476:function(e,a,t){"use strict";t(48),t(23),t(18),t(19),t(67);var n=t(0),r=t.n(n),l=t(462),c=t.n(l),o=t(461),s=t(469),i=!1;a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),u=Object(o.a)().siteConfig,h=(void 0===u?{}:u).themeConfig.algolia,m=Object(s.b)(),d=function(){a.current||(window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;m.push(r)}}),a.current=!0)},p=function(){i?d():Promise.all([t.e(331).then(t.t.bind(null,477,7)),t.e(237).then(t.t.bind(null,480,7))]).then((function(e){var a=e[0].default;i=!0,window.docsearch=a,d()}))},E=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:E,onKeyDown:E,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:E,onBlur:E,ref:l}))}}}]);
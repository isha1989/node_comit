(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{476:function(e,a,n){"use strict";n(48),n(23),n(18),n(19),n(67);var r=n(0),c=n.n(r),t=n(462),i=n.n(t),s=n(461),o=n(469),l=!1;a.a=function(e){var a=Object(r.useRef)(!1),t=Object(r.useRef)(null),d=Object(s.a)().siteConfig,h=(void 0===d?{}:d).themeConfig.algolia,u=Object(o.b)(),p=function(){a.current||(window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:function(e,a,n){var r=document.createElement("a");r.href=n.url;var c="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;u.push(c)}}),a.current=!0)},b=function(){l?p():Promise.all([n.e(331).then(n.t.bind(null,477,7)),n.e(237).then(n.t.bind(null,480,7))]).then((function(e){var a=e[0].default;l=!0,window.docsearch=a,p()}))},f=Object(r.useCallback)((function(a){t.current.contains(a.target)||t.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:f,onBlur:f,ref:t}))}}}]);
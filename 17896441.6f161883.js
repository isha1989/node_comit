(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{456:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(482),i=a(461),c=a(465),m=a(466);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var o=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n=[],l=[];function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var m=0,s=!1;for(l=document.getElementsByClassName(e);m<l.length&&!s;){var o=l[m],d=o.href,v=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===v&&(r&&r.classList.remove(t),o.classList.add(t),i(o),s=!0),m+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},d=a(462),v=a.n(d),E=a(152),g=a.n(E);function u(e){var t=e.headings;return o("contents__link","contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(p,{headings:t})))}function p(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(p,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.url,m=a.title,o=e.content,d=o.metadata,E=d.description,p=d.title,h=d.permalink,_=d.editUrl,f=d.lastUpdatedAt,N=d.lastUpdatedBy,b=d.version,k=o.frontMatter,w=k.image,y=k.keywords,C=k.hide_title,x=k.hide_table_of_contents,L=n+Object(c.a)(w);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,p&&l.a.createElement("title",null,p," | ",m),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:L}),w&&l.a.createElement("meta",{property:"twitter:image",content:L}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&l.a.createElement("meta",{property:"og:url",content:n+h})),l.a.createElement("div",{className:"padding-vert--lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:v()("col",g.a.docItemCol)},l.a.createElement("div",{className:g.a.docItemContainer},l.a.createElement("article",null,b&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",b),!C&&l.a.createElement("header",null,l.a.createElement("h1",{className:g.a.docTitle},p)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(_||f||N)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||N)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),N&&" "),N&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,N)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:d})))),!x&&o.rightToc&&l.a.createElement(u,{headings:o.rightToc})))))}}}]);
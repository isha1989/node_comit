/*! For license information please see a1c502f0.8e51b970.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(458),n(457)),a={id:"03-first-site",title:"Our First Site"},l={id:"03-first-site",title:"Our First Site",description:"Follow the next steps to create your first site!! These steps are fast pace but follow them and know that **we will review every component of this tutorial** throughout the course.",source:"@site/../docs/03-first-site.md",permalink:"/node_comit/docs/03-first-site",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/03-first-site.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"Internet",permalink:"/node_comit/docs/02-internet"},next:{title:"Git & GitHub",permalink:"/node_comit/docs/04-git"}},c=[{value:"Create a local site",id:"create-a-local-site",children:[{value:"index.html",id:"indexhtml",children:[]},{value:"style.css",id:"stylecss",children:[]},{value:"script.js",id:"scriptjs",children:[]}]},{value:"Publish our Site",id:"publish-our-site",children:[]},{value:"Extra",id:"extra",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Follow the next steps to create your first site!! These steps are fast pace but follow them and know that ",Object(i.b)("strong",{parentName:"p"},"we will review every component of this tutorial")," throughout the course."),Object(i.b)("h2",{id:"create-a-local-site"},"Create a local site"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download & install ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com"}),"Visual Studio Code")),Object(i.b)("li",{parentName:"ol"},"Create a folder with the name: ",Object(i.b)("inlineCode",{parentName:"li"},"my-first-site"),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/folder.png",alt:"create site folder"}))),Object(i.b)("li",{parentName:"ol"},"Open Visual Studio Code\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/open_folder.png",alt:"open Visual Studio Code"}))),Object(i.b)("li",{parentName:"ol"},"Open my-first-site using Visual Studio Code\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/open_folder_2.png",alt:"open Visual Studio Code"}))),Object(i.b)("li",{parentName:"ol"},"Create the following files inside the ",Object(i.b)("inlineCode",{parentName:"li"},"my-first-site")," folder :")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"index.html"),Object(i.b)("li",{parentName:"ul"},"style.css"),Object(i.b)("li",{parentName:"ul"},"script.js\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/create_files.png",alt:"open Visual Studio Code"})))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Copy and Paste the following code on each document")),Object(i.b)("h3",{id:"indexhtml"},"index.html"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>My First Site</title>\n    <link rel="stylesheet" href="style.css" />\n    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />\n  </head>\n  <body>\n    <div>\n      <h1>Hello World!!!</h1>\n      <p>Now let\'s conquer the world!!</p>\n      <button>Click Me</button>\n    </div>\n    <script src="script.js" type="text/javascript"><\/script>\n  </body>\n</html>\n')),Object(i.b)("h3",{id:"stylecss"},"style.css"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"body {\n  background-color: lightgray;\n  font-family: Arial;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n  justify-content: center;\n}\n\nh1 {\n  font-size: 72px;\n}\n\np {\n  font-size: 28px;\n}\n\nbutton {\n  color: white;\n  font-size: 125%;\n  border-radius: 4px;\n  border: none;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  background: rgb(28, 184, 65);\n  padding: 10px;\n  outline: none;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: rgb(66, 184, 221);\n  padding: 12px;\n}\n")),Object(i.b)("h3",{id:"scriptjs"},"script.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'window.onload = function() {\n  var button = document.querySelector("button");\n\n  button.addEventListener("click", function() {\n    alert("Let\'s Rock!!");\n  });\n};\n')),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Download the following ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../resources/icons/favicon.ico"}),"favicon.ico")," to my-first-site folder"),Object(i.b)("li",{parentName:"ol"},"Go to the ",Object(i.b)("inlineCode",{parentName:"li"},"my-first-site")," folder and double click the file ",Object(i.b)("inlineCode",{parentName:"li"},"index.html")),Object(i.b)("li",{parentName:"ol"},"You should see a web page like this one:\n",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/my_first_site.png",alt:"My First Site"})))),Object(i.b)("h2",{id:"publish-our-site"},"Publish our Site"),Object(i.b)("p",null,"At this point we created our first web but we can only access it from our computer as it's running locally.\nTo be able to publish it we need a free hosting and a domain. For this we will use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages"),". Now the next section moves quickly but we will cover Git in the next section."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open a browser and navigate to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/join"}),"https://github.com/join"),"."),Object(i.b)("li",{parentName:"ol"},'Set up your account. Pick a username that is professional since employeers will look at this account. Click "Create an account".'),Object(i.b)("li",{parentName:"ol"},"Choose your subscription. Choose ",Object(i.b)("strong",{parentName:"li"},"Free"),' and click "Continue".'),Object(i.b)("li",{parentName:"ol"},'(Optional) Tailor your experience. Fill out the details and click "Submit".'),Object(i.b)("li",{parentName:"ol"},"Verify email and log into your ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/login"}),"GitHub Account"),"."),Object(i.b)("li",{parentName:"ol"},"Create a new repository called ",Object(i.b)("inlineCode",{parentName:"li"},"my-first-site"),' and click "Create Repository".'),Object(i.b)("li",{parentName:"ol"},"In Visual Studio Code, open the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/editor/integrated-terminal"}),"Integrated Terminal")," and make sure that you the default shell is bash. ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/terminal.png",alt:"Integrated Terminal"})),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"For Windows Users"),", make sure the Default Shell is set to bash or Git Bash.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Click the dropdown in the top right of the Terminal and click Select Default Shell."),Object(i.b)("li",{parentName:"ul"},"Select Git Bash as the default shell. ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/terminal2.png",alt:"Terminal Shell Selector"}))),Object(i.b)("li",{parentName:"ul"},"Close and re-open the Terminal."))))),Object(i.b)("li",{parentName:"ol"},"In the Integrated Terminal, enter the following lines in the terminal ",Object(i.b)("strong",{parentName:"li"},"replaced with your GitHub details"),":",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git config --global user.name <github userID>\ngit config --global user.email <github email>\n"))),Object(i.b)("li",{parentName:"ol"},"In the Integrated Terminal, copy and paste the following line:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "my first commit"\n'))),Object(i.b)("li",{parentName:"ol"},'In GitHub, Click the copy to keyboard the commands in "\u2026or push an existing repository on the command line" section. Make sure you have ',Object(i.b)("inlineCode",{parentName:"li"},"HTTS"),"selected to see the https commands. ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/github1.png",alt:"GitHub new repository"}))),Object(i.b)("li",{parentName:"ol"},'In the Integrated Terminal, paste the copied line from the "\u2026or push an existing repository on the command line" section. You may be required to Login using your GitHub username and password.',Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The commands you are looking for is ",Object(i.b)("inlineCode",{parentName:"li"},"git remote add origin https://...")," and ",Object(i.b)("inlineCode",{parentName:"li"},"git push origin master")),Object(i.b)("li",{parentName:"ul"},"If you are having issues using HTTPS, use SSH instead by ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account"}),"adding a new SSH key to your GitHub account"),"."))),Object(i.b)("li",{parentName:"ol"},"Go to the repository page and refresh. You should see the files that you created. ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/github2.png",alt:"GitHub my-first-website repository"}))),Object(i.b)("li",{parentName:"ol"},'Under your repository name, click "Settings". ',Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://help.github.com/assets/images/help/repository/repo-actions-settings.png",alt:"Repository settings button"}))),Object(i.b)("li",{parentName:"ol"},'Use the "Select" source drop-down menu to select "master branch" folder as your GitHub Pages publishing source. ',Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/github3.png",alt:"Select master as source"}))),Object(i.b)("li",{parentName:"ol"},"Click the link in the GitHub pages section. ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/first-site/github4.png",alt:"Link where site is ready to published"}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Congratulations, you have your first site online!!"),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/congratulations.gif",alt:"Congratulations"})))),Object(i.b)("h2",{id:"extra"},"Extra"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Change the h1 and p wording (index.html)"),Object(i.b)("li",{parentName:"ul"},"Set the body background-color to red (style.css)"),Object(i.b)("li",{parentName:"ul"},"Refresh the local site to see the changes"),Object(i.b)("li",{parentName:"ul"},"Upload the changed files to deploy the new site version"),Object(i.b)("li",{parentName:"ul"},"Try to create your own version of the site")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/join"}),"Create a GitHub account")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/en/articles/create-a-repo"}),"Create a repository")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://scotch.io/tutorials/git-integration-in-visual-studio-code"}),"Git Integration in Visual Studio Code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages"}),"Publish files using GitHub pages")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.favicon-generator.org"}),"Favicon Generator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://johnpapa.net/getting-started-with-visual-studio-code"}),"Getting started with Visual Studio Code - by John Papa"))))}u.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||p[f]||i;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},458:function(e,t,n){"use strict";e.exports=n(459)},459:function(e,t,n){"use strict";var r=n(460),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function N(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=v.prototype;var S=w.prototype=new N;S.constructor=w,r(S,v.prototype),S.isPureReactComponent=!0;var k={current:null},C={suspense:null},x={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,I=[];function $(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function G(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function H(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+D(l=t[s],s);c+=e(l,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(l=t.next()).done;)c+=e(l=l.value,u=n+D(l,s++),r,o);else if("object"===l)throw r=""+t,g(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(R,"$&/")+"/"),H(e,A,t=$(t,i,r,o)),G(t)}function V(){var e=k.current;if(null===e)throw g(Error(321));return e}var M={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;H(e,F,t=$(null,null,t,n)),G(t)},count:function(e){return H(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,n){return V().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,n){return V().useReducer(e,t,n)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:l,Profiler:s,StrictMode:c,Suspense:f,unstable_SuspenseList:m,createElement:E,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var o=r({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)P.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var b=0;b<u;b++)s[b]=arguments[b+2];o.children=s}return{$$typeof:i,type:e.type,key:a,ref:l,props:o,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=C.suspense;C.suspense=void 0===t?null:t;try{e()}finally{C.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:C,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},q={default:M},L=q&&M||q;e.exports=L.default||L},460:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=a(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(c[u]=n[u]);if(r){l=r(n);for(var b=0;b<l.length;b++)i.call(n,l[b])&&(c[l[b]]=n[l[b]])}}return c}}}]);
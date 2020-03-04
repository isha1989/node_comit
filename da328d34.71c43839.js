/*! For license information please see da328d34.71c43839.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(458),n(457)),i={id:"13-deploy",title:"Deploying a Node.js Application"},l={id:"13-deploy",title:"Deploying a Node.js Application",description:"## Deploying to Heroku",source:"@site/../docs/13-deploy.md",permalink:"/node_comit/docs/13-deploy",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/13-deploy.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"MongoDB & Mongoose",permalink:"/node_comit/docs/12-mongodb"},next:{title:"Debugging & Troubleshooting",permalink:"/node_comit/docs/14-debug"}},c=[{value:"Deploying to Heroku",id:"deploying-to-heroku",children:[]},{value:"Setting up the MongoDB database",id:"setting-up-the-mongodb-database",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deploying-to-heroku"},"Deploying to Heroku"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To deploy your Node.js app you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://heroku.com"}),"Heroku")," as hosting")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From the site: ",Object(o.b)("inlineCode",{parentName:"p"},"Heroku is a fully managed container-based cloud platform, with integrated data services and a powerful ecosystem, for deploying and running modern apps"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Let's get started with installing the Heroku Command Line Interface (CLI)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Windows",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up"}),"Download the installer")))),Object(o.b)("li",{parentName:"ul"},"MacOS",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew install heroku/brew/heroku\n"))),Object(o.b)("li",{parentName:"ul"},"Ubuntu 16+",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo snap install heroku --classic\n"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"heroku login")," command to log in to the Heroku CLI:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"heroku login\nheroku: Press any key to open up the browser to login or q to exit\n\u203a   Warning: If browser does not open, visit\n\u203a   https://cli-auth.heroku.com/auth/browser/***\nheroku: Waiting for login...\nLogging in... done\nLogged in as me@example.com\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Let's create a new node package"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd node-example\nnpm init\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next install express"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install express --save\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For Heroku, it is important to specify the version of node to match your version ",Object(o.b)("inlineCode",{parentName:"p"},"node --version"),", edit the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to set the engine version."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "node-example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  },\n  "engines": {\n    "node": "10.x"\n  }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Specify the start script in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "node index.js"\n  }\n}\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next lets update the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," to include a basic express app. Note that we are passing the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env"}),"environment variable")," PORT to our app."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst port = process.env.PORT;\nconst app = express();\n\napp.get("/", (request, response) => {\n  response.send("Hello Heroku World!");\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Build and run your application locally"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nheroku local\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After you commit your changes to git, you can deploy your app to Heroku."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "Added a Procfile."\nheroku login\nEnter your Heroku credentials.\n...\nheroku create\nCreating arcane-lowlands-8408... done, stack is cedar\nhttp://arcane-lowlands-8408.herokuapp.com/ | git@heroku.com:arcane-lowlands-8408.git\nGit remote heroku added\ngit push heroku master\n...\n-----\x3e Node.js app detected\n...\n-----\x3e Launching... done\n      http://arcane-lowlands-8408.herokuapp.com deployed to Heroku\n\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To open the app in your browser, type ",Object(o.b)("inlineCode",{parentName:"p"},"heroku open"),"."))),Object(o.b)("h2",{id:"setting-up-the-mongodb-database"},"Setting up the MongoDB database"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For our course and development, we will leverage ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas"}),"MongoDB Atlas")," free cloud-hosted sandbox database. This database tier is not considered suitable for production websites because it has no redundancy, but it is great for development and prototyping."),Object(o.b)("li",{parentName:"ul"},"You will first need to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.mongodb.com/cloud/atlas/register"}),"create an account")," with MongoDB Atlas (this is free, and just requires that you enter basic contact details and acknowledge their terms of service)"),Object(o.b)("li",{parentName:"ul"},"After logging in, you'll be taken to the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.mongodb.com/v2"}),"home")," screen:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Build a Cluster")," button in the Clusters Overview section.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCluster.jpg",alt:"Create a cluster on MongoDB Atlas."}))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Create New Cluster")," screen.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseProviderRegion.jpg",alt:"Choose a cloud provider when using MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select any provider from the ",Object(o.b)("em",{parentName:"li"},"Cloud Provider & Region")," section. Different providers offer different regions."),Object(o.b)("li",{parentName:"ul"},'Select any region marked "FREE TIER AVAILABLE".'),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create Cluster")," button (creation of the cluster will take some minutes)."))),Object(o.b)("li",{parentName:"ul"},"You will return to the ",Object(o.b)("em",{parentName:"li"},"Cluster Overview")," screen.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateCollection.jpg",alt:"Setup a collection on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Collections")," button."))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Collections")," section.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CreateDatabase.jpg",alt:"Create a database on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create Database")," button."))),Object(o.b)("li",{parentName:"ul"},"This will open the ",Object(o.b)("em",{parentName:"li"},"Create Database")," screen.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseDetails.jpg",alt:"Details during database creation on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Enter the name for the new database as ",Object(o.b)("inlineCode",{parentName:"li"},"public"),"."),Object(o.b)("li",{parentName:"ul"},"Enter the name of the collection as ",Object(o.b)("inlineCode",{parentName:"li"},"Collection0"),"."),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Create")," button to create the database."))),Object(o.b)("li",{parentName:"ul"},"You will return to the ",Object(o.b)("em",{parentName:"li"},"Collection")," screen with your database created.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_DatabaseCreated.jpg",alt:"Database creation confirmation on MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("em",{parentName:"li"},"Overview")," tab to return the cluster overview."))),Object(o.b)("li",{parentName:"ul"},"From the Cluster0 Overview screen click the ",Object(o.b)("strong",{parentName:"li"},"Connect")," button.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_Connectbutton.jpg",alt:"Configure a connection when after setting up a cluster in MongoDB Atlas."}))),Object(o.b)("li",{parentName:"ul"},"This will open the Connect to Cluster screen.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectCluster.jpg",alt:"Setup a connection when using MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Add a Different IP Address")," button, enter ",Object(o.b)("inlineCode",{parentName:"li"},"0.0.0.0/0")," for the IP Address and click ",Object(o.b)("strong",{parentName:"li"},"Add IP Address")," button.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: It is a best practice to limit the IP addresses that can connect to your database and other resources. Here we allow a connection from anywhere because we don't know where the request will come from after deployment."))),Object(o.b)("li",{parentName:"ul"},"Enter a username and password and click ",Object(o.b)("strong",{parentName:"li"},"Create MongoDB User")," button.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: Avoid using special characters in your MongoDB user password as mongoose may not parse the connection string properly."))),Object(o.b)("li",{parentName:"ul"},"If you have completed the 2 previous steps, the button ",Object(o.b)("strong",{parentName:"li"},"Choose a connection method")," will turn green."),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Choose a connection method")," button."))),Object(o.b)("li",{parentName:"ul"},"This will access the ",Object(o.b)("em",{parentName:"li"},"Choose a connection method")," tab.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ChooseAConnectionMethod.jpg",alt:"Choose a connection type when connecting with MongoDB Atlas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Connect Your Application")," option."))),Object(o.b)("li",{parentName:"ul"},"This will open the Connect screen.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_ConnectForShortSRV.jpg",alt:"Choose the Short SRV connection when settinup a connection on MongoDB Atalas."})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Short SRV connection string")," option to copy the connection string."))),Object(o.b)("li",{parentName:"ul"},"This will open the connection string URL.\n",Object(o.b)("img",Object(r.a)({parentName:"li"},{src:"../resources/images/deploy/MongoDB_Atlas_-_CopyShortSRV.jpg",alt:"Copy the Short SRV connection string when setting up a connection on MongoDB Atlas"})),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("strong",{parentName:"li"},"Copy")," button to copy the string."),Object(o.b)("li",{parentName:"ul"},"Save this string somewhere safe."),Object(o.b)("li",{parentName:"ul"},"Update the password with your users password."),Object(o.b)("li",{parentName:"ul"},"Replace test with ",Object(o.b)("inlineCode",{parentName:"li"},"public"),"."))),Object(o.b)("li",{parentName:"ul"},"You have now created the database, and have an URL (with username and password) that can be used to access it. This will look something like: ",Object(o.b)("inlineCode",{parentName:"li"},"mongodb+srv://your_user_name:your_password@cluster0-mbdj7.mongodb.net/public?retryWrites=true"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DO NOT COMMIT THE VALUE TO GIT"),". Since this contains a secret (the user and password in the connection string), it is best practice to leverage enviroment variables.")))),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction"}),"Getting Started on Heroku with Node.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://devcenter.heroku.com/articles/deploying-nodejs"}),"Deploying Node.js Apps on Heroku")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose"}),"MDN Using a Database (with Mongoose)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment"}),"MDN Deploying to production"))))}u.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,l({ref:t},s,{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},458:function(e,t,n){"use strict";e.exports=n(459)},459:function(e,t,n){"use strict";var r=n(460),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.suspense_list"):60120,f=a?Symbol.for("react.memo"):60115,j=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function N(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=N.prototype;var C=w.prototype=new v;C.constructor=w,r(C,N.prototype),C.isPureReactComponent=!0;var k={current:null},_={suspense:null},S={current:null},D=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)D.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var M=/\/+/g,P=[];function B(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+I(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+I(l=t[s],s);c+=e(l,u,r,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=h&&t[h]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(l=t.next()).done;)c+=e(l=l.value,u=n+I(l,s++),r,a);else if("object"===l)throw r=""+t,g(Error(31),"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(M,"$&/")+"/"),T(e,L,t=B(t,o,r,a)),R(t)}function H(){var e=k.current;if(null===e)throw g(Error(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,$,t=B(null,null,t,n)),R(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:N,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,n){return H().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,n){return H().useReducer(e,t,n)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:l,Profiler:s,StrictMode:c,Suspense:m,unstable_SuspenseList:d,createElement:A,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)D.call(t,u)&&!x.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:_,ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},F={default:q},V=F&&q||F;e.exports=V.default||V},460:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))a.call(n,u)&&(c[u]=n[u]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);
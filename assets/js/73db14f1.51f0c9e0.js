"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[1996],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55152:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(11504),a=n(86212),o=n(22440),l=n(35784),i=n(73608);const s=e=>{const t=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(l.default,{language:"bash"},t)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(l.default,{language:"bash"},n)))}},57676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(45072),a=(n(11504),n(95788)),o=n(55152);const l={sidebar_position:2},i="Installation",s={unversionedId:"gettingstarted/installation",id:"gettingstarted/installation",title:"Installation",description:"Step 1: Install Node JS",source:"@site/docs/gettingstarted/installation.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/installation",permalink:"/documentation/docs/next/gettingstarted/installation",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/gettingstarted/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/documentation/docs/next/gettingstarted/requirements"},next:{title:"Troubleshooting \ud83d\udc1e",permalink:"/documentation/docs/next/gettingstarted/troubleshooting"}},c={},u=[{value:"Step 1: Install Node JS",id:"step-1-install-node-js",level:3},{value:"Step 2: Install the clinext generator",id:"step-2-install-the-clinext-generator",level:3}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"installation"},"Installation"),(0,a.yg)("h3",{id:"step-1-install-node-js"},"Step 1: Install ",(0,a.yg)("a",{parentName:"h3",href:"https://nodejs.org/en/download/"},"Node JS")),(0,a.yg)("p",null,"Before you install CliNext, make sure to download and install Node.js (version 18.x or higher), a JavaScript runtime.\nWhen installing Node.js, you are recommended to check all checkboxes related to dependencies."),(0,a.yg)("h3",{id:"step-2-install-the-clinext-generator"},"Step 2: Install the clinext generator"),(0,a.yg)(o.c,{yarn:"yarn add global clinext",mdxType:"BashTabs"}))}g.isMDXComponent=!0}}]);
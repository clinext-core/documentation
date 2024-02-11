"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8012],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},26172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:4},c="Anatomy of a CliNext app",i={unversionedId:"concepts/anatomy",id:"concepts/anatomy",title:"Anatomy of a CliNext app",description:"Project structure",source:"@site/docs/concepts/anatomy.mdx",sourceDirName:"concepts",slug:"/concepts/anatomy",permalink:"/documentation/docs/next/concepts/anatomy",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/anatomy.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/documentation/docs/next/concepts/components"},next:{title:"Guides",permalink:"/documentation/docs/next/category/guides"}},p={},s=[{value:"Project structure",id:"project-structure",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"anatomy-of-a-clinext-app"},"Anatomy of a CliNext app"),(0,o.yg)("h2",{id:"project-structure"},"Project structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500\u2500\u2500 app.js\n\u251c\u2500\u2500\u2500\u2500 commands\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command A\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command X\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Y\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command B\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Z\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command W\n\u251c\u2500\u2500 clinext.config.js\n\u251c\u2500\u2500 .env\n\u2514\u2500\u2500 package.json\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The clinext config is clinext.config.js"),(0,o.yg)("li",{parentName:"ul"},"The clinext app entry point is index.js"),(0,o.yg)("li",{parentName:"ul"},"The app feature is in /app"),(0,o.yg)("li",{parentName:"ul"},"The local features are in /features")))}m.isMDXComponent=!0}}]);
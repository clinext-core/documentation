"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[6832],{5788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>y});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(5072),o=(n(1504),n(5788));const a={sidebar_position:4},c="Anatomy of a CliNext app",i={unversionedId:"concepts/anatomy",id:"version-1.0/concepts/anatomy",title:"Anatomy of a CliNext app",description:"Project structure",source:"@site/versioned_docs/version-1.0/concepts/anatomy.mdx",sourceDirName:"concepts",slug:"/concepts/anatomy",permalink:"/documentation/docs/concepts/anatomy",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/concepts/anatomy.mdx",tags:[],version:"1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/documentation/docs/concepts/components"},next:{title:"How-to guides",permalink:"/documentation/docs/category/how-to-guides"}},s={},p=[{value:"Project structure",id:"project-structure",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"anatomy-of-a-clinext-app"},"Anatomy of a CliNext app"),(0,o.yg)("h2",{id:"project-structure"},"Project structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500\u2500\u2500 app.js\n\u251c\u2500\u2500\u2500\u2500 commands\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command A\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command X\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Y\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command B\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Z\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command W\n\u251c\u2500\u2500 clinext.config.js\n\u251c\u2500\u2500 .env\n\u2514\u2500\u2500 package.json\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The clinext config is clinext.config.js"),(0,o.yg)("li",{parentName:"ul"},"The clinext app entry point is index.js"),(0,o.yg)("li",{parentName:"ul"},"The app feature is in /app"),(0,o.yg)("li",{parentName:"ul"},"The local features are in /features")))}m.isMDXComponent=!0}}]);
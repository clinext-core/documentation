"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[3184],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>f});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(45072),o=(n(11504),n(95788));const a={sidebar_position:2},i="Components",s={unversionedId:"concepts/components",id:"version-1.0/concepts/components",title:"Components",description:"Commands",source:"@site/versioned_docs/version-1.0/concepts/components.mdx",sourceDirName:"concepts",slug:"/concepts/components",permalink:"/documentation/docs/concepts/components",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/concepts/components.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/documentation/docs/concepts/motivation"},next:{title:"Anatomy of a CliNext app",permalink:"/documentation/docs/concepts/anatomy"}},c={},l=[{value:"Commands",id:"commands",level:3},{value:"Options",id:"options",level:3},{value:"Validators",id:"validators",level:3},{value:"Transformers",id:"transformers",level:3},{value:"Side effects",id:"side-effects",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"components"},"Components"),(0,o.yg)("h3",{id:"commands"},"Commands"),(0,o.yg)("p",null,"Commands folders are a direct representation of the arborescence of commands the end user will see."),(0,o.yg)("h3",{id:"options"},"Options"),(0,o.yg)("p",null,"Commands folders are a direct representation of the arborescence of commands the end user will see."),(0,o.yg)("h3",{id:"validators"},"Validators"),(0,o.yg)("p",null,"As they name imply they validate input"),(0,o.yg)("h3",{id:"transformers"},"Transformers"),(0,o.yg)("p",null,"Just like a docker image is made to be### Validators\nAs they name imply they validate input"),(0,o.yg)("h3",{id:"side-effects"},"Side effects"))}m.isMDXComponent=!0}}]);
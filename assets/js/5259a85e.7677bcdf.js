"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[4044],{5788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>f});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(5072),o=(r(1504),r(5788));const a={sidebar_position:1},i="Overview",s={unversionedId:"overview",id:"version-1.0/overview",title:"Overview",description:"logo",source:"@site/versioned_docs/version-1.0/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/documentation/docs/overview",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/overview.mdx",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Start \ud83d\ude80",permalink:"/documentation/docs/quickStart"},next:{title:"Concepts",permalink:"/documentation/docs/category/concepts"}},l={},c=[{value:"CliNext documentation",id:"clinext-documentation",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview"},"Overview"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"logo",src:r(2180).c,width:"76",height:"95"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"CliNext")," is a Node JS framework built for features running on your framework engine of choice. It provides a concise, easy to use and scalable template to get the best of features."),(0,o.yg)("p",null,"The CliNext framework at its core is a server template that uses the @clinext/server to launch the different features applied to models and executed on the framework engine. It does not handle any database nor does it expose any API by itself. Instead it relies on a Framework engine that conforms to a set of APIs defined by CliNext (Object, Query, Auth, ...). "),(0,o.yg)("p",null,"Main features:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Quick start and Plug & Play Node JS framework"),(0,o.yg)("li",{parentName:"ul"},"Tailored for features"),(0,o.yg)("li",{parentName:"ul"},"Community features"),(0,o.yg)("li",{parentName:"ul"},"Schema based models and auto-migration "),(0,o.yg)("li",{parentName:"ul"},"Highly extensible")),(0,o.yg)("h2",{id:"clinext-documentation"},"CliNext documentation"),(0,o.yg)("p",null,"This is the official documentation site for CliNext. Content on this site is sourced in GitHub. For more information, see ",(0,o.yg)("a",{parentName:"p",href:"/documentation/docs/contributing"},"Contributing to CliNext")," documentation."),(0,o.yg)("p",null,"This site is based on ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),"."),(0,o.yg)("p",null,"We use the ",(0,o.yg)("a",{parentName:"p",href:"https://diataxis.fr"},"Di\xe1taxis documentation authoring framework")," which organizes technical documentation into a system based on four quadrants:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Learning-oriented Tutorials provide hands-on lessons where users can learn the framework by doing.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Problem-oriented How-to Guides provide recipes to solve specific goals you may encounter while building a LoopBack project.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Understanding-oriented Concepts pages provide the explanation of architecture concepts, wider view and deeper knowledge about the framework.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Information-oriented Reference guides provide technical description of the machinery and how to use it."))))}d.isMDXComponent=!0},2180:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/icon_xs-f632e2b579c07991d06f221f250ea5a4.svg"}}]);
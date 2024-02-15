"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[7376],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(45072),a=(n(11504),n(95788));const o={sidebar_position:2},i="Components",s={unversionedId:"concepts/components",id:"concepts/components",title:"Components",description:"Commands",source:"@site/docs/concepts/components.mdx",sourceDirName:"concepts",slug:"/concepts/components",permalink:"/documentation/docs/next/concepts/components",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/components.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/documentation/docs/next/concepts/motivation"},next:{title:"Extensions",permalink:"/documentation/docs/next/concepts/extensions"}},l={},c=[{value:"Commands",id:"commands",level:3},{value:"Questions",id:"questions",level:3},{value:"Validators",id:"validators",level:4},{value:"Transformers",id:"transformers",level:4},{value:"Side effects",id:"side-effects",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"components"},"Components"),(0,a.yg)("h3",{id:"commands"},"Commands"),(0,a.yg)("p",null,"Commands folders are a direct representation of the arborescence of commands the end user will see."),(0,a.yg)("h3",{id:"questions"},"Questions"),(0,a.yg)("p",null,"A CLI will certainly make use of inquiries to the user. We call them questions, and they are built with certain requirements in mind:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Questions can be declared in a conventional way in the src/questions folder"),(0,a.yg)("li",{parentName:"ul"},"Any command can declare the questions it will use, by doing so CliNext will automatically extract the cli parameters from those questions and inject them in the help view."),(0,a.yg)("li",{parentName:"ul"},"When a question is declared in a command, it inherits the question that is declared project wide in the src/questions folder. By doing so you can simply declare a command question by giving its id."),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its questions as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/structure"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"validators"},"Validators"),(0,a.yg)("p",null,"Validators are used to check user's input for a question."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Validators can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its validators as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/structure"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"transformers"},"Transformers"),(0,a.yg)("p",null,"Transformers are used to format a value before or after a user's input. They can also be used to format the data displayed to a user without having an actual effect on the final input."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transformers can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its transformers as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/structure"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")),(0,a.yg)("h4",{id:"side-effects"},"Side effects"),(0,a.yg)("p",null,"Side effects are used to format a value before or after a user's input. They can also be used to format the data displayed to a user without having an actual effect on the final input."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Side effects can be declared separately in the src/validators folder"),(0,a.yg)("li",{parentName:"ul"},"They can also be declared inline in reference to a question"),(0,a.yg)("li",{parentName:"ul"},"Any extension can declare its side effects as well")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/guides/questions/structure"},"Guides")," ",(0,a.yg)("br",null),"\n",(0,a.yg)("a",{parentName:"p",href:"/documentation/docs/next/reference/question"},"Reference")))}p.isMDXComponent=!0}}]);
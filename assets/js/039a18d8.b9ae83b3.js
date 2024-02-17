"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[6e3],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const s={},i="Samples",o={unversionedId:"guides/questions/samples",id:"guides/questions/samples",title:"Samples",description:"Questions",source:"@site/docs/guides/questions/samples.mdx",sourceDirName:"guides/questions",slug:"/guides/questions/samples",permalink:"/documentation/docs/next/guides/questions/samples",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/guides/questions/samples.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remote questions",permalink:"/documentation/docs/next/guides/questions/remote"},next:{title:"Deployment",permalink:"/documentation/docs/next/guides/deployment"}},l={},p=[{value:"Questions",id:"questions",level:2},{value:"App name",id:"app-name",level:3},{value:"Destination folder",id:"destination-folder",level:3},{value:"License",id:"license",level:3},{value:"Transformers",id:"transformers",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"samples"},"Samples"),(0,a.yg)("h2",{id:"questions"},"Questions"),(0,a.yg)("h3",{id:"app-name"},"App name"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"With validation and alias")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    _clinextType: \"question\",\n    name: 'appName',\n    type: 'string',\n    promptType: 'input',\n    alias: 'n',\n    defaultValue: 'MyAppName',\n    message: 'App name',\n    validators: [\n        { \n            id: 'nonempty', \n            params: { maxParams: 12 } \n        }\n    ]\n}\n")),(0,a.yg)("h3",{id:"destination-folder"},"Destination folder"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Uses file-tree-selection")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    _clinextType: "question",\n    type: \'string\',\n    alias: \'d\',\n    message: "Choose a destination",\n    promptType: "file-tree-selection",\n    name: "destination",\n    onlyShowDir: true,\n    root: "./",\n    onlyShowValid: false,\n    enableGoUpperDirectory: true,\n    hideRoot: false,\n    hideChildrenOfValid: false,\n    hideValidationErrorMessage: true,\n    transformers: [\n        { \n            handler: (name,) => {\n                if (!name || !name.length) {\n                    return \'\'\n                }\n\n                const _name = name.split(path.sep).pop()\n                return `${_name}`\n            }\n    }]\n}\n')),(0,a.yg)("h3",{id:"license"},"License"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Multiple choices promptType (list)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    _clinextType: "question",\n    name: \'license\',\n    type: \'string\',\n    promptType: \'list\',\n    alias: \'l\',\n    defaultValue: \'MIT\',\n    message: \'License\',\n    description: \'\',\n    subMessage: \'("MIT", ...)\',\n    choices: [\n        "Apache 2.0",\n        "MIT",\n        "Mozilla Public License 2.0",\n        "BSD 2-Clause (FreeBSD) License",\n        "BSD 3-Clause (FreeBSD) License",\n        "Internet Systems Consortium (ISC) License",\n        "GNU AGPL 3.0",\n    ],\n}\n')),(0,a.yg)("h2",{id:"transformers"},"Transformers"))}m.isMDXComponent=!0}}]);
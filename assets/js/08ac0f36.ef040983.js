"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[8816],{5788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>f});var n=a(1504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2216:(e,t,a)=>{a.d(t,{c:()=>d});var n=a(5072),r=a(1504);const o=e=>{const{data:t}=e,{header:a,rows:n}=t;return r.createElement("table",null,r.createElement("thead",null,a.columns.map((e=>r.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),r.createElement("tbody",null,n.map((e=>r.createElement("tr",{key:e.id},e.columns.map((e=>r.createElement("td",{key:e.id,className:""},e.value))))))))},l=function(e){void 0===e&&(e={});const{name:t,url:a}=e;return r.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},r.createElement("span",{className:"                                             "},`${t}`))},i=function(e){void 0===e&&(e={});const{name:t,url:a,tooltip:n}=e;return r.createElement("div",{className:" has-tooltip                                 "},n&&r.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},n),r.createElement("a",{href:`${a}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},r.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${t}`)))},c=e=>{let{data:t,types:a}=e;const{header:n,rows:o}=t;let c=o.map((e=>{const{columns:t}=e,n=t.map(((e,t)=>{if(!e)return{id:t,value:r.createElement("span",null)};if("string"===typeof e)return{id:t,value:e};{const{type:n}=e;switch(n){case"boolean":return{id:t,value:r.createElement(l,{name:e.value?"True":"False"})};case"element":{const a=e.value;return{id:t,value:r.createElement(a,null)}}case"type":{const{value:n}=e;let o=a.items.filter((e=>e.id===n));if(!o||!o.length)break;o=o[0];const l=`${o.path}`,{mode:c}=e;let s=o.name;if("array"===c)s=`[${o.name}]`;return{id:t,value:r.createElement(i,{name:s,url:l,tooltip:o.description})}}}}return e}));return{...e,columns:n}}));return c=c.filter((e=>e)),{header:n,rows:c}},s=e=>e.filter(((t,a)=>e.indexOf(t)===a)),p=e=>{let{data:t,types:a,isJson:n}=e;if(!n)return c({data:t,types:a});const r=(e=>{let{data:t}=e;const{header:a,rows:n}=t;let r=[];return n.forEach((e=>{const t=Object.keys(e);r=r.concat(t)})),r=s(r),{header:a,rows:n.map(((e,a)=>({columns:t.header.columns.map((t=>{const{id:a}=t;return e[a]}))})))}})({data:t});return c({data:r,types:a})},d=e=>{const t=p({data:e.data,types:e.types,isJson:e.isJson});return r.createElement(o,(0,n.c)({},e,{data:t}))}},600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(5072),r=(a(1504),a(5788)),o=a(2216);const l={sidebar_position:1},i="Command",c={unversionedId:"reference/command",id:"reference/command",title:"Command",description:"Path",source:"@site/docs/reference/command.mdx",sourceDirName:"reference",slug:"/reference/command",permalink:"/documentation/docs/next/reference/command",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/docs/reference/command.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/next/reference/overview"},next:{title:"Option",permalink:"/documentation/docs/next/reference/option"}},s={},p=[{value:"Path",id:"path",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Archive",id:"archive",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.c)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"command"},"Command"),(0,r.yg)("h2",{id:"path"},"Path"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A command is declared by adding a file to the src/commands folder"),(0,r.yg)("li",{parentName:"ul"},"The tree of commands is automatically generated following the folders recursively"),(0,r.yg)("li",{parentName:"ul"},"Any file within a command folder is a subcommand of the command declared in the index.js file of said command")),(0,r.yg)("h2",{id:"arguments"},"Arguments"),(0,r.yg)(o.c,{isJson:!0,types:{rootPath:"",items:[{id:"transformer",path:"transformer",name:"Transformer",description:"A combination of display, in and out transformers to apply to an input or value."}]},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"_clinextType",type:"string",description:"CliNext module type",defaultValue:"command",mandatory:{type:"boolean",value:!1}},{parameter:"name",type:"string",description:"Command unique name",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"defaultValue",type:"",description:"Default value for the option",defaultValue:"",mandatory:{type:"boolean",value:!1}},{parameter:"message",type:"string",description:"The message that will be displayed on the prompt",defaultValue:"",mandatory:{type:"boolean",value:!1}},{parameter:"type",type:"string",description:"The data type of the input.",defaultValue:"string",mandatory:{type:"boolean",value:!1}},{parameter:"prompType",type:"string",description:"The prompt type of the inquirer",defaultValue:"input",mandatory:{type:"boolean",value:!0}},{parameter:"transformer",type:"object",description:"A combination of display, in and out transformers to apply to an input or value.",defaultValue:"",mandatory:{type:"boolean",value:!1}}]},mdxType:"Table"}),(0,r.yg)("h2",{id:"archive"},"Archive"),(0,r.yg)(o.c,{types:{rootPath:"",items:[{id:"transformer",path:"transformer",name:"Transformer",description:"A combination of display, in and out transformers to apply to an input or value."}]},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{id:"d",columns:["_clinextType","string","CliNext module type","command",{type:"boolean",value:!1}]},{id:"d",columns:["name","string","Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.","b",{type:"boolean",value:!0}]},{id:"d",columns:["defaultValue","null","Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.",{type:"element",value:()=>(0,r.yg)("span",{className:"font-bold"},"Default value")},{type:"boolean",value:!0}]},{id:"b",columns:["message","string","Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.","b",!1]},{id:"b",columns:["type","string","Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.","b",!1]},{id:"b",columns:["prompType","string","Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.","b",!1]},{id:"d",columns:["transformers",{type:"type",value:"transformer",mode:"array"},"A combination of display, in and out transformers to apply to an input or value.","null",{type:"boolean",value:!1}]}]},mdxType:"Table"}))}u.isMDXComponent=!0}}]);
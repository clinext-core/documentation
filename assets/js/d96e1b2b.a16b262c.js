"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[3192],{84492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(45072),o=(i(11504),i(95788)),r=i(51944),a=i.n(r);const s={sidebar_position:1},c="Config",l={unversionedId:"reference/config",id:"version-1.3/reference/config",title:"Config",description:"- Location `/clinext.config.js`",source:"@site/versioned_docs/version-1.3/reference/config.mdx",sourceDirName:"reference",slug:"/reference/config",permalink:"/documentation/docs/reference/config",draft:!1,editUrl:"https://github.com/clinext-core/generator-clinext/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.3/reference/config.mdx",tags:[],version:"1.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/documentation/docs/category/reference"},next:{title:"Anatomy of a CliNext app",permalink:"/documentation/docs/reference/anatomy"}},p={},d=[{value:"Schema",id:"schema",level:3},{value:"Example",id:"example",level:3}],m={toc:d},g="wrapper";function u(e){let{components:n,...i}=e;return(0,o.yg)(g,(0,t.c)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"config"},"Config"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Location ",(0,o.yg)("inlineCode",{parentName:"li"},"/clinext.config.js"))),(0,o.yg)("h3",{id:"schema"},"Schema"),(0,o.yg)(a(),{schema:{title:"CliNext",type:"object",description:"",properties:{__clinextApiVersion:{type:"string",description:"Semver value of compatible CliNext versions."},name:{type:"string",description:"CLI name (actual bin value)"},epilog:{type:"string",description:"CLI epilog"},usage:{type:"string",description:"Usage description"},extensions:{type:"array",description:"Extension list"}},required:["__clinextApiVersion","name"]},mdxType:"JSONSchemaViewer"}),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  __clinextApiVersion: "1.0.0",\n  name: "@servable/cli",\n  usage: "servable <command>",\n  epilog: "Made by servable",\n  extensions: [\n    "@clinext/chunks-extension"\n  ]\n})\n')))}u.isMDXComponent=!0}}]);
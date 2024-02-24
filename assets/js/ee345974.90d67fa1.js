"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[1652],{95788:(e,n,a)=>{a.d(n,{Iu:()=>u,yg:()=>g});var t=a(11504);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?t.createElement(g,r(r({ref:n},u),{},{components:a})):t.createElement(g,r({ref:n},u))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44232:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=a(45072),l=(a(11504),a(95788));const i={sidebar_position:1},r="Build the CliNext generator",o={unversionedId:"tutorials/generator",id:"version-1.3/tutorials/generator",title:"Build the CliNext generator",description:"Before you begin",source:"@site/versioned_docs/version-1.3/tutorials/generator.md",sourceDirName:"tutorials",slug:"/tutorials/generator",permalink:"/documentation/docs/tutorials/generator",draft:!1,editUrl:"https://github.com/clinext-org/documentation/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.3/tutorials/generator.md",tags:[],version:"1.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/documentation/docs/category/tutorials"},next:{title:"Reference",permalink:"/documentation/docs/category/reference"}},p={},s=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"What you&#39;ll learn",id:"what-youll-learn",level:3},{value:"What you&#39;ll build",id:"what-youll-build",level:3},{value:"Generate the project",id:"generate-the-project",level:2},{value:"Install Node JS",id:"install-node-js",level:3},{value:"Step 2: Create a new CliNext app",id:"step-2-create-a-new-clinext-app",level:3},{value:"Create the <code>app new</code>  command",id:"create-the-app-new--command",level:2},{value:"Add the command",id:"add-the-command",level:3},{value:"Create the project",id:"create-the-project",level:3},{value:"Craft questions",id:"craft-questions",level:3},{value:"Use questions in commands",id:"use-questions-in-commands",level:3},{value:"Build the handler",id:"build-the-handler",level:3},{value:"Create the <code>extension new</code>  command",id:"create-the-extension-new--command",level:2},{value:"Release",id:"release",level:2},{value:"Summary",id:"summary",level:2}],u={toc:s},m="wrapper";function d(e){let{components:n,...i}=e;return(0,l.yg)(m,(0,t.c)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"build-the-clinext-generator"},"Build the CliNext generator"),(0,l.yg)("h2",{id:"before-you-begin"},"Before you begin"),(0,l.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A Linux computer (Mac OS, Ubuntu, ...)"),(0,l.yg)("li",{parentName:"ul"},"A terminal")),(0,l.yg)("h3",{id:"what-youll-learn"},"What you'll learn"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"How to ..."),(0,l.yg)("li",{parentName:"ul"},"How to ...")),(0,l.yg)("h3",{id:"what-youll-build"},"What you'll build"),(0,l.yg)("p",null,"We are going to build step by step the CliNext generator app."),(0,l.yg)("h2",{id:"generate-the-project"},"Generate the project"),(0,l.yg)("h3",{id:"install-node-js"},"Install ","[Node JS]"),(0,l.yg)("p",null,"We need to install Node JS first:\nInstall ",(0,l.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node JS")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"brew install node\n")),(0,l.yg)("p",null,"Check if Node has been installed correctly:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,l.yg)("p",null,"Male sure npm is available as well:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm -v\n")),(0,l.yg)("h3",{id:"step-2-create-a-new-clinext-app"},"Step 2: Create a new CliNext app"),(0,l.yg)("p",null,"Let's generate a brand new app with the CLI:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npx clinext app new \n")),(0,l.yg)("p",null,"The clinext will ask a series of questions:"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"logo",src:a(48172).c,width:"1020",height:"448"})),(0,l.yg)("h2",{id:"create-the-app-new--command"},"Create the ",(0,l.yg)("inlineCode",{parentName:"h2"},"app new"),"  command"),(0,l.yg)("h3",{id:"add-the-command"},"Add the command"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"app new")," will generate a new CliNext app project."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Go to ",(0,l.yg)("inlineCode",{parentName:"li"},"src/commands")),(0,l.yg)("li",{parentName:"ul"},"Create the ",(0,l.yg)("inlineCode",{parentName:"li"},"src/commands/app")),(0,l.yg)("li",{parentName:"ul"},"Add a ",(0,l.yg)("inlineCode",{parentName:"li"},"src/commands/app/main.js"),". This file is necessary for every command folder. It does not have to do anything.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  _clinextType: 'command',\n  position: 1,\n  name: 'app',\n  description: `App management \ud83e\udd16`,\n  questions: [\n  ],\n  example: \"$0 app new --appName='MyApp'\",\n})\n")),(0,l.yg)("h3",{id:"create-the-project"},"Create the project"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Create a ",(0,l.yg)("inlineCode",{parentName:"li"},"src/commands/app/new.js")," file. This file will hold the actual code for creating new project for the app and the extension.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"import ChunkAppContent from '../../lib/chunks/app/content/index.js'\n\nexport default ({\n  _clinextType: 'command',\n  name: 'new',  \n  description: `Generate a CliNext app \ud83d\ude80`,\n  questions: [\n  ],\n  example: \"$0 app new --appID='MyApp'\",\n  handler: async () => {\n   \n  },\n})\n")),(0,l.yg)("p",null,"As you can see the command is quite empty at this point. Let's start by defining the questions we'll need from the user."),(0,l.yg)("h3",{id:"craft-questions"},"Craft questions"),(0,l.yg)("p",null,"For this command we'll need:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The id of the cli (the unique command line entry to the cli, the one we will use to call it)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The destination (folder)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The package manager the user wants to use (yarn, npm, pnpm)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Whether the user wants to install dependencies or not")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Whether the user wants to initialize a git repository or not")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Create a ",(0,l.yg)("inlineCode",{parentName:"p"},"src/questions/destination.js")," file. This file will hold the question for the destination. We are going to use the same question for the extension project, so we are better off extracting it right away."))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'import path from "path"\n\nexport default ({\n  _clinextType: "question",\n  type: \'string\',\n  alias: \'d\',\n  message: "Choose a destination",\n  promptType: "file-tree-selection",\n  name: "destination",\n  onlyShowDir: true,\n  root: "./",\n  onlyShowValid: false,\n  enableGoUpperDirectory: true,\n  hideRoot: false,\n  hideChildrenOfValid: false,\n  hideValidationErrorMessage: true,\n  transformer: (name,) => {\n    if (!name || !name.length) {\n      return \'\'\n    }\n\n    const _name = name.split(path.sep).pop()\n    return `${_name}`\n  }\n})\n')),(0,l.yg)("p",null,"In this question we:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Use the ",(0,l.yg)("inlineCode",{parentName:"li"},"file-tree-selection"),"promptType which allows us navigate in the local machine file system and pick a folder."),(0,l.yg)("li",{parentName:"ul"},"We only show folders (",(0,l.yg)("inlineCode",{parentName:"li"},"onlyShowDir"),") "),(0,l.yg)("li",{parentName:"ul"},"Folders don't need to pass any validation test (",(0,l.yg)("inlineCode",{parentName:"li"},"json onlyShowValid: false"),") ")),(0,l.yg)("p",null,"That's it. The question can be used anywhere in the project by referring to its name (",(0,l.yg)("inlineCode",{parentName:"p"},"destination"),")."),(0,l.yg)("p",null,"Let's create the remaining questions the same way:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"src/questions/gitInit.js"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  name: 'gitInit',\n  type: 'boolean',\n  defaultValue: true,\n  message: `Initialize a git repository`,\n  promptType: 'confirm',\n  alias: 'g',\n})\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"src/questions/installDependencies.js"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  name: 'installDependencies',\n  type: 'boolean',\n  promptType: 'confirm',\n  alias: 'i',\n  defaultValue: true,\n  message: 'Install dependencies'\n})\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"src/questions/packageManager.js"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  name: 'packageManager',\n  type: 'string',\n  promptType: 'list',\n  alias: 'p',\n  defaultValue: 'npm',\n  message: \"Package manager ('npm', 'yarn' or 'pnpm')\",\n  choices: [{\n    name: 'npm',\n    value: 'npm'\n  }, {\n    name: 'yarn',\n    value: 'yarn'\n  }, {\n    name: 'pnpm',\n    value: 'pnpm'\n  }]\n})\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"src/questions/license.js"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  name: 'license',\n  type: 'string',\n  promptType: 'list',\n  alias: 'l',\n  defaultValue: 'MIT',\n  message: 'License',\n  description: '',\n  subMessage: '(\"MIT\", ...)',\n  choices: [\n    \"Apache 2.0\",\n    \"MIT\",\n    \"Mozilla Public License 2.0\",\n    \"BSD 2-Clause (FreeBSD) License\",\n    \"BSD 3-Clause (FreeBSD) License\",\n    \"Internet Systems Consortium (ISC) License\",\n    \"GNU AGPL 3.0\",\n  ],\n})\n")),(0,l.yg)("h3",{id:"use-questions-in-commands"},"Use questions in commands"),(0,l.yg)("p",null,"Now that we have defined most of the questions, we can use them in the command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"import ChunkAppContent from '../../lib/chunks/app/content/index.js'\n\nexport default ({\n  _clinextType: 'command',\n  name: 'new',\n  position: 0,\n  description: `Generate a CliNext app \ud83d\ude80`,\n  questions: [\n    {\n      name: 'appID',\n      type: 'string',\n      promptType: 'input',\n      alias: 'n',\n      defaultValue: 'myappID',\n      message: 'App ID',\n      validators: [{\n        id: 'nonempty',\n        params: { maxParams: 50 }\n      }]\n    },\n    {\n      name: 'appDescription',\n      type: 'string',\n      promptType: 'input',\n      defaultValue: 'A CliNext app',\n      message: 'App description',\n      validators: [{\n        id: 'nonempty',\n        params: { maxParams: 12 }\n      }]\n    },\n    {\n      name: 'installDependencies',\n    },\n    {\n      name: 'license',\n    },\n    {\n      name: 'packageManager',\n    },\n    {\n      name: 'gitInit',\n    },\n    {\n      name: 'destination',\n      transformers: [{\n        modes: ['out'],\n        template: `<%= destination %>/<%= appID %>`\n      }]\n      // validators: [{ id: 'nonempty' }]\n    },\n  ],\n  example: \"$0 app new --appID='MyApp'\",\n  handler: async () => {\n  },\n})\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Note that we chose to keep the ",(0,l.yg)("inlineCode",{parentName:"li"},"appId")," and ``appDescription inline because we don't have plans to reuse them anywhere else. Thus, their full definition is right here."),(0,l.yg)("li",{parentName:"ul"},"The question defined in ",(0,l.yg)("inlineCode",{parentName:"li"},"src/questions")," are referenced by their ",(0,l.yg)("inlineCode",{parentName:"li"},"name"),". Any property we might add here will override its corresponding value defined in the ",(0,l.yg)("inlineCode",{parentName:"li"},"src/questions/..."),"file.")),(0,l.yg)("p",null,"At this point we can see what the command help will look like:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npx clinext app new -h\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"Generate a CliNext app \ud83d\ude80\n\nOptions:\n  -n, -n, --appID                App ID                                                                                            [string] [default: \"myappID\"]\n      --appDescription           App description                                                                             [string] [default: \"A CliNext app\"]\n  -i, -i, --installDependencies  Install dependencies                                                                                  [boolean] [default: true]\n  -l, -l, --license              License                                                                                               [string] [default: \"MIT\"]\n  -p, -p, --packageManager       Package manager ('npm', 'yarn' or 'pnpm')                                                             [string] [default: \"npm\"]\n  -g, -g, --gitInit              Initialize a git repository                                                                           [boolean] [default: true]\n  -d, -d, --destination          Choose a destination                                                                                                   [string]\n\nExamples:\n  clinext app new --appID='MyApp'\n")),(0,l.yg)("h3",{id:"build-the-handler"},"Build the handler"),(0,l.yg)("p",null,"We can now build the command handler. Since we are going to generate a project, we'll need a good generator. We'll use the  ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/@clinext/chunk-extension"},(0,l.yg)("em",{parentName:"a"},"chunks extension"))," that's made for this task.\n#TODO"),(0,l.yg)("h2",{id:"create-the-extension-new--command"},"Create the ",(0,l.yg)("inlineCode",{parentName:"h2"},"extension new"),"  command"),(0,l.yg)("p",null,"#TODO"),(0,l.yg)("h2",{id:"release"},"Release"),(0,l.yg)("p",null,"The project is available at ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/clinext-org/generator"},"https://github.com/clinext-org/generator")),(0,l.yg)("h2",{id:"summary"},"Summary"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To ..., do ..."),(0,l.yg)("li",{parentName:"ul"},"...")))}d.isMDXComponent=!0},48172:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/clinextgenerator-580274aaaeaf13500b5f53059bc32539.png"}}]);
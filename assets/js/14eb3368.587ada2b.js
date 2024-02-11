"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[9576],{90992:(e,t,a)=>{a.d(t,{c:()=>E});var n=a(45072),r=a(11504),i=a(14971),c=a(55808),l=a(32696),s=a(75253),o=a(49344),m=a(57932),d=a(89908);function u(e){return r.createElement("svg",(0,n.c)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.c)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.c,{"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.c,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:c,addMicrodata:l}=e;return r.createElement("li",(0,n.c)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.c)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(c+1)}))}function E(){const e=(0,l.js)(),t=(0,s.Y5)();return e?r.createElement("nav",{className:(0,i.c)(c.W.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},1912:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(11504),r=a(8920),i=a(32696),c=a(89908),l=a(14971),s=a(49344),o=a(40628),m=a(57932);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(s.c,{href:t,className:(0,l.c)("card padding--lg",d.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,l.c)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,l.c)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i.OQ)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const a=(0,o.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i._4)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,i.wt)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,i.ML)(t);return n.createElement("section",{className:(0,l.c)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}var f=a(82680),N=a(86668),k=a(44804),_=a(90992),L=a(30028);const T={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function y(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.U7,{title:t.title,description:t.description,keywords:t.keywords,image:(0,c.c)(t.image)})}function x(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.wt)();return n.createElement("div",{className:T.generatedIndexPage},n.createElement(N.c,null),n.createElement(_.c,null),n.createElement(k.c,null),n.createElement("header",null,n.createElement(L.c,{as:"h1",className:T.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:T.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(f.c,{previous:t.navigation.previous,next:t.navigation.next})))}function w(e){return n.createElement(n.Fragment,null,n.createElement(y,e),n.createElement(x,e))}},82680:(e,t,a)=>{a.d(t,{c:()=>l});var n=a(45072),r=a(11504),i=a(57932),c=a(31152);function l(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c.c,(0,n.c)({},t,{subLabel:r.createElement(i.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c.c,(0,n.c)({},a,{subLabel:r.createElement(i.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44804:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(11504),r=a(14971),i=a(57932),c=a(55808),l=a(23004);function s(e){let{className:t}=e;const a=(0,l.E)();return a.badge?n.createElement("span",{className:(0,r.c)(t,c.W.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},86668:(e,t,a)=>{a.d(t,{c:()=>g});var n=a(11504),r=a(14971),i=a(54596),c=a(49344),l=a(57932),s=a(80676),o=a(55808),m=a(62348),d=a(23004);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(l.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(l.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(l.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(c.c,{to:a,onClick:r},n.createElement(l.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:c}}=(0,i.c)(),{pluginId:l}=(0,s.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,m.iy)(l),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,s.i8)(l),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.c)(t,o.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:c,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},30028:(e,t,a)=>{a.d(t,{c:()=>m});var n=a(45072),r=a(11504),i=a(14971),c=a(57932),l=a(53912),s=a(49344);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,l.y)();if("h1"===t||!a)return r.createElement(t,(0,n.c)({},m,{id:void 0}));const u=(0,c.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.c)({},m,{className:(0,i.c)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(s.c,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},31152:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(11504),r=a(14971),i=a(49344);function c(e){const{permalink:t,title:a,subLabel:c,isNext:l}=e;return n.createElement(i.c,{className:(0,r.c)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&n.createElement("div",{className:"pagination-nav__sublabel"},c),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);
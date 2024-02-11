"use strict";(self.webpackChunkclinext=self.webpackChunkclinext||[]).push([[4212],{35024:(e,t,a)=>{a.d(t,{c:()=>h});var l=a(11504),n=a(14971),r=a(78206),i=a(69936),s=a(49344),c=a(57932);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.c)(o.sidebar,"thin-scrollbar"),"aria-label":(0,c.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.c)(o.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.c)(o.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o.sidebarItem},l.createElement(s.c,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var u=a(18392);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Mx,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,i.U)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:i,...s}=e,c=t&&t.items.length>0;return l.createElement(r.c,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.c)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},73472:(e,t,a)=>{a.d(t,{c:()=>B});var l=a(11504),n=a(14971),r=a(26064),i=a(89908);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s,metadata:{description:c}}=(0,r.g)(),{withBaseUrl:o}=(0,i.E)(),m=s.image??n.image,u=n.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"description",content:c}),m&&l.createElement("link",{itemProp:"image",href:o(m,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var c=a(49344);const o={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.g)(),{permalink:s,title:m}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.c)(o.title,t),itemProp:"headline"},i?m:l.createElement(c.c,{itemProp:"url",to:s},m))}var u=a(57932),d=a(45648);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.A)();return t=>{const a=Math.ceil(t);return e(a,(0,u.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.g)(),{date:i,formattedDate:s,readingTime:c}=a;return l.createElement("div",{className:(0,n.c)(g.container,"margin-vert--md",t)},l.createElement(h,{date:i,formattedDate:s}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:c})))}function f(e){return e.href?l.createElement(c.c,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:s,imageURL:c,email:o}=t,m=s||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:(0,n.c)("avatar margin-bottom--sm",a)},c&&l.createElement(f,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:r,itemProp:"image"})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.g)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.c)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.c)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function P(){return l.createElement("header",null,l.createElement(m,null),l.createElement(b,null),l.createElement(_,null))}var k=a(53989),w=a(37312);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.g)();return l.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,n.c)("markdown",a),itemProp:"articleBody"},l.createElement(w.c,null,t))}var y=a(50312),I=a(23800),F=a(45072);function L(){return l.createElement("b",null,l.createElement(u.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function C(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.c,(0,F.c)({"aria-label":(0,u.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(L,null))}const x={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function A(){const{metadata:e,isBlogPostPage:t}=(0,r.g)(),{tags:a,title:i,editUrl:s,hasTruncateMarker:c}=e,o=!t&&c,m=a.length>0;return m||o||s?l.createElement("footer",{className:(0,n.c)("row docusaurus-mt-lg",t&&x.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.c)("col",{"col--9":o})},l.createElement(I.c,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.c,{editUrl:s})),o&&l.createElement("div",{className:(0,n.c)("col text--right",{"col--3":m})},l.createElement(C,{blogPostTitle:i,to:e.permalink}))):null}function B(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.g)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.c)(i,a)},l.createElement(P,null),l.createElement(T,null,t),l.createElement(A,null))}},50312:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(11504),n=a(57932),r=a(55808),i=a(45072),s=a(14971);const c={iconEdit:"iconEdit_Z9Sw"};function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,i.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.c)(c.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.W.common.editThisPage},l.createElement(o,null),l.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},31152:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(11504),n=a(14971),r=a(49344);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return l.createElement(r.c,{className:(0,n.c)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},83736:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(11504),n=a(14971),r=a(49344);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.c,{href:t,className:(0,n.c)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&l.createElement("span",null,s))}},23800:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(11504),n=a(14971),r=a(57932),i=a(83736);const s={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.c)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(i.c,{label:t,permalink:a}))}))))}},26064:(e,t,a)=>{a.d(t,{E:()=>i,g:()=>s});var l=a(11504),n=a(21352);const r=l.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:i},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.AH("BlogPostProvider");return e}},45648:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(11504),n=a(54596),r=a(10320);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.c)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return r.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&r.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),i=a.pluralForms.indexOf(n);return l[Math.min(i,l.length-1)]}(a,t,e)}}}}]);
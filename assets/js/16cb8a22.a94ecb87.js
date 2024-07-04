"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2584],{7293:(o,t,e)=>{e.d(t,{A:()=>_});var n=e(6540),s=e(4848);function r(o){const{mdxAdmonitionTitle:t,rest:e}=function(o){const t=n.Children.toArray(o),e=t.find((o=>n.isValidElement(o)&&"mdxAdmonitionTitle"===o.type)),r=t.filter((o=>o!==e)),c=e?.props.children;return{mdxAdmonitionTitle:c,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(o.children),r=o.title??t;return{...o,...r&&{title:r},children:e}}var c=e(8215),l=e(1312),i=e(7559);const p={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function a(o){let{type:t,className:e,children:n}=o;return(0,s.jsx)("div",{className:(0,c.A)(i.G.common.admonition,i.G.common.admonitionType(t),p.admonition,e),children:n})}function d(o){let{icon:t,title:e}=o;return(0,s.jsxs)("div",{className:p.admonitionHeading,children:[(0,s.jsx)("span",{className:p.admonitionIcon,children:t}),e]})}function y(o){let{children:t}=o;return t?(0,s.jsx)("div",{className:p.admonitionContent,children:t}):null}function h(o){const{type:t,icon:e,title:n,children:r,className:c}=o;return(0,s.jsxs)(a,{type:t,className:c,children:[n||e?(0,s.jsx)(d,{title:n,icon:e}):null,(0,s.jsx)(y,{children:r})]})}function D(o){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const F={icon:(0,s.jsx)(D,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(o){return(0,s.jsx)(h,{...F,...o,className:(0,c.A)("alert alert--secondary",o.className),children:o.children})}function g(o){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const m={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function C(o){return(0,s.jsx)(h,{...m,...o,className:(0,c.A)("alert alert--success",o.className),children:o.children})}function f(o){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function j(o){return(0,s.jsx)(h,{...x,...o,className:(0,c.A)("alert alert--info",o.className),children:o.children})}function k(o){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const A={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function b(o){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const v={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const w={...{note:u,tip:C,info:j,warning:function(o){return(0,s.jsx)(h,{...A,...o,className:(0,c.A)("alert alert--warning",o.className),children:o.children})},danger:function(o){return(0,s.jsx)(h,{...v,...o,className:(0,c.A)("alert alert--danger",o.className),children:o.children})}},...{secondary:o=>(0,s.jsx)(u,{title:"secondary",...o}),important:o=>(0,s.jsx)(j,{title:"important",...o}),success:o=>(0,s.jsx)(C,{title:"success",...o}),caution:function(o){return(0,s.jsx)(h,{...N,...o,className:(0,c.A)("alert alert--warning",o.className),children:o.children})}}};var B=e(6763);function _(o){const t=r(o),e=(n=t.type,w[n]||(B.warn(`No admonition component found for admonition type "${n}". Using Info as fallback.`),w.info));var n;return(0,s.jsx)(e,{...t})}},7533:(o,t,e)=>{e.d(t,{A:()=>l});var n=e(6540),s=e(1122),r=e(6025),c=e(4848);const l=o=>{let{alt:t,sources:e,style:l}=o;const[i,p]=(0,n.useState)(!1),a=o=>{"Escape"===o.key&&p(!1)};(0,n.useEffect)((()=>(i?document.addEventListener("keydown",a):document.removeEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)})),[i]);return(0,c.jsx)("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{p(!i)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...l},children:(0,c.jsx)(s.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,r.Ay)(e.light),dark:(0,r.Ay)(e.dark)}})})}},5105:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>y,assets:()=>d,chCodeConfig:()=>h,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>D});e(6540);var n=e(4848),s=e(8453),r=e(4754),c=e(7293),l=(e(1122),e(6025),e(7533));const i={},p="Page Create",a={id:"integrations/notion/page-create",title:"Page Create",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/integrations/notion/page-create.md",sourceDirName:"integrations/notion",slug:"/integrations/notion/page-create",permalink:"/integrations/notion/page-create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"User List",permalink:"/integrations/notion/list-users"},next:{title:"Add Content To Page",permalink:"/integrations/notion/add-content-to-page"}},d={},y={annotations:r.hk,Code:r.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},D=[{value:"Component Usage",id:"component-usage",level:2},{value:"Component Python Code",id:"component-python-code",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function F(o){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",ol:"ol"},(0,s.RP)(),o.components);return y||g("CH",!1),y.Code||g("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(t.h1,{id:"page-create",children:"Page Create"}),"\n",(0,n.jsx)(c.A,{type:"warning",title:"warning",children:(0,n.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component creates pages in a Notion database. It provides a convenient way to integrate Notion page creation into your Langflow workflows."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://developers.notion.com/reference/patch-block-children",children:"Notion Reference"})}),"\n",(0,n.jsxs)(c.A,{type:"tip",title:"Component Functionality",children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component enables you to:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create new pages in a specified Notion database"}),"\n",(0,n.jsx)(t.li,{children:"Set custom properties for the created pages"}),"\n",(0,n.jsx)(t.li,{children:"Retrieve the ID and URL of the newly created pages"}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"component-usage",children:"Component Usage"}),"\n",(0,n.jsxs)(t.p,{children:["To use the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component in a Langflow flow, follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component to your flow."]}),"\n",(0,n.jsxs)(t.li,{children:["Configure the component by providing the required inputs:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"database_id"}),": The ID of the Notion database where the pages will be created."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"notion_secret"}),": The Notion integration token for authentication."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"properties"}),": The properties of the new page, specified as a JSON string."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Connect the component to other components in your flow as needed."}),"\n",(0,n.jsx)(t.li,{children:"Run the flow to create Notion pages based on the configured inputs."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"component-python-code",children:"Component Python Code"}),"\n",(0,n.jsx)(y.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" json",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" typing ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Optional",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" requests",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.custom ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" CustomComponent",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"class ",props:{style:{color:"#FF7B72"}}},{content:"NotionPageCreator",props:{style:{color:"#FFA657"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"CustomComponent",props:{style:{color:"#79C0FF"}}},{content:"):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    display_name ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"Create Page [Notion]"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    description ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"A component for creating Notion pages."',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    documentation: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"https://docs.langflow.org/integrations/notion/page-create"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    icon ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"NotionDirectoryLoader"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    def ",props:{style:{color:"#FF7B72"}}},{content:"build_config",props:{style:{color:"#D2A8FF"}}},{content:"(self):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        return",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "database_id"',props:{style:{color:"#A5D6FF"}}},{content:": {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "display_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Database ID"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "field_type"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"str"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "info"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"The ID of the Notion database."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            },",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "notion_secret"',props:{style:{color:"#A5D6FF"}}},{content:": {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "display_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Notion Secret"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "field_type"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"str"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "info"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"The Notion integration token."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "password"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"True",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            },",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "properties"',props:{style:{color:"#A5D6FF"}}},{content:": {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "display_name"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Properties"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "field_type"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"str"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'                "info"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"\"The properties of the new page. Depending on your database setup, this can change. E.G: {'Task name': {'id': 'title', 'type': 'title', 'title': [{'type': 'text', 'text': {'content': 'Send Notion Components to LF', 'link': null",props:{style:{color:"#A5D6FF"}}},{content:"}}",props:{style:{color:"#79C0FF"}}},{content:"]",props:{style:{color:"#A5D6FF"}}},{content:"}}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            },",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    def ",props:{style:{color:"#FF7B72"}}},{content:"build",props:{style:{color:"#D2A8FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        self,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        database_id: ",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        notion_secret: ",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        properties: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'\'{"Task name": {"id": "title", "type": "title", "title": [{"type": "text", "text": {"content": "Send Notion Components to LF", "link": null',props:{style:{color:"#A5D6FF"}}},{content:"}}",props:{style:{color:"#79C0FF"}}},{content:"]",props:{style:{color:"#A5D6FF"}}},{content:"}}",props:{style:{color:"#79C0FF"}}},{content:"'",props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ) -> ",props:{style:{color:"#C9D1D9"}}},{content:"str",props:{style:{color:"#79C0FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        if not",props:{style:{color:"#FF7B72"}}},{content:" database_id ",props:{style:{color:"#C9D1D9"}}},{content:"or not",props:{style:{color:"#FF7B72"}}},{content:" properties:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            raise ",props:{style:{color:"#FF7B72"}}},{content:"ValueError",props:{style:{color:"#79C0FF"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"\"Invalid input. Please provide 'database_id' and 'properties'.\"",props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        headers ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "Authorization"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"f",props:{style:{color:"#FF7B72"}}},{content:'"Bearer ',props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"notion_secret",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "Content-Type"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"application/json"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "Notion-Version"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"2022-06-28"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "parent"',props:{style:{color:"#A5D6FF"}}},{content:": {",props:{style:{color:"#C9D1D9"}}},{content:'"database_id"',props:{style:{color:"#A5D6FF"}}},{content:": database_id},",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "properties"',props:{style:{color:"#A5D6FF"}}},{content:": json.loads(properties),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        response ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" requests.post(",props:{style:{color:"#C9D1D9"}}},{content:'"https://api.notion.com/v1/pages"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"headers",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"headers, ",props:{style:{color:"#C9D1D9"}}},{content:"json",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"data)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        if",props:{style:{color:"#FF7B72"}}},{content:" response.status_code ",props:{style:{color:"#C9D1D9"}}},{content:"== ",props:{style:{color:"#FF7B72"}}},{content:"200",props:{style:{color:"#79C0FF"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            page_id ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" response.json()[",props:{style:{color:"#C9D1D9"}}},{content:'"id"',props:{style:{color:"#A5D6FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            self",props:{style:{color:"#79C0FF"}}},{content:".status ",props:{style:{color:"#C9D1D9"}}},{content:"= f",props:{style:{color:"#FF7B72"}}},{content:'"Successfully created Notion page with ID: ',props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"page_id",props:{style:{color:"#C9D1D9"}}},{content:"}\\n {str",props:{style:{color:"#79C0FF"}}},{content:"(response.json())",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"            return",props:{style:{color:"#FF7B72"}}},{content:" response.json()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        else",props:{style:{color:"#FF7B72"}}},{content:":",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            error_message ",props:{style:{color:"#C9D1D9"}}},{content:"= f",props:{style:{color:"#FF7B72"}}},{content:'"Failed to create Notion page. Status code: ',props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"response.status_code",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:", Error: ",props:{style:{color:"#A5D6FF"}}},{content:"{",props:{style:{color:"#79C0FF"}}},{content:"response.text",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#79C0FF"}}},{content:'"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"            self",props:{style:{color:"#79C0FF"}}},{content:".status ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" error_message",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            raise ",props:{style:{color:"#FF7B72"}}},{content:"Exception",props:{style:{color:"#79C0FF"}}},{content:"(error_message)",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsxs)(c.A,{type:"info",title:"Example Usage",children:[(0,n.jsxs)(t.p,{children:["Here's an example of how to use the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component in a Langflow flow:"]}),(0,n.jsx)(l.A,{alt:"NotionPageCreator Flow Example",sources:{light:"img/notion/NotionPageCreator_flow_example.png",dark:"img/notion/NotionPageCreator_flow_example_dark.png"},style:{width:"100%",margin:"20px 0"}})]}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component, consider the following best practices:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure that you have a valid Notion integration token with the necessary permissions to create pages in the specified database."}),"\n",(0,n.jsxs)(t.li,{children:["Properly format the ",(0,n.jsx)(t.code,{children:"properties"})," input as a JSON string, matching the structure and field types of your Notion database."]}),"\n",(0,n.jsx)(t.li,{children:"Handle any errors or exceptions that may occur during the page creation process and provide appropriate error messages."}),"\n",(0,n.jsx)(t.li,{children:"To avoid the hassle of messing with JSON, we recommend using the LLM to create the JSON for you as input."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component simplifies the process of creating pages in a Notion database directly from your Langflow workflows. By leveraging this component, you can seamlessly integrate Notion page creation functionality into your automated processes, saving time and effort. Feel free to explore the capabilities of the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component and adapt it to suit your specific requirements."]}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(t.p,{children:["If you encounter any issues while using the ",(0,n.jsx)(t.code,{children:"NotionPageCreator"})," component, consider the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Double-check that the ",(0,n.jsx)(t.code,{children:"database_id"})," and ",(0,n.jsx)(t.code,{children:"notion_secret"})," inputs are correct and valid."]}),"\n",(0,n.jsxs)(t.li,{children:["Verify that the ",(0,n.jsx)(t.code,{children:"properties"})," input is properly formatted as a JSON string and matches the structure of your Notion database."]}),"\n",(0,n.jsx)(t.li,{children:"Check the Notion API documentation for any updates or changes that may affect the component's functionality."}),"\n"]})]})}const u=function(o={}){const{wrapper:t}=Object.assign({},(0,s.RP)(),o.components);return t?(0,n.jsx)(t,Object.assign({},o,{children:(0,n.jsx)(F,o)})):F(o)};function g(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
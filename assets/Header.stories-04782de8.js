import{j as e,a as r,F as s}from"./jsx-runtime-e6a661ac.js";import{B as l}from"./Button-bd1b5708.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const t=({user:n,onLogin:g,onLogout:h,onCreateAccount:f})=>e("header",{children:r("div",{className:"storybook-header",children:[r("div",{children:[e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:r("g",{fill:"none",fillRule:"evenodd",children:[e("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e("h1",{children:"Acme"})]}),e("div",{children:n?r(s,{children:[r("span",{className:"welcome",children:["Welcome, ",e("b",{children:n.name}),"!"]}),e(l,{size:"small",onClick:h,label:"Log out"})]}):r(s,{children:[e(l,{size:"small",onClick:g,label:"Log in"}),e(l,{primary:!0,size:"small",onClick:f,label:"Sign up"})]})})]})});try{t.displayName="Header",t.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}}}catch{}const z={title:"Example/Header",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},a={args:{user:{name:"Jane Doe"}}},o={};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const w=["LoggedIn","LoggedOut"];export{a as LoggedIn,o as LoggedOut,w as __namedExportsOrder,z as default};
//# sourceMappingURL=Header.stories-04782de8.js.map
(this.webpackJsonpintrocomponent=this.webpackJsonpintrocomponent||[]).push([[0],{12:function(e,r,a){"use strict";a.r(r);var s=a(1),t=a.n(s),l=a(6),o=a.n(l),c=a(2),n=a(4),i=a(5),m=a(0);var j=function(e){return Object(m.jsx)("input",{class:e.class,type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:function(r){e.onChange(r)}})};var p=function(e){return Object(m.jsx)("span",{class:e.top?"glyphicon glyphicon-remove cross":"top",children:Object(m.jsx)("svg",{children:Object(m.jsx)("image",{href:"../../images/icon-error.svg",height:"22",width:"20"})})})};var d=function(){var e=Object(s.useState)({errorFName:!0,errorLName:!0,errorEmail:!0,errorPassword:!0,globalError:!0}),r=Object(i.a)(e,2),a=r[0],t=r[1],l=Object(s.useState)({fName:"",lName:"",email:"",password:""}),o=Object(i.a)(l,2),d=o[0],h=o[1];function b(e){var r=e.target.name,a=e.target.value;h((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(c.a)({},r,a))}))}return Object(m.jsxs)("div",{class:a.globalError?"formPart":"formPartError",children:[Object(m.jsxs)("form",{method:"post",children:[Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{class:"form-group",children:[Object(m.jsx)(j,{class:a.errorFName?"thing topThing":"topThing thing",name:"fName",type:"text",placeholder:a.errorFName?"First Name":null,value:d.fName,onChange:b}),a.errorFName?null:Object(m.jsx)("p",{class:"errorMessage",children:"First Name cannot be empty"}),a.errorFName?null:Object(m.jsx)(p,{class:a.errorFName?"glyphicon glyphicon-remove cross":"top"})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{class:"form-group",children:[Object(m.jsx)(j,{class:(a.errorLName,"thing"),name:"lName",type:"text",placeholder:a.errorLName?"Last Name":null,value:d.lName,onChange:b}),a.errorLName?null:Object(m.jsx)("p",{class:"errorMessage",children:"Last Name cannot be empty"}),a.errorLName?null:Object(m.jsx)(p,{top:"false"})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{class:"form-group",children:[Object(m.jsx)(j,{class:a.errorEmail?"thing":"thing emailWrong ",name:"email",type:"email",placeholder:a.errorEmail?"Email":"email@example/com",value:d.email,onChange:b}),a.errorEmail?null:Object(m.jsx)("p",{class:"errorMessage",children:"Looks like this is not an email"}),a.errorEmail?null:Object(m.jsx)(p,{top:"false"})]})}),Object(m.jsx)("div",{class:"mb-3",children:Object(m.jsxs)("div",{class:"form-group",children:[Object(m.jsx)(j,{class:(a.errorPassword,"thing"),name:"password",type:"password",placeholder:a.errorPassword?"Password":null,value:d.password,onChange:b}),a.errorPassword?null:Object(m.jsx)("p",{class:"errorMessage",children:"Password cannot be empty"}),a.errorPassword?null:Object(m.jsx)(p,{top:"false"})]})}),Object(m.jsx)("button",{class:"button",type:"submit",onClick:function(e){var r,a={emptyFName:!0,emptyLName:!0,emptyEmail:!0,emptyPassword:!0,globalError:!1};""===d.fName&&(a.emptyFName=!1,a.globalError=!0),""===d.lName&&(a.emptyLName=!1,a.globalError=!0),""===d.email&&(a.emptyEmail=!1,a.globalError=!0),""===d.password&&(a.emptyPassword=!1,a.globalError=!0),a.emptyFName&&a.emptyLName&&a.emptymail&&a.emptyassword||t({errorFName:(r=a).emptyFName,errorLName:r.emptyLName,errorEmail:r.emptyEmail,errorPassword:r.emptyPassword,globalError:r.emptyglobalError}),e.preventDefault()},children:"CLAIM YOUR FREE TRIAL"})]}),Object(m.jsxs)("p",{class:"formFootP",children:["By clicking the button, you are agreeing to our"," ",Object(m.jsx)("a",{class:"anchor",children:"Terms and Services"})]})]})};var h=function(){return Object(m.jsx)("div",{class:"message",children:Object(m.jsx)("p",{class:"bannerText",children:"Try it free 7 days then $20/mo.thereafter"})})};var b=function(){return Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)(h,{}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"col-6 leftText",children:[Object(m.jsx)("h1",{class:"header",children:"Learn to code by watching others"}),Object(m.jsx)("p",{class:"paragraph",children:"See how experienced developers solve problems in real-time."}),Object(m.jsx)("p",{class:"paragraph",children:"Watching scripted tutorials is great, but understanding how"}),Object(m.jsx)("p",{class:"paragraph",children:"developers think is invaluable"})]}),Object(m.jsx)("div",{class:"col-6",children:Object(m.jsx)(d,{})})]})]})};o.a.render(Object(m.jsx)(t.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.01db5fe1.chunk.js.map
(this["webpackJsonpcards-project"]=this["webpackJsonpcards-project"]||[]).push([[0],{15:function(e,t,n){e.exports={loginGroup:"LoginForm_loginGroup__1-DhW",rememberMeLabel:"LoginForm_rememberMeLabel__1Zjjg"}},18:function(e,t,n){e.exports={radio_wrapper:"CustomRadio_radio_wrapper__2csJO",label:"CustomRadio_label__dv_Q7",radio:"CustomRadio_radio__39bWq",text:"CustomRadio_text__3nabw",design:"CustomRadio_design__3xiGN"}},20:function(e,t,n){e.exports={loginLink:"navlinkStyling_loginLink__ZVbKO"}},21:function(e,t,n){e.exports={checkboxLabel:"CustomCheckbox_checkboxLabel__2j4wa",checkbox:"CustomCheckbox_checkbox__-WVPU",customSpan:"CustomCheckbox_customSpan__3LJe1"}},24:function(e,t,n){e.exports={input_container:"CustomInput_input_container__3QSF7",superInput:"CustomInput_superInput__2d6Um",fadeIn:"CustomInput_fadeIn__3h5xZ",errorInput:"CustomInput_errorInput__33rO6",error:"CustomInput_error__2toCC"}},25:function(e,t,n){e.exports={error_page:"ErrorPage_error_page__1JMk3",title_404:"ErrorPage_title_404__2TK1J",title:"ErrorPage_title__3KXLX"}},29:function(e,t,n){e.exports={default:"CustomButton_default__sFbn4",fadeIn:"CustomButton_fadeIn__2Hen-",red:"CustomButton_red__14ffV"}},44:function(e,t,n){e.exports={testContainer:"TestComponent_testContainer__tijZz"}},45:function(e,t,n){e.exports={forgotForm:"ForgotForm_forgotForm__3Yds1"}},46:function(e,t,n){e.exports={snackbar:"CustomSnackbar_snackbar__3ASh3",fadein:"CustomSnackbar_fadein__1KaRy",fadeout:"CustomSnackbar_fadeout__1NqJB"}},47:function(e,t,n){e.exports={preloaderContainer:"CustomPreloader_preloaderContainer__1xumz"}},48:function(e,t,n){e.exports={setPasswordPage:"SetPasswordForm_setPasswordPage__2U4iw"}},49:function(e,t,n){e.exports={mainContainer:"Main_mainContainer__1V-Yf",animation:"Main_animation__RFjm4"}},54:function(e,t,n){},7:function(e,t,n){e.exports={nav_bar:"Header_nav_bar__3fhKf",nav_container:"Header_nav_container__WKhEF",nav_link:"Header_nav_link__VnHL2",fill:"Header_fill__EoQTU",current:"Header_current__2wyH0"}},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(22),c=n.n(s),o=(n(54),n(4)),i=n(5),u=n(2),l={error:"",loading:!1,success:!1},j=n(17),b=n(43),d={error:"",loading:!1,success:!0,message:""},O={},p=n(12),f=n.n(p),h=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),g=function(e,t){return h.post("/auth/register",{email:e,password:t})},m=function(e){return{type:"register/IS-REGISTER",isRegister:e}},x={isRegister:!1},_={error:"",responseMessage:"",success:!0},v=Object(j.c)({forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forgot/SET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});case"forgot/SET_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{success:t.success});case"forgot/SET_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{message:t.message});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error,loading:!1,success:!1});case"login/SET_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{error:"",loading:!1,success:t.success});case"login/SET_LOADING":return Object(u.a)(Object(u.a)({},e),{},{error:"",loading:t.loading,success:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type,e},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/IS-REGISTER":return Object(u.a)(Object(u.a)({},e),{},{isRegister:t.isRegister});default:return e}},setPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPass/SET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});case"setPass/SET_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{success:t.success});case"setPass/SET_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{responseMessage:t.message});default:return e}}}),C=Object(j.d)(v,Object(j.a)(b.a)),S=C;window.store=C;var E=n(3),k=n(13),N=n(29),w=n.n(N),y=n(0),R=function(e){var t=e.red,n=e.className,r=Object(k.a)(e,["red","className"]),a="".concat(t?w.a.red:w.a.default," ").concat(n);return Object(y.jsx)("button",Object(u.a)({className:a},r))},T=n(21),P=n.n(T),F=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),s=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(P.a.checkbox," ").concat(r||"");return Object(y.jsxs)("label",{className:P.a.checkboxLabel,children:[Object(y.jsx)("input",Object(u.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:c},s)),Object(y.jsx)("span",{className:P.a.customSpan}),a&&Object(y.jsx)("span",{className:P.a.spanClassName,children:a})]})},L=n(24),I=n.n(L),G=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,a=e.onKeyPress,s=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(I.a.error," ").concat(o||""),j="".concat(c?"":I.a.superInput);return Object(y.jsxs)("div",{className:I.a.input_container,children:[Object(y.jsx)("input",Object(u.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&s&&s()},className:j},i)),c&&Object(y.jsx)("span",{className:l,children:c})]})},M=n(18),U=n.n(M),H=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=(e.onChange,e.onChangeOption),s=(Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e.currentTarget.value)}),c=n?n.map((function(e,n){return Object(y.jsxs)("label",{className:U.a.label,children:[Object(y.jsx)("input",{className:U.a.radio,name:t,onChange:s,type:"radio",value:e,checked:r===e}),Object(y.jsx)("div",{className:U.a.design}),Object(y.jsx)("span",{className:U.a.text,children:e})]},t+"-"+n)})):[];return Object(y.jsx)("div",{className:U.a.radio_wrapper,children:c})},A=n(44),K=n.n(A),B=function(){return Object(y.jsxs)("div",{className:K.a.testContainer,children:[Object(y.jsx)(R,{children:"test"}),Object(y.jsx)(F,{}),Object(y.jsx)(G,{}),Object(y.jsx)(H,{options:[1,2]})]})},J=n(6),V=n(20),Y=n.n(V),q=n(45),z=n.n(q),D=function(e){var t=Object(r.useState)(""),n=Object(J.a)(t,2),a=n[0],s=n[1];return Object(y.jsxs)("div",{className:z.a.forgotForm,children:[Object(y.jsx)("div",{children:"Your login"}),""!==e.error&&e.error,""!==e.message&&e.message,Object(y.jsx)(G,{type:"text",value:a,onChange:function(e){s(e.currentTarget.value)}}),Object(y.jsx)("div",{children:Object(y.jsx)(R,{onClick:function(){return e.forgot(a)},disabled:!e.success,children:"send"})}),Object(y.jsx)("div",{children:Object(y.jsx)(i.b,{to:"/login",className:Y.a.loginLink,children:"Login"})})]})},W=n(10),Z=n.n(W),Q=n(14),X=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),$=function(e){return X.post("/auth/forgot",{email:e,from:"roman",message:"<div style=\"background-color: black; border-radius: 15px; color: #FFFFFF; padding: 15px\">password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>"})},ee=function(e){return{type:"forgot/SET_ERROR",error:e}},te=function(e){return{type:"forgot/SET_SUCCESS",success:e}},ne=function(e){return{type:"forgot/SET_MESSAGE",message:e}},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.forgot.error})),n=Object(o.c)((function(e){return e.forgot.success})),r=Object(o.c)((function(e){return e.forgot.message}));return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(D,{forgot:function(t){e(function(e){return function(){var t=Object(Q.a)(Z.a.mark((function t(n){var r,a;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(te(!1)),t.next=4,$(e);case 4:r=t.sent,n(te(!0)),n(ne(r.data.info)),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),a=t.t0.response?t.t0.response.data.error:"Unknown error",n(ee(a)),n(te(!0));case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},error:t,success:n,message:r})})},ae=function(e){return{type:"login/SET_ERROR",error:e}},se=function(e){return{type:"login/SET_LOADING",loading:e}},ce=function(e){return{type:"login/SET_SUCCESS",success:e}},oe=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),ie=function(e){return oe.post("auth/login",e)},ue=function(){return oe.delete("auth/me")},le=function(){return oe.post("auth/me")},je=n(15),be=n.n(je),de=n(46),Oe=n.n(de),pe=Object(r.memo)((function(e){var t=e.title,n=e.timer,a=Object(r.useState)(!1),s=Object(J.a)(a,2),c=s[0],o=s[1];return Object(r.useEffect)((function(){o((function(){return!0}));var e=setTimeout((function(){o((function(){return!1}))}),n);return function(){clearTimeout(e)}}),[]),Object(y.jsx)(y.Fragment,{children:c&&Object(y.jsx)("div",{className:Oe.a.snackbar,children:t})})})),fe=n.p+"static/media/dbringload.46fb05e0.svg",he=n(47),ge=n.n(he),me=function(){return Object(y.jsx)("div",{className:ge.a.preloaderContainer,children:Object(y.jsx)("img",{src:fe,alt:"Loading..."})})},xe=Object(r.memo)((function(e){var t=e.login,n=e.error,a=Object(r.useState)({email:"nya-admin@nya.nya",password:"1qazxcvBG",rememberMe:!1}),s=Object(J.a)(a,2),c=s[0],l=s[1],j=Object(o.c)((function(e){return e.login.loading}));return Object(y.jsx)(y.Fragment,{children:j?Object(y.jsx)(me,{}):Object(y.jsxs)(y.Fragment,{children:[""!==n&&Object(y.jsx)(pe,{title:n,timer:3e3}),Object(y.jsxs)("div",{className:be.a.loginForm,children:[Object(y.jsxs)("div",{className:be.a.loginGroup,children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(y.jsx)(G,{onChange:function(e){l(Object(u.a)(Object(u.a)({},c),{},{email:e.target.value}))},value:c.email,type:"email",name:"email",id:"email"})]}),Object(y.jsxs)("div",{className:be.a.loginGroup,children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(y.jsx)(G,{onChange:function(e){l(Object(u.a)(Object(u.a)({},c),{},{password:e.target.value}))},value:c.password,type:"password",name:"password",id:"password"})]}),Object(y.jsxs)("div",{className:be.a.loginGroup,children:[Object(y.jsx)(F,{onChange:function(e){l(Object(u.a)(Object(u.a)({},c),{},{rememberMe:e.target.checked}))},checked:c.rememberMe}),Object(y.jsx)("label",{className:be.a.rememberMeLabel,children:"remember me"})]}),Object(y.jsx)("div",{className:be.a.loginGroup,children:Object(y.jsx)(R,{type:"submit",onClick:function(e){t(c)},disabled:j,children:"Sign in"})}),Object(y.jsxs)("div",{className:be.a.loginGroup,children:[Object(y.jsx)(i.b,{to:Ge.FORGOT,className:Y.a.loginLink,children:"forgot?"}),Object(y.jsx)(i.b,{to:Ge.REGISTER,className:Y.a.loginLink,children:"register"})]})]})]})})})),_e=Object(r.memo)((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.login.success})),n=Object(o.c)((function(e){return e.login.error}));Object(r.useEffect)((function(){e(ae(""))}),[e]);return t?Object(y.jsx)(E.a,{to:Ge.PROFILE}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(xe,{login:function(t){var n;e((n=t,function(){var e=Object(Q.a)(Z.a.mark((function e(t){var r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0)),e.prev=1,e.next=4,ie(n);case 4:e.sent,t(ce(!0)),t(se(!1)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(se(!1)),t(ae(r));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},error:n})})})),ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.login.success})),n=Object(o.c)((function(e){return e.login.loading})),a=Object(r.useState)(t),s=Object(J.a)(a,2),c=s[0],i=s[1];Object(r.useEffect)((function(){t||e(function(){var e=Object(Q.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0)),e.prev=1,e.next=4,le();case 4:200===e.sent.status&&(t(se(!1)),t(ce(!0))),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),n=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(se(!1)),t(ae(n));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var u=Object(r.useCallback)((function(){e(function(){var e=Object(Q.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0)),e.prev=1,e.next=4,ue();case 4:e.sent,t(se(!1)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),n=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(se(!1)),t(ae(n));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),i((function(){return!1}))}),[]);return c?Object(y.jsx)(y.Fragment,{children:n?Object(y.jsx)(me,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{children:"You are authorized"}),Object(y.jsx)(R,{onClick:u,disabled:n,children:"Log Out"})]})}):Object(y.jsx)(E.a,{to:Ge.LOGIN})},Ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.register.isRegister})),n=Object(r.useState)(""),a=Object(J.a)(n,2),s=a[0],c=a[1],u=Object(r.useState)(""),l=Object(J.a)(u,2),j=l[0],b=l[1],d=Object(r.useState)(""),O=Object(J.a)(d,2),p=O[0],f=O[1];return t?Object(y.jsx)(E.a,{to:"/login"}):Object(y.jsxs)(y.Fragment,{children:["Register Page",Object(y.jsx)(G,{value:s,onChange:function(e){c(e.currentTarget.value)},placeholder:"Enter your email"}),Object(y.jsx)(G,{value:j,onChange:function(e){b(e.currentTarget.value)},type:"password",placeholder:"Enter your pass"}),j!==p?Object(y.jsx)("div",{style:{color:"red"},children:"Passwords should be equal "}):null,Object(y.jsx)(G,{value:p,onChange:function(e){f(e.currentTarget.value)},type:"password",placeholder:"Repeat pass"}),Object(y.jsx)(R,{onClick:function(){e(function(e,t){return function(n){g(e,t).then((function(e){console.log("res"),n(m(!0))})).catch((function(e){console.log("error")}))}}(s,j))},children:"register"}),Object(y.jsx)(i.b,{to:Ge.LOGIN,children:"Sign in"})]})},Se=n(48),Ee=n.n(Se),ke=function(e){var t=Object(r.useState)(""),n=Object(J.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(""),o=Object(J.a)(c,2),i=o[0],u=o[1];return Object(y.jsxs)("div",{className:Ee.a.setPasswordPage,children:[""!==e.error&&e.error,""!==e.responseMessage&&e.responseMessage,Object(y.jsx)("div",{children:Object(y.jsx)(G,{type:"password",value:a,onChange:function(e){s(e.target.value)}})}),Object(y.jsx)("div",{children:Object(y.jsx)(G,{type:"password",value:i,onChange:function(e){u(e.target.value)}})}),Object(y.jsx)("div",{children:Object(y.jsx)(R,{onClick:function(){a===i?e.setNewPassword(a):e.setError("Passwords must match")},disabled:!e.success,children:"Set Password"})})]})},Ne=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),we=function(e,t){return Ne.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},ye=function(e){return{type:"setPass/SET_ERROR",error:e}},Re=function(e){return{type:"setPass/SET_SUCCESS",success:e}},Te=function(e){return{type:"setPass/SET_MESSAGE",message:e}},Pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.setPass.error})),n=Object(o.c)((function(e){return e.setPass.success})),r=Object(o.c)((function(e){return e.setPass.responseMessage})),a=Object(E.g)().id;return Object(y.jsx)(ke,{setNewPassword:function(t){a&&":id"!==a?e(function(e,t){return function(){var n=Object(Q.a)(Z.a.mark((function n(r){var a,s;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(Re(!1)),n.next=4,we(e,t);case 4:a=n.sent,r(Re(!1)),r(Te(a.data.info)),r(ye("")),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(0),s=n.t0.response?n.t0.response.data.error:"Unknown error",r(ye(s)),r(Re(!0));case 15:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(t,a)):":id"===a&&e(ye("If you want to change your password you should open this page using link"))},error:t,success:n,responseMessage:r,setError:function(t){e(ye(t))}})},Fe=n(25),Le=n.n(Fe),Ie=function(){return Object(y.jsxs)("div",{className:Le.a.error_page,children:[Object(y.jsx)("div",{className:Le.a.title_404,children:"404"}),Object(y.jsx)("div",{className:Le.a.title,children:"UH OH! You're lost. \u0e05/\u1420.\u032b .\u141f\\\u0e05"}),Object(y.jsxs)("span",{children:["The page you are looking for does not exist. ",Object(y.jsx)("br",{}),"How you got here is a mystery! ",Object(y.jsx)("br",{}),"But you can choose the section above and have fun there!"]})]})},Ge={HOME:"/",LOGIN:"/login",REGISTER:"/register",PROFILE:"/profile",FORGOT:"/forgot",SET_PASS:"/set-new-password/:id",TEST:"/test",ERROR_PAGE:"/404"},Me=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(E.d,{children:[Object(y.jsx)(E.b,{path:Ge.HOME,exact:!0,render:function(){return Object(y.jsx)(E.a,{to:Ge.TEST})}}),Object(y.jsx)(E.b,{path:Ge.LOGIN,render:function(){return Object(y.jsx)(_e,{})}}),Object(y.jsx)(E.b,{path:Ge.REGISTER,render:function(){return Object(y.jsx)(Ce,{})}}),Object(y.jsx)(E.b,{path:Ge.PROFILE,render:function(){return Object(y.jsx)(ve,{})}}),Object(y.jsx)(E.b,{path:Ge.FORGOT,render:function(){return Object(y.jsx)(re,{})}}),Object(y.jsx)(E.b,{path:Ge.SET_PASS,render:function(){return Object(y.jsx)(Pe,{})}}),Object(y.jsx)(E.b,{path:Ge.TEST,render:function(){return Object(y.jsx)(B,{})}}),Object(y.jsx)(E.b,{render:function(){return Object(y.jsx)(Ie,{})}})]})})},Ue=n(7),He=n.n(Ue),Ae=function(){return Object(y.jsx)("div",{className:He.a.nav_container,children:Object(y.jsxs)("div",{className:He.a.nav_bar,children:[Object(y.jsx)(i.b,{to:Ge.TEST,className:He.a.nav_link,activeClassName:He.a.current,children:"Home"}),Object(y.jsx)(i.b,{to:Ge.LOGIN,className:He.a.nav_link,activeClassName:He.a.current,children:"Login"}),Object(y.jsx)(i.b,{to:Ge.REGISTER,className:He.a.nav_link,activeClassName:He.a.current,children:"Register"}),Object(y.jsx)(i.b,{to:Ge.PROFILE,className:He.a.nav_link,activeClassName:He.a.current,children:"Profile"}),Object(y.jsx)(i.b,{to:Ge.FORGOT,className:He.a.nav_link,activeClassName:He.a.current,children:"Forgot"}),Object(y.jsx)(i.b,{to:Ge.SET_PASS,className:He.a.nav_link,activeClassName:He.a.current,children:"Set Password"})]})})},Ke=n(49),Be=n.n(Ke),Je=function(){return Object(y.jsxs)("div",{className:Be.a.mainContainer,children:[Object(y.jsx)(Ae,{}),Object(y.jsx)(Me,{})]})},Ve=(n(80),function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(i.a,{children:Object(y.jsx)(o.a,{store:S,children:Object(y.jsx)(Je,{})})})})})}),Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Ve,{})}),document.getElementById("root")),Ye()}},[[81,1,2]]]);
//# sourceMappingURL=main.6c7491f6.chunk.js.map
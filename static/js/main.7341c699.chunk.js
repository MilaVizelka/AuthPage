(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),r=s.n(n),c=s(10),l=s.n(c),i=(s(17),s(2)),o=s(3),h=s(4),u=s(5),d=s(8),b=s(7),m=s(11),j=s(6),g=(s(18),function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={checked:!1},e.onToggleSwitchChange=e.onToggleSwitchChange.bind(Object(j.a)(e)),e}return Object(u.a)(s,[{key:"onToggleSwitchChange",value:function(){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"toggleSwitch toggleSwitch__rounded",children:Object(a.jsxs)("div",{className:"toggleSwitch__wrapper",children:[Object(a.jsx)("div",{className:"Slider ".concat(this.state.checked&&"isChecked"),onClick:this.onToggleSwitchChange}),Object(a.jsx)("p",{style:{marginLeft:"5px"},children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"})]})})}}]),s}(r.a.Component)),p=(s(19),function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).validate=function(e,t){switch(e){case"mobile":return 19!==t.length?Object(a.jsx)("label",{className:"formAuth__labelStyle",style:{position:"absolute",right:"5px",top:"15px"},children:Object(a.jsx)("img",{src:"https://imagesmila.s3.eu-north-1.amazonaws.com/alert.svg",title:"alert",alt:"alert"})}):Object(a.jsx)("label",{className:"formAuth__labelStyle",style:{position:"absolute",right:"5px",top:"20px"},children:Object(a.jsx)("img",{src:"https://imagesmila.s3.eu-north-1.amazonaws.com/success.svg",title:"success",alt:"success"})});case"password":return t.length<5?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":"";default:return""}},n.handleUserInput=function(e){n.setState({errors:Object(o.a)(Object(o.a)({},n.state.errors),{},Object(i.a)({},e.target.name,n.validate(e.target.name,e.target.value))),fields:Object(o.a)(Object(o.a)({},n.state.fields),{},Object(i.a)({},e.target.name,e.target.value))})},n.handleSubmit=function(e){var t=n.state.fields;e.preventDefault();var s={};if(Object.keys(t).forEach((function(e){var a=n.validate(e,t[e]);a&&a.length>0&&(s[e]=a)})),Object.keys(s).length>0)n.setState({errors:s});else if(t.password&&t.mobile){var a={password:t.password,mobile:t.mobile};window.alert("submit success",JSON.stringify(a)),n.setState({fields:{password:"",mobile:""}})}},n.state={fields:{password:"",mobile:""},errors:{password:"",mobile:""}},n}return Object(u.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.fields,n=t.errors;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:"formAuth",onSubmit:this.handleSubmit,children:[Object(a.jsx)(m.a,{className:19!==s.mobile.length?"formAuth__inputStyle formAuth__inputStyle--active":"formAuth__inputStyle",name:"mobile",type:"tel",mask:" . ",autoComplete:"off",format:"8 ( ### ) ###-##-##",value:s.mobile,onChange:function(t){return e.handleUserInput(t)},placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",required:!0,style:19!==s.mobile.length&&0!==s.mobile.length?{color:"#B40000"}:{color:""}}),n.mobile,Object(a.jsx)("input",{className:n.password?"formAuth__inputStyle formAuth__inputStyle--active":"formAuth__inputStyle",type:"password",autoComplete:"off",name:"password",value:s.password,onChange:function(t){return e.handleUserInput(t)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,style:n.password?{color:"black"}:{color:""}}),Object(a.jsx)("div",{className:"formAuth__errorsText",children:n.password}),Object(a.jsxs)("div",{className:"formAuth__toggle formAuth__forgotPassword",children:[Object(a.jsx)(g,{}),Object(a.jsx)("a",{href:"https://www.apple.com/",children:"\u0417\u0430\u0431\u044b\u043b \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(a.jsx)("button",{className:"formAuth__buttonStyle",onClick:this.handleSubmit,type:"submit",disabled:0===s.password.length||s.password.length<5||s.mobile.length>19||n.password&&0===s.mobile.length||s.password.length>0&&0===s.mobile.length,children:"\u0412\u041e\u0419\u0422\u0418"})]})})}}]),s}(r.a.Component)),f=s.p+"static/media/logo.d4c3cb3e.png";s(20);var O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("section",{className:"authPage",children:Object(a.jsxs)("div",{className:"authPage__formContainer",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"https://svgshare.com/i/Sw9.svg",title:"arrow",alt:"arrow"}),Object(a.jsx)("p",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})]}),Object(a.jsx)("img",{src:f,style:{zIndex:"4"},alt:"logo"}),Object(a.jsx)(p,{})]})}),Object(a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("filter",{id:"blur",children:Object(a.jsx)("feGaussianBlur",{stdDeviation:"15"})})})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),w()}},[[21,1,2]]]);
//# sourceMappingURL=main.7341c699.chunk.js.map
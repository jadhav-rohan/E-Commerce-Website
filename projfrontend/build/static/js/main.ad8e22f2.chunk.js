(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{18:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(3),s=c(5),r=c(4),o=(c(18),"http://localhost:8000/api/"),i=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},l=c(0),d=function(e,t){return e.location.pathname===t?{color:"#000000"}:{color:"#FFFFFF"}},j=Object(s.g)((function(e){var t=e.history;return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"f nav nav-tabs",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/"),className:"nav-link",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/cart"),className:"nav-link",to:"/cart",children:"Cart"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard",children:"A.Dashboard"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/user.dashboard"),className:"nav-link",to:"/user/dashboard",children:"U.Dashboard"})}),!i()&&Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/signup"),className:"nav-link",to:"/signup",children:"SignUp"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.b,{style:d(t,"/signin"),className:"nav-link",to:"/signin",children:"SignIn"})})]}),i()&&Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("span",{className:"nav-link text-white",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(o,"/signout"),{method:"GET"}).then((function(e){console.log("SignOut Success!")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))},children:"Signout"})})]})})})),b=function(e){var t=e.title,c=void 0===t?"My Title":t,a=e.description,n=void 0===a?"My Description":a,s=e.className,r=void 0===s?"text-white p-4":s,o=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"this container-fluid",children:[Object(l.jsxs)("div",{className:"this text-white text-center",children:[Object(l.jsx)("h2",{className:"display-4",children:c}),Object(l.jsx)("p",{className:"lead",children:n})]}),Object(l.jsxs)("div",{className:r,children:[" ",o]})]}),Object(l.jsxs)("footer",{className:"f footer text-white py=-1",children:[Object(l.jsxs)("div",{className:"container-fluid text-center",children:[Object(l.jsx)("h4",{className:"container text-center",children:"If you got any questions feel free to ask"}),Object(l.jsx)("button",{className:"this text-white btn btn-md",children:"Contact Us"})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("span",{className:"text-muted text-white",children:"Rohan Jadhav"})})]})]})},m=c(2),u=function(e){var t=e.product,c=t?"".concat(o,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return Object(l.jsx)("div",{className:"rounded p-2",children:Object(l.jsx)("img",{src:c,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"})})},h=function(e){var t=e.product,c=e.addToCart,n=void 0===c||c,o=e.removeFromCart,i=void 0!==o&&o,d=e.setReload,j=void 0===d?function(e){return e}:d,b=e.reload,h=void 0===b?void 0:b,O=Object(a.useState)(!1),p=Object(r.a)(O,2),x=p[0],f=p[1],g=Object(a.useState)(t.count),N=Object(r.a)(g,2),v=(N[0],N[1],t&&t.name,t?t.description:"A default description"),y=t?t.price:"Default",w=function(){!function(e,t){var c=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.push(Object(m.a)(Object(m.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(c)),t())}(t,(function(){return f(!0)}))};return Object(l.jsxs)("div",{className:"card text-white this border ",children:[Object(l.jsx)("div",{className:"card-header lead",children:"A photo from pexels"}),Object(l.jsxs)("div",{className:"card-body",children:[function(e){if(e)return Object(l.jsx)(s.a,{to:"/cart"})}(x),Object(l.jsx)(u,{product:t}),Object(l.jsx)("p",{className:"lead bg-success font-weight-normal text-wrap",children:v}),Object(l.jsxs)("p",{className:"btn btn-success rounded  btn-sm px-4",children:["$",y]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12",children:function(e){return e&&Object(l.jsx)("button",{onClick:w,className:"btn btn-block btn-outline-success mt-2 mb-2",children:"Add to Cart"})}(n)}),Object(l.jsx)("div",{className:"col-12",children:function(e){return e&&Object(l.jsx)("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(c,a){c._id===e&&t.splice(a,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),j(!h)},className:"btn btn-block btn-outline-danger mt-2 mb-2",children:"Remove from cart"})}(i)})]})]})]})};function O(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),d=(i[0],i[1]),j=function(){fetch("".concat(o,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?d(e.error):n(e)}))};return Object(a.useEffect)((function(){j()}),[]),Object(l.jsx)(b,{title:"Home Page",children:Object(l.jsxs)("div",{className:"row text-center",children:[Object(l.jsx)("h1",{className:"text-white",children:"All of T-Shirts"}),Object(l.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(l.jsx)("div",{className:"col-4 mb-4",children:Object(l.jsx)(h,{product:e})},t)}))})]})})}var p=c(10),x=function(){var e=Object(a.useState)({email:"rohan@gmail.com",password:"rohan",error:"",loading:!1,didRedirect:!1}),t=Object(r.a)(e,2),c=t[0],n=t[1],d=c.email,j=c.password,u=c.error,h=c.loading,O=c.didRedirect,x=i().user,f=function(e){return function(t){n(Object(m.a)(Object(m.a)({},c),{},Object(p.a)({error:!1},e,t.target.value)))}},g=function(e){e.preventDefault(),n(Object(m.a)(Object(m.a)({},c),{},{error:!1,loading:!0})),function(e){return fetch("".concat(o,"/signin"),{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:d,password:j}).then((function(e){console.log(e),e&&function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){n(Object(m.a)(Object(m.a)({},c),{},{didRedirect:!0}))})),e.error&&n(Object(m.a)(Object(m.a)({},c),{},{error:e.error,loading:!1}))}))};return Object(l.jsxs)(b,{title:"Sign In page",description:"A page for user to sign in!",children:[h&&Object(l.jsx)("div",{className:"alert alert-info",children:Object(l.jsx)("h2",{children:"Loading..."})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(l.jsx)("div",{className:"alert alert-danger",style:{display:u?"":"none"},children:u})})}),Object(l.jsx)("div",{className:"nn row",children:Object(l.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"text-light",children:"Email"}),Object(l.jsx)("input",{onChange:f("email"),value:d,className:"form-control",type:"email"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"text-light",children:"Password"}),Object(l.jsx)("input",{onChange:f("password"),value:j,className:"form-control",type:"password"})]}),Object(l.jsx)("button",{onClick:g,className:"f text-white btn btn-block",children:"Submit"})]})})}),O?x&&1===x.role?Object(l.jsx)(s.a,{to:"/admin/dashboard"}):Object(l.jsx)(s.a,{to:"/user/dashboard"}):i()?Object(l.jsx)(s.a,{to:"/"}):void 0]})},f=function(){var e=Object(a.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(r.a)(e,2),c=t[0],s=t[1],i=c.name,d=c.email,j=c.password,u=c.error,h=c.success,O=function(e){return function(t){s(Object(m.a)(Object(m.a)({},c),{},Object(p.a)({error:!1},e,t.target.value)))}},x=function(e){var t;e.preventDefault(),s(Object(m.a)(Object(m.a)({},c),{},{error:!1})),(t={name:i,email:d,password:j},fetch("".concat(o,"/signup"),{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?s(Object(m.a)(Object(m.a)({},c),{},{error:e.error,success:!1})):s(Object(m.a)(Object(m.a)({},c),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return Object(l.jsxs)(b,{title:"Sign up Page",description:"A page for user to sign up!",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(l.jsxs)("div",{className:"alert alert-success",style:{display:h?"":"none"},children:["New account was created successfully. Please",Object(l.jsx)(n.b,{to:"/signin",children:" Login Here"})]})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(l.jsx)("div",{className:"alert alert-danger",style:{display:u?"":"none"},children:u})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"text-light",children:"Name"}),Object(l.jsx)("input",{className:"form-control",onChange:O("name"),type:"text",value:i})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"text-light",children:"Email"}),Object(l.jsx)("input",{className:"form-control",onChange:O("email"),type:"email",value:d})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{className:"text-light",children:"Password"}),Object(l.jsx)("input",{onChange:O("password"),className:"form-control",type:"password",value:j})]}),Object(l.jsx)("button",{onClick:x,className:"f btn btn-block text-white",children:"Submit"})]})})}),Object(l.jsx)("p",{className:"text-white text-center",children:JSON.stringify(c)})]})},g=c(13),N=["component"],v=function(e){var t=e.component,c=Object(g.a)(e,N);return Object(l.jsx)(s.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){return i()&&1===i().user.role?Object(l.jsx)(t,Object(m.a)({},e)):Object(l.jsx)(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},y=["component"],w=function(e){var t=e.component,c=Object(g.a)(e,y);return Object(l.jsx)(s.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){return i()?Object(l.jsx)(t,Object(m.a)({},e)):Object(l.jsx)(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},S=function(){return Object(l.jsx)(b,{title:"UserDashBoard page",children:Object(l.jsx)("h1",{children:"THis is UserDashBoard page"})})},k=function(){var e=i().user,t=e.name,c=e.email;e.role;return Object(l.jsx)(b,{title:"Welcome to admin area",description:"Manage all of your products here",className:"container p-4",children:Object(l.jsxs)("div",{className:"n row",children:[Object(l.jsx)("div",{className:"col-3",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h4",{className:"card-header f text-white",children:"Admin Navigation"}),Object(l.jsxs)("ul",{className:"list-group",children:[Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(n.b,{to:"/admin/create/category",className:"nav-link text-dark",children:"Create Categories"})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(n.b,{to:"/admin/categories",className:"nav-link text-dark",children:"Manage Categories"})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(n.b,{to:"/admin/create/product",className:"nav-link text-dark",children:"Create Product"})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(n.b,{to:"/admin/products",className:"nav-link text-dark",children:"Manage Products"})}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)(n.b,{to:"/admin/orders",className:"nav-link text-dark",children:"Manage Orders"})})]})]})}),Object(l.jsx)("div",{className:"col-9",children:Object(l.jsxs)("div",{className:"card mb-4",children:[Object(l.jsx)("h4",{className:"card-header f text-white",children:"Admin Information"}),Object(l.jsxs)("ul",{className:"list-group",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"badge badge-success mr-2",children:"Name:"})," ",t]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"badge badge-success mr-2",children:"Email:"})," ",c]}),Object(l.jsx)("li",{className:"list-group-item",children:Object(l.jsx)("span",{className:"badge badge-danger",children:"Admin Area"})})]})]})})]})})},C=function(){return fetch("".concat(o,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},A=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],d=Object(a.useState)(!1),j=Object(r.a)(d,2),m=j[0],u=j[1],h=Object(a.useState)(!1),O=Object(r.a)(h,2),p=O[0],x=O[1],f=i(),g=f.user,N=f.token,v=function(e){u(""),s(e.target.value)},y=function(e){e.preventDefault(),u(""),x(!1),function(e,t,c){return fetch("".concat(o,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(g._id,N,{name:c}).then((function(e){e.error?u(!0):(u(""),x(!0),s(""))}))};return Object(l.jsx)(b,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container p-4",children:Object(l.jsx)("div",{className:"Ccate row this text-white rounded",children:Object(l.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(p)return Object(l.jsx)("h4",{className:"alert alert-success mt-3",children:"Category created Successfully!"})}(),function(){if(m)return Object(l.jsx)("h4",{className:"text-success",children:"Failed to create category"})}(),Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("p",{className:"lead",children:"Enter the category"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:v,value:c,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),Object(l.jsx)("button",{onClick:y,className:"btn btn-outline-success",children:"Create Category"})]})}),Object(l.jsx)("div",{className:"mt-5",children:Object(l.jsx)(n.b,{className:"btn btn-sm f text-white mb-5",to:"/admin/dashboard",children:"Admin Home"})})]})})})},E=function(){var e=i(),t=e.user,c=e.token,s=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),d=Object(r.a)(s,2),j=d[0],u=d[1],h=j.name,O=j.description,x=j.price,f=j.stock,g=j.categories,N=(j.category,j.loading,j.error,j.createdProduct),v=(j.getaRedirect,j.formData);Object(a.useEffect)((function(){C().then((function(e){e.error?u(Object(m.a)(Object(m.a)({},j),{},{error:e.error})):u(Object(m.a)(Object(m.a)({},j),{},{categories:e,formData:new FormData}))}))}),[]);var y=function(e){e.preventDefault(),u(Object(m.a)(Object(m.a)({},j),{},{error:"",loading:!0})),function(e,t,c){return fetch("".concat(o,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,c,v).then((function(e){e.error?u(Object(m.a)(Object(m.a)({},j),{},{error:e.error})):u(Object(m.a)(Object(m.a)({},j),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},w=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;v.set(e,c),u(Object(m.a)(Object(m.a)({},j),{},Object(p.a)({},e,c)))}};return Object(l.jsxs)(b,{title:"Add a product here!",description:"Welcome to product creation section",className:"container p-4",children:[Object(l.jsx)(n.b,{to:"/admin/dashboard",className:"btn btn-md f text-white mb-3",children:"Admin Home"}),Object(l.jsx)("div",{className:"row text-white rounded",children:Object(l.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(l.jsx)("div",{className:"alert alert-success mt-3",style:{display:N?"":"none"},children:Object(l.jsxs)("h4",{children:[N," created successfully"]})}),Object(l.jsxs)("form",{className:"ff",children:[Object(l.jsx)("span",{children:"Post photo"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("label",{className:"btn btn-block f text-white",children:Object(l.jsx)("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:w("name"),name:"photo",className:"form-control",placeholder:"Name",value:h})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("textarea",{onChange:w("description"),name:"photo",className:"form-control",placeholder:"Description",value:O})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:w("price"),type:"number",className:"form-control",placeholder:"Price",value:x})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("select",{onChange:w("category"),className:"form-control",placeholder:"Category",children:[Object(l.jsx)("option",{children:"Select"}),g&&g.map((function(e,t){return Object(l.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:w("stock"),type:"number",className:"form-control",placeholder:"Stock",value:f})}),Object(l.jsx)("button",{type:"submit",onClick:y,className:"btn btn-outline-success mb-3",children:"Create Product"})]})]})})]})},P=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],d=i(),j=d.user,m=d.token,u=function(){C().then((function(e){e.error?console.log(e.error):s(e)}))};Object(a.useEffect)((function(){u()}),[]);var h=function(e){(function(e,t,c){return fetch("".concat(o,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,j._id,m).then((function(e){e.error?console.log(e.error):u()}))};return Object(l.jsxs)(b,{title:"Welcome admin",description:"Manage products here",children:[Object(l.jsx)("h2",{className:"mb-4 text-white",children:"All products:"}),Object(l.jsx)(n.b,{className:"btn f",to:"/admin/dashboard",children:Object(l.jsx)("span",{className:"text-white",children:"Admin Home"})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("h2",{className:"text-center text-white my-3",children:"Total 3 products"}),c.map((function(e,t){return Object(l.jsxs)("div",{className:"row text-center mb-2",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("h3",{className:"text-white text-left",children:e.name})}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)(n.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id),children:Object(l.jsx)("spn",{children:"Update"})})}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("button",{onClick:function(){h(e._id)},className:"btn btn-danger",children:"Delete"})})]},t)}))]})})]})},T=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],d=i(),j=d.user,m=d.token,u=function(){fetch("".concat(o,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):s(e)}))};Object(a.useEffect)((function(){u()}),[]);var h=function(e){(function(e,t,c){return fetch("".concat(o,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,j._id,m).then((function(e){e.error?console.log(e.error):u()}))};return Object(l.jsxs)(b,{title:"Welcome admin",description:"Manage products here",children:[Object(l.jsx)("h2",{className:"mb-4 text-white",children:"All products:"}),Object(l.jsx)(n.b,{className:"btn f text-white",to:"/admin/dashboard",children:Object(l.jsx)("span",{className:"",children:"Admin Home"})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("h2",{className:"text-center text-white my-3",children:"Total 3 products"}),c.map((function(e,t){return Object(l.jsxs)("div",{className:"row text-center mb-2 ",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("h3",{className:"text-white text-left",children:e.name})}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)(n.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id),children:Object(l.jsx)("span",{className:"",children:"Update"})})}),Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("button",{onClick:function(){h(e._id)},className:"btn btn-danger",children:"Delete"})})]},t)}))]})})]})},D=function(e){var t=e.match,c=i(),s=c.user,d=c.token,j=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),u=Object(r.a)(j,2),h=u[0],O=u[1],x=h.name,f=h.description,g=h.price,N=h.stock,v=h.categories,y=(h.category,h.loading,h.error,h.createdProduct),w=(h.getaRedirect,h.formData),S=function(e){(function(e){return fetch("".concat(o,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?O(Object(m.a)(Object(m.a)({},h),{},{error:e.error})):(k(),O(Object(m.a)(Object(m.a)({},h),{},{name:e.name,description:e.description,price:e.price,stock:e.stock,formData:new FormData})))}))},k=function(){C().then((function(e){e.error?O(Object(m.a)(Object(m.a)({},h),{},{error:e.error})):O({categories:e,formData:new FormData})}))};Object(a.useEffect)((function(){S(t.params.productId)}),[]);var A=function(e){e.preventDefault(),O(Object(m.a)(Object(m.a)({},h),{},{error:"",loading:!0})),function(e,t,c,a){return fetch("".concat(o,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,s._id,d,w).then((function(e){e.error?O(Object(m.a)(Object(m.a)({},h),{},{error:e.error})):O(Object(m.a)(Object(m.a)({},h),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},E=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;w.set(e,c),O(Object(m.a)(Object(m.a)({},h),{},Object(p.a)({},e,c)))}};return Object(l.jsxs)(b,{title:"Add a product here!",description:"Welcome to product creation section",className:"container p-4",children:[Object(l.jsx)(n.b,{to:"/admin/dashboard",className:" f btn btn-md text-white mb-3",children:"Admin Home"}),Object(l.jsx)("div",{className:"row text-white rounded",children:Object(l.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(l.jsx)("div",{className:"alert alert-success mt-3",style:{display:y?"":"none"},children:Object(l.jsxs)("h4",{children:[y," updated successfully"]})}),Object(l.jsxs)("form",{className:"ff",children:[Object(l.jsx)("span",{children:"Post photo"}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("label",{className:"btn btn-block f text-white",children:Object(l.jsx)("input",{onChange:E("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:E("name"),name:"photo",className:"form-control",placeholder:"Name",value:x})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("textarea",{onChange:E("description"),name:"photo",className:"form-control",placeholder:"Description",value:f})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:E("price"),type:"number",className:"form-control",placeholder:"Price",value:g})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("select",{onChange:E("category"),className:"form-control",placeholder:"Category",children:[Object(l.jsx)("option",{children:"Select"}),v&&v.map((function(e,t){return Object(l.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{onChange:E("stock"),type:"number",className:"form-control",placeholder:"Stock",value:N})}),Object(l.jsx)("button",{type:"submit",onClick:A,className:"btn btn-outline-success mb-3",children:"Update Product"})]})]})})]})},I=function(e){var t=e.match,c=Object(a.useState)(""),s=Object(r.a)(c,2),d=s[0],j=s[1],m=Object(a.useState)(!1),u=Object(r.a)(m,2),h=u[0],O=u[1],p=Object(a.useState)(!1),x=Object(r.a)(p,2),f=x[0],g=x[1],N=i(),v=N.user,y=N.token,w=function(e){O(""),j(e.target.value)},S=function(e){e.preventDefault(),O(""),g(!1),function(e,t,c,a){return fetch("".concat(o,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,v._id,y).then((function(e){e.error?O(!0):(O(""),g(!0),j(""))}))};return Object(l.jsx)(b,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container p-4",children:Object(l.jsx)("div",{className:"Ccate row this text-white rounded",children:Object(l.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(f)return Object(l.jsx)("h4",{className:"alert alert-success mt-3",children:"Category updated Successfully!"})}(),function(){if(h)return Object(l.jsx)("h4",{className:"text-success",children:"Failed to update category"})}(),Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("p",{className:"lead",children:"Enter the category"}),Object(l.jsx)("input",{type:"text",className:"form-control my-3",onChange:w,value:d,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),Object(l.jsx)("button",{onClick:S,className:"btn btn-outline-success",children:"Update Category"})]})}),Object(l.jsx)("div",{className:"mt-5",children:Object(l.jsx)(n.b,{className:"btn btn-sm f text-white mb-5",to:"/admin/dashboard",children:"Admin Home"})})]})})})},J=c(21),F=c.n(J),_=function(e){var t=e.products,c=(e.setReload,e.reload,Object(a.useState)({loading:!1,success:!1,error:"",address:""})),s=Object(r.a)(c,2),d=(s[0],s[1],i()&&i().token,i()&&i().user._id,function(){var e=0;return t.map((function(t){e+=t.price})),e}),j=function(e){var c={token:e,products:t};return fetch("".concat(o,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){console.log(e);var t,c=e.status;console.log("STATUS",c),void 0!==typeof window&&(localStorage.removeItem("cart"),t())})).catch((function(e){return console.log(e)}))};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{className:"text-white",children:["Stripe Checkout Loaded!",d()]}),i()?Object(l.jsx)(F.a,{stripeKey:"pk_test_51JZE46SEHfduW7Q6giP1dQgMdvNaaPUisOxGv9caLltJAO5ZjsmZOKUE49VMkQERO4IljR7tenlQoau5U9JAHwNR007dPWClJE",token:j,amount:100*d(),name:"Buy T-Shirts",shippingAddress:!0,billingAddress:!0,children:Object(l.jsx)("button",{className:"btn btn-success",children:"Pay with Stripe"})}):Object(l.jsx)(n.b,{to:"/signin",children:Object(l.jsx)("button",{className:"btn btn-warning",children:"SignIn"})})]})};function R(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),o=Object(r.a)(s,2),i=o[0],d=o[1];Object(a.useEffect)((function(){n(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[i]);return Object(l.jsx)(b,{title:"Cart Page",description:"Ready to Checkout!",children:Object(l.jsxs)("div",{className:"row text-center",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"This section is to load products"}),c.map((function(e,t){return Object(l.jsx)(h,{product:e,addToCart:!1,removeFromCart:!0,setReload:d,reload:i},t)}))]})}),Object(l.jsx)("div",{className:"col-6",children:Object(l.jsx)(_,{products:c,setReload:d})})]})})}var U=function(){return Object(l.jsx)(n.a,{children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/",exact:!0,component:O}),Object(l.jsx)(s.b,{path:"/signup",exact:!0,component:f}),Object(l.jsx)(s.b,{path:"/signin",exact:!0,component:x}),Object(l.jsx)(s.b,{path:"/cart",exact:!0,component:R}),Object(l.jsx)(w,{path:"/user/dashboard",exact:!0,component:S}),Object(l.jsx)(v,{path:"/admin/dashboard",exact:!0,component:k}),Object(l.jsx)(v,{path:"/admin/create/category",exact:!0,component:A}),Object(l.jsx)(v,{path:"/admin/categories",exact:!0,component:P}),Object(l.jsx)(v,{path:"/admin/create/product",exact:!0,component:E}),Object(l.jsx)(v,{path:"/admin/products",exact:!0,component:T}),Object(l.jsx)(v,{path:"/admin/product/update/:productId",exact:!0,component:D}),Object(l.jsx)(v,{path:"/admin/category/update/:categoryId",exact:!0,component:I})]})})},H=c(22);c.n(H).a.render(Object(l.jsx)(U,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ad8e22f2.chunk.js.map
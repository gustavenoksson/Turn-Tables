import{W as n,j as e,a as d}from"./app-de5a15ba.js";import{D as u}from"./DefaultLayout-b1f6c423.js";import{T as c,I as x}from"./TextInput-b8b02f6b.js";import{P as p}from"./PrimaryButton-e18b8616.js";import"./Footer.style-2f8bdf2a.js";function y({status:a}){const{data:t,setData:o,post:r,processing:m,errors:l}=n({email:""}),i=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:i,children:[e.jsx(c,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(x,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ml-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{y as default};

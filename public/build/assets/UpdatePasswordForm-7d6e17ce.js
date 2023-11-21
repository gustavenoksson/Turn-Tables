import{r as m,W as h,j as s}from"./app-de5a15ba.js";import{T as n,I as d}from"./TextInput-b8b02f6b.js";import{I as p}from"./InputLabel-c077ec45.js";import{P as v}from"./PrimaryButton-e18b8616.js";import{t as _}from"./transition-fdd3a88f.js";function N({className:l=""}){const c=m.useRef(),i=m.useRef(),{data:e,setData:a,errors:o,put:w,reset:t,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:u=>{u.password&&(t("password","password_confirmation"),c.current.focus()),u.current_password&&(t("current_password"),i.current.focus())}})};return s.jsxs("section",{className:l,children:[s.jsx("h2",{children:"Update Password"}),s.jsx("p",{children:"Ensure your account is using a long, random password to stay secure."}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(p,{htmlFor:"current_password",value:"Current Password"}),s.jsx(n,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",autoComplete:"current-password"}),s.jsx(d,{message:o.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(p,{htmlFor:"password",value:"New Password"}),s.jsx(n,{id:"password",ref:c,value:e.password,onChange:r=>a("password",r.target.value),type:"password",autoComplete:"new-password"}),s.jsx(d,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(n,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",autoComplete:"new-password"}),s.jsx(d,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:x,children:"Save"}),s.jsx(_,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{N as default};

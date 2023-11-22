import{j as u,r as e,s as c}from"./app-7a5f6de1.js";function a({message:t,className:o="",...r}){return t?u.jsx("p",{...r,className:"text-sm text-red-600 "+o,children:t}):null}const p=c.input`
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    &:focus{
        box-shadow: none;
        border-bottom: 1px solid blue;
    }
`,i=e.forwardRef(function({type:o="text",isFocused:r=!1,...x},s){const n=s||e.useRef();return e.useEffect(()=>{r&&n.current.focus()},[]),u.jsx(p,{...x,type:o,ref:n})});export{a as I,i as T};

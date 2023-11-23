import{s as r,j as e,d as n,r as p,q as u,u as g}from"./app-c642f9ff.js";const f="/build/assets/Hamburger-ba52d2fb.svg",x="/build/assets/Close-9a52a122.svg",h="/build/assets/logo-41bb1f15.svg",b=r.img`
    width: 5rem !important;
    height: 5rem !important;
    align-self: flex-start;
    animation: turn 3s ease-in-out infinite;

    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }
        80% {
            transform: rotate(380deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;function j(){return e.jsx("div",{children:e.jsx(n,{href:route("home"),children:e.jsx(b,{src:h,alt:"logo"})})})}const m="/build/assets/Profile-5e65657e.svg",w=r.div`
    display: flex;
`,y=r.div`
`,v=r.div`
    z-index: 100;
    background-color: #f0f0f0;
    border-right: 1px solid lightgray;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    transform: translateX(${t=>t.open?"0":"-100%"});
    transition: transform .3s ease-in-out;

    @media (max-width: 400px) {
        width: 100%;
        border: none;
    }
`,k=r.div`
    cursor: pointer;

    img {
        margin: auto;
        transform: rotate(45deg);
    }
`,L=r.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid black;
    margin: 0 2rem;

    & div {
        display: flex;
        align-items: center;
    }
`,C=r.div`
    padding: 2rem 0 2rem 0;
    border-bottom: 1px solid black;
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;

    & a {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`,S=r.ul`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    align-items: flex-start;
    margin-top: 1rem;
    line-height: 125%;
    gap: 1rem;
    padding: 0 2rem;

    & li {
        position: relative;
        color: #000;
        text-decoration: none;
    }

    & li:hover {
        color: #000;
    }

    & li::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1.5px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transition: transform .2s ease-out;
        transform-origin: bottom left;
    }

    & li:hover::before {
        transform: scaleX(1);
    }

    & li:not(:hover)::before {
        transition: none;
    }

    & li:first-child {
        font-weight: bold;
    }
`,W=r.div`
    position: fixed;
    z-index: 99;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    transition: all .3s ease-in-out;
    opacity: ${t=>t.open?".6":"0"};
    pointer-events: ${t=>t.open?"all":"none"};

    @media (max-width: 400px) {
        display: none;
    }
`,I=()=>{const[t,o]=p.useState(!1),{user:i}=u().props,l=["All products","Furniture","Lighting","Home Decor"],a=l.map(s=>(s!="All products"&&(s=s.replace(/ /g,"-")),s.toLowerCase()));function d(){o(!t)}return e.jsxs(w,{open:t,children:[e.jsx("button",{onClick:()=>d(),children:e.jsx("img",{src:f,alt:"Hamburger menu icon"})}),e.jsxs(y,{children:[e.jsxs(v,{open:t,children:[e.jsxs(L,{children:[e.jsx(j,{}),e.jsx(k,{onClick:()=>d(),children:e.jsx("img",{src:x,alt:"close button"})})]}),e.jsxs(C,{children:[e.jsxs(n,{href:route(i?"dashboard":"login"),children:[e.jsx("img",{src:m,alt:"Profile page link icon"}),i?`Logged in as ${i.name}`:"Log in/register"]}),i&&e.jsx(n,{href:route("logout"),method:"post",as:"button",children:"Log out"})]}),e.jsx(S,{children:a.map((s,c)=>e.jsx("li",{children:e.jsx(n,{href:s!=="all products"?route("products.category",{categorySlug:s}):route("products"),children:l[c]})},c))})]}),e.jsx(W,{open:t,onClick:()=>d()})]})]})},M="/build/assets/ShoppingCart-7fefad29.svg",$=r.div`
    position: relative;
`,F=r.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #2d6fa5;
    padding: 0.55rem;
    height: 1rem;
    width: 1rem;
    display: flex;
    border-radius: 100%;
    justify-content: center;
    transform: translate(35%, -35%);

    & > p {
        color: white;
        margin: auto;
        line-height: 0;
        font-size: 0.75rem;
    }
`;function H(){const{cartCount:t}=g();return e.jsx(n,{href:route("cart"),children:e.jsxs($,{children:[e.jsx("img",{src:M,alt:"Shopping cart icon"}),t>0&&e.jsx(F,{children:e.jsx("p",{children:t})})]})})}const P=r.div`
    & > a {
        display: flex;
        align-items: center;
        font-weight: bold;
        gap: .5rem;
    }

    & > a > img {
        width: 2.5rem !important;
        height: 2.5rem !important;
    }
`;function B(){return e.jsx(P,{children:e.jsxs(n,{href:route("home"),children:[e.jsx("img",{src:h,alt:"logo"}),e.jsx("p",{children:"Turn Tables"})]})})}const z="/build/assets/MagnifyingGlass-72b950cd.svg",T=r.div`
    position: relative;

    input {
        width: 100%;
        border: none;
        border-radius: 2rem;
        text-indent: 2rem;
    }

    button {
        position: absolute;
        left: .5rem;
        top: 0;
        bottom: 0;
    }
`;function A(){const[t,o]=p.useState("");function i(){t&&(window.location.href=`/search/${t}`)}function l(a){t&&a.key==="Enter"&&(window.location.href=`/search/${t}`)}return e.jsxs(T,{children:[e.jsx("label",{htmlFor:"search",hidden:!0}),e.jsx("input",{type:"text",id:"search",placeholder:"Search for products",value:t,onChange:a=>o(a.target.value),onKeyDown:l}),e.jsx("button",{onClick:i,children:e.jsx("img",{src:z,alt:"Search icon"})})]})}function D(){return e.jsx(e.Fragment,{children:e.jsx(n,{href:route("profile.edit"),children:e.jsx("img",{src:m,alt:"Profile page link icon"})})})}const E="/build/assets/Wishlist-7f4d9c4c.svg";function Q(){return e.jsx(n,{href:route("wishlist"),children:e.jsx("img",{src:E,alt:"Shopping cart icon"})})}const X=r.header`
    background-color: #f0f0f0;
    padding: 2rem;
    border-bottom: 1px solid lightgray;

    & #headerListItems {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1600px;
        margin: 0 auto;
        gap: 1rem;
    }

    & #headerListItems li {
        flex-shrink: 0;
    }

    & #headerListItems li img {
        width: 1.5rem;
        height: 1.5rem;
    }

    & #headerListItems li:nth-of-type(2) {
        flex: 1 1 auto;
    }

    @media (max-width: 800px) {
        & #headerListItems {
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 1rem;
        }

        & #headerListItems > li:nth-of-type(2) {
            order: 6;
            min-width: 100%;
        }

        & #headerListItems li:nth-of-type(1) {
            flex-grow: 1;
        }
    }
`,G=()=>{const t=[e.jsx(B,{}),e.jsx(A,{}),e.jsx(D,{}),e.jsx(H,{}),e.jsx(Q,{}),e.jsx(I,{})];return e.jsx(X,{children:e.jsx("ul",{id:"headerListItems",children:t.map((o,i)=>e.jsx("li",{children:typeof o=="string"&&o.includes("svg")?e.jsx("img",{src:o,alt:o}):o},i))})})},J=G,K=r.footer`
    padding: 4rem 2rem;
    background-color: #f0f0f0;
    border-top: 1px solid lightgray;

    & ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: flex-start;
        gap: 1rem;
        max-width: 1600px;
        margin: 0 auto;

        @media (min-width: 450px) {
            grid-template-columns: repeat(2, auto);
            column-gap: 5rem;
        }

        @media (min-width: 800px) {
            grid-template-columns: repeat(3, auto);
        }
    }
`,q=["Create a user","Customer service","About us","Social media links","Shipping and returns","Privacy policy","Terms and conditions","Sign up for newsletter"],R=()=>e.jsx(K,{children:e.jsx("ul",{children:q.map((t,o)=>e.jsx("li",{children:t},o))})}),N=R;export{N as F,J as H,h as L,M as S,E as W};

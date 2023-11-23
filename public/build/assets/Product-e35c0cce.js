import{s as r,j as t,r as s,u as b,d as p}from"./app-0a1dccb3.js";import{u as w,b as S}from"./sanity.queries-dd1d37d8.js";import{D as C}from"./DefaultLayout-0c8436cc.js";import{B as k}from"./Breadcrumbs.style-7dd917d1.js";import{D as P,I as W}from"./Decrement-2792f2cb.js";import{A as I}from"./AddToWishlist-94ebe623.js";import"./Footer.style-242617a3.js";const A=r.section`
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;

    @media (min-width: 650px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;

        & > div > div:last-of-type {
            flex-grow: 1;
        }
    }

    & > div:nth-of-type(1) {
        position: relative;
        aspect-ratio: 1/1;
    }

    & div:nth-of-type(1) > div:last-of-type > img {
        margin: auto;
        width: 1.5rem;
        height: 1.5rem;
    }

    & > div > div:last-of-type {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        align-items: flex-end;
    }

    & > div > div:last-of-type div {
        background-color: #EEE;
        border-radius: 50px;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-height: 32px;
        line-height: 100%;
    }

    & > div > div:last-of-type button, & > div > div:last-of-type span {
        font-size: 0.75rem;
        font-weight: bold;
    }

    & > div > div:last-of-type img {
        width: 1rem;
        height: 1rem;
    }

    & > div:last-of-type > p:nth-of-type(1) {
        font-size: 1.5rem;
    }

    & > div:last-of-type > p:nth-of-type(2) {
        font-size: 1rem;
    }

    & > div:last-of-type > p:nth-of-type(3) {
        font-weight: bold;
    }

    & > div > div > p {
        font-size: 0.75rem;
        color: #808080;
    }
`,E=r.div`
    display: flex;
    align-items: center;
    & div {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100px;
        background-color: #49cf3f;
        margin-right: 0.5rem;
    }
    color: gray;
`;function D(){return t.jsxs(E,{children:[t.jsx("div",{}),t.jsx("p",{children:"In stock"})]})}const T=r.div`
    aspect-ratio: 1/1;
    position: relative;

    > div:first-of-type {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0.5rem;
        display: flex;
        cursor: pointer;
    }

    > div > div {
        background-color: white;
        border-radius: 100%;
        height: 2.5rem;
        width: 2.5rem;
        display: flex;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    > div > div > img {
        width: 1.5rem;
        height: 1.5rem;
        margin: auto;
    }
    
    a {
        overflow: hidden;
        display: block;
    }

    a > img {
        transition: transform .5s ease-in-out;
    }

    a > img:hover {
        transform: scale(1.1);
    }
`,z=r.div`
`,B=({product:n,showAddToWishlist:e})=>t.jsxs(z,{children:[t.jsxs(T,{children:[t.jsx("img",{src:w(n.image),alt:"Picture of the product."}),t.jsx("div",{children:e&&t.jsx(I,{productId:n._id})})]}),t.jsx("div",{})]}),F=B,$=r.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
`,U=r.span`
    width: 2ch;
    text-align: center;
`,_=r.button`
    min-width: 3.86rem;
`;function K({wishlistItems:n}){const[e,h]=s.useState(null),[d,o]=s.useState(1),[a,c]=s.useState(""),[m,u]=s.useState(n);function f(){c(t.jsx("span",{children:"✓ Added"})),setTimeout(()=>{c("")},2e3)}const l="/"+location.pathname.split("/").slice(-1)[0];s.useEffect(()=>{S(l).then(i=>{h(i)}).catch(i=>console.error("Error fetching product:",i))},[l]);function x(){o(i=>i-1),d==1&&o(1)}function g(){o(i=>i+1)}const{addItem:j}=b(),v=()=>{e&&(j({id:e._id,name:e.title,price:e.price,currency:e.currency,image:e.image},{count:d}),f())};function y(i){u(i)}return t.jsx(t.Fragment,{children:t.jsxs(C,{children:[t.jsxs(k,{$singleProduct:!0,children:[t.jsx(p,{href:"/products",children:t.jsx("span",{children:"Products"})}),t.jsx("span",{children:" > "}),t.jsx(p,{href:`/products${e&&e.subcategory.category.slug.current}`,children:t.jsx("span",{children:e&&e.subcategory.category.title})}),t.jsx("span",{children:" > "}),t.jsx("span",{children:e&&e.subcategory.title}),t.jsx("span",{children:" > "}),t.jsx("span",{children:e&&e.title})]}),t.jsx(A,{children:e&&t.jsxs(t.Fragment,{children:[t.jsx(F,{product:e,showAddToWishlist:!0,wishlistUpdated:m,updateWishlist:y}),t.jsxs($,{children:[t.jsx("p",{children:e.title}),t.jsx("p",{children:e.description}),t.jsxs("p",{children:[e.price,":-"]}),t.jsx(D,{}),t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("button",{onClick:()=>{x()},children:t.jsx("img",{src:P,alt:"Decrement icon"})}),t.jsx(U,{children:d}),t.jsx("button",{onClick:()=>{g()},children:t.jsx("img",{src:W,alt:"Increment icon"})})]}),t.jsx("div",{children:t.jsx(_,{onClick:v,children:a||"Add to cart"})})]})]})]})})]})})}export{K as default};

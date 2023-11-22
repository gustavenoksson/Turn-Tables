import{s as i,u as A,j as e,r as I,d as P}from"./app-6a7adc42.js";import{u as W}from"./sanity.queries-2c3daf83.js";import{A as k}from"./AddToWishlist-75c8f5db.js";import{S}from"./Footer.style-09068167.js";const K=i.section`
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    max-width: 1600px;

    @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
    }
`,T=i.div`
    width: 100%;
    height: 100%;
`,_=({product:r,cartAddedConfirmed:a,quantity:t,children:o})=>{const{addItem:n}=A(),s=()=>{r&&(n({id:r._id,name:r.title,price:r.price,currency:r.currency,image:r.image},{count:t||1}),a())};return e.jsx(T,{onClick:s,children:o})},z="/build/assets/Check-915cc118.svg",E=i.div`
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

    > div > div:first-child {
        margin-right: 1rem;
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
        transition: transform 0.5s ease-in-out;
    }

    a > img:hover {
        transform: scale(1.1);
    }
`,F=i.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem 0 0.5rem;
    align-items: center;

    p:first-of-type {
        font-size: 1.25rem;
        padding-bottom: 0.5rem;
    }

    p:last-of-type {
        font-size: 1rem;
        font-weight: bold;
    }
`,R=i.article``,B=({product:r,showAddToCart:a,showAddToWishlist:t,onRemoveFromWishlist:o})=>{var d,c,m,l,g,p,h,u,f,x,y,j,v,b,C,w;const[n,s]=I.useState(null),$=()=>{s(r._id),setTimeout(()=>{s(null)},2e3)};return e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsx(P,{href:`/products${((m=(c=(d=r.subcategory)==null?void 0:d.category)==null?void 0:c.slug)==null?void 0:m.current)||((g=(l=r.category)==null?void 0:l.slug)==null?void 0:g.current)}${(h=(p=r.subcategory)==null?void 0:p.slug)==null?void 0:h.current}${(u=r.slug)==null?void 0:u.current}`,children:e.jsx("img",{src:W(r.image),alt:"Picture of the product."})}),e.jsxs("div",{children:[a&&e.jsx(_,{product:r,cartAddedConfirmed:$,children:e.jsx("img",{src:n===r._id?z:S,alt:"Shopping cart icon."})}),t&&e.jsx(k,{productId:r._id,onRemoveFromWishlist:o})]})]}),e.jsx(P,{href:`/products${((y=(x=(f=r.subcategory)==null?void 0:f.category)==null?void 0:x.slug)==null?void 0:y.current)||((v=(j=r.category)==null?void 0:j.slug)==null?void 0:v.current)}${(C=(b=r.subcategory)==null?void 0:b.slug)==null?void 0:C.current}${(w=r.slug)==null?void 0:w.current}`,children:e.jsxs(F,{children:[e.jsx("p",{children:r.title}),e.jsxs("p",{children:[r.price,":-"]})]})})]})},L=B;export{K as P,L as a};

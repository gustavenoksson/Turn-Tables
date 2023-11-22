import{j as e,s as i,r as o}from"./app-6a7adc42.js";import{D as a}from"./DefaultLayout-d424f08f.js";import{C as n}from"./CategoriesWrapper.style-417ff68a.js";import{a as c}from"./sanity.queries-2c3daf83.js";import"./Footer.style-09068167.js";const l="/build/assets/decoration-9b1d740b.jpg",d="/build/assets/furniture-a33b03ed.jpg",g="/build/assets/lighting-0231a16b.jpg",m="/build/assets/decoration2-1f445bd4.jpg",h="/build/assets/furniture2-151ce5d8.jpg",p="/build/assets/lighting2-868b6fe2.jpg",u="/build/assets/header-81c5e0af.jpg",f=i.header`
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
`,j=i.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0 4rem 0;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,x=i.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`,b=[d,g,l,h,p,m];function C(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("img",{src:u,alt:"page header"})}),e.jsx(j,{children:b.map((r,s)=>e.jsx(x,{children:e.jsx("img",{src:r,alt:"collage image"})},s))})]})}function F(){const[r,s]=o.useState([]);return o.useEffect(()=>{c().then(t=>{s(t),console.log(t)}).catch(t=>console.error("Error fetching categories:",t))},[]),e.jsxs(a,{children:[e.jsx("h1",{children:"Welcome to Turn Tables"}),e.jsxs(n,{children:[e.jsx("h2",{children:"Shop by category"}),r.map(t=>e.jsx("div",{children:e.jsx("a",{href:`/products${t.slug.current}`,children:e.jsx("button",{children:t.title})})},t._id))]}),e.jsx(C,{})]})}export{F as default};

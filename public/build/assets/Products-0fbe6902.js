import{r as s,j as r,d as A}from"./app-de5a15ba.js";import{f as u,a as S}from"./sanity.queries-304d4c75.js";import{P as h,a as f}from"./ProductCard.style-cd4c5c38.js";import{D as P}from"./DefaultLayout-b1f6c423.js";import{C as E}from"./CategoriesWrapper.style-4701f37e.js";import{S as b}from"./SortButton.style-2155c013.js";import"./AddToWishlist-0a07b26e.js";import"./Footer.style-2f8bdf2a.js";import"./ArrowDown-cbd5807a.js";function v(){const[i,c]=s.useState([]),[m,x]=s.useState([]),[a,d]=s.useState(""),[n,g]=s.useState("");s.useEffect(()=>{if(n==="alphabetical"){console.log("sort alphabetical");const t=[...i].sort((e,o)=>{const l=e.title.toUpperCase(),p=o.title.toUpperCase();return l<p?-1:l>p?1:0});c(t)}if(n==="priceAsc"){console.log("sort price ascending");const t=[...i].sort((e,o)=>e.price-o.price);c(t)}if(n==="priceDesc"){console.log("sort price descending");const t=[...i].sort((e,o)=>o.price-e.price);c(t)}},[n]),s.useEffect(()=>{u().then(t=>{c(t)}).catch(t=>console.error("Error fetching products:",t)),S().then(t=>{x(t),console.log(t)}).catch(t=>console.error("Error fetching categories:",t))},[]);function j(t){g(t)}function C(t){u().then(e=>{if(t==="All products"){c(e),d("");return}const o=e.filter(l=>l.subcategory.category.title===t);d(o)}).catch(e=>console.error("Error fetching products:",e))}return r.jsx(r.Fragment,{children:r.jsxs(P,{children:[a&&r.jsx(h,{children:a.map(t=>r.jsx(f,{product:t,showAddToCart:!0,showAddToWishlist:!0},t._id))}),r.jsx("h1",{children:"All products"}),r.jsxs(E,{children:[r.jsx("h2",{children:"Shop by category"}),m.map(t=>r.jsx("div",{children:r.jsx(A,{href:`/products${t.slug.current}`,children:r.jsx("button",{onClick:()=>C(t.title),children:t.title})})},t._id))]}),r.jsx(b,{handleSort:j}),!a&&r.jsx(h,{children:i.map(t=>r.jsx(f,{product:t,showAddToCart:!0,showAddToWishlist:!0},t._id))})]})})}export{v as default};

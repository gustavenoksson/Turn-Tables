import{r as l,j as o,s as t}from"./app-da1ca647.js";import{A as u}from"./ArrowDown-cbd5807a.js";const x=t.div`
    background-color: #EEE;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    cursor: pointer;
    width: 5rem;
    margin-bottom: 1rem;
    position: relative;
    padding: 0.5rem 1rem;
    max-height: 32px;
    gap: .2rem;

    img {
        width: 1rem;
        height: 1rem;
        transform: rotate(${r=>r.open?"180deg":"0"});
    }
`,f=t.button`
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 100%;
`,c=t.div`
    width: 1rem;
    height: 1rem;
    border-color: black;
    border-radius: 100px;
    border: ${r=>r.$confirmSort?"6px solid black":"1px solid black"};
`,b=t.div`
    position: absolute;
    background-color: white;
    border: 1px solid lightgray;
    padding: 1.5rem;
    bottom: -.2rem;
    left: 0;
    transform: translate(0, 100%);
    z-index: 10;
    border-radius: .75rem;
    cursor: default;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`,g=t.ul`
    white-space: nowrap;
`,a=t.li`
    margin-bottom: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 1rem;

    &:last-of-type {
        margin: 0;
    }
`;function S({handleSort:r}){const[e,d]=l.useState(!1),[i,p]=l.useState("");function m(){d(!e)}function h(s){s.stopPropagation()}function n(s){p(s)}return o.jsxs(x,{open:e,onClick:m,children:[o.jsx(f,{children:"Sort"}),o.jsx("img",{src:u,alt:"arrow down"}),e&&o.jsx(b,{onClick:h,children:o.jsxs(g,{children:[o.jsxs(a,{onClick:()=>{r("priceAsc"),n("priceAsc")},children:[o.jsx("button",{children:"Price: Low to High"}),o.jsx(c,{$confirmSort:i==="priceAsc"})]}),o.jsxs(a,{onClick:()=>{r("priceDesc"),n("priceDesc")},children:[o.jsx("button",{children:"Price: High to Low"}),o.jsx(c,{$confirmSort:i==="priceDesc"})]}),o.jsxs(a,{onClick:()=>{r("alphabetical"),n("alphabetical")},children:[o.jsx("button",{children:"Name"}),o.jsx(c,{$confirmSort:i==="alphabetical"})]})]})})]})}export{S};

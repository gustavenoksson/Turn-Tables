import{r as l,j as e,s,a as f,d as g}from"./app-e09afc4f.js";import j from"./DeleteUserForm-01d2092c.js";import P from"./UpdatePasswordForm-d9d2cdb1.js";import w from"./UpdateProfileInformationForm-02b39e59.js";import{D as y}from"./DefaultLayout-c7eb033b.js";import{e as b}from"./sanity.queries-6261ecc9.js";import{A as D}from"./ArrowDown-cbd5807a.js";import"./TextInput-95697a37.js";import"./InputLabel-6c843b0d.js";import"./transition-2018e03d.js";import"./PrimaryButton-f6a7e404.js";import"./Footer.style-0369ef43.js";const v=s.div`
    background-color: #EEE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({open:t})=>t?"20px":"50px"};
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    gap: .2rem;
    height: auto;
`,C=s.img`
    width: 1rem;
    height: 1rem;
    transform: rotate(${t=>t.open?"180deg":"0"});
`,E=s.div`
    padding: 1.5rem;
    z-index: 10;
    cursor: default;
    width: 100%;
    height: 100%;
`,_=s.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
`,A=s.img`
	max-height: 250px;
	margin-right: 1rem;
`,I=s.div`
    display: flex;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	padding: 1rem;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 0.3rem;
    }
`,S=s.div`
    display: flex;
    flex-direction: column;
`;function k({previousOrders:t,products:d}){const[i,m]=l.useState(!1);function p(){m(!i)}const x=r=>{const o=d.find(c=>c._id===r);return o?o.title:"Product Title Not Found"},u=r=>{const o=d.find(c=>c._id===r);return o?o.image:"Product Image Not Found"},n=r=>{const o={year:"numeric",month:"long",day:"numeric"};return new Date(r).toLocaleDateString("en-US",o)};return e.jsxs(v,{open:i,onClick:p,children:[e.jsxs(_,{children:[e.jsxs("p",{children:["Order id: ",t[0].order_id]}),e.jsxs("div",{children:[e.jsx("p",{children:"View more"}),e.jsx(C,{src:D,alt:"Arrow down icon."})]})]}),i&&e.jsxs(E,{children:[t.map(r=>e.jsxs(I,{children:[e.jsx(A,{src:u(r.product_id),alt:"Image of the product."}),e.jsxs(S,{children:[e.jsxs("p",{children:["Title: ",x(r.product_id)]}),e.jsxs("p",{children:["Quantity: ",r.quantity]}),e.jsxs("p",{children:["Total Price: ",r.price]})]})]},r.id)),e.jsxs("p",{children:["Subtotal: ",t[0].price," kr"]}),e.jsx("p",{children:"Delivery: 0 kr"}),e.jsxs("p",{children:["Total: ",t[0].price," kr"]}),e.jsxs("p",{children:["Order Placed At: ",n(t[0].created_at)]}),e.jsx("p",{children:"Payment Method: Card"})]})]})}const a=s.article`
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    height: auto;
`;function Q({mustVerifyEmail:t,status:d,orders:i}){const[m,p]=l.useState([]),[x,u]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const r=Array.from(new Set(i.map(h=>h.product_id))),o=await b(r);u(o);const c=Object.groupBy(i,({order_id:h})=>h);p(c)}catch(r){console.error("Error fetching products:",r)}})()},[i]),e.jsxs(y,{children:[e.jsx(f,{title:"Profile"}),e.jsx("h1",{children:"Profile"}),e.jsxs("section",{children:[e.jsx(g,{href:route("logout"),as:"button",method:"post",children:"Log out"}),e.jsxs("div",{children:[e.jsxs(a,{children:[e.jsx("h2",{children:"Previous Orders"}),Object.values(m).map(n=>e.jsx(k,{previousOrders:n,products:x},n[0].order_id))]}),e.jsx(a,{children:e.jsx(w,{mustVerifyEmail:t,status:d,className:"max-w-xl"})}),e.jsx(a,{children:e.jsx(P,{className:"max-w-xl"})}),e.jsx(a,{children:e.jsx(j,{className:"max-w-xl"})})]})]})]})}export{Q as default};

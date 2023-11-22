import{r as t,u,j as e,d as g,s as i}from"./app-da1ca647.js";import{D as f}from"./DefaultLayout-a2d5f941.js";import"./Footer.style-2d928349.js";const j=i.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 400px;

    & > h2, & > span {
        text-align: center;
    }
`,S=i.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	padding: 1rem;
`,O=i.img`
	max-width: 100px; 
	margin-right: 1rem;
`;function C(){const[n,d]=t.useState(""),[a,l]=t.useState(""),[y,p]=t.useState([]),[P,h]=t.useState(0);function x(){axios.post(route("store.order"),{cart_details:o,total_price:s},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":csrfToken}})}t.useEffect(()=>{p(o),h(s),x(),c()},[]);const{totalPrice:s,clearCart:c,cartDetails:o}=u();return t.useEffect(()=>{const r=JSON.parse(sessionStorage.getItem("orderDetailsStorage")),m=JSON.parse(sessionStorage.getItem("totalPriceStorage"));Object.keys(o).length>0&&sessionStorage.setItem("orderDetailsStorage",JSON.stringify(o)),s&&sessionStorage.setItem("totalPriceStorage",JSON.stringify(s)),d(r),l(m),c()},[a]),e.jsxs(f,{children:[e.jsx("h1",{children:"Order confirmed"}),e.jsxs(j,{children:[e.jsx("h2",{children:"Order no. 1234567"}),e.jsx("span",{children:"01/01/2034"}),n&&Object.values(n).map(r=>e.jsxs(S,{children:[e.jsx(O,{src:r.image,alt:"Image of the product."}),e.jsxs("div",{children:[e.jsx("p",{children:r.name}),e.jsxs("p",{children:["Price: ",r.price," kr"]}),e.jsxs("p",{children:["Total price: ",r.value," kr"]}),e.jsxs("p",{children:["Quantity: ",r.quantity]})]})]},r.id)),e.jsxs("p",{children:["Subtotal: ",a," kr"]}),e.jsx("p",{children:"Delivery: 0 kr"}),e.jsxs("p",{children:["Total: ",a," kr"]}),e.jsx("p",{children:"Payment Method: Card"}),e.jsx(g,{href:route("home"),children:e.jsx("button",{children:"Go to the home page"})})]})]})}export{C as default};

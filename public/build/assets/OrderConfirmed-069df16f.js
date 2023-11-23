import{r as t,u,j as e,d as g,s as i}from"./app-c642f9ff.js";import{D as j}from"./DefaultLayout-6f7aa548.js";import"./Footer.style-7871ea86.js";const f=i.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 400px;

    & > h2, & > span {
        text-align: center;
    }
`,y=i.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	padding: 1rem;
`,S=i.img`
	max-width: 100px; 
	margin-right: 1rem;
`;function I(){const[n,l]=t.useState(""),[a,c]=t.useState(""),[O,p]=t.useState([]),[b,h]=t.useState(0);function x(){axios.post(route("store.order"),{cart_details:o,total_price:s},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":csrfToken}})}t.useEffect(()=>{p(o),h(s),x(),d()},[]);const{totalPrice:s,clearCart:d,cartDetails:o}=u();return t.useEffect(()=>{const r=JSON.parse(sessionStorage.getItem("orderDetailsStorage")),m=JSON.parse(sessionStorage.getItem("totalPriceStorage"));Object.keys(o).length>0&&sessionStorage.setItem("orderDetailsStorage",JSON.stringify(o)),s&&sessionStorage.setItem("totalPriceStorage",JSON.stringify(s)),l(r),c(m),d()},[a]),e.jsxs(j,{children:[e.jsx("h1",{children:"Order confirmed"}),e.jsxs(f,{children:[n?e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Order no. 1234567"}),e.jsx("span",{children:"01/01/2034"}),Object.values(n).map(r=>e.jsxs(y,{children:[e.jsx(S,{src:r.image,alt:"Image of the product."}),e.jsxs("div",{children:[e.jsx("p",{children:r.name}),e.jsxs("p",{children:["Price: ",r.price," kr"]}),e.jsxs("p",{children:["Total price: ",r.value," kr"]}),e.jsxs("p",{children:["Quantity: ",r.quantity]})]})]},r.id)),e.jsxs("p",{children:["Subtotal: ",a," kr"]}),e.jsx("p",{children:"Delivery: 0 kr"}),e.jsxs("p",{children:["Total: ",a," kr"]}),e.jsx("p",{children:"Payment Method: Card"})]}):e.jsxs("p",{children:["It appears that the details for your order have disappeared from this page.",e.jsx("br",{}),e.jsx("br",{}),"If you made the order while logged in, you will find the details stored in your profile page. Simply log in and navigate to your profile to access your order history.",e.jsx("br",{}),e.jsx("br",{}),"Additionally, all orders come with a confirmation email containing all the important details.",e.jsx("br",{}),e.jsx("br",{})]}),e.jsx(g,{href:route("home"),children:e.jsx("button",{children:"Go to the home page"})})]})]})}export{I as default};

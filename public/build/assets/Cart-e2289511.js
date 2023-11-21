import{u as v,j as e,s as a,d as y,q as I,r as g,b as T}from"./app-de5a15ba.js";import{D as k}from"./DefaultLayout-b1f6c423.js";import{D as _,I as O}from"./Decrement-2792f2cb.js";import{A as D}from"./ArrowDown-cbd5807a.js";import{f as W}from"./sanity.queries-304d4c75.js";import"./Footer.style-2f8bdf2a.js";var b="https://js.stripe.com/v3",q=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,j="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",A=function(){for(var r=document.querySelectorAll('script[src^="'.concat(b,'"]')),n=0;n<r.length;n++){var t=r[n];if(q.test(t.src))return t}return null},L=function(r){var n=r&&!r.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(b).concat(n);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(t),t},R=function(r,n){!r||!r._registerWrapper||r._registerWrapper({name:"stripe-js",version:"2.1.11",startTime:n})},u=null,$=function(r){return u!==null||(u=new Promise(function(n,t){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&r&&console.warn(j),window.Stripe){n(window.Stripe);return}try{var o=A();o&&r?console.warn(j):o||(o=L(r)),o.addEventListener("load",function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(d){t(d);return}})),u},z=function(r,n,t){if(r===null)return null;var o=r.apply(void 0,n);return R(o,t),o},S=Promise.resolve().then(function(){return $(null)}),E=!1;S.catch(function(i){E||console.warn(i)});var F=function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];E=!0;var o=Date.now();return S.then(function(d){return z(d,n,o)})};let h;const Y={}.VITE_STRIPE_PUBLIC_KEY;function B(){return h||(h=F(Y)),h}const G=a.span`
    width: 2ch;
    text-align: center;
`,K=a.div`
    background-color: #EEE;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    max-height: 32px;
    line-height: 100%;

    & > button, & > span {
        font-size: 0.75rem;
        font-weight: bold;
    }

    & img {
        width: 1rem;
        height: 1rem;
    }
`;function N({item:i}){const{incrementItem:r,decrementItem:n,cartDetails:t}=v();return e.jsxs(K,{children:[e.jsx("button",{onClick:()=>{n(i.id)},children:e.jsx("img",{src:_,alt:"Decrement icon"})}),e.jsx(G,{children:i.quantity}),e.jsx("button",{onClick:()=>{r(i.id)},children:e.jsx("img",{src:O,alt:"Increment icon"})})]})}const Q=a.div`
	display: flex;
	gap: .5rem;
	text-align: left;

	& > div:last-child {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

    & > div:last-child div:last-child {
        margin-top: auto;
    }
`,U=a.img`
	max-width: 150px; 
`,V=a.span`
	font-weight: bold;
	font-size: 1.2rem;
    margin-bottom: .5rem;
`,f=a.div`
	display: flex;
	width: 100%;
	gap: 1rem;

	& > span:first-child {
		width: 6rem;
		text-align: left;
	}

	& > button {
		color: gray;
		font-size: .9rem;
	}

	@media (max-width: 450px) {
		& > span, & > button {
			font-size: 80%;
		}

		& > span:first-child {
			width: 4rem;
		}
	}
`;function X({item:i,product:r}){var n,t,o,d,p,m;return e.jsxs(Q,{children:[e.jsx(y,{href:`/products${(o=(t=(n=r.subcategory)==null?void 0:n.category)==null?void 0:t.slug)==null?void 0:o.current}${(p=(d=r.subcategory)==null?void 0:d.slug)==null?void 0:p.current}${(m=r.slug)==null?void 0:m.current}`,children:e.jsx(U,{src:i.image,alt:"Image of the product."})}),e.jsxs("div",{children:[e.jsx(V,{children:i.name}),e.jsxs(f,{children:[e.jsx("span",{children:"Price:"}),e.jsxs("span",{children:[i.price," kr"]})]}),e.jsxs(f,{children:[e.jsx("span",{children:"Total Price:"}),e.jsxs("span",{children:[i.value," kr"]})]}),e.jsx(f,{children:e.jsx(N,{item:i})})]})]},i.id)}const H=a.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	justify-content: flex-start;
	gap: 1rem;
    flex-grow: 1;
    max-width: 800px;

	@media (max-width: 1089px) {
		margin-top: 4rem;
        max-width: none;
	}
	
	& button {
		background-color: #2d6fa5;
		border-radius: 50px;
		padding: 1rem 1rem;
		line-height: 100%;
		color: white;
	}

	& > span:nth-of-type(2) {
		font-weight: normal;
	}
`,M=a.div`
	padding-bottom: 1rem;
    font-size: 2rem;
    line-height: 100%;
    border-bottom: 1px solid black;
`,J=a.div`
	& > a {
        display: flex;
        align-items: center;
        background-color: #EEE;
        border-radius: 50px;
        padding: 0.5rem 1rem;
        max-height: 32px;
        line-height: 100%;
        justify-content: space-between;
        cursor: pointer;
        width: fit-content;
        gap: 0.2rem;
    }

	& > a > img {
		transform: rotate(-90deg);
		width: 1.2rem;
	}
`,Z=a.span`
	border-bottom: 1px solid lightgray;
	padding-bottom: 1rem;
	font-weight: normal;
    padding-top: 1rem;
    border-top: 1px solid lightgray;
`,w=a.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid lightgray;
	padding-top: 1rem;
`;function ee({handleCheckout:i,cartCount:r,totalPrice:n}){const{user:t}=I().props;return e.jsxs(H,{children:[e.jsx(M,{children:"Cart Totals"}),e.jsx(J,{children:e.jsxs(y,{href:route("home"),children:[e.jsx("span",{children:"Continue Shopping"}),e.jsx("img",{src:D,alt:"Arrow"})]})}),e.jsx(Z,{children:"To complete purchase in this test version, use card number 4242 4242 4242 4242."}),t?e.jsx("span",{children:"Your order history will be saved on your profile page."}):e.jsx("span",{children:"Sign in to save your order history."}),e.jsxs(w,{children:[e.jsxs("p",{children:["Item",r>1&&"s"]}),e.jsx("p",{children:r})]}),e.jsxs(w,{children:[e.jsx("p",{children:"Total Cost"}),e.jsxs("p",{children:[n," kr"]})]}),e.jsx("button",{onClick:i,children:"Checkout"})]})}const re=a.div`
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;

	@media (min-width: 1090px) {
		flex-direction: row;
		gap: 4rem;
		justify-content: space-between;
	}
`,te=a.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 800px;
`;function de(){const[i,r]=g.useState("");g.useEffect(()=>{W().then(c=>{r(c)}).catch(c=>console.error("Error fetching products:",c))},[]);const{redirectToCheckout:n,cartDetails:t,cartCount:o,totalPrice:d,removeItem:p,clearCart:m}=v(),C=Object.values(i).filter(c=>Object.values(t).some(l=>c._id===l.id));async function P(){const c=await B(),l=Object.values(t).map(s=>({price_data:{currency:s.currency,unit_amount:s.price*100,product_data:{name:s.name,images:[s.image]}},quantity:s.quantity}));try{const s=await T.post("/create-session",{lineItems:l},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":csrfToken}});if(s.status===200){const{error:x}=await c.redirectToCheckout({sessionId:s.data.sessionId});x&&console.error(x.message)}else console.error("Error creating session. Status:",s.status)}catch(s){console.error("Error creating session:",s)}}return e.jsxs(k,{children:[e.jsx("h1",{children:"Your Cart"}),o<=0&&e.jsx("h2",{children:"Your shopping cart appears to be empty."}),e.jsxs(re,{children:[e.jsx(te,{children:Object.values(t).map(c=>{const l=C.find(s=>s._id===c.id);return l?e.jsx(X,{item:c,product:l},c.id):null})}),o>0&&e.jsx(ee,{totalPrice:d,cartCount:o,handleCheckout:P})]})]})}export{de as default};

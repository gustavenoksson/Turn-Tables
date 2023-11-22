import{u as v,j as e,s as a,d as y,q as I,r as g,b as T}from"./app-a49f1c10.js";import{D as k}from"./DefaultLayout-b4ca4b6e.js";import{D,I as O}from"./Decrement-2792f2cb.js";import{A as _}from"./ArrowDown-cbd5807a.js";import{f as A}from"./sanity.queries-26502fcb.js";import"./Footer.style-afccde75.js";var b="https://js.stripe.com/v3",W=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,j="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",q=function(){for(var r=document.querySelectorAll('script[src^="'.concat(b,'"]')),t=0;t<r.length;t++){var n=r[t];if(W.test(n.src))return n}return null},z=function(r){var t=r&&!r.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(b).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},L=function(r,t){!r||!r._registerWrapper||r._registerWrapper({name:"stripe-js",version:"2.1.11",startTime:t})},u=null,R=function(r){return u!==null||(u=new Promise(function(t,n){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe&&r&&console.warn(j),window.Stripe){t(window.Stripe);return}try{var o=q();o&&r?console.warn(j):o||(o=z(r)),o.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(d){n(d);return}})),u},V=function(r,t,n){if(r===null)return null;var o=r.apply(void 0,t);return L(o,n),o},S=Promise.resolve().then(function(){return R(null)}),E=!1;S.catch(function(i){E||console.warn(i)});var $=function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];E=!0;var o=Date.now();return S.then(function(d){return V(d,t,o)})};let h;const G="pk_test_51O7FXwLQy5MDDAl0oVMQa8sz0UcnvrVOhgzmRUhKOvvzPhtvWigmbJAoqVKNkAx376IH9Oer6hmlDcEGaGbipMH400fDyVD1Gq";function K(){return h||(h=$(G)),h}const F=a.span`
    width: 2ch;
    text-align: center;
`,Q=a.div`
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
`;function M({item:i}){const{incrementItem:r,decrementItem:t,cartDetails:n}=v();return e.jsxs(Q,{children:[e.jsx("button",{onClick:()=>{t(i.id)},children:e.jsx("img",{src:D,alt:"Decrement icon"})}),e.jsx(F,{children:i.quantity}),e.jsx("button",{onClick:()=>{r(i.id)},children:e.jsx("img",{src:O,alt:"Increment icon"})})]})}const N=a.div`
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
`,X=a.span`
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
`;function Y({item:i,product:r}){var t,n,o,d,p,m;return e.jsxs(N,{children:[e.jsx(y,{href:`/products${(o=(n=(t=r.subcategory)==null?void 0:t.category)==null?void 0:n.slug)==null?void 0:o.current}${(p=(d=r.subcategory)==null?void 0:d.slug)==null?void 0:p.current}${(m=r.slug)==null?void 0:m.current}`,children:e.jsx(U,{src:i.image,alt:"Image of the product."})}),e.jsxs("div",{children:[e.jsx(X,{children:i.name}),e.jsxs(f,{children:[e.jsx("span",{children:"Price:"}),e.jsxs("span",{children:[i.price," kr"]})]}),e.jsxs(f,{children:[e.jsx("span",{children:"Total Price:"}),e.jsxs("span",{children:[i.value," kr"]})]}),e.jsx(f,{children:e.jsx(M,{item:i})})]})]},i.id)}const H=a.div`
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
`,B=a.div`
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
`;function ee({handleCheckout:i,cartCount:r,totalPrice:t}){const{user:n}=I().props;return e.jsxs(H,{children:[e.jsx(B,{children:"Cart Totals"}),e.jsx(J,{children:e.jsxs(y,{href:route("home"),children:[e.jsx("span",{children:"Continue Shopping"}),e.jsx("img",{src:_,alt:"Arrow"})]})}),e.jsx(Z,{children:"To complete purchase in this test version, use card number 4242 4242 4242 4242."}),n?e.jsx("span",{children:"Your order history will be saved on your profile page."}):e.jsx("span",{children:"Sign in to save your order history."}),e.jsxs(w,{children:[e.jsxs("p",{children:["Item",r>1&&"s"]}),e.jsx("p",{children:r})]}),e.jsxs(w,{children:[e.jsx("p",{children:"Total Cost"}),e.jsxs("p",{children:[t," kr"]})]}),e.jsx("button",{onClick:i,children:"Checkout"})]})}const re=a.div`
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
`;function le(){const[i,r]=g.useState(""),t={}.VITE_TEST_KEY;console.log("Test key:"+t),g.useEffect(()=>{A().then(c=>{r(c)}).catch(c=>console.error("Error fetching products:",c))},[]);const{redirectToCheckout:n,cartDetails:o,cartCount:d,totalPrice:p,removeItem:m,clearCart:ne}=v(),C=Object.values(i).filter(c=>Object.values(o).some(l=>c._id===l.id));async function P(){const c=await K(),l=Object.values(o).map(s=>({price_data:{currency:s.currency,unit_amount:s.price*100,product_data:{name:s.name,images:[s.image]}},quantity:s.quantity}));try{const s=await T.post("/create-session",{lineItems:l},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":csrfToken}});if(s.status===200){const{error:x}=await c.redirectToCheckout({sessionId:s.data.sessionId});x&&console.error(x.message)}else console.error("Error creating session. Status:",s.status)}catch(s){console.error("Error creating session:",s)}}return e.jsxs(k,{children:[e.jsx("h1",{children:"Your Cart"}),d<=0&&e.jsx("h2",{children:"Your shopping cart appears to be empty."}),e.jsxs(re,{children:[e.jsx(te,{children:Object.values(o).map(c=>{const l=C.find(s=>s._id===c.id);return l?e.jsx(Y,{item:c,product:l},c.id):null})}),d>0&&e.jsx(ee,{totalPrice:p,cartCount:d,handleCheckout:P})]})]})}export{le as default};

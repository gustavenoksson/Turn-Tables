import{j as e,d as s,s as o,r as n}from"./app-2342a1b4.js";import{D as a}from"./DefaultLayout-889ef220.js";import{C as l}from"./CategoriesWrapper.style-bd188806.js";import{a as d}from"./sanity.queries-96ef98d0.js";import"./Footer.style-3bcf62ff.js";const c="/build/assets/decoration2-1f445bd4.jpg",m="/build/assets/furniture2-151ce5d8.jpg",h="/build/assets/lighting2-868b6fe2.jpg",p="/build/assets/hugo-throw-blanket-46c2bf96.jpg",g=o.div`
	width: 100%;
    font-size: 2rem;
	margin-top: 2rem;
    line-height: 2.5rem;
	display: flex;
	justify-content: center;
	margin-bottom: 4rem;

	div {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
	}

	div > h2 {
		font-size: 2rem;
		font-weight: bold;
	}

	div > p {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	div > a > button {
		font-size: 1.5rem;
		background-color: #2d6fa5;
		border-radius: 50px;
		color: white;
		padding: .5rem 1rem;
		font-weight: bold;
	}

	img {
		max-width: 500px;
		max-height: 500px;

		@media (max-width: 1200px) {
			display: none;
		}
	}

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`,f=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0 4rem 0;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,u=o.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
	aspect-ratio: 3/4;
	position: relative;
  }

  span {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
	color: white;
	background-color: rgba(0, 0, 0, .3);
	padding: .5rem 1rem;
	font-weight: bold;
	border-radius: 50px;
	font-size: 1.5rem;
	white-space: nowrap;

	@media (max-width: 800px) {
		font-size: .8rem;
		padding: .3rem .7rem;
	}
  }
`,x=[m,h,c],j=["Shop Furniture","Shop Lighting","Shop Home Decor"];function b(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Designing Comfort, Tailoring Style"}),e.jsx("p",{children:"At our core, we specialize in creating spaces that effortlessly embrace your unique taste, with carefully curated designs that bring comfort and style to the forefront of your environment."}),e.jsx(s,{href:route("products"),children:e.jsx("button",{children:"SHOP NOW"})})]}),e.jsx("img",{src:p,alt:"page header"})]}),e.jsx(f,{children:x.map((i,r)=>e.jsx(u,{children:e.jsxs(s,{children:[e.jsx("img",{src:i,alt:"collage image"}),e.jsx("span",{children:j[r]})]})},r))})]})}function S(){const[i,r]=n.useState([]);return n.useEffect(()=>{d().then(t=>{r(t),console.log(t)}).catch(t=>console.error("Error fetching categories:",t))},[]),e.jsxs(a,{children:[e.jsx("h1",{children:"Welcome to Turn Tables"}),e.jsxs(l,{children:[e.jsx("h2",{children:"Shop by category"}),i.map(t=>e.jsx("div",{children:e.jsx("a",{href:`/products${t.slug.current}`,children:e.jsx("button",{children:t.title})})},t._id))]}),e.jsx(b,{})]})}export{S as default};

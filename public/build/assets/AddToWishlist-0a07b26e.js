import{s as W,q as g,r as l,b as c,j as d}from"./app-de5a15ba.js";import{W as T}from"./Footer.style-2f8bdf2a.js";const E="/build/assets/WishlistAdded-b41365e2.svg",x=W.div`
    width: 100%;
    height: 100%;
`,v=({productId:t,onRemoveFromWishlist:h})=>{const{auth:e}=g().props,[f,o]=l.useState(!1),[r,n]=l.useState([]),a=window.csrfToken;l.useEffect(()=>{e.user&&c.get("/api/wishlist").then(s=>{const i=s.data.productIds;o(i.includes(t)),n(i)}).catch(s=>{console.error("Error fetching wishlist items",s)})},[t]);function u(){if(!e.user){window.location.href="/login";return}c.post(route("wishlist.add"),{product_id:t},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":a}}).then(s=>{s.status===200?(o(!0),n([...r,t]),console.log("Added to wishlist!")):console.error("Error adding product to wishlist")}).catch(s=>{console.error(s)})}function p(){if(!e.user){window.location.href="/login";return}c.post(route("wishlist.remove"),{product_id:t},{headers:{"Content-Type":"application/json","X-CSRF-TOKEN":a}}).then(s=>{if(s.status===200){o(!1);const i=r.filter(m=>m!==t);n(i),console.log("Removed from wishlist!"),h&&h(t)}else console.error("Error removing product from wishlist")}).catch(s=>{console.error(s)})}function w(){f?p():u()}return d.jsx(x,{onClick:w,children:d.jsx("img",{src:r.includes(t)?E:T,alt:"Wishlist icon."})})};export{v as A};

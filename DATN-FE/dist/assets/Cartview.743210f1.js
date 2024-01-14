import{B as C}from"./Button.353e6bd4.js";import{N as b,F as x}from"./Navbar.8e3c221a.js";import{_ as w,h as S,r as a,c as r,d as c,b as t,F as p,g as P,e as m,w as B,i as N,t as i,o as d,j as k,v as T,a as V}from"./index.5575964e.js";import{C as f}from"./CartService.48bf6d05.js";import"./LoginService.48415ed8.js";const j={name:"Cartview",components:{Button:C,Navbar:b,Footer:x},data(){return{carts:[]}},methods:{async fetchCarts(){const e=await f.getCart();e&&(this.carts=e.data.data)},formatPrice(e){return e!=null&&e.discount?Math.floor(Number(e==null?void 0:e.price.replace(/,/g,""))*(100-(e==null?void 0:e.discount))/100/1e3)*1e3:Number(e==null?void 0:e.price.replace(/,/g,""))},async removeCart(e){var o=S();await f.deleteCart(e)?o.success("Delete Cart Successfully!",{timeout:2e3}):o.error("Delete Cart Successfully!",{timeout:2e3}),this.fetchCarts()},getTotalPrice(){var o;var e=0;for(let n=1;n<=this.carts.length;n++)console.log(this.formatPrice(this.carts[n])),e+=this.formatPrice((o=this.carts[n])==null?void 0:o.price);return e}},async created(){await this.fetchCarts()},computed:{totalPrice:function(){var e=0;for(let o=0;o<this.carts.length;o++)e+=this.formatPrice(this.carts[o]);return e}}},F={id:"cart",class:"pt-5"},D=t("div",{class:"container pt-5 mt-5"},[t("h3",null,"Shopping Cart"),t("hr",{class:"hr"})],-1),O={id:"cart-container",class:"container pb-3 my-5"},q=t("thead",null,[t("tr",null,[t("td",null,"Remove"),t("td",null,"Image"),t("td",null,"Product"),t("td",null,"Price"),t("td",null,"Quantity"),t("td",null,"Total")])],-1),A=["onClick"],E=t("i",{class:"fa fa-trash",style:{"font-size":"24px"}},null,-1),U=[E],L=["src"],M=["onUpdate:modelValue"],R=V('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),z=[R],I={key:0},Q={colspan:"6"},G=t("br",null,null,-1),H={id:"card-bottom",class:"container"},J={class:"row"},K={class:"coupon col-md-6 col-12 mb-4"},W=t("h5",null,"COUPON",-1),X=t("label",{class:"d-block",for:"coupon_code"},[t("p",null,"Enter your coupon code if you have one. (#CODE30)")],-1),Y={class:"d-flex flex-column flex-lg-row justify-content-between"},Z=t("input",{type:"text",placeholder:"Coupon Code",id:"coupon_code"},null,-1),$={class:"total col-md-6 col-12 mb-4"},tt=t("h5",null,"CART TOTAL",-1),et={class:"d-flex justify-content-between"},ot=t("h6",null,"Subtotal",-1),st=t("div",{class:"d-flex justify-content-between"},[t("h6",null,"Shipping"),t("p",null,"35,000")],-1),nt=t("hr",{class:"second-hr"},null,-1),lt={class:"d-flex justify-content-between"},ct=t("h6",null,"Total",-1),it={class:"d-flex justify-content-end"};function at(e,o,n,rt,u,l){const v=a("Navbar"),g=a("router-link"),_=a("Button"),y=a("Footer");return d(),r(p,null,[c(v),t("section",F,[D,t("div",O,[t("table",null,[q,t("tbody",null,[(d(!0),r(p,null,P(u.carts,s=>(d(),r("tr",{key:s.id,class:"background-none"},[t("td",null,[t("a",{onClick:h=>l.removeCart(s.id)},U,8,A)]),t("td",null,[t("img",{src:s.image.url},null,8,L)]),t("td",null,[t("h5",null,i(s.product_name),1)]),t("td",null,[t("h5",null,i(l.formatPrice(s).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+"\u0111 ",1)]),t("td",null,[k(t("select",{"onUpdate:modelValue":h=>s.quantity=h},z,8,M),[[T,s.quantity]])]),t("td",null,[t("h5",null,i((l.formatPrice(s)*s.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])]))),128)),u.carts.length<1?(d(),r("tr",I,[t("td",Q,[m(" please purchase the product "),G,c(g,{to:"/shop"},{default:B(()=>[m("Shop")]),_:1})])])):N("",!0)])])]),t("div",H,[t("div",J,[t("div",K,[t("div",null,[W,X,t("div",Y,[Z,c(_,{class:"me-3",button_text:"Apply_coupon"})])])]),t("div",$,[t("div",null,[tt,t("div",et,[ot,t("p",null,i(l.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),st,nt,t("div",lt,[ct,t("p",null,i((l.totalPrice+35e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)]),t("div",it,[c(_,{class:"me-3",button_text:"process_to_checkout"})])])])])])]),c(y)],64)}const mt=w(j,[["render",at]]);export{mt as default};

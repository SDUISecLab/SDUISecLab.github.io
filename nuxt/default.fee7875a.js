import{m as B,r as m,A as N,p as $,o as t,a,b as s,F as d,k as f,f as i,w as h,j as k,t as x,x as b,u as _,q as C,i as A,y as H,B as V}from"./entry.c1fc7bf3.js";import{_ as y}from"./plugin-vue_export-helper.a1a6add7.js";const L={class:"nav-bar"},R={class:"nav"},T={class:"nav-item"},F={class:"nav-item-title"},I={key:0,class:"dropdown-content"},M={class:"dropdown-menu"},P={__name:"NavBar",props:["data"],setup(o){const l=B(),n=m(""),c=m(!0);return N(()=>l.path,r=>{n.value=r}),$(()=>{n.value=l.path}),(r,u)=>{const p=A;return t(),a("nav",L,[s("ul",R,[(t(!0),a(d,null,f(o.data,(e,v)=>(t(),a("li",{key:v},[s("div",T,[s("div",F,[i(p,{class:b({active:_(n)==e.link}),to:e.link},{default:h(()=>[k(x(e.name),1)]),_:2},1032,["class","to"])]),e.children?(t(),a("div",I,[s("div",M,[(t(!0),a(d,null,f(e.children,(g,w)=>(t(),a("div",{class:"menuItem",key:w},[i(p,{to:g.link},{default:h(()=>[k(x(g.name),1)]),_:2},1032,["to"])]))),128))])])):C("",!0)])]))),128))]),s("ul",{class:b(["nav-m",{collapse:_(c)}])},[(t(!0),a(d,null,f(o.data,(e,v)=>(t(),a("li",{key:v},[i(p,{class:b({active:_(n)==e.link}),to:e.link},{default:h(()=>[k(x(e.name),1)]),_:2},1032,["class","to"])]))),128))],2),s("button",{onClick:u[0]||(u[0]=e=>_(c)?c.value=!1:c.value=!0)},"\u4E09")])}}},S=y(P,[["__scopeId","data-v-3e7c6bdb"]]),j=""+new URL("logo2.e2a8eb6f.png",import.meta.url).href;const q={class:"header"},z={class:"wrap"},D={__name:"AppHeader",setup(o){m(0);const l=m([{name:"Home",link:"/"},{name:"Publications",link:"/papers"},{name:"Members",link:"/members"},{name:"Research",link:"/group"},{name:"Contact",link:"/contact"}]),n=()=>{H("/")};return(c,r)=>{const u=S;return t(),a(d,null,[s("header",q,[s("div",z,[s("img",{class:"h-12",src:j,alt:"",onClick:n}),i(u,{data:_(l)},null,8,["data"])])]),r[0]||(r[0]=s("div",{class:"header-white"},null,-1))],64)}}},E={};function U(o,l){const n=D;return t(),a("div",null,[i(n),V(o.$slots,"default")])}const K=y(E,[["render",U]]);export{K as default};

import{m as _,r,o as l,a as i,b as n,F as g,k as f,x as v,u as k,f as u,w as x,j as p,t as c,i as y}from"./entry.c1fc7bf3.js";const C={class:"al-pagination"},B={class:"al-pagination-ul"},N={__name:"Pagination",setup(m){const o=_(),a=r(o.query.page||1);return r(20),(s,t)=>{const d=y;return l(),i("div",C,[n("ul",B,[t[0]||(t[0]=n("li",null,"\u4E0A\u4E00\u9875",-1)),(l(),i(g,null,f(5,e=>n("li",{class:v({active:e==k(a)})},[u(d,{onClick:P=>a.value=e,to:"?page="+e},{default:x(()=>[p(c(e),1)]),_:2},1032,["onClick","to"])],2)),64)),t[1]||(t[1]=n("li",null,"\u4E0B\u4E00\u9875",-1))])])}}},$={__name:"[id]",setup(m){const o=_();return console.log("id\u53C2\u6570\u4E3A\uFF1A"+o.params.id),(a,s)=>{const t=N;return l(),i("div",null,[s[0]||(s[0]=p(" \u6211\u7684id\u662F ")),n("p",null,c(a.$route.params.id),1),u(t)])}}};export{$ as default};

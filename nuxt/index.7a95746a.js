import{_ as b}from"./plugin-vue_export-helper.a1a6add7.js";import{r as m,p as k,a,b as t,F as v,k as g,u,t as l,o as c,E as x,q as f}from"./entry.d166d09c.js";const w={class:"product mb-16"},C={class:"al-container md:mt-9"},j={class:"md:flex"},L={class:"md:w-1/5 mb-8"},B={class:"category-ul"},N=["onClick"],E={class:"md:w-4/5 md:ml-14"},F={class:"md:text-3xl md:mb-2",style:{color:"#333","font-style":"italic","font-weight":"600"}},I={class:"grid grid-cols-2 md:grid-cols-2 gap-10 mt-10"},V=["src","title","alt"],q={class:"ml-6"},z={class:"mt-2 font-bold text-lg name hover:cursor-pointer"},D={class:"mt-2"},M={key:0,class:"mt-2"},S={key:1,class:"mt-2"},$={__name:"index",setup(A){const h=m(0),r=m([]),n=m(""),p=m([]);k(async()=>{const d=await(await fetch("/members.json")).json();r.value=d.category,n.value=r.value[0].name;let e=d.member,s=[];for(let o=0;o<e.length;o++)e[o].category==n.value&&s.push(e[o]);p.value=s});const y=async i=>{h.value=i;const e=await(await fetch("/members.json")).json();n.value=r.value[i].name;let s=e.member,o=[];for(let _=0;_<s.length;_++)s[_].category==n.value&&o.push(s[_]);p.value=o};return(i,d)=>(c(),a("div",w,[t("div",C,[t("div",j,[t("div",L,[t("ul",B,[(c(!0),a(v,null,g(u(r),(e,s)=>(c(),a("li",{class:x(["mb-2 mr-3 hover:underline cursor-pointer",{active:u(h)==s}]),onClick:o=>y(s),key:s},l(e.name),11,N))),128))])]),t("div",E,[t("h2",F,l(u(n)),1),t("div",I,[(c(!0),a(v,null,g(u(p),(e,s)=>(c(),a("div",{key:s,class:"flex items-center"},[t("img",{class:"img",src:e.image,title:e.title,alt:e.title},null,8,V),t("div",q,[t("p",z,l(e.name),1),t("p",D,l(e.category),1),e.email?(c(),a("p",M,l(e.email),1)):f("",!0),e.location?(c(),a("p",S,l(e.location),1)):f("",!0)])]))),128))])])])])]))}},J=b($,[["__scopeId","data-v-dfea83b6"]]);export{J as default};

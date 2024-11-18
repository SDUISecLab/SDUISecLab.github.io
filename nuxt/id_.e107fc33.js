import{r as p,o as n,a as r,b as t,F as j,k as S,t as i,l as L,m as N,p as D,h as I,q as f,f as V,j as y,c as w,w as k,i as B}from"./entry.4a0255ef.js";import{A as P,N as z}from"./navigation.min.4b8f7446.js";import{_ as $}from"./plugin-vue_export-helper.a1a6add7.js";import{_ as A}from"./logo.ac620c4e.js";const C={class:"al-container border-box p-10"},F={class:"cards flex flex-wrap"},M={href:"javascript:void(0)",class:"card"},U=["src"],q={class:"card__overlay"},E={class:"card__header"},R={class:"card__header-text flex justify-around w-full"},T={class:"card__title"},G={class:"card__status"},H={class:"card__description"},J={__name:"PageSolution",props:["solutionSwiper"],setup(b){return p([P,z]),(m,a)=>(n(),r("div",null,[t("section",C,[t("div",null,[t("div",F,[(n(!0),r(j,null,S(b.solutionSwiper,(s,_)=>(n(),r("li",{key:_,class:"w-1/4 box-border p-4 mt-6"},[t("a",M,[t("img",{src:s==null?void 0:s.image,class:"card__image",alt:""},null,8,U),t("div",q,[t("div",E,[a[0]||(a[0]=t("svg",{class:"card__arc",xmlns:"http://www.w3.org/2000/svg"},[t("path")],-1)),t("div",R,[t("h3",T,i(s==null?void 0:s.name),1),t("div",G,i(s==null?void 0:s.category),1)])]),t("p",H,i(s==null?void 0:s.description),1)])])]))),128))])])])]))}},K=$(J,[["__scopeId","data-v-1e5a2494"]]);const O={class:"al-container"},Q={class:"md:flex mt-20"},W={class:"md:w-4/5"},X={style:{"margin-top":"2rem"}},Y={class:"flex justify-between mb-6"},Z={class:"md:text-4xl md:mb-2",style:{color:"#333","font-weight":"600"}},tt={class:"leading-9 flex justify-between items-center info"},et={class:"md:w-4/5 md:mr-10",style:{"margin-bottom":"15px"}},st=["src"],ot={key:0,class:"mt-10"},at={class:"list-decimal pl-8"},nt={key:1,class:"mt-10"},lt={__name:"[id]",setup(b){L(()=>{var u;return((u=a.value.desc)==null?void 0:u.length)>20?a.value.desc.substring(0,20)+"...":a.value.desc});const m=N(),a=p({}),s=p([]),_=p([]),v=p([]);return D(async()=>{try{const o=await(await fetch("/groups.json")).json();for(let e=0;e<o.length;e++)o[e].id==m.params.id&&(a.value=o[e],s.value=o[e].content);const l=await(await fetch("/papers.json")).json();for(let e=0;e<l.length;e++)for(let d=0;d<l[e].children.length;d++)l[e].children[d].group==m.params.id&&(l[e].children[d].year=l[e].year,v.value.push(l[e].children[d]));const c=(await(await fetch("/members.json")).json()).member;for(let e=0;e<c.length;e++)(c[e].group==m.params.id||c[e].group==-1)&&_.value.push(c[e])}catch(u){console.error("\u83B7\u53D6\u5206\u7EC4\u5217\u8868\u5931\u8D25:",u),s.value=[],_.value=[],v.value=[]}}),(u,o)=>{var h,g,c;const x=B,l=K;return n(),r("div",O,[t("div",Q,[o[4]||(o[4]=I('<div class="md:w-1/5 mb-8 flex flex-col items-center" data-v-3c794d7a><img src="'+A+'" alt="" style="margin:0 auto;" data-v-3c794d7a><p class="md:block mt-6" style="font-size:22px;font-weight:600;" data-v-3c794d7a>ISecLab@SDU</p><p class="hidden md:block text-xs mt-4" style="font-size:16px;color:grey;" data-v-3c794d7a>Internet and Security Laboratory</p><p class="hidden md:block text-xs mt-4" style="font-size:16px;color:grey;" data-v-3c794d7a>Shandong University</p></div>',1)),t("div",W,[t("div",X,[t("div",Y,[t("h2",Z,i((h=a.value)==null?void 0:h.title),1)]),t("article",tt,[t("p",et,i((g=a.value)==null?void 0:g.desc),1),t("img",{class:"md:w-1/5",src:(c=a.value)==null?void 0:c.image,alt:""},null,8,st)])]),v.value.length>0?(n(),r("div",ot,[o[2]||(o[2]=t("div",{class:"flex justify-between mb-6"},[t("div",null,[t("p",{class:"hidden md:block text-xs md:text-2xl",style:{"font-style":"italic","border-bottom":"2px solid #f2f3f3"}},"Publications")])],-1)),t("ol",at,[(n(!0),r(j,null,S(v.value,(e,d)=>(n(),r("li",{key:d,class:"mb-4"},[t("div",null,[t("strong",null,i(e.title),1),y(", Accepted by "+i(e.conference)+" ",1),e.arxiv?(n(),w(x,{key:0,to:e.arxiv,target:"_blank",class:"font-normal no-underline text-orange-400 hover:text-orange-400 hover:underline"},{default:k(()=>o[0]||(o[0]=[y(" [arxiv] ")])),_:2},1032,["to"])):f("",!0),e.code?(n(),w(x,{key:1,to:e.code,target:"_blank",class:"font-normal no-underline text-orange-400 hover:text-orange-400 hover:underline"},{default:k(()=>o[1]||(o[1]=[y(" [code] ")])),_:2},1032,["to"])):f("",!0)])]))),128))])])):f("",!0),_.value.length>0?(n(),r("div",nt,[o[3]||(o[3]=t("div",{class:"flex justify-between"},[t("div",null,[t("p",{class:"hidden md:block text-xs md:text-2xl",style:{"font-style":"italic","border-bottom":"2px solid #f2f3f3"}},"Members")])],-1)),V(l,{solutionSwiper:_.value},null,8,["solutionSwiper"])])):f("",!0)])])])}}},_t=$(lt,[["__scopeId","data-v-3c794d7a"]]);export{_t as default};
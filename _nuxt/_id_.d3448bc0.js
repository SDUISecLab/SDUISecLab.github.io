import{m as c,r as p,p as _,a as h,b as t,h as u,t as l,o as f}from"./entry.51ac9555.js";import{_ as x}from"./logo.ac620c4e.js";import{_ as y}from"./_plugin-vue_export-helper.a1a6add7.js";const g=""+globalThis.__publicAssetsURL("member/zangchuanchao1.jpg");const v={class:"al-container"},b={class:"md:flex mt-20"},w={class:"md:w-4/5 md:ml-14"},S={class:"md:text-3xl md:mb-2",style:{color:"#333","font-style":"italic","font-weight":"600"}},k={class:"mt-4",style:{"line-height":"2"}},D={class:"mt-4",style:{"line-height":"2"}},j={class:"mt-4",style:{"line-height":"2"}},z={class:"mt-4 flex justify-around",style:{"line-height":"2"}},I=["src"],L={__name:"[id]",setup(B){const d=c(),a=p({});return _(async()=>{try{const o=(await(await fetch("/members.json")).json()).member;for(let e=0;e<o.length;e++)o[e].id==d.params.id&&(a.value=o[e])}catch(i){console.error("\u83B7\u53D6\u6210\u5458\u5217\u8868\u5931\u8D25:",i)}}),(i,s)=>{var o,e,n,m,r;return f(),h("div",v,[t("div",b,[s[5]||(s[5]=u('<div class="md:w-1/5 mb-8 flex flex-col items-center" data-v-68981aad><img src="'+x+'" alt="" style="margin:0 auto;" data-v-68981aad><p class="md:block mt-6" style="font-size:22px;font-weight:600;" data-v-68981aad>ISecLab@SDU</p><p class="hidden md:block text-xs mt-4" style="font-size:16px;color:grey;" data-v-68981aad>Internet and Security Laboratory</p><p class="hidden md:block text-xs mt-4" style="font-size:16px;color:grey;" data-v-68981aad>Shandong University</p></div>',1)),t("div",w,[t("h2",S,l((o=a.value)==null?void 0:o.name),1),s[1]||(s[1]=t("h3",{class:"example-title"},"Description",-1)),t("p",k,l((e=a.value)==null?void 0:e.description),1),s[2]||(s[2]=t("h3",{class:"example-title"},"Email",-1)),t("p",D,[t("strong",null,l((n=a.value)==null?void 0:n.email),1)]),s[3]||(s[3]=t("h3",{class:"example-title"},"Address",-1)),t("p",j,l((m=a.value)==null?void 0:m.address),1),s[4]||(s[4]=t("h3",{class:"example-title"},"Profile",-1)),t("div",z,[t("img",{src:(r=a.value)==null?void 0:r.image,style:{width:"200px"},alt:""},null,8,I),s[0]||(s[0]=t("img",{src:g,style:{width:"200px"},alt:""},null,-1))])])])])}}},N=y(L,[["__scopeId","data-v-68981aad"]]);export{N as default};

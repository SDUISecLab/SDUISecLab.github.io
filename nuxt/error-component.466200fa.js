import{d as o,_ as c,o as f,c as g,n as E,g as k,u as r}from"./entry.d166d09c.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(t){var n;(t.error.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const s=Number(t.error.statusCode||500),a=s===404,u=(n=t.error.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",i=t.error.message||t.error.toString(),d=void 0,l=o(()=>c(()=>import("./error-404.6ab1542f.js"),["./error-404.6ab1542f.js","./entry.d166d09c.js","./entry.abe0b922.css","./composables.21785f92.js","./plugin-vue_export-helper.a1a6add7.js","./error-404.fda4aa6a.css"],import.meta.url).then(e=>e.default||e)),m=o(()=>c(()=>import("./error-500.f94d1875.js"),["./error-500.f94d1875.js","./composables.21785f92.js","./entry.d166d09c.js","./entry.abe0b922.css","./plugin-vue_export-helper.a1a6add7.js","./error-500.88db509d.css"],import.meta.url).then(e=>e.default||e)),p=a?l:m;return(e,_)=>(f(),g(r(p),E(k({statusCode:r(s),statusMessage:r(u),description:r(i),stack:r(d)})),null,16))}},x=P;export{x as default};
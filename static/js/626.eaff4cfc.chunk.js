"use strict";(self.webpackChunkapplepods_react=self.webpackChunkapplepods_react||[]).push([[626],{8437:function(t,a,s){s(2791);a.Z=s.p+"static/media/arrow_down.4af7d8a5bc2fe231bd05d76edbb7f4a9.svg"},1552:function(t,a,s){s(2791);a.Z=s.p+"static/media/arrow_up.02ef0631be7c9485f063c2934f06338f.svg"},626:function(t,a,s){s.r(a);var e=s(9439),i=(s(1552),s(8437),s(1010)),n=s(2791),d=s(184);a.default=function(){var t=(0,n.useState)(""),a=(0,e.Z)(t,2),s=a[0],r=a[1],o=(0,n.useState)(""),c=(0,e.Z)(o,2),l=c[0],u=c[1],h=(0,n.useState)(""),p=(0,e.Z)(h,2),v=p[0],f=p[1],j=(0,n.useState)(""),x=(0,e.Z)(j,2),b=x[0],w=x[1],_=(0,n.useState)(""),m=(0,e.Z)(_,2),B=m[0],y=m[1],g=(0,n.useState)(""),Z=(0,e.Z)(g,2),N=Z[0],k=Z[1];return(0,n.useEffect)((function(){fetch("https://pop.applepodsblack.ru/api/products?populate=deep").then((function(t){return t.json()})).then((function(t){var a=t.data,s=[],e=[],i=[],n=a[window.GlobalProductId-1].attributes.autonomy,o=a[window.GlobalProductId-1].attributes.quality_mic,c=a[window.GlobalProductId-1].attributes.quality_sound;w(a[window.GlobalProductId-1].attributes.equipment),y(a[window.GlobalProductId-1].attributes.functional),k(a[window.GlobalProductId-1].attributes.characteristics);for(var l=0;l<10;l++)n>0?(s.push((0,d.jsx)("div",{className:"stats_point audio",style:{background:"var(--Yellow-gradient, linear-gradient(93deg, #F5EA99 -3.52%, #DB9B45 100%))\n            "}})),n-=1):s.push((0,d.jsx)("div",{className:"stats_point audio",style:{backgroundColor:"var(--Gray, #4B4B4B)\n            "}}));r(s);for(var h=0;h<10;h++)o>0?(i.push((0,d.jsx)("div",{className:"stats_point audio",style:{background:"var(--Yellow-gradient, linear-gradient(93deg, #F5EA99 -3.52%, #DB9B45 100%))\n            "}})),o-=1):i.push((0,d.jsx)("div",{className:"stats_point audio",style:{backgroundColor:"var(--Gray, #4B4B4B)\n            "}}));u(i);for(var p=0;p<10;p++)c>0?(e.push((0,d.jsx)("div",{className:"stats_point audio",style:{background:"var(--Yellow-gradient, linear-gradient(93deg, #F5EA99 -3.52%, #DB9B45 100%))\n            "}})),c-=1):e.push((0,d.jsx)("div",{className:"stats_point audio",style:{backgroundColor:"var(--Gray, #4B4B4B)\n            "}}));f(e)}))}),[]),(0,d.jsxs)("div",{id:"addon_info",children:[(0,d.jsx)("p",{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,d.jsx)("div",{id:"stats",children:(0,d.jsxs)("div",{id:"stats_inner",children:[(0,d.jsxs)("div",{className:"stats_row",children:[(0,d.jsx)("div",{className:"stats_points",children:v}),(0,d.jsx)("p",{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0443\u043a\u0430"})]}),(0,d.jsxs)("div",{className:"stats_row",children:[(0,d.jsx)("div",{className:"stats_points",children:l}),(0,d.jsx)("p",{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u0430"})]}),(0,d.jsxs)("div",{className:"stats_row",children:[(0,d.jsx)("div",{className:"stats_points",children:s}),(0,d.jsx)("p",{children:"\u0410\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0441\u0442\u044c"})]})]})}),(0,d.jsxs)("div",{id:"functionality",children:[(0,d.jsx)(i.Z,{header:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f",content:b}),(0,d.jsx)("hr",{style:{width:"100%",borderColor:"var(--Gray, #4B4B4B)"}}),(0,d.jsx)(i.Z,{header:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b",content:B}),(0,d.jsx)("hr",{style:{width:"100%",borderColor:"var(--Gray, #4B4B4B)"}}),(0,d.jsx)(i.Z,{header:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",content:N})]})]})}},1010:function(t,a,s){var e=s(9439),i=s(1552),n=s(8437),d=s(2791),r=s(184);a.Z=function(t){var a=t.header,s=t.content,o=(0,d.useState)("hide"),c=(0,e.Z)(o,2),l=c[0],u=c[1],h=(0,d.useState)(n.Z),p=(0,e.Z)(h,2),v=p[0],f=p[1];return(0,r.jsxs)("div",{className:"dropdown_component",children:[(0,r.jsxs)("div",{className:"functionality_header",id:"functional_header",onClick:function(){"hide"==l?(u("show"),f(i.Z)):(u("hide"),f(n.Z))},children:[(0,r.jsx)("p",{children:a}),(0,r.jsx)("img",{src:v,id:"functional_arrow"})]}),(0,r.jsx)("div",{className:"functionality_content ".concat(l),id:"functional",children:s})]})}}}]);
//# sourceMappingURL=626.eaff4cfc.chunk.js.map
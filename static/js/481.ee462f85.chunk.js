"use strict";(self.webpackChunkapplepods_react=self.webpackChunkapplepods_react||[]).push([[481],{8437:function(e,i,t){t(2791);i.Z=t.p+"static/media/arrow_down.4af7d8a5bc2fe231bd05d76edbb7f4a9.svg"},1552:function(e,i,t){t(2791);i.Z=t.p+"static/media/arrow_up.02ef0631be7c9485f063c2934f06338f.svg"},1010:function(e,i,t){var r=t(9439),n=t(1552),s=t(8437),d=t(2791),o=t(184);i.Z=function(e){var i=e.header,t=e.content,a=(0,d.useState)("hide"),c=(0,r.Z)(a,2),l=c[0],u=c[1],h=(0,d.useState)(s.Z),p=(0,r.Z)(h,2),f=p[0],v=p[1];return(0,o.jsxs)("div",{className:"dropdown_component",children:[(0,o.jsxs)("div",{className:"functionality_header",id:"functional_header",onClick:function(){"hide"==l?(u("show"),v(n.Z)):(u("hide"),v(s.Z))},children:[(0,o.jsx)("p",{children:i}),(0,o.jsx)("img",{src:f,id:"functional_arrow"})]}),(0,o.jsx)("div",{className:"functionality_content ".concat(l),id:"functional",children:t})]})}},4481:function(e,i,t){t.r(i);var r=t(7762),n=t(9439),s=t(8870),d=t(9705),o=t(1010),a=t(2791),c=(t(6497),t(7576),t(184));i.default=function(){(0,d.oc)();var e=(0,a.useState)(["\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","\u0446\u0435\u043d\u0430",["url","url"]]),i=(0,n.Z)(e,2),t=i[0],l=i[1],u=null,h=(0,a.useState)(""),p=(0,n.Z)(h,2),f=p[0],v=p[1],j=(0,a.useState)("\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0435"),x=(0,n.Z)(j,2),b=x[0],_=x[1],w=(0,a.useState)(""),m=(0,n.Z)(w,2),Z=m[0],g=m[1],y=(0,a.useState)(""),k=(0,n.Z)(y,2),P=k[0],S=k[1],G=(0,a.useState)(0),I=(0,n.Z)(G,2),N=I[0],C=I[1],R=(0,a.useState)("RUB"),B=(0,n.Z)(R,2),U=(B[0],B[1],(0,a.useState)("")),q=(0,n.Z)(U,2),E=q[0],V=q[1],M=(0,a.useState)(["variant","variant","variant"]),T=(0,n.Z)(M,2),z=T[0];return T[1],(0,a.useEffect)((function(){fetch("https://pop.applepodsblack.ru/api/products?populate=deep").then((function(e){return e.json()})).then((function(e){var i=e.data,t=[],n=[];t[0]=i[window.GlobalProductId-1].attributes.name,t[1]=i[window.GlobalProductId-1].attributes.rub_price,n[0]="https://pop.applepodsblack.ru/"+i[window.GlobalProductId-1].attributes.main_photo.data.attributes.url;var s,o=(0,r.Z)(i[window.GlobalProductId-1].attributes.photo.data);try{for(o.s();!(s=o.n()).done;){var a=s.value;n.push("https://pop.applepodsblack.ru/"+a.attributes.url)}}catch(Z){o.e(Z)}finally{o.f()}t[2]=n,t[3]=i[window.GlobalProductId-1].attributes.eur_price,t[4]=i[window.GlobalProductId-1].attributes.byn_price;for(var h=[],p=[],f=function(e){h.push((0,c.jsx)(d.o5,{children:(0,c.jsx)("img",{src:n[e],className:"product_img_carousel"})})),p.push((0,c.jsx)("img",{className:z[e],src:n[e],onClick:function(){return i=e,void u.slideTo(i);var i}}))},j=0;j<n.length;j++)f(j);if("headphones"==i[window.GlobalProductId-1].attributes.category){var x,b=[],w=(0,r.Z)(i[window.GlobalProductId-1].attributes.audio.data);try{for(w.s();!(x=w.n()).done;){var m=x.value;b.push((0,c.jsx)("audio",{controls:!0,src:"https://pop.applepodsblack.ru/"+m.attributes.url}))}}catch(Z){w.e(Z)}finally{w.f()}V(b)}"headphones"!=i[window.GlobalProductId-1].attributes.category&&S((0,c.jsxs)(d.tq,{slidesPerView:3,children:[(0,c.jsx)(d.o5,{children:(0,c.jsx)("div",{className:"story_block",children:(0,c.jsx)("div",{children:(0,c.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,c.jsx)(d.o5,{children:(0,c.jsx)("div",{className:"story_block",children:(0,c.jsx)("div",{children:(0,c.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})}),(0,c.jsx)(d.o5,{children:(0,c.jsx)("div",{className:"story_block",children:(0,c.jsx)("div",{children:(0,c.jsx)("p",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438"})})})})]})),v(p),g(h),console.log(n.length),l(t),C(t[1]),_(i[window.GlobalProductId-1].attributes.info)}))}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(d.tq,{onSwiper:function(e){console.log(e),u=e},slidesPerView:1,modules:[s.Rv],freeMode:!0,children:Z})}),(0,c.jsxs)("div",{id:"main_product_info",children:[(0,c.jsx)("p",{id:"main_info_product_name",children:t[0]}),(0,c.jsx)("div",{className:"select_currency",children:(0,c.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"})}),(0,c.jsxs)("div",{id:"main_info_product_price",children:[(0,c.jsx)("p",{id:"gold_price",children:N}),(0,c.jsx)("div",{id:"main_info_currencylogo",children:(0,c.jsxs)("select",{id:"currency_choose",onChange:function(e){"rub"==e.target.value?C(t[1]):"eur"==e.target.value?C(t[3]):C(t[4])},children:[(0,c.jsx)("option",{value:"rub",children:"RUB"}),(0,c.jsx)("option",{value:"eur",children:"EUR"}),(0,c.jsx)("option",{value:"byn",children:"Br"})]})})]}),(0,c.jsxs)("div",{id:"choose_color",children:[(0,c.jsx)("p",{children:"\u0426\u0432\u0435\u0442 \u043a\u043e\u0440\u043f\u0443\u0441\u0430"}),(0,c.jsx)("div",{className:"color_variants",children:f})]}),(0,c.jsx)("div",{id:"info_dropdown",children:(0,c.jsx)(o.Z,{content:b,header:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})}),(0,c.jsxs)("div",{id:"stories",children:[(0,c.jsx)("p",{children:"\u041f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),P]}),(0,c.jsx)("div",{id:"audio_ex",children:E})]})]})}}}]);
//# sourceMappingURL=481.ee462f85.chunk.js.map
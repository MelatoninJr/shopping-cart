(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/bobaone.4368042d.jpeg"},12:function(e,a,t){e.exports=t.p+"static/media/bobathree.70b8addc.jpg"},13:function(e,a,t){e.exports=t.p+"static/media/bobafour.235055ff.jpg"},14:function(e,a,t){e.exports=t.p+"static/media/bobafive.5db9c455.jpg"},15:function(e,a,t){e.exports=t.p+"static/media/bobasix.7d7d2921.jpg"},16:function(e,a,t){e.exports=t.p+"static/media/bobaseven.c0fc4b4f.jpg"},17:function(e,a,t){e.exports=t.p+"static/media/bobaeight.5b6c6141.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/bobanine.5588036b.jpg"},226:function(e,a,t){},228:function(e,a,t){},230:function(e,a,t){},232:function(e,a,t){},234:function(e,a,t){e.exports=t.p+"static/media/cancel.d4b24021.png"},235:function(e,a,t){},237:function(e,a,t){},239:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(21),r=t.n(i),o=(t(49),t(51),t(33),t(19)),l=t(0),m=(t(226),t(40)),s=t.n(m),u=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"headercontainer"},c.a.createElement("div",{className:"con-one"},c.a.createElement("img",{className:"boba-icon",src:s.a}),c.a.createElement("div",{className:"business-name"},"Boba World")),c.a.createElement("div",{className:"con-two"},c.a.createElement("ul",null,c.a.createElement(o.b,{to:"/home"},"Home"),c.a.createElement(o.b,{to:"/shop"},"Shop"),c.a.createElement(o.b,{to:"/checkout"},"Checkout")))),c.a.createElement(l.a,null))};var d=t(2),p=(t(228),t(230),t(11)),b=t.n(p),E=t(7),f=t.n(E),v=t(12),w=t.n(v),h=t(13),N=t.n(h),B=t(14),y=t.n(B),g=t(15),j=t.n(g),k=t(16),x=t.n(k),O=t(17),q=t.n(O),C=t(18),S=t.n(C),G=function(e){var a=e.data,t=e.placement,n="";return"Kawaii-Chocolate"===a[t].name&&(n=j.a),"Pink-Boba"===a[t].name&&(n=f.a),"Sad-Green"===a[t].name&&(n=S.a),"Yellow-Boba"===a[t].name&&(n=w.a),"Pink-Boba"===a[t].name&&(n=f.a),"Green-Boba"===a[t].name&&(n=N.a),"Brown-Boba"===a[t].name&&(n=b.a),"White-Boba"===a[t].name&&(n=y.a),"Mixed-Brown"===a[t].name&&(n=x.a),"Brown-Keychain"===a[t].name&&(n=q.a),c.a.createElement("div",{className:"cardcontainer",id:e.data[e.placement].name,onClick:e.click,"data-two":e.placement},c.a.createElement("img",{src:n,"data-two":e.placement}),c.a.createElement("div",{className:"info","data-two":e.placement},c.a.createElement("div",{className:"name"},e.data[e.placement].name),c.a.createElement("div",{className:"price"},e.data[e.placement].price)))},$=t(5),K=t(3),P=(t(232),t(234),t(243)),M=function(e){var a=e.data,t=(e.dataset,e.count),n=e.datatwo,i=(e.cartdata,e.setcartdata,"");a[n].index===n&&(i=j.a),"Pink-Boba"===a[n].name&&(i=f.a),"Sad-Green"===a[n].name&&(i=S.a),"Yellow-Boba"===a[n].name&&(i=w.a),"Pink-Boba"===a[n].name&&(i=f.a),"Green-Boba"===a[n].name&&(i=N.a),"Brown-Boba"===a[n].name&&(i=b.a),"White-Boba"===a[n].name&&(i=y.a),"Mixed-Brown"===a[n].name&&(i=x.a),"Brown-Keychain"===a[n].name&&(i=q.a);var r=function(t){"add"===t.target.className&&(e.setcount(e.count+1),e.setdata(function(t){return e.data.map(function(e,t){return console.log(n,t),n===a[t].index?Object(K.a)({},e,{quantity:a[n].quantity+1,totalprice:a[n].quantity*a[n].useprice+a[n].useprice}):Object(K.a)({},e)})})),"sub"===t.target.className&&e.count>0&&(e.setcount(e.count-1),e.setdata(function(t){return e.data.map(function(e,t){return n===t?Object(K.a)({},e,{quantity:a[n].quantity-1,totalprice:a[n].quantity*a[n].useprice-a[0].useprice}):Object(K.a)({},e)})}))};return c.a.createElement("div",{className:"pop-container"},c.a.createElement("div",{className:"container-two"},c.a.createElement("div",{className:"small-one"},c.a.createElement("img",{src:i,id:"pic"})),c.a.createElement("div",{className:"small-two"},c.a.createElement("div",{className:"small-three"},c.a.createElement("div",{className:"list-title"},e.data[n].name),c.a.createElement("div",null,e.data[n].totalprice," "),c.a.createElement("div",{className:"click-container"},c.a.createElement("button",{className:"sub",onClick:r},"-"),c.a.createElement("div",{className:"number"},t),c.a.createElement("button",{className:"add",onClick:r},"+")),c.a.createElement("button",{type:"button",className:"cart-button",onClick:function(t){var c=a[n];Object(P.a)(),e.setcartdata(function(e){return[].concat(Object($.a)(e),[c])}),e.setcount(0),e.setdata(function(a){return e.data.map(function(e,a){return n===a?Object(K.a)({},e,{quantity:0,totalprice:0}):Object(K.a)({},e)})}),e.setpoparray([])},id:e.data[n].name},"Add Cart"))),c.a.createElement("div",{className:"button-holder"},c.a.createElement("svg",{onClick:function(a){e.setpoparray([])},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15"},c.a.createElement("path",{d:"M4.5 4.5l6 6m-6 0l6-6m-3 10a7 7 0 110-14 7 7 0 010 14z",stroke:"currentColor",class:"close"})))))},W=function(e){var a=Object(n.useState)([1,1,1,1,1,1,1,1,1]),t=Object(d.a)(a,2),i=t[0],r=(t[1],Object(n.useState)([])),o=Object(d.a)(r,2),l=o[0],m=o[1],s=Object(n.useState)(),u=Object(d.a)(s,2),p=u[0],b=u[1],E="",f=function(e){m([1]),E=Number(e.target.getAttribute("data-two")),b(E)};return c.a.createElement("div",{className:"shopcontainer"},c.a.createElement("div",{className:"header"}),c.a.createElement("div",{className:"body"},i.map(function(a,t){return c.a.createElement("div",{key:t},c.a.createElement(G,{data:e.data,click:f,placement:t}))}),l.map(function(a,t){return c.a.createElement("div",{key:t},c.a.createElement(M,{data:e.data,setdata:e.setdata,count:e.itemcount,setcount:e.setitemcount,datatwo:p,cartdata:e.cartdata,setcartdata:e.setcartdata,setpoparray:m}))})))},Y=(t(235),t(41)),A=t.n(Y),J=function(e){e.cartdata,e.setcartdata;return c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"background-container"},c.a.createElement("img",{className:"background",src:A.a})))},z=(t(237),t(239),function(e){var a=e.cartdata,t=e.setcartdata,n=e.placement,i=(e.data,e.setdata,"");"Kawaii-Chocolate"===a[n].name&&(i=j.a),"Pink-Boba"===a[n].name&&(i=f.a),"Sad-Green"===a[n].name&&(i=S.a),"Yellow-Boba"===a[n].name&&(i=w.a),"Pink-Boba"===a[n].name&&(i=f.a),"Green-Boba"===a[n].name&&(i=N.a),"Brown-Boba"===a[n].name&&(i=b.a),"White-Boba"===a[n].name&&(i=y.a),"Mixed-Brown"===a[n].name&&(i=x.a),"Brown-Keychain"===a[n].name&&(i=q.a);var r=function(e){"add-one"===e.target.className&&t(function(e){return a.map(function(e,t){return a[n].name===a[t].name?Object(K.a)({},e,{quantity:a[n].quantity+1,totalprice:a[n].quantity*a[n].useprice+a[n].useprice}):Object(K.a)({},e)})}),"sub-one"===e.target.className&&a[n].quantity>0&&t(function(e){return a.map(function(e,t){return a[n].name===a[t].name?Object(K.a)({},e,{quantity:a[n].quantity-1,totalprice:a[n].quantity*a[n].useprice-a[n].useprice}):Object(K.a)({},e)})})};return c.a.createElement("div",{className:"display-container"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:i,className:"display-image"})),c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"name"},a[n].name),c.a.createElement("div",{className:"total"},c.a.createElement("div",null,a[n].totalprice)),c.a.createElement("div",{className:"bottom-container"},c.a.createElement("div",{className:"quantity"}," ",a[n].quantity),c.a.createElement("div",{className:"button-container-one"},c.a.createElement("button",{type:"button",className:"add-one",onClick:r},"+"),c.a.createElement("button",{type:"button",className:"sub-one",onClick:r},"-")))))}),H=function(e){var a=Object(n.useState)(),t=Object(d.a)(a,2),i=t[0],r=t[1];return Object(n.useEffect)(function(){!function(a){var t=0;e.cartdata.map(function(a,n){t+=e.cartdata[n].totalprice}),r(t)}()}),c.a.createElement("div",{className:"page-container"},c.a.createElement("div",{className:"shopping-container"},c.a.createElement("div",{className:"heading"},"Shopping"),e.cartdata.map(function(a,t){return c.a.createElement("div",{key:t},c.a.createElement(z,{cartdata:e.cartdata,setcartdata:e.setcartdata,placement:t}))}),c.a.createElement("div",{className:"lower-container"},c.a.createElement("div",{className:"total-holder"},"Total - $",i),c.a.createElement("button",{type:"button",className:"submit-button",onClick:function(a){alert("Congrats you checked out!"),e.setcartdata([])}},"Checkout"))))},I=function(){var e=Object(n.useState)([{name:"Kawaii-Chocolate",id:"Kawaii-Chocolate",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:0,totalprice:0},{name:"Pink-Boba",id:"Pink-Boba",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:1,totalprice:0},{name:"Sad-Green",id:"Sad-Green",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:2,totalprice:0},{name:"Yellow-Boba",id:"Yellow-Boba",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:3,totalprice:0},{name:"Green-Boba",id:"Green-Boba",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:4,totalprice:0},{name:"Brown-Boba",id:"Brown-Boba",price:"$7.99",useprice:10,switchvalue:!1,quantity:0,index:5,totalprice:0},{name:"White-Boba",id:"White-Boba",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:6,totalprice:0},{name:"Mixed-Brown",id:"Mixed-Brown",price:"$9.99",useprice:10,switchvalue:!1,quantity:0,index:7,totalprice:0},{name:"Brown-Keychain",id:"Brown-Keychain",price:"$9.99",useprice:5,switchvalue:!1,quantity:0,index:8,totalprice:0}]),a=Object(d.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)([]),m=Object(d.a)(r,2),s=m[0],p=m[1],b=Object(n.useState)(0),E=Object(d.a)(b,2),f=E[0],v=E[1],w=Object(n.useState)(),h=Object(d.a)(w,2);h[0],h[1];return c.a.createElement(o.a,null,c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/",element:c.a.createElement(u,null)},c.a.createElement(l.b,{path:"home",element:c.a.createElement(J,{cartdata:s,setcartdata:p})}),c.a.createElement(l.b,{path:"shop",element:c.a.createElement(W,{data:t,setdata:i,itemcount:f,setitemcount:v,cartdata:s,setcartdata:p})}),c.a.createElement(l.b,{path:"checkout",element:c.a.createElement(H,{cartdata:s,setcartdata:p})}))))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)))},40:function(e,a,t){e.exports=t.p+"static/media/bubble-tea.8e564531.png"},41:function(e,a,t){e.exports=t.p+"static/media/background.d15848ef.png"},42:function(e,a,t){e.exports=t(241)},49:function(e,a,t){},51:function(e,a,t){},7:function(e,a,t){e.exports=t.p+"static/media/bobatwo.72fdaeda.jpeg"}},[[42,2,1]]]);
//# sourceMappingURL=main.0e2c6070.chunk.js.map
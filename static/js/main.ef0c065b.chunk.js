(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],[,,,function(e,t,n){e.exports={wrapper:"CounterTable_wrapper__20JOK",counterScore:"CounterTable_counterScore__10tD1",_active:"CounterTable__active__30nsg"}},,function(e,t,n){e.exports={wrapper:"Counter_wrapper__1CMMN"}},,,function(e,t,n){e.exports={button:"MyButton_button__fCN9j"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),u=(n(14),n(2)),s=(n(15),n(5)),i=n.n(s),l=n(3),j=n.n(l),b=n(0),m=function(e){var t=e.count,n=t===e.maxCount?[j.a.counterScore,j.a._active]:[j.a.counterScore];return Object(b.jsx)("div",{className:j.a.wrapper,children:Object(b.jsx)("span",{className:n.join(" "),children:t})})},d=n(6),O=n(9),p=n(8),x=n.n(p),C=["children","onClickButton","disabled"],v=function(e){var t=e.children,n=e.onClickButton,c=e.disabled,r=Object(O.a)(e,C);return Object(b.jsx)("button",Object(d.a)(Object(d.a)({onClick:n,className:x.a.button,disabled:c},r),{},{children:t}))},h=function(e){var t=e.maxCount,n=e.incrementCount,r=e.minCount,a=Object(c.useState)(r),o=Object(u.a)(a,2),s=o[0],l=o[1];return Object(b.jsxs)("div",{className:i.a.wrapper,children:[Object(b.jsx)(m,{maxCount:t,count:s}),Object(b.jsxs)("div",{className:i.a.buttons,children:[Object(b.jsx)(v,{disabled:s===r,onClickButton:function(){l(r)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(b.jsxs)(v,{disabled:s===t,onClickButton:function(){return e=n,void(s<t&&(l(s+e),s+e>t&&l(t)));var e},children:["+",n]})]})]})};var f=function(){var e=Number.parseInt(localStorage.getItem("increment")),t=Number.parseInt(localStorage.getItem("minCount")),n=Number.parseInt(localStorage.getItem("maxCount")),r=Object(c.useState)(t),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(c.useState)(n),l=Object(u.a)(i,2),j=l[0],m=l[1],d=Object(c.useState)(e),O=Object(u.a)(d,2),p=O[0],x=O[1];return Object(c.useEffect)((function(){x(e||1),s(t||0),m(n||10)}),[]),Object(c.useEffect)((function(){localStorage.setItem("minCount",o.toString()),localStorage.setItem("maxCount",j.toString()),localStorage.setItem("increment",p.toString())}),[o,j,p]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{minCount:o,maxCount:j,incrementCount:p}),Object(b.jsxs)("div",{className:"counter-setter",children:[Object(b.jsxs)("div",{className:"counter-setter__min",children:[Object(b.jsx)("input",{value:o,onChange:function(e){s(+e.currentTarget.value)},type:"number"}),Object(b.jsx)("p",{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})]}),Object(b.jsxs)("div",{className:"counter-setter__max",children:[Object(b.jsx)("input",{value:j,onChange:function(e){m(+e.currentTarget.value)},type:"number"}),Object(b.jsx)("p",{children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})]}),Object(b.jsxs)("div",{className:"counter-setter__increment",children:[Object(b.jsx)("input",{value:p,onChange:function(e){var t=+e.currentTarget.value;x(t<1?1:t)},type:"number"}),Object(b.jsx)("p",{children:"\u0428\u0430\u0433"})]})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.ef0c065b.chunk.js.map
(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),i=(n(18),n(12)),o=n(6),l=n(2),b=n(3),u=n(5),j=n(4),h=(n(19),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(h.jsx)("span",{children:"Habit Tracker"}),Object(h.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncreament=function(){e.props.onIncrement(e.props.habit)},e.handleDecreament=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(h.jsxs)("li",{className:"habit",children:[Object(h.jsx)("span",{className:"habit-name",children:t}),Object(h.jsx)("span",{className:"habit-count",children:n}),Object(h.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncreament,children:Object(h.jsx)("i",{className:"fas fa-plus-square"})}),Object(h.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecreament,children:Object(h.jsx)("i",{className:"fas fa-minus-square"})}),Object(h.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(h.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return Object(h.jsxs)("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()},children:[Object(h.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),Object(h.jsx)("button",{className:"add-button",children:"Add"})]})})),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{onAdd:this.props.onAdd}),Object(h.jsx)("ul",{children:this.props.habits.map((function(t){return Object(h.jsx)(d,{habit:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete},t.id)}))}),Object(h.jsx)("button",{className:"habit-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=(a.Component,n(13)),x=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1],s=Object(a.useRef)(),r=Object(a.useCallback)((function(){c(n+1)}));return Object(a.useEffect)((function(){console.log("mounted & uploaded!: ".concat(n))}),[n]),Object(h.jsxs)("li",{className:"habit",children:[Object(h.jsx)("span",{ref:s,className:"habit-name",children:"Reading"}),Object(h.jsx)("span",{className:"habit-count",children:n}),Object(h.jsx)("button",{className:"habit-button habit-increase",onClick:r,children:Object(h.jsx)("i",{className:"fas fa-plus-square"})})]})};n(21);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.348b9f24.chunk.js.map
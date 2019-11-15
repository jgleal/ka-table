(window["webpackJsonpreact-table-control"]=window["webpackJsonpreact-table-control"]||[]).push([[0],{237:function(e,t,n){"use strict";n.r(t);var r,a,o,c,i,l,u=n(0),s=n.n(u),d=n(19),f=n.n(d),p=(n(29),n(30),n(31),n(12)),m=n(8),b=n(2),O=n(1),g=n(11);!function(e){e.Boolean="boolean",e.Date="date",e.Number="number",e.Object="object",e.String="string"}(r||(r={})),function(e){e[e.None=0]="None",e[e.Cell=1]="Cell"}(a||(a={})),function(e){e[e.Esc=27]="Esc",e[e.Enter=13]="Enter"}(o||(o={})),function(e){e.Ascend="ascend",e.Descend="descend"}(c||(c={})),function(e){e[e.None=0]="None",e[e.Single=1]="Single"}(i||(i={})),function(e){e.Center="center",e.Left="left",e.Right="right"}(l||(l={}));var y=function e(){Object(g.a)(this,e),this.table=void 0,this.thead=void 0,this.checkbox=void 0,this.dateInput=void 0,this.numberInput=void 0,this.textInput=void 0},h=new function e(){Object(g.a)(this,e),this.columnDataType=r.String,this.columnSortDirection=c.Ascend,this.css=new y},v=n(7),w=function(e,t,n){var r=Object(v.a)(n),a=e[t],o=r.findIndex((function(e){return e[t]===a}));return o>=0?r.splice(o,1,e):r.push(e),r},j=function(e){return null==e||0===e.length};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D=function(e,t){return e.map((function(e){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t.forEach((function(e){if(null!=n[e.field])switch(e.dataType){case r.String:n[e.field]=n[e.field].toString();break;case r.Number:n[e.field]=Number(n[e.field]);break;case r.Date:n[e.field]=new Date(n[e.field]);break;case r.Boolean:n[e.field]=C(n[e.field]);break;case r.Object:n[e.field]=n[e.field]}})),n}))},C=function(e){if("string"===typeof e)switch(e.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1}return Boolean(e)};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return e?e===c.Ascend?c.Descend:c.Ascend:h.columnSortDirection},T=function(e){var t=e.sortClick,n=e.column,r=n.width,a=n.title,o=n.textAlign;return u.createElement("th",{scope:"col",style:{width:r,textAlign:o}},u.createElement("div",null,a),t&&u.createElement("div",{onClick:t},"Sort"))},x=function(e){var t=e.columns,n=e.onOptionChanged,r=e.sortingMode;return s.a.createElement("tr",{className:"tc-header-row"},t.map((function(e){var a=r===i.Single&&function(){!function(e,t,n){var r=e.findIndex((function(e){return e===t})),a=Object(v.a)(e),o=k(t.sortDirection);a.forEach((function(e,t){e.sortDirection&&(a[t]=S({},e),a[t].sortDirection=void 0)})),a[r]=S({},t),a[r].sortDirection=o,n({columns:a})}(t,e,n)};return s.a.createElement(T,{key:e.field,column:e,sortClick:a})})))},N={},B=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.forEach((function(t,a){var o=Object(v.a)(n);o.push(a),r.push({groupMark:N,key:o,value:a}),Array.isArray(t)?t.forEach((function(e){r.push(e)})):r=r.concat(e(t,o))})),r},M=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,o=(n=Object(v.a)(n)).shift();if(o){var c=K(t,(function(e){return e[o.field]}));return c.forEach((function(t,o){var i=a&&a.filter((function(e){return e[r]===o}));if(!i||i.some((function(e){return e.length===r+1}))){var l=e(t,n,r+1,i&&i.filter((function(e){return e.length>r+1})));l&&c.set(o,l)}else c.set(o,[])})),c}},K=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Map;return e.forEach((function(e){var a=t(e);if(n)r.set(a,[]);else{var o=r.get(a);o?o.push(e):r.set(a,[e])}})),r},V=function(){},F=function(e){var t=e.column,n=e.rowData,r=e.close,a=e.onValueChange,o=n[t.field];return s.a.createElement("input",{autoFocus:!0,className:h.css.checkbox,type:"checkbox",ref:function(e){return e&&(e.indeterminate=j(o))},checked:o||!1,onChange:function(e){return a(e.currentTarget.checked)},onBlur:r})},R=function(e){var t=e.column,n=e.rowData,r=e.close,a=e.onValueChange,o=n[t.field],c=o&&o.toISOString().split("T")[0];return s.a.createElement("input",{autoFocus:!0,className:h.css.dateInput,type:"date",value:c||"",onChange:function(e){var t=e.currentTarget.value;a(t?new Date(t):null)},onBlur:r})},A=function(e){var t=e.column,n=e.rowData,r=e.close,a=e.onValueChange,o=n[t.field];return s.a.createElement("input",{autoFocus:!0,className:h.css.numberInput,type:"number",value:o||"",onChange:function(e){var t=e.currentTarget.value;a(Number(t)||null)},onBlur:r})},W=function(e){var t=e.column,n=e.rowData,r=e.close,a=e.onValueChange,o=n[t.field]||"";return s.a.createElement("input",{autoFocus:!0,type:"text",className:h.css.textInput,value:o||"",onChange:function(e){return a(e.currentTarget.value)},onBlur:r})},I=function(e){switch(e.column.dataType){case r.Boolean:return s.a.createElement(F,e);case r.Date:return s.a.createElement(R,e);case r.Number:return s.a.createElement(A,e);default:return s.a.createElement(W,e)}},z=function(e){var t=e.column,n=e.column.textAlign,r=e.rowData,a=e.onValueChange;return u.createElement("td",{style:{textAlign:n}},u.createElement(I,Object.assign({column:t,rowData:r},{close:V,onValueChange:a})),u.createElement("div",{className:"tc-filter-row-clear-button",onClick:function(){a(null)}},"Clear"))},L=function(e){var t=e.columns,n=e.filterRow,r=e.onOptionChanged,a=n.reduce((function(e,t,n,r){return e[t.field]=t.value,e}),{});return s.a.createElement("tr",{className:"tc-filter-row"},t.map((function(e){return s.a.createElement(z,{key:e.field,column:e,rowData:a,close:V,onValueChange:function(t){!function(e,t,n,r){var a={field:t,operator:"=",value:e};r({filterRow:j(e)?function(e,t,n){var r=e[t];return n.filter((function(e){return e[t]!==r}))}(a,"field",n):w(a,"field",n)})}(t,e.field,n,r)}})})))},J=function(e){var t=e.columns,n=e.groupRowData,r=e.groupsExpanded,a=e.onOptionChanged;return s.a.createElement("tr",null,s.a.createElement("td",{colSpan:t.length,onClick:function(){!function(e,t,n){var r=e.filter((function(e){return JSON.stringify(e)!==JSON.stringify(t.key)}));r.length===e.length&&r.push(t.key),n({groupsExpanded:r})}(r,n,a)}},n.value.toString()))},q=function(e,t,n){return e===a.Cell&&!!n.find((function(e){return e.field===t}))},H=function(e){var t=e.column,n=e.rowData,r=e.openEditor,a=n[t.field];return u.createElement("div",{className:"tc-cell-text",onClick:r},j(a)?u.createElement(u.Fragment,null,"\xa0"):a.toString())},G=function(e){var t=e.column.cell;return t?t(e):u.createElement(H,e)},$=function(e,t){return window.addEventListener(e,t),function(){window.removeEventListener(e,t)}},Q=function(e){var t=e.message;return s.a.createElement("div",{className:"tc validation-message"},t)};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.column,n=e.column.field,r=e.rowData,a=e.close,c=e.onValueChange,i=Object(u.useState)(r),l=Object(O.a)(i,2),d=l[0],f=l[1],p=function(e,t,n){if(n)return n(e[t],e)}(d,t.field,t.validation),m=Object(u.useCallback)((function(){p||(c(X({},r,{},Object(b.a)({},n,d[n]))),a())}),[p,c,a,d,n,r]);Object(u.useEffect)((function(){return e=a,t=m,$("keyup",(function(n){n.keyCode===o.Esc&&e(),n.keyCode===o.Enter&&t()}));var e,t}),[a,m]);var g=X({},e,{},{close:m,onValueChange:function(e){var t=X({},r,{},Object(b.a)({},n,e));f(t)},rowData:d});return s.a.createElement(s.a.Fragment,null,s.a.createElement(I,g),p&&s.a.createElement(Q,{message:p}))},Z=function(e){var t=e.column.editor;return t?t(e):u.createElement(Y,e)},_=function(e){var t=e.editableCells,n=e.column,r=e.column.textAlign,o=e.isEditableCell,c=e.onOptionChanged,i=e.editingMode,l=e.onRowDataChanged,s=e.rowData,d=s[e.rowKey];return u.createElement("td",{style:{textAlign:r}},o?u.createElement(Z,Object.assign({column:n,rowData:s},{close:function(){return function(e,t,n){n({editableCells:t.filter((function(t){return t.field!==e.field||t.rowKeyValue!==e.rowKeyValue}))})}({field:n.field,rowKeyValue:d},t,c)},onValueChange:l})):u.createElement(G,Object.assign({column:n,rowData:s},{openEditor:function(){return i!==a.None&&function(e,t,n){n({editableCells:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.concat([e])}(e,t)})}({field:n.field,rowKeyValue:d},t,c)}})))},ee=function(e){var t=e.columns,n=e.editableCells,r=e.editingMode,a=e.onOptionChanged,o=e.onRowDataChanged,c=e.rowData,i=e.rowKey,l=function(e,t){return t?t.filter((function(t){return t.rowKeyValue===e})):[]}(c[i],n);return s.a.createElement("tr",{className:"tc-row"},t.map((function(e){return s.a.createElement(_,{key:e.field,rowData:c,column:e,rowKey:i,editingMode:r,isEditableCell:q(r,e.field,l),editableCells:n,onOptionChanged:a,onRowDataChanged:o})})))},te=function(e){var t=e.columns,n=e.data,r=e.editableCells,o=void 0===r?[]:r,c=e.editingMode,i=void 0===c?a.None:c,l=e.filterRow,s=e.groups,d=e.groupsExpanded,f=e.onDataChanged,p=void 0===f?function(){}:f,m=e.onOptionChanged,b=e.rowKey,O=s?function(e,t,n){var r=M(e,t,0,n);return B(r)}(n,s,d):n;return s&&!d&&(d=function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;i.groupMark===N&&t.push(i.key)}}catch(l){r=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return t}(O)),u.createElement("tbody",null,l&&u.createElement(L,{columns:t,filterRow:l,onOptionChanged:m}),O.map((function(e){return e.groupMark===N?u.createElement(J,{key:e.key,columns:t,groupRowData:e,groupsExpanded:d||[],onOptionChanged:m}):u.createElement(ee,{key:e[b],columns:t,rowData:e,rowKey:b,onOptionChanged:m,editableCells:o,editingMode:i,onRowDataChanged:function(e){var t=w(e,b,n);p(t)}})})))},ne=function(e){var t=e.columns,n=e.filterRow,r=e.onOptionChanged,a=e.search,o=e.sortingMode,l=void 0===o?i.None:o,s=e.data;return s=a?function(e,t,n){return e.reduce((function(e,r){return e.concat(t.filter((function(t){return r.search?r.search(n,t,r):e.indexOf(t)<0&&t[r.field].toString().toLowerCase().includes(n.toLowerCase())})))}),[])}(t,s,a):s,s=D(s,t),s=function(e,t){var n=e.find((function(e){return e.sortDirection}));if(!n)return t;var r=n.field,a=n.sortDirection===c.Ascend?function(e,t){return e[r]<t[r]?-1:1}:function(e,t){return e[r]>t[r]?-1:1};return Object(v.a)(t).sort(a)}(t,s=n?function(e,t){return t.reduce((function(e,t){var n="string"===typeof t.value?function(e){return e[t.field].toLowerCase().includes(t.value.toLowerCase())}:function(e){return e[t.field]===t.value};return e.filter(n)}),e)}(s,n):s),u.createElement("div",{className:"tc"},u.createElement("table",{className:h.css.table},u.createElement("thead",{className:h.css.thead},u.createElement(x,{columns:t,onOptionChanged:r,sortingMode:l})),u.createElement(te,Object.assign({},e,{data:s}))))};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ae=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1,nextTry:new Date(2019,10,8,10)},{id:3,name:"Tom Williams",score:45,passed:!1,nextTry:new Date(2019,11,8,10)},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1,nextTry:new Date(2019,10,9,10)}],oe={columns:[{dataType:r.String,field:"name",title:"Name",width:"30%"},{field:"score",title:"Score",dataType:r.Number,width:"10%",textAlign:l.Right},{cell:function(e){var t=e.column.field,n=e.rowData,r=e.openEditor;return s.a.createElement("div",{onClick:r},n[t]?"Passed":"Failed")},dataType:r.Boolean,field:"passed",textAlign:l.Right,title:"Results",width:"10%"},{field:"nextTry",title:"Next Try",dataType:r.Date,textAlign:l.Right}],editingMode:a.Cell,rowKey:"id"},ce=function(){var e=Object(u.useState)(oe),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(ae),o=Object(O.a)(a,2),c=o[0],i=o[1];return s.a.createElement(ne,Object.assign({},n,{data:c,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},onDataChanged:function(e){i(e)}}))};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1,nextTry:new Date(2019,10,8,10)},{id:3,name:"Tom Williams",score:45,passed:!1,nextTry:new Date(2019,11,8,10)},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1,nextTry:new Date(2019,10,9,10)}],se={columns:[{dataType:r.String,field:"name",title:"Name",editor:function(e){var t=e.column.field,n=e.rowData,r=e.close,a=e.onValueChange,o=Object(u.useState)(n[t]),c=Object(O.a)(o,2),i=c[0],l=c[1];return s.a.createElement("div",null,s.a.createElement("input",{className:"form-control",type:"text",value:i,onChange:function(e){return l(e.currentTarget.value)}}),s.a.createElement("button",{onClick:function(){a(le({},n,{},Object(b.a)({},t,i))),r()}},"Save"),s.a.createElement("button",{onClick:r},"Cancel"))},width:"30%"},{field:"score",title:"Score",dataType:r.Number,width:"10%"},{dataType:r.Boolean,field:"passed",title:"Passed",editor:function(e){var t=e.column.field,n=e.rowData,r=e.close,a=e.onValueChange,o=Object(u.useState)(n[t]),c=Object(O.a)(o,2),i=c[0],l=c[1];return s.a.createElement("div",null,s.a.createElement("select",{className:"form-control",autoFocus:!0,defaultValue:i,onBlur:function(){a(le({},n,{},Object(b.a)({},t,i))),r()},onChange:function(e){l(C(e.currentTarget.value))}},s.a.createElement("option",{value:"true"},"True"),s.a.createElement("option",{value:"false"},"False")))},width:"10%"},{field:"nextTry",title:"Next Try",dataType:r.Date}],editingMode:a.Cell,rowKey:"id"},de=function(){var e=Object(u.useState)(se),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(ue),o=Object(O.a)(a,2),c=o[0],i=o[1];return s.a.createElement(ne,Object.assign({},n,{data:c,onOptionChanged:function(e){r(le({},n,{},e))},onDataChanged:function(e){i(e)}}))},fe=(n(32),n(20)),pe=n.n(fe),me=new y;me.table="table table-striped",me.thead="thead-dark",me.checkbox="form-control",me.dateInput="form-control",me.numberInput="form-control",me.textInput="form-control";var be=me;h.css=be;var Oe=function(e,t){return function(){var n=Object(u.useState)(""),r=Object(O.a)(n,2),a=r[0],o=r[1];return Object(u.useEffect)((function(){var t=e.name;fetch("demos/".concat(t,"/").concat(t,".tsx")).then((function(e){return e.text()})).then((function(e){return o(e)}))}),[]),s.a.createElement("div",null,s.a.createElement("h1",null,t),s.a.createElement(e,null),s.a.createElement(pe.a,{className:"language-typescript"},a))}};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ye=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1,nextTry:new Date(2019,10,8,10)},{id:3,name:"Tom Williams",score:45,passed:!1,nextTry:new Date(2019,11,8,10)},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1,nextTry:new Date(2019,10,9,10)}],he={columns:[{field:"name",title:"Name",dataType:r.String,width:"30%"},{field:"score",title:"Score",dataType:r.Number,width:"10%"},{field:"passed",title:"Passed",dataType:r.Boolean,width:"10%"},{field:"nextTry",title:"Next Try",dataType:r.Date}],editableCells:[{field:"name",rowKeyValue:2}],editingMode:a.Cell,rowKey:"id"},ve=function(){var e=Object(u.useState)(he),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(ye),o=Object(O.a)(a,2),c=o[0],i=o[1];return s.a.createElement(ne,Object.assign({},n,{data:c,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},onDataChanged:function(e){i(e)}}))},we=n(21),je=n.n(we),Ee=function(e){return null==e||0===e.length},De=function(e,t){return"string"===typeof t.value?e[t.field].toLowerCase().includes(t.value.toLowerCase()):e[t.field]===t.value},Ce=function(e,t){switch(t.operator){case"contains":return function(e,t){return e[t.field].includes(t.value)}(e,t);case"=":return De(e,t);case"<>":return function(e,t){return!De(e,t)}(e,t);case">":return function(e,t){return e[t.field]>t.value}(e,t);case">=":return function(e,t){return e[t.field]>=t.value}(e,t);case"<":case"<=":return function(e,t){return e[t.field]<t.value}(e,t);case"blank":return function(e,t){return Ee(e[t.field])}(e,t);case"notBlank":return function(e,t){return!Ee(e[t.field])}(e,t);default:throw Error("unknown operator")}},Pe=function(e,t,n){return"or"===t.toLowerCase()?Se(e,n):ke(e,n)},Se=function(e,t){var n=t.reduce((function(t,n){if(n.items){var r=Pe(e,n.groupName,n.items);return t.concat(r.filter((function(e){return t.indexOf(e)<0})))}return t.concat(e.filter((function(e){return t.indexOf(e)<0&&Ce(e,n)})))}),[]);return e.filter((function(e){return n.includes(e)}))},ke=function(e,t){return t.reduce((function(e,t){return t.items?Pe(e,t.groupName,t.items):e.filter((function(e){return Ce(e,t)}))}),e)};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var xe=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1},{id:3,name:"Tom Williams",score:45,passed:!1},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Tom Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1}],Ne={columns:[{field:"name",title:"Name",dataType:r.String,sortDirection:c.Descend},{field:"score",title:"Score",dataType:r.Number},{field:"passed",title:"Passed",dataType:r.Boolean}],rowKey:"id",sortingMode:i.Single},Be=[{caption:"Name",name:"name",operators:[{caption:"Contains",name:"contains"},{caption:"Does not equal",name:"<>"}]},{caption:"Score",name:"score",operators:[{caption:"Equals",name:"="}]}],Me=[{caption:"And",name:"and"},{caption:"Or",name:"or"}],Ke={groupName:"and",items:[{field:"name",key:"1",operator:"contains",value:"Tom"}]},Ve=function(){var e=Object(u.useState)(Ne),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(Ke),o=Object(O.a)(a,2),c=o[0],i=o[1],l=function(e,t){return Pe(e,t.groupName,t.items)}(xe,c);return s.a.createElement(s.a.Fragment,null,s.a.createElement(je.a,{fields:Be,groups:Me,filterValue:c,onFilterValueChanged:function(e){i(e)}}),s.a.createElement(ne,Object.assign({},n,{data:l,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))}})))};function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Re=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1},{id:3,name:"Tom Williams",score:45,passed:!1},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1}],Ae={columns:[{field:"name",title:"Name",dataType:r.String,sortDirection:c.Descend},{field:"score",title:"Score",dataType:r.Number},{field:"passed",title:"Passed",dataType:r.Boolean}],filterRow:[{field:"name",operator:"=",value:"Billi Bob"}],rowKey:"id"},We=function(){var e=Object(u.useState)(Ae),t=Object(O.a)(e,2),n=t[0],r=t[1];return s.a.createElement(ne,Object.assign({},n,{data:Re,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))}}))};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ze=[{id:1,type:"Cat",name:"Kas",country:"Czech Republic",age:2},{id:2,type:"Dog",name:"Rex",country:"Montenegro",age:6},{id:3,type:"Cat",name:"Simba",country:"France",age:12},{id:4,type:"Dog",name:"Beethoven",country:"Czech Republic",age:3},{id:5,type:"Cat",name:"Hash",country:"Czech Republic",age:8}],Le={columns:[{field:"type",title:"Type",dataType:r.String},{field:"name",title:"Name",dataType:r.String},{field:"country",title:"Country",dataType:r.String},{field:"age",title:"Age",dataType:r.Number}],editingMode:a.Cell,groups:[{field:"country"},{field:"type"}],rowKey:"id"},Je=function(){var e=Object(u.useState)(Le),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(ze),o=Object(O.a)(a,2),c=o[0],i=o[1];return s.a.createElement(ne,Object.assign({},n,{data:c,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},onDataChanged:function(e){i(e)}}))};function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var He=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1},{id:3,name:"Tom Williams",score:45,passed:!1},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1}],Ge={columns:[{field:"name",title:"Name",dataType:r.String,width:"40%"},{field:"score",title:"Score",dataType:r.Number,width:"10%"},{dataType:r.Boolean,field:"passed",search:function(e,t){return"false"===e&&!t.passed||"true"===e&&t.passed},title:"Passed"}],rowKey:"id",search:"Billi Bob"},$e=function(){var e=Object(u.useState)(Ge),t=Object(O.a)(e,2),n=t[0],r=t[1],a=function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{defaultValue:n.search,onChange:function(e){a({search:e.currentTarget.value})}}),s.a.createElement(ne,Object.assign({},n,{data:He,onOptionChanged:a})))};function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ue=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:55,passed:!1},{id:3,name:"Tom Williams",score:45,passed:!1},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1}],Xe={columns:[{field:"name",title:"Name",dataType:r.String,sortDirection:c.Descend},{field:"score",title:"Score",dataType:r.Number},{field:"passed",title:"Passed",dataType:r.Boolean}],rowKey:"id",sortingMode:i.Single},Ye=function(){var e=Object(u.useState)(Xe),t=Object(O.a)(e,2),n=t[0],r=t[1];return s.a.createElement(ne,Object.assign({},n,{data:Ue,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))}}))};function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var _e=[{id:1,name:"Mike Wazowski",score:80,passed:!0},{id:2,name:"Billi Bob",score:155,passed:!1},{id:3,name:"Tom Williams",score:45,passed:!1},{id:4,name:"Kurt Cobain",score:75,passed:!0},{id:5,name:"Marshall Bruce",score:77,passed:!0},{id:6,name:"Sunny Fox",score:33,passed:!1}],et={columns:[{field:"name",title:"Name",dataType:r.String,width:"40%"},{dataType:r.Number,field:"score",title:"Score",validation:function(e,t){if(e>100)return"Value can't be more than 100"},width:"10%"},{dataType:r.Boolean,field:"passed",title:"Passed"}],editableCells:[{field:"score",rowKeyValue:2}],editingMode:a.Cell,rowKey:"id"},tt=[[ce,"Custom Cell"],[de,"Custom Editor"],[ve,"Editing"],[Ve,"Filter Extended"],[We,"Filter Row"],[Je,"Grouping"],[$e,"Search"],[Ye,"Sorting"],[function(){var e=Object(u.useState)(et),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)(_e),o=Object(O.a)(a,2),c=o[0],i=o[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(ne,Object.assign({},n,{data:c,onOptionChanged:function(e){r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},onDataChanged:function(e){i(e)}})))},"Validation"]],nt=tt.map((function(e){var t=e[0].name.replace("Demo",""),n=e[1];return{demoComponent:Oe(e[0],n),name:t,title:n,path:"/".concat(t)}})),rt=tt.find((function(e){return e[0]===Je}))||tt[0],at=function(){return s.a.createElement(p.a,null,s.a.createElement("div",{className:"demos"},s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(p.b,{to:"/"},"Home")),nt.map((function(e){return s.a.createElement("li",{key:e.name},s.a.createElement(p.b,{to:e.path},e.title))})))),s.a.createElement("main",null,s.a.createElement(m.a,{exact:!0,path:"/",component:Oe(rt[0],rt[1])}),nt.map((function(e){return s.a.createElement(m.a,{key:e.name,path:e.path,component:e.demoComponent})})))))},ot=function(){return s.a.createElement(at,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(s.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports=n(237)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.8f693e79.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(33),a(4)),s=a(5),u=a(7),i=a(6),d=a(8),p=a(3),m=a(26),h=a.n(m),f=function(e,t){switch(t){case"BRL":return e.toFixed(2).replace(".",",");default:return e.toFixed(2)}},v={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0}},y=(a(56),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),b=function(e){var t=e.options,a=e.classes,n=e.handleOnChange;return r.a.createElement("select",{onChange:function(e){return n(e.target.value)},className:a},function(e){return e.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)}))}(t))},E=[{value:"",label:"Select"},{value:"lowestprice",label:"Lowest to highest"},{value:"highestprice",label:"Highest to lowest"}],g=Object(p.b)((function(e){return{sort:e.sort.type}}),{updateSort:function(e){return{type:"UPDATE_SORT",payload:e}}})((function(e){var t=e.updateSort;e.sort;return r.a.createElement("div",{className:"sort"},"Order by",r.a.createElement(b,{options:E,handleOnChange:function(e){return t(e)}}))})),O=function(e){return r.a.createElement("div",{className:"shelf-container-header"},r.a.createElement("small",{className:"products-found"},r.a.createElement("span",null,e.productsLength," Product(s) found.")),r.a.createElement(g,null))},C=Object(p.b)(null,{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})((function(e){var t=e.product,a=e.addProduct;t.quantity=1;var n,c=f(t.price,t.currencyId);if(t.installments){var o=t.price/t.installments;n=r.a.createElement("div",{className:"installment"},r.a.createElement("span",null,"or ",t.installments," x"),r.a.createElement("b",null,t.currencyFormat,f(o,t.currencyId)))}return r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(t)},"data-sku":t.sku},t.isFreeShipping&&r.a.createElement("div",{className:"shelf-stopper"},"Free shipping"),r.a.createElement("p",{className:"shelf-item__title"},t.title),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("div",{className:"val"},r.a.createElement("small",null,t.currencyFormat),r.a.createElement("b",null,c.substr(0,c.length-3)),r.a.createElement("span",null,c.substr(c.length-3,3))),n),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))})),P=function(e){return e.products.map((function(e){return r.a.createElement(C,{product:e,key:e.id})}))},k=(a(57),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort;a.setState({isLoading:!0}),a.props.fetchProducts(e,t,(function(){a.setState({isLoading:!1})}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(e){var t=e.filters,a=e.sort,n=this.props.filters;t.length!==n.length&&this.handleFetchProducts(t,void 0),a!==this.props.sort&&this.handleFetchProducts(void 0,a)}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(y,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(O,{productsLength:e.length}),r.a.createElement(P,{products:e})))}}]),t}(n.Component)),T=Object(p.b)((function(e){return{products:e.shelf.products,filters:e.filters.items,sort:e.sort.type}}),{fetchProducts:function(e,t,a){return function(n){return h.a.get("https://react-shopping-cart-67954.firebaseio.com/products.json").then((function(r){var c=r.data.products;return e&&e.length>0&&(c=c.filter((function(t){return e.find((function(e){return t.availableSizes.find((function(t){return t===e}))}))}))),t&&(c=c.sort(v[t])),a&&a(),n({type:"FETCH_PRODUCTS",payload:c})})).catch((function(e){console.log("Could not fetch products. Try again later.")}))}}})(k),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isChecked:!1},a.toggleCheckboxChange=function(){var e=a.props,t=e.handleCheckboxChange,n=e.label;a.setState((function(e){return{isChecked:!e.isChecked}})),t(n)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.classes,n=this.state.isChecked;return r.a.createElement("div",{className:a},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:t,checked:n,onChange:this.toggleCheckboxChange}),r.a.createElement("span",{className:"checkmark"},t)))}}]),t}(n.Component),_=(a(58),["XS","S","M","ML","L","XL","XXL"]),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).toggleCheckbox=function(e){a.selectedCheckboxes.has(e)?a.selectedCheckboxes.delete(e):a.selectedCheckboxes.add(e),a.props.updateFilters(Array.from(a.selectedCheckboxes))},a.createCheckbox=function(e){return r.a.createElement(N,{classes:"filters-available-size",label:e,handleCheckboxChange:a.toggleCheckbox,key:e})},a.createCheckboxes=function(){return _.map(a.createCheckbox)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.selectedCheckboxes=new Set}},{key:"render",value:function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("h4",{className:"title"},"Sizes:"),this.createCheckboxes())}}]),t}(n.Component),w=Object(p.b)(null,{updateFilters:function(e){return{type:"UPDATE_FILTER",payload:e}}})(j),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity+1,e(t)},a.handleOnDecrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity-1,e(t)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){return t(a)}}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.title),r.a.createElement("p",{className:"desc"},"".concat(a.availableSizes[0]," | ").concat(a.style)," ",r.a.createElement("br",null),"Quantity: ",a.quantity)),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("p",null,"".concat(a.currencyFormat,"  ").concat(f(a.price))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,disabled:1===a.quantity,className:"change-product-button"},"-"),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),t}(n.Component),A=(a(59),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach((function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)})),c||n.push(e),r(n),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex((function(t){return t.id===e.id}));c>=0&&(n.splice(c,1),r(n))},a.proceedToCheckout=function(){var e=a.props.cartTotal,t=e.totalPrice,n=e.productQuantity,r=e.currencyFormat,c=e.currencyId;n?alert("Checkout - Subtotal: ".concat(r," ").concat(f(t,c))):alert("Add some product in the cart!")},a.changeProductQuantity=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.find((function(t){return t.id===e.id}));c.quantity=e.quantity,c.quantity<=0&&a.removeProduct(c),r(n)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartTotal,n=t.cartProducts,c=t.removeProduct,o=t.changeProductQuantity,l=n.map((function(e){return r.a.createElement(S,{product:e,removeProduct:c,changeProductQuantity:o,key:e.id})})),s=["float-cart"];return this.state.isOpen&&s.push("float-cart--open"),r.a.createElement("div",{className:s.join(" ")},this.state.isOpen&&r.a.createElement("div",{onClick:function(){return e.closeFloatCart()},className:"float-cart__close-btn"},"X"),!this.state.isOpen&&r.a.createElement("span",{onClick:function(){return e.openFloatCart()},className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("div",{className:"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"bag"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("span",{className:"header-title"},"Cart")),r.a.createElement("div",{className:"float-cart__shelf-container"},l,!l.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("div",{className:"sub"},"SUBTOTAL"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"".concat(a.currencyFormat," ").concat(f(a.totalPrice,a.currencyId))),r.a.createElement("small",{className:"sub-price__installment"},!!a.installments&&r.a.createElement("span",null,"OR UP TO ".concat(a.installments," x ").concat(a.currencyFormat," ").concat(f(a.totalPrice/a.installments,a.currencyId))))),r.a.createElement("div",{onClick:function(){return e.proceedToCheckout()},className:"buy-btn"},"Checkout"))))}}]),t}(n.Component)),F=Object(p.b)((function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}}),{loadCart:function(e){return{type:"LOAD_CART",payload:e}},updateCart:function(e){return function(t){var a=e.reduce((function(e,t){return e+=t.quantity}),0),n=e.reduce((function(e,t){return e+=t.price*t.quantity}),0);t({type:"UPDATE_CART",payload:{productQuantity:a,installmenets:e.reduce((function(e,t){return e=t.installmenets>e?t.installmenets:e}),0),totalPrice:n,currencyId:"USD",currencyFormat:"$"}})}},removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:e}},changeProductQuantity:function(e){return{type:"CHANGE_PRODUCT_QUANTITY",payload:e}}})(A),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(w,null),r.a.createElement(T,null)),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(10),x=a(27),U=a(2),I={products:[]},L={products:[]},q={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},M={items:[]},Q={type:""},H=Object(D.c)({shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(U.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(U.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(U.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(U.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(U.a)({},e,{productToChange:Object.assign({},t.payload)});default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(U.a)({},e,{data:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object(U.a)({},e,{items:t.payload});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT":return Object(U.a)({},e,{type:t.payload});default:return e}}}),X=function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var t=[x.a],a=Object(D.e)(H,e,Object(D.d)(D.a.apply(void 0,t)));return a.subscribe((function(){var e=a.getState(),t={cart:e.cart,total:e.total};window.localStorage.setItem("state",JSON.stringify(t))})),a},z=function(e){var t=e.children,a=e.initialState,n=void 0===a?{}:a;return r.a.createElement(p.a,{store:X(n)},t)};o.a.render(r.a.createElement(z,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.565b5085.chunk.js.map
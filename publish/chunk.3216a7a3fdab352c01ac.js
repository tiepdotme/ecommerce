(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{239:function(t,e,i){var s=i(242);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(166).default)("6cc07505",s,!0,{})},240:function(t,e,i){"use strict";var s={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:e,transitionMs:i,opacity:s}=this;return{top:t,transition:"opacity ".concat(i,"ms linear"),opacity:s,zIndex:e}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(i(241),i(53)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"backdrop",style:t.style,on:{click:t.hide}})}),[],!1,null,null,null);e.a=n.exports},241:function(t,e,i){"use strict";i(239)},242:function(t,e,i){(e=i(165)(!1)).push([t.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),t.exports=e},249:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shipping-calculator"},[t.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(e){return e.preventDefault(),t.submitZipCode(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[t._v(" Tính phí vận chuyển ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:t.i19zipCode,"aria-label":t.i19zipCode,options:t.cleaveOptions},model:{value:t.localZipCode,callback:function(e){t.localZipCode=e},expression:"localZipCode"}}),t._m(0)],1)])]):t._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},t._l(t.shippingServices,(function(e,s){return i(t.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.canSelectServices,active:t.canSelectServices&&t.selectedService===s},attrs:{href:t.canSelectServices&&"#"},on:{click:function(e){return e.preventDefault(),t.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[t._t("option",[i("shipping-line",{attrs:{"shipping-line":e.shipping_line}}),i("small",[t._v(t._s(e.label))])],null,{service:e})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[t._t("free-from-value",[i("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.freeFromValue-t.amountSubtotal)))+" "),i("strong",[t._v("Miễn phí vận chuyển")])]),t.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[t._v(" Miễn phí vận chuyển "),i("i",{staticClass:"fas fa-truck mx-1"}),i("strong",[t._v(t._s(t.freeFromPercentage)+"%")])])])]):t._e()],null,{amountSubtotal:t.amountSubtotal,freeFromValue:t.freeFromValue,freeFromPercentage:t.freeFromPercentage})],2):t._e()])],1)])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-shipping-fast"})])])}]},278:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"product",attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku}},[i("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" Không thể tải dữ liệu sản phẩm, xin kiểm tra kết nối mạng "),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.fetchProduct(e)}}},[t._v(" Thử lại ")])]),i("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?i("div",{staticClass:"row"},[t._t("gallery-col",[i("div",{staticClass:"col-12 col-md-6"},[i(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[i("product-gallery",{attrs:{product:t.body,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(e){t.currentGalleyImg=e},"update:current-slide":function(e){t.currentGalleyImg=e}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]),i("div",{staticClass:"col"},[t.isSSR?t._e():t._t("heading",[i(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")]),i("p",{staticClass:"product__sku"},[t._v(" COD: "+t._s(t.body.sku)+" ")])]),i(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",[t._m(0)]),t.body.available?t.isInStock?[t._t("prices",[i("p",{staticClass:"product__prices"},[i("a-prices",{attrs:{product:Object.assign({},t.body,t.selectedVariation,t.finalPrices),"is-literal":!0,"is-big":!0},on:{"fix-price":function(e){return t.fixedPrice=e}}}),t._t("discount-tag",[t.discount>0?i("span",{staticClass:"product__discount"},[t._v(" Giảm giá "),i("strong",[t._v(t._s(t.discount)+"%")])]):t._e()],null,{discount:t.discount})],2)]),t.hasVariations?t._t("variations",[i("product-variations",{attrs:{product:t.body,"selected-id":t.selectedVariationId},on:{"update:selectedId":function(e){t.selectedVariationId=e},"update:selected-id":function(e){t.selectedVariationId=e},"select-option":t.handleGridOption}}),i("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" Xin lựa chọn dưới đây ")]),t._t("variations-info")]):t._e(),t.body.customizations?t._t("customizations",t._l(t.body.customizations,(function(e){return e.custom_value?i("div",{key:e._id,staticClass:"product__customization form-group",class:e.grid_id?"product__customization--"+e.grid_id:null},[i("label",{attrs:{for:"c-"+e._id}},[t._v(" "+t._s(e.label)+" "),e.add_to_price?i("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(e.add_to_price))+" ")]):t._e()]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+e._id},on:{keyup:function(i){return t.setCustomizationOption(e,i.target.value)}}})]):t._e()}))):t._e(),t.isKit?i("div",{staticClass:"product__kit"},[t._t("kit",[i("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length?i("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():i("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])],null,{kitItems:t.kitItems})],2):[i("div",{staticClass:"product__buy"},[i("span",{on:{click:t.buy}},[t._t("buy",[i("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" Đặt mua ")])],2)],null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)]),i("p",{staticClass:"product__short-stock"},[i("i",{staticClass:"fas fa-phone-square mr-1"}),i("a",{attrs:{href:"tel:0967852242"}},[t._v("Gọi ngay "),i("strong",[t._v("0967852242")]),t._v(" Trần Thùy Chinh.")])]),t.isLowQuantity?i("p",{staticClass:"product__short-stock"},[i("i",{staticClass:"fas fa-forward mr-1"}),t._v(" Duy nhất "),i("strong",[t._v(t._s(t.productQuantity))]),t._v(" Món trong kho hàng ")]):t._e()],t._t("share",[t.body.slug?i("a-share",{staticClass:"mb-3",attrs:{url:"/"+t.body.slug,title:t.body.name,description:t.body.short_description}}):t._e()]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[!t.isQuickview&&t.paymentOptions.length?t._t("payment-gateways",[i("article",{key:"payment-"+t.fixedPrice},[t._m(1)])],null,{paymentOptions:t.paymentOptions}):t._e()],2),t.body.production_time&&t.body.production_time.days?i("p",{staticClass:"product__production"},[i("i",{staticClass:"fas fa-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),i("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview?t._e():t._t("shipping",[i("shipping-calculator",{attrs:{shippedItems:[Object.assign({},t.body,{product_id:t.body._id,quantity:t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(e){var s=e.amountSubtotal,a=e.freeFromValue;return[i("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),i("strong",[t._v(" "+t._s(Math.ceil(a/s))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]),t._t("track-price",[t._m(2)])]:t._t("out-of-stock",[i("p",{staticClass:"product__out-of-stock"},[t._v(" Hết hàng ")])]):t._t("unavailable",[i("p",{staticClass:"product__unavailable"},[t._v(" Tạm hết hàng ")])])],2),!t.isSSR&&t.body.short_description?t._t("short-description",[i("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]):t._e()],2)],2):t._e()]),t.body._id?t._e():t._t("default")],2)},a=[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product__payment card mb-3"},[i("a",{staticClass:"card-header",attrs:{id:"product-payment-header",role:"button",href:"#product-payment","data-toggle":"collapse","aria-expanded":"false","aria-controls":"product-payment"}},[i("span",[t._v("Phương thức thanh toán")]),i("i",{staticClass:"fas fa-chevron-down"})]),i("div",{staticClass:"collapse",attrs:{id:"product-payment","aria-labelledby":"product-payment-header"}},[i("div",{staticClass:"card-body pb-0"},t._l(t.paymentOptions,(function(e){return i("div",{key:e.app_id,staticClass:"mb-3",attrs:{id:"product-payment-"+e.app_id}},t._l(e.payment_gateways,(function(s,a){return i("payment-option",{key:e.app_id+"-"+a,attrs:{"payment-gateway":s,"installments-option":e.installments_option,price:t.fixedPrice}})})),1)})),0)])])},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]},279:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.shareNetworks,(function(e,s){var a=e.network,n=e.icon,r=e.name,o=e.color;return i("share-network",{key:a,class:"btn share share--"+a+" px-2",attrs:{tag:"button",network:a,url:t.localUrl,title:t.title,description:t.description,"aria-label":t.i19share+" "+t.i19on+" "+r}},[n?i("i",{class:n,style:"color: "+o}):i("strong",{style:"color: "+o},[t._v(" "+t._s(r)+" ")]),0===s?[i("span",{staticClass:"ml-1 d-none d-xl-inline"},[t._v(" "+t._s("Chia sẻ trên "+r)+" ")])]:t._e()],2)})),1)},a=[]},280:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.product.variations?i("div",{staticClass:"variations"},t._l(t.variationsGrids,(function(e,s,a){return t.filteredGrids[s]?i("div",{class:"variations__grid variations__grid--"+s},[i("div",{staticClass:"mb-2"},[i("span",{staticClass:"variations__grid-title h5"},[t._v(" "+t._s(t.getGridTitle(s))+" ")]),t.selectedOptions[s]?i("span",{key:"success",staticClass:"variations__value variations__value"},[i("i",{staticClass:"fas fa-check mr-1"}),t._v(" "+t._s(t.selectedOptions[s])+" ")]):i("span",{staticClass:"variations__value variations__value--empty"},[i("i",{staticClass:"fas fa-arrow-down mr-1"}),t._v(" lựa chọn ")])]),e.length<=t.maxOptionsBtns?t._l(e,(function(e){return i("button",{staticClass:"variations__option btn btn-light",class:[t.selectedOptions[s]===e?"variations__option--selected":null,"variations__option--"+e],style:"colors"===s?t.getColorOptionBg(e):null,attrs:{disabled:!t.filteredGrids[s].includes(e)},on:{click:function(i){return t.selectOption(e,s,a)}}},[t._v(" "+t._s(e)+" ")])})):i("select",{staticClass:"variations__select custom-select",on:{change:function(e){return t.selectOption(e.target.value,s,a)}}},[i("option",{domProps:{selected:!t.selectedOptions[s]}},[t._v(" "+t._s(t.i19select)+"... ")]),t._l(e,(function(e){return i("option",{attrs:{disabled:!t.filteredGrids[s].includes(e)},domProps:{value:e,selected:t.selectedOptions[s]===e}},[t._v(" "+t._s(e)+" ")])}))],2)],2):t._e()})),0):t._e()},a=[]},281:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quantity-selector"},[t._l(t.items,(function(e){return i("div",{staticClass:"quantity-selector__item"},[i("button",{staticClass:"btn btn-sm btn-link",attrs:{type:"button",disabled:e.min_quantity>=t.selectedQnts[e._id]},on:{click:function(i){return t.changeQnt(e,-1)}}},[i("i",{staticClass:"fas fa-chevron-down"})]),i("input",{staticClass:"form-control quantity-selector__input",attrs:{type:"tel",disabled:!t.checkInStock(e),readonly:e.min_quantity===e.max_quantity},domProps:{value:t.selectedQnts[e._id]},on:{change:function(i){return t.changeQnt(e,null,i)},keyup:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"up",38,i.key,["Up","ArrowUp"])?null:t.changeQnt(e,1)},function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"down",40,i.key,["Down","ArrowDown"])?null:t.changeQnt(e,-1)}]}}),i("button",{staticClass:"btn btn-sm btn-link",attrs:{type:"button",disabled:e.max_quantity<=t.selectedQnts[e._id]},on:{click:function(i){return t.changeQnt(e,1)}}},[i("i",{staticClass:"fas fa-chevron-up"})]),i("span",{staticClass:"quantity-selector__label"},[e.slug?i("a-link",{attrs:{target:"_blank",href:"/"+e.slug,title:e.name}},[t._v(" "+t._s(e.name)+" ")]):[t._v(" "+t._s(e.name)+" ")]],2)])})),i("a-alert",{attrs:{"can-show":t.hasMinAlert}},[t._v(" Số lượng tối thiểu: "),i("strong",[t._v(t._s(t.min))])]),i("a-alert",{attrs:{"can-show":t.hasMaxAlert,variant:t.alertVariant}},[t._v(" Số lượng tối đa: "),i("strong",[t._v(t._s(t.max))])]),i("div",{staticClass:"quantity-selector__buy"},[t._t("buy",[i("button",{staticClass:"btn btn-lg btn-primary my-3",attrs:{type:"button"},on:{click:t.buy}},[t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" Đặt mua ")])],2)],null,{selectedQnts:t.selectedQnts,buy:t.buy})],2)],2)},a=[]},289:function(t,e,i){var s=i(339);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(166).default)("833eb96e",s,!0,{})},338:function(t,e,i){"use strict";i(289)},339:function(t,e,i){(e=i(165)(!1)).push([t.i,".product-quickview__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;max-height:100vh;border-radius:0;overflow-y:auto}@media (min-width:576px){.product-quickview__box{width:90vw;margin-left:5vw;max-height:90vh;margin-top:5vh;border-radius:var(--border-radius)}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;max-width:400px;margin:var(--spacer-4) auto var(--spacer-5)}",""]),t.exports=e},395:function(t,e,i){"use strict";i.r(e);var s=i(28),a=i(40),n=i(244),r=i(273),o=i(240),c={name:"ProductQuickView",components:{Portal:n.a,TheProduct:r.a,ABackdrop:o.a},props:{productId:String,product:Object,portalId:{type:String,default:"quickview"}},data:()=>({productName:"",productLink:"",isVisible:!1}),computed:{i19close:()=>Object(a.a)(s.H),i19seeMoreInfo:()=>Object(a.a)(s.hd)},methods:{setProduct({name:t,slug:e}){this.productName=t,this.productLink="/".concat(e)},hide(){this.isVisible=!1,setTimeout((()=>{this.isVisible||this.$destroy()}),450)}},created(){let t=document.getElementById(this.portalId);t?t.innerHTML="":(t=document.createElement("div"),t.setAttribute("id",this.portalId),document.body.appendChild(t)),this.product&&this.setProduct(this.product),this.isVisible=!0}},l=(i(338),i(53)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("portal",{attrs:{selector:"#"+t.portalId}},[i("div",{staticClass:"product-quickview"},[i("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),i("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[t.isVisible?i("div",{staticClass:"product-quickview__box card"},[t._t("header",[i("div",{staticClass:"product-quickview__header card-header"},[t._v(" "+t._s(t.productName)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),i("div",{staticClass:"product-quickview__body card-body"},[t.productName?t._e():i("div",{staticClass:"product-quickview__loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])]),i("div",{staticClass:"container"},[i("the-product",{attrs:{"is-quickview":"","product-id":t.productId,product:t.product},on:{"update:product":t.setProduct,buy:t.hide}})],1),t.productName?i("a",{staticClass:"product-quickview__btn-redirect btn btn-secondary",attrs:{href:t.productLink}},[t._v(" "+t._s(t.i19seeMoreInfo)+" ")]):t._e()])],2):t._e()])],1)])}),[],!1,null,null,null);e.default=d.exports}}]);
//# sourceMappingURL=chunk.3216a7a3fdab352c01ac.js.map
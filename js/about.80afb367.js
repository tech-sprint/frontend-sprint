(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09f9":function(t,n,e){},"0c7a":function(t,n,e){"use strict";var a=e("09f9"),i=e.n(a);i.a},"0f72":function(t,n,e){"use strict";var a=e("7d45"),i=e.n(a);i.a},"2a3e":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animation"},[e("h2",[t._v("native css")]),e("h4",[t._v("      CSS 过渡 "),e("router-link",{attrs:{to:"/transition/sample"}},[t._v("示例")])],1),t._m(0),e("h4",[t._v("      CSS 动画 "),e("router-link",{attrs:{to:"/animation/sample"}},[t._v("示例")])],1),e("ul",[t._m(1),t._m(2),t._m(3),e("li",[t._v(" 缓动函数(时间函数)和动画关键帧之间的关系研究 ")]),e("div",[t._v(" 1. 统一指定时间函数，将被应用在每个关键帧之间，作为每个开始关键帧的默认时间函数。")]),e("div",[e("button",{on:{click:function(n){t.sample1_a1=!t.sample1_a1}}},[t._v("toggle sample1_a1")]),e("div",{staticClass:"animation--sample1",class:{"animation--sample1__a1":t.sample1_a1}})]),e("div",[t._v(" 2. 在开始关键帧指定时间函数，优先级较高。统一指定了时间函数的话，没有在关键帧指定时间函数的帧使用统一指定的，否则使用全局默认的 ease。")]),e("div",[e("button",{on:{click:function(n){t.sample2_a1=!t.sample2_a1}}},[t._v("toggle sample2_a1")]),e("div",{staticClass:"animation--sample1",class:{"animation--sample2__a1":t.sample2_a1}}),e("button",{on:{click:function(n){t.sample2_a2=!t.sample2_a2}}},[t._v("toggle sample2_a2")]),e("div",{staticClass:"animation--sample1",class:{"animation--sample2__a2":t.sample2_a2}})])]),e("h2",[t._v("vue")]),t._m(4),t._m(5),e("ul",[e("li",[t._v(" transition 和 transition-group 组件。可以使用动画或过渡。")]),e("li",[t._v(" enter 和 enter-active 同时添加到dom上，enter-to 在下一帧添加到 dom 上并且移除enter, enter-active 和 enter-to 同时移除。")]),e("li",[t._v(" leave 和 leave-active 同时添加到dom上，leave-to 在下一帧添加到 dom 上并且移除leave, leave-active 和 leave-to 同时移除。")]),e("li",[t._v(" 意味着最终都将会被移除。")]),e("li",[t._v(" 每个class的应用范围：enter、leave 过渡的开始状态，enter-active、leave-active 过渡时间间隔和方式（transition、animation），enter-to、leave-to 过渡的结束状态。")]),e("li",[t._v(" 上一条原因：1. 更好的语义。 2. 在插入元素（如 .appendChild()）或改变属性 display: none 后立即使用过渡, 元素将视为没有开始状态，始终处于结束状态。简单的解决办法，改变属性前用 window.setTimeout() 延迟几毫秒。 ")]),e("li",[t._v(" 取消回调：enter 过渡没有完成就进行 leave 过渡会调用 enterCancelled 回调。同样，leave 过渡没有完成就进行 enter 过渡会调用 leaveCancelled 回调。监听 leaveCancelled 需要使用 v-show 进行切换。")]),e("div",[e("button",{on:{click:function(n){t.cancelDemo=!t.cancelDemo}}},[t._v(" toggle ")]),e("transition",{attrs:{appear:"",name:"animation--cancel-d"},on:{"enter-cancelled":t.enterCancelled,"leave-cancelled":t.leaveCancelled}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.cancelDemo,expression:"cancelDemo"}]},[t._v(" cancelDemo ")])])],1),t._m(6)]),e("h2",[t._v(" 参考 ")]),t._m(7)])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[t._v(" 突变：到目标样式的直接变化。在浏览器的devtools中调试样式就是一种突变，直接用代码修改样式也是一种突变。 ")]),e("li",[t._v(" 过渡：按某种规则逐渐变成目标样式。 ")]),e("li",[t._v(" 规则：给这些突变加上了变化规则(transition css属性，加了这个css属性的 dom 节点，再进行样式变化时就变成了有规则的变化。)。 ")]),e("li",[t._v(" 局限：1. transition只有开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。 2. transition是一次性的，不能重复发生，除非一再触发。 ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Configuring_the_animation"}},[t._v(" Configuring_the_animation ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",{attrs:{href:"https://easings.net/zh-cn"}},[t._v(" 缓动函数(时间函数)(timing-function) ")]),t._v("； "),e("a",{attrs:{href:"http://cubic-bezier.com/"}},[t._v(" 三阶贝塞尔缓动函数(时间函数)工具 ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("ul",[e("li",[t._v(" animation-delay：设置延时，即从元素加载完成之后到动画序列开始执行的这段时间 ")]),e("li",[t._v(" animation-direction：设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行 ")]),e("li",[t._v(" animation-duration：设置动画一个周期的时长 ")]),e("li",[t._v(" animation-iteration-count：设置动画重复次数， 可以指定 infinite 无限次重复动画 ")]),e("li",[t._v(" animation-name：指定由 @keyframes 描述的关键帧名称 ")]),e("li",[t._v(" animation-play-state：允许暂停和恢复动画 ")]),e("li",[t._v(" animation-timing-function：设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化 ")]),e("li",[t._v(" animation-fill-mode：指定动画执行前后如何为目标元素应用样式 ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitioning-state.html"}},[t._v("状态过渡")]),t._v(" : "),e("a",{attrs:{href:"https://github.com/tweenjs/tween.js"}},[t._v("tween.js")]),t._v("、"),e("a",{attrs:{href:"https://greensock.com/docs"}},[t._v("greensock")]),t._v(" 等数值渐变库(将一个变量逐渐变成另一个变量) 结合vue的响应式属性实现过渡效果。")]),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html"}},[t._v("进入/离开 & 列表过渡 (transition)")]),t._v(" : 插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h4",[t._v("      "),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html"}},[t._v("进入/离开 & 列表过渡 (transition)")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[t._v(" appear："),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%9D%E5%A7%8B%E6%B8%B2%E6%9F%93%E7%9A%84%E8%BF%87%E6%B8%A1"}},[t._v("初始渲染的过渡。")]),t._v(" 需要节点一开始就挂载。 ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/weineel/blog/issues/9"}},[t._v(" 贝塞尔曲线研究 ")])]),e("li",[e("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[t._v(" 第三方动画库 animate.css ")])]),e("li",[e("a",{attrs:{href:"http://cubic-bezier.com/"}},[t._v(" cubic-bezier 生成工具 ")])]),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html"}},[t._v(" CSS动画简介 ")])]),e("li",[e("a",{attrs:{href:"https://easings.net/zh-cn"}},[t._v(" 常用缓动函数 ")])]),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values"}},[t._v(" 官方文档 ")])])])}],o=e("34eb")("Animation:"),r={name:"animation",components:{},props:{},data:function(){return{cancelDemo:!0,sample1_a1:!1,sample2_a1:!1,sample2_a2:!1}},computed:{},watch:{},mounted:function(){this.init()},methods:{init:function(){o("%o",this)},leaveCancelled:function(){o("leaveCancelled")},enterCancelled:function(){o("enterCancelled")}}},s=r,c=(e("0f72"),e("2877")),l=Object(c["a"])(s,a,i,!1,null,null,null);l.options.__file="Index.vue";n["default"]=l.exports},"34eb":function(t,n,e){(function(a){function i(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"===typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const e="color: "+this.color;n.splice(1,0,e,"color: inherit");let a=0,i=0;n[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(a++,"%c"===t&&(i=a))}),n.splice(i,0,e)}function r(...t){return"object"===typeof console&&console.log&&console.log(...t)}function s(t){try{t?n.storage.setItem("debug",t):n.storage.removeItem("debug")}catch(e){}}function c(){let t;try{t=n.storage.getItem("debug")}catch(e){}return!t&&"undefined"!==typeof a&&"env"in a&&(t=Object({NODE_ENV:"production",BASE_URL:"/frontend-sprint/"}).DEBUG),t}function l(){try{return localStorage}catch(t){}}n.log=r,n.formatArgs=o,n.save=s,n.load=c,n.useColors=i,n.storage=l(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.exports=e("dc90")(n);const{formatters:u}=t.exports;u.j=function(t){try{return JSON.stringify(t)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}}).call(this,e("4362"))},"41b9":function(t,n){t.exports="data:image/png;base64,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"},4362:function(t,n,e){n.nextTick=function(t){setTimeout(t,0)},n.platform=n.arch=n.execPath=n.title="browser",n.pid=1,n.browser=!0,n.env={},n.argv=[],n.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,a="/";n.cwd=function(){return a},n.chdir=function(n){t||(t=e("df7c")),a=t.resolve(n,a)}}(),n.exit=n.kill=n.umask=n.dlopen=n.uptime=n.memoryUsage=n.uvCounters=function(){},n.features={}},"54d1":function(t,n,e){},6241:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"shopping-cart"},[a("div",t._l(t.goodsList,function(n,e){return a("div",{key:e,staticClass:"shopping-cart--goods"},[a("div",[a("div",{staticClass:"shopping-cart--goods-name"},[t._v(t._s(n.name))]),a("div",{staticClass:"shopping-cart--goods-desc"},[t._v(t._s(n.desc))])]),a("div",{staticClass:"shopping-cart--goods-ope"},[a("div",{staticClass:"shopping-cart--goods-btn",on:{click:function(e){t.deleteFromCart(n)}}},[t._v(" - ")]),a("span",[t._v(" "+t._s(n.num)+" ")]),a("div",{staticClass:"shopping-cart--goods-btn",on:{click:function(e){t.add2cart(n,e)}}},[t._v(" + ")])])])}),0),a("div",{ref:"cart",staticClass:"shopping-cart--cart",class:{"shopping-cart--cart-move-to":t.toggleAdd2cart}},[a("div",{staticClass:"shopping-cart--cart-num"},[t._v("\n      "+t._s(t.shopCartList.length)+"\n    ")]),a("img",{attrs:{src:e("41b9"),alt:""}})]),a("transition",{attrs:{name:"parabola"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter}},[t.showAddIcon?a("div",{staticClass:"shopping-cart--goods-btn shopping-cart--goods-btn__parabola"},[t._v(" + ")]):t._e()])],1)},i=[],o={name:"ShoppingCart",components:{},props:{},data:function(){return{goodsList:[],toggleAdd2cart:!1,showAddIcon:!1,add2cartElLeft:0,add2cartElBottom:0,windowHeight:null}},computed:{shopCartList:function(){return this.goodsList.filter(function(t){return t.num>0})}},watch:{},mounted:function(){this.init(),this.windowHeight=window.innerHeight},methods:{init:function(){for(var t=0;t<16;t++){var n=t+1;this.goodsList.push({id:n,name:"商品"+n,desc:"描述描述描述描述"+n,num:0})}},deleteFromCart:function(t){t.num<=0||t.num--},add2cart:function(t,n){this.add2cartElLeft=n.target.getBoundingClientRect().left,this.add2cartElBottom=this.windowHeight-n.target.getBoundingClientRect().bottom,t.num++,this.showAddIcon=!0},beforeEnter:function(t){t.style.left="".concat(this.add2cartElLeft,"px"),t.style.bottom="".concat(this.add2cartElBottom,"px")},afterEnter:function(){this.showAddIcon=!1,this.listenInCart()},listenInCart:function(){var t=this;this.toggleAdd2cart||(this.toggleAdd2cart=!0,this.$refs.cart.addEventListener("animationend",function(){t.toggleAdd2cart=!1}),this.$refs.cart.addEventListener("webkitAnimationEnd",function(){t.toggleAdd2cart=!1}))}}},r=o,s=(e("a310"),e("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="ShoppingCart.vue";n["default"]=c.exports},"7a67":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"transition-sample"},[e("div",{staticClass:"transition-sample--scene"},[e("div",{ref:"obj",staticClass:"transition-sample--obj",style:t.transition})]),e("h2",[t._v(" 过渡1    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.t1IsCheck,expression:"t1IsCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.t1IsCheck)?t._i(t.t1IsCheck,null)>-1:t.t1IsCheck},on:{change:function(n){var e=t.t1IsCheck,a=n.target,i=!!a.checked;if(Array.isArray(e)){var o=null,r=t._i(e,o);a.checked?r<0&&(t.t1IsCheck=e.concat([o])):r>-1&&(t.t1IsCheck=e.slice(0,r).concat(e.slice(r+1)))}else t.t1IsCheck=i}}})]),e("table",[t._m(0),e("tbody",[e("tr",[e("td",[t._v("过渡属性(transition-property): ")]),e("td",[t._v(" "+t._s(t.transitionProperty)+" ")])]),e("tr",[e("td",[t._v("过渡间隔(transition-duration):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionDuration,expression:"transitionDuration"}],domProps:{value:t.transitionDuration},on:{input:function(n){n.target.composing||(t.transitionDuration=n.target.value)}}})])]),e("tr",[e("td",[t._v("过渡延迟(transition-delay):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionDelay,expression:"transitionDelay"}],domProps:{value:t.transitionDelay},on:{input:function(n){n.target.composing||(t.transitionDelay=n.target.value)}}})])]),e("tr",[e("td",[t._v("时间函数(transition-timing-function):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionTimingFunction,expression:"transitionTimingFunction"}],domProps:{value:t.transitionTimingFunction},on:{input:function(n){n.target.composing||(t.transitionTimingFunction=n.target.value)}}})])]),e("tr",[e("td",[t._v("开始状态:")]),e("td",[t._v(" "+t._s(t.start)+" ")])]),e("tr",[e("td",[t._v("结束状态:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.end,expression:"end"}],domProps:{value:t.end},on:{input:function(n){n.target.composing||(t.end=n.target.value)}}})])])])]),e("h2",[t._v(" 过渡2    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.t2IsCheck,expression:"t2IsCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.t2IsCheck)?t._i(t.t2IsCheck,null)>-1:t.t2IsCheck},on:{change:function(n){var e=t.t2IsCheck,a=n.target,i=!!a.checked;if(Array.isArray(e)){var o=null,r=t._i(e,o);a.checked?r<0&&(t.t2IsCheck=e.concat([o])):r>-1&&(t.t2IsCheck=e.slice(0,r).concat(e.slice(r+1)))}else t.t2IsCheck=i}}})]),e("table",[t._m(1),e("tbody",[e("tr",[e("td",[t._v("过渡属性(transition-property): ")]),e("td",[t._v(" "+t._s(t.transitionProperty2)+" ")])]),e("tr",[e("td",[t._v("过渡间隔(transition-duration):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionDuration2,expression:"transitionDuration2"}],domProps:{value:t.transitionDuration2},on:{input:function(n){n.target.composing||(t.transitionDuration2=n.target.value)}}})])]),e("tr",[e("td",[t._v("过渡延迟(transition-delay):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionDelay2,expression:"transitionDelay2"}],domProps:{value:t.transitionDelay2},on:{input:function(n){n.target.composing||(t.transitionDelay2=n.target.value)}}})])]),e("tr",[e("td",[t._v("时间函数(transition-timing-function):")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transitionTimingFunction2,expression:"transitionTimingFunction2"}],domProps:{value:t.transitionTimingFunction2},on:{input:function(n){n.target.composing||(t.transitionTimingFunction2=n.target.value)}}})])]),e("tr",[e("td",[t._v("开始状态:")]),e("td",[t._v(" "+t._s(t.start2)+" ")])]),e("tr",[e("td",[t._v("结束状态:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.end2,expression:"end2"}],domProps:{value:t.end2},on:{input:function(n){n.target.composing||(t.end2=n.target.value)}}})])])])]),e("div",{staticClass:"transition-sample--row"},[e("div",{staticClass:"btn--mini btn--mini__primary",on:{click:t.doStart}},[t._v("开始过渡")]),t._v("\n        \n    "),e("div",{staticClass:"btn--mini btn--mini__danger",on:{click:t.reset}},[t._v("反向过渡")])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("td",[t._v("css 属性")]),e("td",[t._v("css 属性值")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("td",[t._v("css 属性")]),e("td",[t._v("css 属性值")])])}],o={name:"TransitionSample",components:{},props:{},data:function(){return{t1IsCheck:!0,transitionProperty:"left",transitionDuration:"2s",transitionDelay:"0s",transitionTimingFunction:"linear",start:"10px",end:"200px",t2IsCheck:!1,transitionProperty2:"top",transitionDuration2:"2s",transitionDelay2:"0s",transitionTimingFunction2:"cubic-bezier(0, -0.5, 0.5, 0)",start2:"30px",end2:"120px"}},computed:{transition:function(){var t="".concat(this.transitionProperty," ").concat(this.transitionDuration," ").concat(this.transitionDelay," ").concat(this.transitionTimingFunction),n="".concat(this.transitionProperty2," ").concat(this.transitionDuration2," ").concat(this.transitionDelay2," ").concat(this.transitionTimingFunction2),e=[];return this.t1IsCheck&&e.push(t),this.t2IsCheck&&e.push(n),{transition:e.join(", ")}}},watch:{},methods:{doStart:function(){this.t1IsCheck&&(this.$refs.obj.style.left=this.end),this.t2IsCheck&&(this.$refs.obj.style.top=this.end2)},reset:function(){this.t1IsCheck&&(this.$refs.obj.style.left=this.start),this.t2IsCheck&&(this.$refs.obj.style.top=this.start2)}}},r=o,s=(e("b709"),e("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="TransitionSample.vue";n["default"]=c.exports},"7a8d":function(t,n,e){},"7d45":function(t,n,e){},9363:function(t,n){var e=1e3,a=60*e,i=60*a,o=24*i,r=7*o,s=365.25*o;function c(t){if(t=String(t),!(t.length>100)){var n=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(n){var c=parseFloat(n[1]),l=(n[2]||"ms").toLowerCase();switch(l){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*r;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*i;case"minutes":case"minute":case"mins":case"min":case"m":return c*a;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function l(t){var n=Math.abs(t);return n>=o?Math.round(t/o)+"d":n>=i?Math.round(t/i)+"h":n>=a?Math.round(t/a)+"m":n>=e?Math.round(t/e)+"s":t+"ms"}function u(t){var n=Math.abs(t);return n>=o?m(t,n,o,"day"):n>=i?m(t,n,i,"hour"):n>=a?m(t,n,a,"minute"):n>=e?m(t,n,e,"second"):t+" ms"}function m(t,n,e,a){var i=n>=1.5*e;return Math.round(t/e)+" "+a+(i?"s":"")}t.exports=function(t,n){n=n||{};var e=typeof t;if("string"===e&&t.length>0)return c(t);if("number"===e&&!1===isNaN(t))return n.long?u(t):l(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},a310:function(t,n,e){"use strict";var a=e("54d1"),i=e.n(a);i.a},b709:function(t,n,e){"use strict";var a=e("7a8d"),i=e.n(a);i.a},d52f:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animation-sample"},[e("div",{staticClass:"animation-sample--scene"},[e("div",{ref:"obj",staticClass:"animation-sample--obj",style:t.animation})]),e("h2",[t._v(" 动画1    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.a1IsCheck,expression:"a1IsCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.a1IsCheck)?t._i(t.a1IsCheck,null)>-1:t.a1IsCheck},on:{change:function(n){var e=t.a1IsCheck,a=n.target,i=!!a.checked;if(Array.isArray(e)){var o=null,r=t._i(e,o);a.checked?r<0&&(t.a1IsCheck=e.concat([o])):r>-1&&(t.a1IsCheck=e.slice(0,r).concat(e.slice(r+1)))}else t.a1IsCheck=i}}})]),e("pre",[t._v("@keyframes scale {\n  from, to {\n    transform: scale(1, 1)\n  }\n  50% {\n    transform: scale(1.5, 1.5)\n  }\n}\n  ")]),e("table",[t._m(0),e("tbody",[e("tr",[e("td",[t._v("animation-name: ")]),e("td",[t._v(" "+t._s(t.animationName)+" ")])]),e("tr",[e("td",[t._v("animation-duration:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationDuration,expression:"animationDuration"}],domProps:{value:t.animationDuration},on:{input:function(n){n.target.composing||(t.animationDuration=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-delay:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationDelay,expression:"animationDelay"}],domProps:{value:t.animationDelay},on:{input:function(n){n.target.composing||(t.animationDelay=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-timing-function:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationTimingFunction,expression:"animationTimingFunction"}],domProps:{value:t.animationTimingFunction},on:{input:function(n){n.target.composing||(t.animationTimingFunction=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-iteration-count:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationIterationCount,expression:"animationIterationCount"}],domProps:{value:t.animationIterationCount},on:{input:function(n){n.target.composing||(t.animationIterationCount=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-direction:")]),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.animationDirection,expression:"animationDirection"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.animationDirection=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"normal"}},[t._v("normal")]),e("option",{attrs:{value:"reverse"}},[t._v("reverse")]),e("option",{attrs:{value:"alternate"}},[t._v("alternate")]),e("option",{attrs:{value:"alternate-reverse"}},[t._v("alternate-reverse")])])])]),e("tr",[e("td",[t._v("animation-fill-mode:")]),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.animationFillMode,expression:"animationFillMode"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.animationFillMode=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"none"}},[t._v("none")]),e("option",{attrs:{value:"forwards"}},[t._v("forwards")]),e("option",{attrs:{value:"backwards"}},[t._v("backwards")]),e("option",{attrs:{value:"both"}},[t._v("both")])])])])])]),e("h2",[t._v(" 动画2    "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.a2IsCheck,expression:"a2IsCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.a2IsCheck)?t._i(t.a2IsCheck,null)>-1:t.a2IsCheck},on:{change:function(n){var e=t.a2IsCheck,a=n.target,i=!!a.checked;if(Array.isArray(e)){var o=null,r=t._i(e,o);a.checked?r<0&&(t.a2IsCheck=e.concat([o])):r>-1&&(t.a2IsCheck=e.slice(0,r).concat(e.slice(r+1)))}else t.a2IsCheck=i}}})]),e("pre",[t._v("@keyframes line {\n  from {\n    left: 30px\n  }\n  50% {\n    animation-timing-function: linear\n    left: 100px\n  }\n  to {\n    left: 240px\n  }\n}\n  ")]),e("table",[t._m(1),e("tbody",[e("tr",[e("td",[t._v("animation-name: ")]),e("td",[t._v(" "+t._s(t.animationName2)+" ")])]),e("tr",[e("td",[t._v("animation-duration:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationDuration2,expression:"animationDuration2"}],domProps:{value:t.animationDuration2},on:{input:function(n){n.target.composing||(t.animationDuration2=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-delay:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationDelay2,expression:"animationDelay2"}],domProps:{value:t.animationDelay2},on:{input:function(n){n.target.composing||(t.animationDelay2=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-timing-function:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationTimingFunction2,expression:"animationTimingFunction2"}],domProps:{value:t.animationTimingFunction2},on:{input:function(n){n.target.composing||(t.animationTimingFunction2=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-iteration-count:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.animationIterationCount2,expression:"animationIterationCount2"}],domProps:{value:t.animationIterationCount2},on:{input:function(n){n.target.composing||(t.animationIterationCount2=n.target.value)}}})])]),e("tr",[e("td",[t._v("animation-direction:")]),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.animationDirection2,expression:"animationDirection2"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.animationDirection2=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"normal"}},[t._v("normal")]),e("option",{attrs:{value:"reverse"}},[t._v("reverse")]),e("option",{attrs:{value:"alternate"}},[t._v("alternate")]),e("option",{attrs:{value:"alternate-reverse"}},[t._v("alternate-reverse")])])])]),e("tr",[e("td",[t._v("animation-fill-mode:")]),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.animationFillMode2,expression:"animationFillMode2"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.animationFillMode2=n.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"none"}},[t._v("none")]),e("option",{attrs:{value:"forwards"}},[t._v("forwards")]),e("option",{attrs:{value:"backwards"}},[t._v("backwards")]),e("option",{attrs:{value:"both"}},[t._v("both")])])])])])]),e("div",{staticClass:"animation-sample--row"},[e("div",{staticClass:"btn--mini btn--mini__primary",on:{click:t.doStart}},[t._v(" "+t._s(t.animationIsStart?"暂停":"开始")+" ")]),t._v("\n        \n    "),e("div",{staticClass:"btn--mini btn--mini__danger",on:{click:t.reset}},[t._v("重置")])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("td",[t._v("css 属性")]),e("td",[t._v("css 属性值")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("td",[t._v("css 属性")]),e("td",[t._v("css 属性值")])])}],o={name:"AnimationSample",components:{},props:{},data:function(){return{animationIsStart:!1,a1IsCheck:!0,animationName:"scale",animationDuration:"2s",animationDelay:"0s",animationTimingFunction:"ease",animationIterationCount:"infinite",animationDirection:"normal",animationFillMode:"none",a2IsCheck:!1,animationName2:"line",animationDuration2:"2s",animationDelay2:"0s",animationTimingFunction2:"ease",animationIterationCount2:"1",animationDirection2:"normal",animationFillMode2:"forwards"}},computed:{playState:function(){return this.animationIsStart?"running":"paused"},animation:function(){var t="".concat(this.animationDuration," ").concat(this.animationTimingFunction," ").concat(this.animationDelay," ").concat(this.animationIterationCount," ").concat(this.animationDirection," ").concat(this.animationFillMode," ").concat(this.playState," ").concat(this.animationName),n="".concat(this.animationDuration2," ").concat(this.animationTimingFunction2," ").concat(this.animationDelay2," ").concat(this.animationIterationCount2," ").concat(this.animationDirection2," ").concat(this.animationFillMode2," ").concat(this.playState," ").concat(this.animationName2),e=[];return this.a1IsCheck&&e.push(t),this.a2IsCheck&&e.push(n),{animation:e.join(", ")}}},watch:{},methods:{doStart:function(){var t=this;this.animationIsStart=!this.animationIsStart,this.$nextTick(function(){t.a1IsCheck&&(t.$refs.obj.style["animation-play-state"]=t.playState),t.a2IsCheck&&(t.$refs.obj.style["animation-play-state"]=t.playState)})},reset:function(){var t=this;this.animationIsStart=!1,this.$nextTick(function(){t.a1IsCheck&&(t.$refs.obj.style.animation="none"),t.a2IsCheck&&(t.$refs.obj.style.animation="none")})}}},r=o,s=(e("0c7a"),e("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="AnimationSample.vue";n["default"]=c.exports},dc90:function(t,n,e){function a(t){function n(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return a.colors[Math.abs(n)%a.colors.length]}function a(t){let e;function r(...t){if(!r.enabled)return;const n=r,i=Number(new Date),o=i-(e||i);n.diff=o,n.prev=e,n.curr=i,e=i,t[0]=a.coerce(t[0]),"string"!==typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(e,i)=>{if("%%"===e)return e;s++;const o=a.formatters[i];if("function"===typeof o){const a=t[s];e=o.call(n,a),t.splice(s,1),s--}return e}),a.formatArgs.call(n,t);const c=n.log||a.log;c.apply(n,t)}return r.namespace=t,r.enabled=a.enabled(t),r.useColors=a.useColors(),r.color=n(t),r.destroy=i,r.extend=o,"function"===typeof a.init&&a.init(r),a.instances.push(r),r}function i(){const t=a.instances.indexOf(this);return-1!==t&&(a.instances.splice(t,1),!0)}function o(t,n){const e=a(this.namespace+("undefined"===typeof n?":":n)+t);return e.log=this.log,e}function r(t){let n;a.save(t),a.names=[],a.skips=[];const e=("string"===typeof t?t:"").split(/[\s,]+/),i=e.length;for(n=0;n<i;n++)e[n]&&(t=e[n].replace(/\*/g,".*?"),"-"===t[0]?a.skips.push(new RegExp("^"+t.substr(1)+"$")):a.names.push(new RegExp("^"+t+"$")));for(n=0;n<a.instances.length;n++){const t=a.instances[n];t.enabled=a.enabled(t.namespace)}}function s(){const t=[...a.names.map(l),...a.skips.map(l).map(t=>"-"+t)].join(",");return a.enable(""),t}function c(t){if("*"===t[t.length-1])return!0;let n,e;for(n=0,e=a.skips.length;n<e;n++)if(a.skips[n].test(t))return!1;for(n=0,e=a.names.length;n<e;n++)if(a.names[n].test(t))return!0;return!1}function l(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function u(t){return t instanceof Error?t.stack||t.message:t}return a.debug=a,a.default=a,a.coerce=u,a.disable=s,a.enable=r,a.enabled=c,a.humanize=e("9363"),Object.keys(t).forEach(n=>{a[n]=t[n]}),a.instances=[],a.names=[],a.skips=[],a.formatters={},a.selectColor=n,a.enable(a.load()),a}t.exports=a},df7c:function(t,n,e){(function(t){function e(t,n){for(var e=0,a=t.length-1;a>=0;a--){var i=t[a];"."===i?t.splice(a,1):".."===i?(t.splice(a,1),e++):e&&(t.splice(a,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return a.exec(t).slice(1)};function o(t,n){if(t.filter)return t.filter(n);for(var e=[],a=0;a<t.length;a++)n(t[a],a,t)&&e.push(t[a]);return e}n.resolve=function(){for(var n="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var r=i>=0?arguments[i]:t.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(n=r+"/"+n,a="/"===r.charAt(0))}return n=e(o(n.split("/"),function(t){return!!t}),!a).join("/"),(a?"/":"")+n||"."},n.normalize=function(t){var a=n.isAbsolute(t),i="/"===r(t,-1);return t=e(o(t.split("/"),function(t){return!!t}),!a).join("/"),t||a||(t="."),t&&i&&(t+="/"),(a?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(o(t,function(t,n){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,e){function a(t){for(var n=0;n<t.length;n++)if(""!==t[n])break;for(var e=t.length-1;e>=0;e--)if(""!==t[e])break;return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=a(t.split("/")),o=a(e.split("/")),r=Math.min(i.length,o.length),s=r,c=0;c<r;c++)if(i[c]!==o[c]){s=c;break}var l=[];for(c=s;c<i.length;c++)l.push("..");return l=l.concat(o.slice(s)),l.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n=i(t),e=n[0],a=n[1];return e||a?(a&&(a=a.substr(0,a.length-1)),e+a):"."},n.basename=function(t,n){var e=i(t)[2];return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){return i(t)[3]};var r="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("4362"))},f820:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],o=e("2877"),r={},s=Object(o["a"])(r,a,i,!1,null,null,null);s.options.__file="About.vue";n["default"]=s.exports}}]);
//# sourceMappingURL=about.80afb367.js.map
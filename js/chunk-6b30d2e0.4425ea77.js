(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b30d2e0"],{"37ae":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var o=a("1d80"),n=a("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(e){var a=String(o(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,a){var o=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var i,r;return n&&"function"==typeof(i=e.constructor)&&i!==a&&o(r=i.prototype)&&r!==a.prototype&&n(t,r),t}},9208:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[a("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("title",[t._v("回到顶部")]),a("g",[a("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},n=[],i=(a("a9e3"),{name:"BackTop",props:{visibilityHeight:{type:Number,default:500},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"20px",bottom:"30px",width:"38px",height:"38px","line-height":"38px","background-color":"#fff","box-shadow":"0 2px 10px rgba(0, 0, 0, .05)","border-radius":"4px"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,a=0;this.isMoving=!0,this.interval=setInterval((function(){var o=Math.floor(t.easeInOutQuad(10*a,e,-e,500));o<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,o),a++}),16.7)}},easeInOutQuad:function(t,e,a,o){return(t/=o/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e}}}),r=i,s=(a("b237"),a("2877")),u=Object(s["a"])(r,o,n,!1,null,"2bf0b2a8",null);e["a"]=u.exports},"94b3":function(t,e,a){},"98fa":function(t,e,a){"use strict";var o=a("94b3"),n=a.n(o);n.a},a9e3:function(t,e,a){"use strict";var o=a("83ab"),n=a("da84"),i=a("94ca"),r=a("6eeb"),s=a("5135"),u=a("c6b6"),c=a("7156"),l=a("c04e"),v=a("d039"),h=a("7c73"),b=a("241c").f,f=a("06cf").f,g=a("9bf2").f,p=a("58a8").trim,d="Number",A=n[d],_=A.prototype,P=u(h(_))==d,w=function(t){var e,a,o,n,i,r,s,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+c}for(i=c.slice(2),r=i.length,s=0;s<r;s++)if(u=i.charCodeAt(s),u<48||u>n)return NaN;return parseInt(i,o)}return+c};if(i(d,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var I,N=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof N&&(P?v((function(){_.valueOf.call(a)})):u(a)!=d)?c(new A(w(e)),a,N):w(e)},m=o?b(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;m.length>x;x++)s(A,I=m[x])&&!s(N,I)&&g(N,I,f(A,I));N.prototype=_,_.constructor=N,r(n,d,N)}},b237:function(t,e,a){"use strict";var o=a("37ae"),n=a.n(o);n.a},f820:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper-main"},[a("div",{staticClass:"banner-box"}),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("h1",[t._v("About Page")]),a("BackTop")],1)},n=[],i=a("9208"),r={name:"About",components:{BackTop:i["a"]}},s=r,u=(a("98fa"),a("2877")),c=Object(u["a"])(s,o,n,!1,null,"5e48b432",null);e["default"]=c.exports}}]);
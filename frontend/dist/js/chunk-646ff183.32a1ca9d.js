(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-646ff183"],{"00b4":function(e,t,a){"use strict";a("ac1f");var n=a("23e7"),r=a("da84"),c=a("c65b"),o=a("e330"),i=a("1626"),s=a("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=r.Error,d=o(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!i(t))return d(this,e);var a=c(t,this,e);if(null!==a&&!s(a))throw new u("RegExp exec method returned something other than an Object or null");return!!a}})},"107c":function(e,t,a){var n=a("d039"),r=a("da84"),c=r.RegExp;e.exports=n((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"29c7":function(e,t,a){"use strict";a("41c7")},"34f1":function(e,t,a){"use strict";a("4132")},4132:function(e,t,a){},"41c7":function(e,t,a){},"45d7":function(e,t,a){"use strict";a("e3dc")},"81d3":function(e,t,a){},9263:function(e,t,a){"use strict";var n=a("c65b"),r=a("e330"),c=a("577e"),o=a("ad6d"),i=a("9f7f"),s=a("5692"),l=a("7c73"),u=a("69f3").get,d=a("fce3"),m=a("107c"),b=s("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,h=r("".charAt),f=r("".indexOf),g=r("".replace),_=r("".slice),O=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=i.UNSUPPORTED_Y||i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],k=O||x||j||d||m;k&&(v=function(e){var t,a,r,i,s,d,m,k=this,y=u(k),w=c(e),E=y.raw;if(E)return E.lastIndex=k.lastIndex,t=n(v,E,w),k.lastIndex=E.lastIndex,t;var B=y.groups,N=j&&k.sticky,C=n(o,k),S=k.source,I=0,V=w;if(N&&(C=g(C,"y",""),-1===f(C,"g")&&(C+="g"),V=_(w,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==h(w,k.lastIndex-1))&&(S="(?: "+S+")",V=" "+V,I++),a=new RegExp("^(?:"+S+")",C)),x&&(a=new RegExp("^"+S+"$(?!\\s)",C)),O&&(r=k.lastIndex),i=n(p,N?a:k,V),N?i?(i.input=_(i.input,I),i[0]=_(i[0],I),i.index=k.lastIndex,k.lastIndex+=i[0].length):k.lastIndex=0:O&&i&&(k.lastIndex=k.global?i.index+i[0].length:r),x&&i&&i.length>1&&n(b,i[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&B)for(i.groups=d=l(null),s=0;s<B.length;s++)m=B[s],d[m[0]]=i[m[1]];return i}),e.exports=v},"92b1":function(e,t,a){},"9f7f":function(e,t,a){var n=a("d039"),r=a("da84"),c=r.RegExp;t.UNSUPPORTED_Y=n((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae54:function(e,t,a){"use strict";a("92b1")},b0c0:function(e,t,a){var n=a("83ab"),r=a("5e77").EXISTS,c=a("e330"),o=a("9bf2").f,i=Function.prototype,s=c(i.toString),l=/^\s*function ([^ (]*)/,u=c(l.exec),d="name";n&&!r&&o(i,d,{configurable:!0,get:function(){try{return u(l,s(this))[1]}catch(e){return""}}})},b72b:function(e,t,a){"use strict";a("81d3")},e3dc:function(e,t,a){},e838:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={key:0},c={key:1};function o(e,t,a,o,i,s){var l=Object(n["resolveComponent"])("mobile"),u=Object(n["resolveComponent"])("pc");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[s.isMobile()?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(l)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(u)]))])}a("ac1f"),a("00b4"),a("b0c0");var i={key:0,class:"error-code"},s={key:2},l={class:"text-center"},u={class:"hero-banner-icon"},d=["src"],m=Object(n["createStaticVNode"])('<section class="section-padding--small bg-gray" data-v-432229a4><div class="container" data-v-432229a4><div class="row" data-v-432229a4><div class="col-lg-6 align-self-center mb-5 mb-lg-0" data-v-432229a4><div class="innovative-wrapper" data-v-432229a4><h3 class="primary-text" data-v-432229a4> Innovative With Experience <br class="d-none d-xl-block" data-v-432229a4> UX Design 2019 </h3><p class="h4 primary-text2 mb-3" data-v-432229a4> Where The business World Meets </p><p data-v-432229a4> Mornin steas great earths for divide our good sixth called abunda itseld appear fisrd seaton upon above may bearing all moveth morning make subdue stars they are a goreat eart divide our good sixth one of that </p></div></div><div class="col-lg-6 pl-xl-5" data-v-432229a4><ul class="clockdiv text-center" id="clockdiv" data-v-432229a4><li class="clockdiv-single clockdiv-day" data-v-432229a4><h1 class="days" data-v-432229a4>320</h1><span class="smalltext" data-v-432229a4>Days</span></li><li class="clockdiv-single clockdiv-hour" data-v-432229a4><h1 class="hours" data-v-432229a4>30</h1><span class="smalltext" data-v-432229a4>Hours</span></li><li class="clockdiv-single clockdiv-minute" data-v-432229a4><h1 class="minutes" data-v-432229a4>30</h1><span class="smalltext" data-v-432229a4>Mins</span></li></ul><div class="clockdiv-content text-center" data-v-432229a4><p class="h4 primary-text2 mb-2" data-v-432229a4> January 20 -22, 2019 in Buffelo City </p><a class="button button-link" href="#" data-v-432229a4>Get Ticket</a></div></div></div></div></section>',1),b={class:"cards-container"};function p(e,t,a,r,c,o){var p=this,v=Object(n["resolveComponent"])("el-skeleton"),h=Object(n["resolveComponent"])("Main_text"),f=Object(n["resolveComponent"])("el-carousel-item"),g=Object(n["resolveComponent"])("el-carousel");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[1==c.is_error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,"404")):0==c.is_error&&0==c.arcticle_data.length?(Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:1,rows:25})):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("section",{class:"hero-banner",style:Object(n["normalizeStyle"])({backgroundImage:"url(".concat(c.arcticle_data.img.bg,")")})},[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("span",u,[Object(n["createElementVNode"])("img",{src:c.arcticle_data.img.gerb},null,8,d)]),Object(n["createElementVNode"])("h1",null,Object(n["toDisplayString"])(c.arcticle_data["name"]),1)])],4),m,Object(n["createVNode"])(g,{"indicator-position":"none",height:"50vw"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.arcticle_data,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:e,"pause-on-hover":"true"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(h,{text:p.lorem200,img:e["img"],label:e["label"]},null,8,["text","img","label"])])]})),_:2},1024)})),128))]})),_:1})]))])}a("d3b7"),a("e9c4");var v=function(e){return Object(n["pushScopeId"])("data-v-343d5d01"),e=e(),Object(n["popScopeId"])(),e},h={class:"main-container"},f={style:{width:"-webkit-fill-available"}},g={class:"element_text_header"},_={class:"element_text"},O={class:"author"},j=v((function(){return Object(n["createElementVNode"])("img",{src:"/img/gorky.jpg"},null,-1)}));function x(e,t,a,r,c,o){var i=this,s=Object(n["resolveComponent"])("el-image"),l=Object(n["resolveComponent"])("Down_arrow"),u=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(u,{"body-style":{padding:"7px"},onClick:o.click_button,class:"ti_element"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",g,Object(n["toDisplayString"])(i.label),1),Object(n["createElementVNode"])("div",_,Object(n["toDisplayString"])(i.text),1),Object(n["createElementVNode"])("div",O,[j,Object(n["createElementVNode"])("a",null,"~"+Object(n["toDisplayString"])(i.author_name)+"Максим Горький",1)])]),Object(n["createVNode"])(s,{src:"/img/abobus.jpg",fit:"cover",class:"element_image"})]),Object(n["createVNode"])(l,{class:Object(n["normalizeClass"])(c.arrow_button)},null,8,["class"])]})),_:1},8,["onClick"])])}var k={class:"countaner-img"},y=Object(n["createElementVNode"])("img",{class:"image-arrow",src:"https://img.icons8.com/ios-filled/100/000000/double-down.png"},null,-1),w=[y];function E(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k,w)}a("29c7");var B=a("d959"),N=a.n(B);const C={},S=N()(C,[["render",E]]);var I=S,V={data:function(){return{text_var:this.label,is_close:!0,arrow_button:"no-rotate-arrow",active_class:"element_text_header"}},props:{label:String,text:String,img:String,author_img:String,author_name:String},components:{Down_arrow:I},methods:{click_button:function(){this.is_close?(this.text_var=this.text,this.is_close=!1,this.arrow_button="rotate-arrow",this.active_class="element_text"):(this.text_var=this.label,this.is_close=!0,this.arrow_button="no-rotate-arrow",this.active_class="element_text_header")}}};a("ae54");const q=N()(V,[["render",x],["__scopeId","data-v-343d5d01"]]);var D=q,R={data:function(){return{arcticle_data:[],is_error:!1,lorem200:"lorem ipsum dolor sit amet onsectetur adipisicing elit. Nisi odio molestias nemo nostrum sit dolorem blanditiis sed, voluptas eaque dolor veritatis sapiente, consectetur veniam reiciendis ea nobis velit molestiae, amet iste ab modi debitis adipisci corrupti corporis. Repellat, possimus hic adipisci eum tempora neque. Iusto assumenda iure mollitia sint vero laudantium repudiandae numquam consequuntur repellendus accusamus voluptate ex ullam molestiae temporibus minus, pariatur neque impedit. Impedit sed amet, temporibus saepe consectetur magni corrupti facere provident at pariatur, officiis laborum porro enim labore nemo molestias necessitatibus, perspiciatis quod aut ex. Fugiat obcaecati est vel vitae deserunt! Sunt ipsum deleniti eos! Recusandae numquam voluptatem deserunt ducimus dolorem harum esse reiciendis sequi ut beatae rerum sunt molestiae ipsum nihil ab nesciunt magnam nemo ea totam obcaecati assumenda praesentium, saepe, molestias illum! Nihil corporis quae, quisquam obcaecati architecto similique. Dolor impedit itaque minus veniam animi? Quibusdam ea recusandae velit non autem? Impedit, ipsa? Illo, impedit. Qui, perspiciatis vero iste accusamus assumenda nobis fuga nihil voluptate dolor distinctio! Saepe qui sequi ut aliquam, velit tempora ad ab cupiditate? At consequuntur quia unde quibusdam tenetur reprehenderit magni culpa, reiciendis asperiores temporibus deserunt suscipit magnam quidem saepe amet consectetur tempora autem harum doloremque recusandae nulla minus. Ullam!"}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/arcticle_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){"error"==e["meta"]["status"]&&(t.is_error=!0),t.arcticle_data=e})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city)},components:{Main_text:D}};a("b72b");const A=N()(R,[["render",p],["__scopeId","data-v-432229a4"]]);var F=A,P={class:"container"},M={key:0,class:"error-code"};function T(e,t,a,r,c,o){var i=Object(n["resolveComponent"])("el-skeleton"),s=Object(n["resolveComponent"])("Main_text");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",P,[1==c.is_error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M,"404")):0==c.is_error&&0==c.arcticle_data.length?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:1,rows:25})):(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:2},Object(n["renderList"])(c.arcticle_data["parts"],(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e,class:"cards-container"},[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e["cards"],(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e,class:"cards-container"},[Object(n["createVNode"])(s,{text:e["full_text"],img:e["img"],label:e["label"],author_name:e["author"]["name"],author_img:e["author"]["photo"]},null,8,["text","img","label","author_name","author_img"])])})),128))])})),128))])}function J(e,t,a,r,c,o){var i=Object(n["resolveComponent"])("el-image"),s=Object(n["resolveComponent"])("Down_arrow"),l=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{"body-style":{padding:"7px"},onClick:o.click_button,class:"ti_element"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{src:a.img,fit:"cover",class:"element_image"},null,8,["src"]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(c.active_class)},Object(n["toDisplayString"])(c.text_var),3),Object(n["createVNode"])(s,{class:Object(n["normalizeClass"])(c.arrow_button)},null,8,["class"])]})),_:1},8,["onClick"])}var U={data:function(){return{text_var:this.label,is_close:!0,arrow_button:"no-rotate-arrow",active_class:"element_text_header"}},props:{label:String,text:String,img:String},components:{Down_arrow:I},methods:{click_button:function(){this.is_close?(this.text_var=this.text,this.is_close=!1,this.arrow_button="rotate-arrow",this.active_class="element_text"):(this.text_var=this.label,this.is_close=!0,this.arrow_button="no-rotate-arrow",this.active_class="element_text_header")}}};a("45d7");const $=N()(U,[["render",J],["__scopeId","data-v-a9745b5a"]]);var z=$,L={data:function(){return{arcticle_data:[],is_error:!1}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/arcticle_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){t.arcticle_data=e})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city)},components:{Main_text:z}};a("34f1");const W=N()(L,[["render",T],["__scopeId","data-v-fc21db90"]]);var K=W,Q={methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},components:{pc:F,mobile:K}};const X=N()(Q,[["render",o]]);t["default"]=X},e9c4:function(e,t,a){var n=a("23e7"),r=a("da84"),c=a("d066"),o=a("2ba4"),i=a("e330"),s=a("d039"),l=r.Array,u=c("JSON","stringify"),d=i(/./.exec),m=i("".charAt),b=i("".charCodeAt),p=i("".replace),v=i(1..toString),h=/[\uD800-\uDFFF]/g,f=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,_=function(e,t,a){var n=m(a,t-1),r=m(a,t+1);return d(f,e)&&!d(g,r)||d(g,e)&&!d(f,n)?"\\u"+v(b(e,0),16):e},O=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:O},{stringify:function(e,t,a){for(var n=0,r=arguments.length,c=l(r);n<r;n++)c[n]=arguments[n];var i=o(u,null,c);return"string"==typeof i?p(i,h,_):i}})},fce3:function(e,t,a){var n=a("d039"),r=a("da84"),c=r.RegExp;e.exports=n((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-646ff183.32a1ca9d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ea120a"],{"00b4":function(e,t,c){"use strict";c("ac1f");var n=c("23e7"),r=c("da84"),a=c("c65b"),o=c("e330"),l=c("1626"),i=c("861d"),s=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=r.Error,d=o(/./.test);n({target:"RegExp",proto:!0,forced:!s},{test:function(e){var t=this.exec;if(!l(t))return d(this,e);var c=a(t,this,e);if(null!==c&&!i(c))throw new u("RegExp exec method returned something other than an Object or null");return!!c}})},"107c":function(e,t,c){var n=c("d039"),r=c("da84"),a=r.RegExp;e.exports=n((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1d85":function(e,t,c){},"31bd":function(e,t,c){"use strict";c("4da2")},"32f6":function(e,t,c){"use strict";c("f261")},"38ad":function(e,t,c){"use strict";c("db86")},"4da2":function(e,t,c){},9263:function(e,t,c){"use strict";var n=c("c65b"),r=c("e330"),a=c("577e"),o=c("ad6d"),l=c("9f7f"),i=c("5692"),s=c("7c73"),u=c("69f3").get,d=c("fce3"),b=c("107c"),m=i("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,O=p,j=r("".charAt),f=r("".indexOf),g=r("".replace),v=r("".slice),k=function(){var e=/a/,t=/b*/g;return n(p,e,"a"),n(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),h=l.UNSUPPORTED_Y||l.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],E=k||x||h||d||b;E&&(O=function(e){var t,c,r,l,i,d,b,E=this,y=u(E),_=a(e),B=y.raw;if(B)return B.lastIndex=E.lastIndex,t=n(O,B,_),E.lastIndex=B.lastIndex,t;var N=y.groups,w=h&&E.sticky,V=n(o,E),C=E.source,S=0,I=_;if(w&&(V=g(V,"y",""),-1===f(V,"g")&&(V+="g"),I=v(_,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==j(_,E.lastIndex-1))&&(C="(?: "+C+")",I=" "+I,S++),c=new RegExp("^(?:"+C+")",V)),x&&(c=new RegExp("^"+C+"$(?!\\s)",V)),k&&(r=E.lastIndex),l=n(p,w?c:E,I),w?l?(l.input=v(l.input,S),l[0]=v(l[0],S),l.index=E.lastIndex,E.lastIndex+=l[0].length):E.lastIndex=0:k&&l&&(E.lastIndex=E.global?l.index+l[0].length:r),x&&l&&l.length>1&&n(m,l[0],c,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(l[i]=void 0)})),l&&N)for(l.groups=d=s(null),i=0;i<N.length;i++)b=N[i],d[b[0]]=l[b[1]];return l}),e.exports=O},"9f7f":function(e,t,c){var n=c("d039"),r=c("da84"),a=r.RegExp;t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,c){"use strict";var n=c("23e7"),r=c("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,c){"use strict";var n=c("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},db86:function(e,t,c){},dcbc:function(e,t,c){"use strict";c("1d85")},e838:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r={key:0},a={key:1};function o(e,t,c,o,l,i){var s=Object(n["resolveComponent"])("mobile"),u=Object(n["resolveComponent"])("pc");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[i.isMobile()?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(s)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createVNode"])(u)]))])}c("ac1f"),c("00b4"),c("b0c0");var l=function(e){return Object(n["pushScopeId"])("data-v-35ba4f01"),e=e(),Object(n["popScopeId"])(),e},i={key:0,class:"error-code"},s={key:2},u={class:"text-center"},d={class:"hero-banner-icon"},b=["src"],m={key:0},p={class:"article-container",style:{"background-color":"#ffd49a"}},O={class:"aritcle-label"},j={class:"article-label-a"},f={class:"article-content"},g={id:"text"},v=["src"],k={class:"author-sign"},h={style:{color:"rgb(60 60 60)"}},x={key:1},E={class:"article-container",style:{"background-color":"#cfb99e"}},y={class:"aritcle-label"},_={class:"article-label-a"},B={class:"article-content"},N={id:"text"},w=["src"],V={class:"author-sign"},C={style:{color:"rgb(151 87 2)"}},S=l((function(){return Object(n["createElementVNode"])("img",{src:"/img/БЛИН.jpg",class:"image"},null,-1)})),I={style:{padding:"14px"}},D={style:{"font-size":"35px","font-family":"fantasy","text-transform":"capitalize"}},F={class:"bottom"},q=Object(n["createTextVNode"])("Раскрыть полностью"),A={class:"card_text"};function R(e,t,c,r,a,o){var l=Object(n["resolveComponent"])("el-skeleton"),R=Object(n["resolveComponent"])("el-carousel-item"),P=Object(n["resolveComponent"])("el-carousel"),L=Object(n["resolveComponent"])("el-button"),T=Object(n["resolveComponent"])("el-card"),J=Object(n["resolveComponent"])("el-col"),U=Object(n["resolveComponent"])("el-row");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[1==a.is_error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,"404")):0==a.is_error&&0==a.arcticle_data.length?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1,rows:25})):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("section",{class:"hero-banner",style:Object(n["normalizeStyle"])({backgroundImage:"url(".concat(a.arcticle_data.img.bg,")")})},[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("span",d,[Object(n["createElementVNode"])("img",{src:a.arcticle_data.img.gerb},null,8,b)]),Object(n["createElementVNode"])("h1",null,Object(n["toDisplayString"])(a.arcticle_data["name"]),1)])],4),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(a.arcticle_data["parts"],(function(t,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:c},[c%2==0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",m,[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("a",j,Object(n["toDisplayString"])(t["label"]),1)]),Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",g,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t["full_text"],(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("p",{key:e},Object(n["toDisplayString"])(e),1)})),128))])]),t["img"]["H1"].length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(P,{key:0,type:"card",height:"20vw","margin-top":"15px",arrow:"never","indicator-position":"none",autoplay:"true"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t["img"]["H1"],(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(R,{key:e},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:"/img/"+e,style:{width:"-webkit-fill-available",position:"relative",height:"100%"},class:"carousel-img"},null,8,v)]})),_:2},1024)})),128))]})),_:2},1024)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("a",h,"~ "+Object(n["toDisplayString"])(t["author"]["name"]),1)])])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",x,[Object(n["createElementVNode"])("div",E,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("a",_,Object(n["toDisplayString"])(t["label"]),1)]),Object(n["createElementVNode"])("div",B,[Object(n["createElementVNode"])("div",N,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t["full_text"],(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("p",{key:e},Object(n["toDisplayString"])(e),1)})),128))])]),t["img"]["H1"].length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(P,{key:0,type:"card",height:"20vw","margin-top":"15px",arrow:"never","indicator-position":"none",autoplay:"true"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t["img"]["H1"],(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(R,{key:e},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:"/img/"+e,style:{width:"-webkit-fill-available",position:"relative",height:"100%"},class:"carousel-img"},null,8,w)]})),_:2},1024)})),128))]})),_:2},1024)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("a",C,"~"+Object(n["toDisplayString"])(t["author"]["name"]),1)])])])),Object(n["createVNode"])(U,null,{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t["cards"],(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])(J,{key:t,span:8,offset:c>0?2:0},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{"body-style":{padding:"40px"},shadow:e.hower},{default:Object(n["withCtx"])((function(){return[S,Object(n["createElementVNode"])("div",I,[Object(n["createElementVNode"])("span",null,[Object(n["createElementVNode"])("a",D,Object(n["toDisplayString"])(t["label"]),1)]),Object(n["createElementVNode"])("div",F,[Object(n["createVNode"])(L,{type:"text",class:"button"},{default:Object(n["withCtx"])((function(){return[q]})),_:1}),Object(n["createElementVNode"])("span",A,Object(n["toDisplayString"])(e.name),1)])])]})),_:2},1032,["shadow"])]})),_:2},1032,["offset"])})),128))]})),_:2},1024)])})),128))]))])}c("d3b7"),c("e9c4");var P={data:function(){return{arcticle_data:[],is_error:!1,is_chered:!0,lorem200:"lorem  perspiciatis quod aut ex. Fugiat obcaecat est vel vis! Recusandae numquam voluptatem deserunt ducimus dolorem harum esse reiciendis sequi ut beatae rerum sunt molestiae ipsum nihil ab nesciunt magnam nemo ea totam obcaecati assumenda praesentium, saepe, molestias illum! Nihil corporis quae, quisquam obcaecati architecto similique. Dolor impedit itaque minus veniam animi? Quibusdam ea recusandae velit non autem? Impedit, ipsa? Illo, impedit. Qui, perspiciatis vero iste accusamus assumenda nobis fuga nihil voluptate dolor distinctio! Saepe qui sequi ut aliquam, velit tempora ad ab cupiditate? At consequuntur quia unde quibusdam tenetur reprehenderit magni culpa, reiciendis asperiores temporibus deserunt suscipit magnam quidem saepe amet consectetur tempora autem harum doloremque recusandae nulla minus. Ullam!"}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/article_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){"error"==e["meta"]["status"]&&(t.is_error=!0),t.arcticle_data=e})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city),document.title="page title"},components:{}},L=(c("31bd"),c("6b0d")),T=c.n(L);const J=T()(P,[["render",R],["__scopeId","data-v-35ba4f01"]]);var U=J,$={class:"city-container"},H={key:0,class:"preloader"},M={key:1},z={class:"preview animate__animated animate__fadeInUp"},K={class:"bg_data"},Q={class:"city-name"};function Y(e,t,c,r,a,o){var l=Object(n["resolveComponent"])("el-image"),i=Object(n["resolveComponent"])("Element");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",$,[a.is_load?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",H,"Load")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M,[Object(n["createElementVNode"])("div",z,[Object(n["createVNode"])(l,{src:e.bg_img,fit:"cover",class:"bg_img"},null,8,["src"]),Object(n["createElementVNode"])("div",K,[Object(n["createVNode"])(l,{src:e.gerb_img,fit:"cover",class:"gerb_img"},null,8,["src"]),Object(n["createElementVNode"])("div",Q,Object(n["toDisplayString"])(e.name),1)])]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.parts,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"information",key:e},[Object(n["createVNode"])(i,{data:e},null,8,["data"])])})),128))]))])}var G={class:"wrapper animate__animated animate__slideInLeft"},W={class:"label"};function X(e,t,c,r,a,o){var l=Object(n["resolveComponent"])("Card"),i=Object(n["resolveComponent"])("swiper-slide"),s=Object(n["resolveComponent"])("swiper");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",G,[Object(n["createElementVNode"])("div",W,"~ "+Object(n["toDisplayString"])(c.data["label"]),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.data["full_text"],(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"main-text",key:e},[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e),1)])})),128)),c.data["cards"].length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:0,"slides-per-view":2.6,"space-between":10,class:"swiper"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.data["cards"],(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:e},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{name:e["label"],img:e["img"],full_text:e["full_text"],author:e["author"]},null,8,["name","img","full_text","author"])]})),_:2},1024)})),128))]})),_:1},8,["slides-per-view"])):Object(n["createCommentVNode"])("",!0)])}var Z=c("90ea"),ee=c("a16a"),te=(c("41fa"),{class:"card_text"});function ce(e,t,c,r,a,o){var l=Object(n["resolveComponent"])("el-image"),i=Object(n["resolveComponent"])("el-popover");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{visible:a.is_show,"onUpdate:visible":t[1]||(t[1]=function(e){return a.is_show=e}),title:c.name,width:300,content:c.full_text[0]},{reference:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",{class:"card",onClick:t[0]||(t[0]=function(e){return a.is_show=!a.is_show})},[Object(n["createVNode"])(l,{src:a.img,fit:"cover",class:"card_img"},null,8,["src"]),Object(n["createElementVNode"])("span",te,Object(n["toDisplayString"])(c.name),1)])]})),_:1},8,["visible","title","content"])}var ne={data:function(){return{img:"/img/tower.jpg",is_show:!1}},props:{author:JSON,full_text:Array,name:String},mounted:function(){}};c("32f6");const re=T()(ne,[["render",ce]]);var ae=re,oe={components:{Card:ae,Swiper:Z["a"],SwiperSlide:ee["a"]},props:{data:JSON}};c("dcbc");const le=T()(oe,[["render",X]]);var ie=le,se={components:{Element:ie},data:function(){return{is_load:!0}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/article_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){"error"==e["meta"]["status"]?t.is_error=!0:(t.gerb_img=e["img"]["gerb"],t.bg_img=e["img"]["bg"],document.title=e["name"],t.name=e["name"],t.parts=e["parts"],t.is_load=!1)})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city)}};c("38ad");const ue=T()(se,[["render",Y]]);var de=ue,be={methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},components:{pc:U,mobile:de}};const me=T()(be,[["render",o]]);t["default"]=me},e9c4:function(e,t,c){var n=c("23e7"),r=c("da84"),a=c("d066"),o=c("2ba4"),l=c("e330"),i=c("d039"),s=r.Array,u=a("JSON","stringify"),d=l(/./.exec),b=l("".charAt),m=l("".charCodeAt),p=l("".replace),O=l(1..toString),j=/[\uD800-\uDFFF]/g,f=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,v=function(e,t,c){var n=b(c,t-1),r=b(c,t+1);return d(f,e)&&!d(g,r)||d(g,e)&&!d(f,n)?"\\u"+O(m(e,0),16):e},k=i((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:k},{stringify:function(e,t,c){for(var n=0,r=arguments.length,a=s(r);n<r;n++)a[n]=arguments[n];var l=o(u,null,a);return"string"==typeof l?p(l,j,v):l}})},f261:function(e,t,c){},fce3:function(e,t,c){var n=c("d039"),r=c("da84"),a=r.RegExp;e.exports=n((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-46ea120a.623a1963.js.map
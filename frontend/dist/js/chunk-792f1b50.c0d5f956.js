(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-792f1b50"],{1082:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),i={class:"all animate__animated animate__fadeInUp"},c={class:"main-block"},r={class:"back-carousel"};function o(e,t,a,o,l,d){var s=Object(n["resolveComponent"])("Anounce"),f=Object(n["resolveComponent"])("Carousel"),u=Object(n["resolveComponent"])("CarouselPC"),v=Object(n["resolveComponent"])("Team");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createVNode"])(s,{class:"s1"}),Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",r,[d.isMobile()?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,class:"carousel_mobile"})):(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:1,class:"carousel_pc"}))]),Object(n["createVNode"])(v)])])}a("ac1f"),a("00b4");var l=Object(n["createElementVNode"])("div",{class:"main-block-anounce"},[Object(n["createTextVNode"])(" Проект «Патриотическое воспитание граждан Российской Федерации» национального проекта «Образование» "),Object(n["createElementVNode"])("div",{class:"anounce-block"}," В 2021 году школа №61 города Чебоксары стала победителем конкурса Минпросвещения России в рамках федерального проекта «Патриотическое воспитание граждан Российской Федерации» национального проекта «Образование» и получила грант на реализацию школьного проекта «Интерактивный парк «ЭТНО-Хакатон». Проект направлен на популяризацию традиционной культуры народов Российской Федерации и развитие цифровых навыков участников проекта. Цель проекта: создание условий для патриотического воспитания школьников через изучение культуры и национальных традиций народов пяти субъектов РФ: Чувашии, Татарстана, Марий Эл, Мордовии, Нижнего Новгорода. Участниками проекта в 2021 году стало более 1000 человек. Проект продолжается… ")],-1),d=Object(n["createElementVNode"])("hr",null,null,-1),s=[l,d];function f(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,s)}a("920c");var u=a("6b0d"),v=a.n(u);const p={},m=v()(p,[["render",f]]);var b=m,g=(a("b0c0"),a("9911"),Object(n["createElementVNode"])("hr",null,null,-1));function j(e,t,a,i,c,r){var o=Object(n["resolveComponent"])("Element"),l=Object(n["resolveComponent"])("swiper-slide"),d=Object(n["resolveComponent"])("swiper");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(d,{"slides-per-view":2.6,"space-between":10,onSwiper:i.onSwiper,onSlideChange:i.onSlideChange,class:"carousel"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.carousel_data,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:e},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(o,{name:e["name"],img:e["img"],link:e["link"]},null,8,["name","img","link"])]})),_:2},1024)})),128))]})),_:1},8,["slides-per-view","onSwiper","onSlideChange"]),g])}var h={class:"carousel_element"},_={class:"car_el"};function O(e,t,a,i,c,r){var o=Object(n["resolveComponent"])("el-image"),l=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])(l,{to:"/city/"+a.link,style:{"text-decoration":"none"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",h,[Object(n["createVNode"])(o,{style:{width:"130px",height:"220px"},src:a.img,fit:"cover",class:"car_img"},null,8,["src"]),Object(n["createElementVNode"])("span",_,Object(n["toDisplayString"])(a.name),1)])]})),_:1},8,["to"])}var k={props:{img:String,name:String,link:String}};a("2fd2");const w=v()(k,[["render",O]]);var y=w,C=a("90ea"),E=a("a16a"),B=(a("41fa"),{components:{Swiper:C["a"],SwiperSlide:E["a"],Element:y},data:function(){return{carousel_data:[{img:"/img/chebocksary_king_city.png",name:"Чебоксары",link:"cheboksary",description:"1"},{img:"/img/nijniy-novgorod.jpg",name:"Нижний Новгород",link:"nizhny",description:"2"},{img:"/img/kazan.png",name:"Казань",link:"kazan",description:"3"},{img:"/img/saransk.png",name:"Саранск",link:"Саранск",description:"4"},{img:"/img/esharala.png",name:"Йошкар-Ола",link:"Йошкар-Ола",description:"5"}]}},setup:function(){var e=function(){},t=function(){};return{onSwiper:e,onSlideChange:t}}});a("273a");const x=v()(B,[["render",j]]);var N=x,S=function(e){return Object(n["pushScopeId"])("data-v-b211cb02"),e=e(),Object(n["popScopeId"])(),e},V={class:"carousel_block"},A=S((function(){return Object(n["createElementVNode"])("img",{src:"https://img.icons8.com/ios-filled/50/000000/expand-arrow.png",style:{transform:"rotate(180reg)"}},null,-1)})),I=[A],L=S((function(){return Object(n["createElementVNode"])("img",{src:"https://img.icons8.com/ios-filled/50/000000/expand-arrow.png",style:{transform:"rotate(90reg)"}},null,-1)})),z=[L],P={class:"carousel-item-title"},M=["src"];function T(e,t,a,i,c,r){var o=Object(n["resolveComponent"])("router-link"),l=Object(n["resolveComponent"])("el-carousel-item"),d=Object(n["resolveComponent"])("el-carousel");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[Object(n["createElementVNode"])("div",{class:"arrow arrow--left",onClick:t[0]||(t[0]=function(t){return e.$refs.input.prev()})},I),Object(n["createElementVNode"])("div",{class:"arrow arrow--right",onClick:t[1]||(t[1]=function(t){return e.$refs.input.next()})},z),Object(n["createVNode"])(d,{type:"card",height:"20vw","margin-top":"15px",arrow:"never",ref:"input","indicator-position":"none",onChange:r.changed},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.carousel_data,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:e},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(o,{to:"/city/"+e["link"],style:{"text-decoration":"none"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("a",P,Object(n["toDisplayString"])(e["name"]),1),Object(n["createElementVNode"])("img",{src:e["img"],style:{width:"-webkit-fill-available","object-fit":"cover",position:"relative",height:"100%"}},null,8,M)]})),_:2},1032,["to"])]})),_:2},1024)})),128))]})),_:1},8,["onChange"])])}var D={data:function(){return{counter:0,carousel_data:[{img:"/img/chebocksary_king_city.png",name:"Чебоксары",link:"cheboksary",description:"1"},{img:"/img/nijniy-novgorod.jpg",name:"Нижний Новгород",link:"nizhny",description:"2"},{img:"/img/kazan.png",name:"Казань",link:"kazan",description:"3"},{img:"/img/saransk.png",name:"Саранск",link:"Саранск",description:"4"},{img:"/img/esharala.png",name:"Йошкар-Ола",link:"Йошкар-Ола",description:"5"}]}},methods:{changed:function(e){this.counter=e}},setup:function(){var e=function(){},t=function(){};return{onSwiper:e,onSlideChange:t}}};a("b275");const F=v()(D,[["render",T],["__scopeId","data-v-b211cb02"]]);var H=F,G={class:"defilee__outer"},J=Object(n["createStaticVNode"])('<section id="defilee" class="defilee__ctnr" data-v-5af963d6><div class="defilee__div defilee__div--text" data-v-5af963d6><h2 data-v-5af963d6><a href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/" style="text-decoration:none;" data-v-5af963d6><img src="/img/nac_project.png" alt="Avatar for user 3" data-v-5af963d6></a></h2></div><div class="defilee__div defilee__div--special2" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 1" data-v-5af963d6><p data-v-5af963d6>Hi, I&#39;m Lora!</p></div><div class="defilee__div defilee__div--special" data-v-5af963d6> aoQ4DYZLE_E <img src="/img/БЛИН.jpg" alt="Avatar for user 2" data-v-5af963d6><p data-v-5af963d6>Hello, I&#39;m Steve.</p></div><div class="defilee__div defilee__div--special1 first" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 3" data-v-5af963d6><p data-v-5af963d6>I&#39;m the boss.</p></div><div class="defilee__div defilee__div--special3" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 4" data-v-5af963d6><p data-v-5af963d6>One word - Warrior.</p></div><div class="defilee__div defilee__div--special4" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 5" data-v-5af963d6><p data-v-5af963d6>Brave &amp; Humble</p></div><div class="defilee__div defilee__div--special1" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 6" data-v-5af963d6><p data-v-5af963d6>Girl in Love</p></div><div class="defilee__div" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 7" data-v-5af963d6><p data-v-5af963d6>The Friendliest One</p></div><div class="defilee__div defilee__div--text" data-v-5af963d6><h2 data-v-5af963d6><a href="https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/" style="text-decoration:none;" data-v-5af963d6><img src="/img/nac_project.png" alt="Avatar for user 3" data-v-5af963d6></a></h2></div><div class="defilee__div defilee__div--special3" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 8" data-v-5af963d6><p data-v-5af963d6>Christina.</p></div><div class="defilee__div defilee__div--special1" data-v-5af963d6><img src="/img/БЛИН.jpg" alt="Avatar for user 9" data-v-5af963d6><p data-v-5af963d6>George</p></div></section>',1),$=[J];function Q(e,t,a,i,c,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",G,$)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(e,t,a){return t&&W(e.prototype,t),a&&W(e,a),e}a("d3b7"),a("159b"),a("fb6a");var Z={mounted:function(){var e=function(){function e(t){U(this,e),t&&(this.element=t,this._name="defilee",this._itemSelector="."+this._itemClass)}return Y(e,[{key:"init",value:function(){this.addLoop()}},{key:"addLoop",value:function(){var e=this.element;Array.prototype.slice.call(this.element.children).reverse().forEach((function(t){var a=t.cloneNode(!0);a.classList.add("clone"),e.insertBefore(a,e.firstChild)}))}}]),e}(),t=new e(document.getElementById("defilee"));t.init()}};a("ece9");const q=v()(Z,[["render",Q],["__scopeId","data-v-5af963d6"]]);var K=q,R={components:{Anounce:b,Carousel:N,CarouselPC:H,Team:K},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}};a("9ac9");const X=v()(R,[["render",o]]);t["default"]=X},"159b":function(e,t,a){var n=a("da84"),i=a("fdbc"),c=a("785a"),r=a("17c2"),o=a("9112"),l=function(e){if(e&&e.forEach!==r)try{o(e,"forEach",r)}catch(t){e.forEach=r}};for(var d in i)i[d]&&l(n[d]&&n[d].prototype);l(c)},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,i=a("a640"),c=i("forEach");e.exports=c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"273a":function(e,t,a){"use strict";a("9724")},"2fd2":function(e,t,a){"use strict";a("f367")},5161:function(e,t,a){},"67eb":function(e,t,a){},"75d7":function(e,t,a){},8418:function(e,t,a){"use strict";var n=a("a04b"),i=a("9bf2"),c=a("5c6c");e.exports=function(e,t,a){var r=n(t);r in e?i.f(e,r,c(0,a)):e[r]=a}},"899d":function(e,t,a){},"920c":function(e,t,a){"use strict";a("75d7")},9724:function(e,t,a){},"9ac9":function(e,t,a){"use strict";a("5161")},a640:function(e,t,a){"use strict";var n=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){throw 1},1)}))}},b275:function(e,t,a){"use strict";a("67eb")},ece9:function(e,t,a){"use strict";a("899d")},f367:function(e,t,a){},fb6a:function(e,t,a){"use strict";var n=a("23e7"),i=a("da84"),c=a("e8b5"),r=a("68ee"),o=a("861d"),l=a("23cb"),d=a("07fa"),s=a("fc6a"),f=a("8418"),u=a("b622"),v=a("1dde"),p=a("f36a"),m=v("slice"),b=u("species"),g=i.Array,j=Math.max;n({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var a,n,i,u=s(this),v=d(u),m=l(e,v),h=l(void 0===t?v:t,v);if(c(u)&&(a=u.constructor,r(a)&&(a===g||c(a.prototype))?a=void 0:o(a)&&(a=a[b],null===a&&(a=void 0)),a===g||void 0===a))return p(u,m,h);for(n=new(void 0===a?g:a)(j(h-m,0)),i=0;m<h;m++,i++)m in u&&f(n,i,u[m]);return n.length=i,n}})}}]);
//# sourceMappingURL=chunk-792f1b50.c0d5f956.js.map
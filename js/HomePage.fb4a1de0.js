(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HomePage"],{1239:function(t,e,i){"use strict";i("4577")},4577:function(t,e,i){},"78a7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"HomePage"},[i("HomeSlider",{attrs:{options:t.options,slider:t.slider}})],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HomeSwiper-Box"},[n("swiper",{staticClass:"HomeSwiper",attrs:{options:t.options}},[t._l(t.slider,(function(e,i){return n("swiper-slide",{key:i,staticClass:"HomeSwiper-Slide",style:{backgroundImage:"url('"+e.img+"')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"top center"}},[n("div",{staticClass:"HomeSwiper-SlideContent"},[n("div",{staticClass:"HomeSwiper-SlideSub"},[t._v(t._s(e.sub))]),n("h2",{staticClass:"Title Title--h2 HomeSwiper-SlideTitle"},[t._v(t._s(e.title))]),n("p",{staticClass:"HomeSwiper-SlideText"},[t._v(t._s(e.text))])])])})),n("div",{staticClass:"HomeSwiper-SlidePagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"Buttons HomeSwiper-Buttons"},[n("div",{staticClass:"ButtonPrev HomeSwiper-ButtonPrev",attrs:{slot:"button-prev"},slot:"button-prev"},[n("img",{attrs:{src:i("5b34"),alt:"arrow"}})]),n("div",{staticClass:"ProgressBar HomeSwiper-SlideProgressBar"},[n("div",{staticClass:"Progress Progress--fill HomeSwiper-SlideProgress"})]),n("div",{staticClass:"ButtonNext HomeSwiper-ButtonNext",attrs:{slot:"button-next"},slot:"button-next"},[n("img",{attrs:{src:i("3846"),alt:"arrow"}})])])],2)],1)},a=[],s={name:"HomeSlider",components:{},props:{slider:{type:[Array,Object],required:!1,default:function(){}},options:{type:[Array,Object],required:!1,default:function(){}}},data:function(){return{count:0}},mounted:function(){var t=document.querySelector(".Progress"),e=document.querySelector(".HomeSwiper-SlidePaginationTotal").innerHTML,i=document.querySelector(".HomeSwiper-SlidePaginationCurrent").innerHTML;return this.count=+i/+e*100,t.style.width="".concat(this.count)+"%"}},l=s,c=(i("1239"),i("2877")),u=Object(c["a"])(l,r,a,!1,null,null,null),p=u.exports,d={name:"HomePage",components:{HomeSlider:p},data:function(){return{options:{loop:!0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".HomeSwiper-SlidePagination",type:"fraction",renderFraction:function(t,e,i,n){return'<span class="HomeSwiper-SlidePaginationCurrent">'+i+' </span> / <span class="HomeSwiper-SlidePaginationTotal">'+n+" </span>"},currentClass:"HomeSwiper-SlidePaginationCurrent",totalClass:"HomeSwiper-SlidePaginationTotal",formatFractionCurrent:function(t){return t<10&&(t="0"+t),t},formatFractionTotal:function(t){return t<10&&(t="0"+t),t}},navigation:{nextEl:".HomeSwiper-ButtonNext",prevEl:".HomeSwiper-ButtonPrev"}},slider:[{sub:"We are",title:"WakeApp",text:"an international performance agency working only with high-quality traffic",img:i("2797")},{sub:"More than",title:"1 billion impressions",text:"in the WakeApp in-app network",img:i("0c73")},{sub:"We do not only work with advertising platforms",title:"We create advertising platforms",text:"Learn more about wake up networking.",img:i("a9dd")}]}}},m=d,S=(i("9775"),Object(c["a"])(m,n,o,!1,null,"20712578",null));e["default"]=S.exports},"7a8a":function(t,e,i){},9775:function(t,e,i){"use strict";i("7a8a")}}]);
//# sourceMappingURL=HomePage.fb4a1de0.js.map
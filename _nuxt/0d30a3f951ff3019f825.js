(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,e,n){var o=n(6),r=n(29),c=n(13),l=n(227),_="["+l+"]",f=RegExp("^"+_+_+"*"),v=RegExp(_+_+"*$"),d=function(t,e,n){var r={},_=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=r[t]=_?e(m):l[t];n&&(r[n]=f),o(o.P+o.F*_,"String",r)},m=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=d},227:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(t,e,n){"use strict";var o=n(16),r=n(17),c=Object(o.b)({name:"AliyunSwiperAd",setup:function(){return{aliyunAds:r.b.ALIYUN_ADS,swiperOption:{mousewheel:!0,autoHeight:!0,loop:!0,direction:"vertical",autoplay:{delay:2600,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}}}),l=(n(259),n(260),n(12)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mammon aliyun"},[e("client-only",[e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},[this._l(this.aliyunAds,(function(t,n){return e("swiper-slide",{key:n,staticClass:"slide"},[e("a",{staticClass:"link",attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"image",style:{backgroundImage:"url("+t.image+")"}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination aliyun-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)}),[],!1,null,"5be0006c",null);component.options.__file="aliyun-swiper.vue";var _,f=component.exports;!function(t){t.Aliyun="Aliyun",t.GoogleAdSense1="GoogleAdSense1",t.GoogleAdSense2="GoogleAdSense2"}(_||(_={}));var v=[_.Aliyun],d=[_.GoogleAdSense1,_.GoogleAdSense2],m=Object(o.b)({name:"mammon",components:{AliyunSwiperAd:f},props:{provider:{type:String,default:_.GoogleAdSense1}},setup:function(t){return{isEnabledAliyun:Object(o.a)((function(){return t.provider===_.Aliyun})),isEnabledGA1:Object(o.a)((function(){return t.provider===_.GoogleAdSense1})),isEnabledGA2:Object(o.a)((function(){return t.provider===_.GoogleAdSense2}))}}});n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return d}));var h=Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return this.isEnabledAliyun?e("aliyun-swiper-ad",{key:"aliyun"}):this.isEnabledGA1?e("adsense-responsive-ad-1",{key:"gad1"}):this.isEnabledGA2?e("adsense-responsive-ad-2",{key:"gad2"}):this._e()}),[],!1,null,null,null);h.options.__file="index.vue";e.c=h.exports},236:function(t,e,n){"use strict";var o=n(3),r=n(22),c=n(30),l=n(124),_=n(62),f=n(13),v=n(46).f,d=n(63).f,m=n(11).f,h=n(226).trim,C=o.Number,I=C,A=C.prototype,y="Number"==c(n(87)(A)),S="trim"in String.prototype,k=function(t){var e=_(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=S?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(y?f((function(){A.valueOf.call(n)})):"Number"!=c(n))?l(new I(k(e)),n,C):k(e)};for(var O,x=n(8)?v(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)r(I,O=x[w])&&!r(C,O)&&m(C,O,d(I,O));C.prototype=A,A.constructor=C,n(15)(o,"Number",C)}},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){var o=n(6),r=n(3).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},241:function(t,e,n){},259:function(t,e,n){"use strict";var o=n(238);n.n(o).a},260:function(t,e,n){"use strict";var o=n(239);n.n(o).a},264:function(t,e,n){"use strict";var o=n(241);n.n(o).a},342:function(t,e,n){},343:function(t,e,n){"use strict";n(240),n(236);var o=n(16);var r=Object(o.b)({name:"github-button-base",props:{link:{type:String,required:!0},icon:{type:String,required:!0},iconColor:{type:String,required:!1},text:{type:String,required:!1},isLoading:{type:Boolean,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup:function(t,e){var n=Object(o.a)((function(){return Number.isFinite(t.count)||t.countText})),r=Object(o.a)((function(){return t.countText?t.countText:n?(e=t.count)>1e3?"".concat(parseFloat((e/1e3).toFixed(2)),"k"):String(e):null;var e}));return{hasCount:n,countContent:r}}}),c=(n(264),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"github-button"},[n("a",{staticClass:"button",attrs:{href:t.link,target:"_blank"}},[n("i",{staticClass:"iconfont",class:t.icon,style:{color:t.iconColor}}),t._v(" "),t.text?n("span",{staticClass:"text"},[t._v(t._s(t.text))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.hasCount?n("a",{staticClass:"count",attrs:{href:t.countLink||t.link,target:"_blank"}},[t.countIcon?n("i",{staticClass:"iconfont",class:t.countIcon}):t._e(),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[n("span",{key:t.countContent},[t._v(t._s(t.countContent))])])],1):t._e()])}),[],!1,null,"1ef07698",null);component.options.__file="base.vue";e.a=component.exports},652:function(t,e,n){"use strict";var o=n(342);n.n(o).a},664:function(t,e,n){"use strict";n.r(e);var o=n(16),r=n(67),c=n(35),l=n(17),base=n(343),_=n(233),f=Object(o.b)({name:"index",components:{Mammon:_.c,GithubButtonBase:base.a},setup:function(t,e){var n=e.root,f=n.$store.getters,v=n.$store.state,d=Object(o.i)(!1),m=Object(o.a)((function(){return v.inited})),h=Object(o.a)((function(){return v.userInfo})),C=Object(o.a)((function(){return f[r.StoreNames.OwnRepositories]})),I=Object(o.a)((function(){return C.value.filter((function(t){return!!t.homepage&&t.homepage!==l.b.PROJECT_URL}))})),A=Object(o.a)((function(){return v.isMobileDevice})),y=!Object(o.a)((function(){return v.isChinaGuest})).value||A.value?_.a.GoogleAdSense1:Math.ceil(10*Math.random())>6?_.a.Aliyun:_.a.GoogleAdSense1;return Object(o.j)((function(){return m}),(function(t){t&&c.a&&window.setTimeout((function(){d.value=!0}),666)})),{inited:m,userInfo:h,repositories:C,exampleRepositories:I,enableAd:d,adProvider:y,githubUID:l.b.GITHUB_UID,githubFollowersUrl:l.b.GITHUB_FOLLOWERS_URL,githubSponsorsUrl:l.b.GITHUB_SPONSORS_URL}}}),v=(n(652),n(12)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page"},[n("div",{staticClass:"container"},[n("aside",{staticClass:"aside"},[n("transition",{attrs:{name:"module"}},[t.userInfo?n("div",{staticClass:"gravatar"},[n("img",{staticClass:"image",attrs:{draggable:!1,src:t.userInfo.avatar_url}}),t._v(" "),n("h2",[t._v(t._s(t.userInfo.name||"-"))]),t._v(" "),n("p",[t._v(t._s(t.userInfo.bio||"-"))]),t._v(" "),n("p",{staticClass:"sponsor"},[n("github-button-base",{attrs:{link:t.githubSponsorsUrl,count:t.userInfo.followers,countLink:t.githubFollowersUrl,icon:"icon-heart","icon-color":"#ea4aaa"}},[t._v("\n              Sponsor\n            ")])],1)]):t._e()]),t._v(" "),n("transition",{attrs:{name:"module"}},[t.userInfo?n("div",{staticClass:"profile"},[t.userInfo.html_url?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-github"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:t.userInfo.html_url}},[t._v("@"+t._s(t.userInfo.login))])]):t._e(),t._v(" "),t.userInfo.email?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-mail"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:"mailto://"+t.userInfo.email}},[t._v(t._s(t.userInfo.email))])]):t._e(),t._v(" "),t.userInfo.blog?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-link"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:t.userInfo.blog}},[t._v(t._s(t.userInfo.blog))])]):t._e(),t._v(" "),t.userInfo.location?n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-location"}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.userInfo.location))])]):t._e()]):t._e()])],1),t._v(" "),n("main",{staticClass:"detail"},[n("h3",[t._v("Homepages & examples")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("Homepages and demos for GitHub repositories.")]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.inited?n("ul",{staticClass:"homepage-repo-list"},t._l(t.exampleRepositories,(function(e){return n("li",{key:e.clone_url,staticClass:"item"},[n("i",{staticClass:"iconfont icon-link"}),t._v(" "),n("a",{staticClass:"name",attrs:{target:"_blacnk",href:e.homepage}},[t._v(t._s(e.name))]),t._v(" "),e.archived?n("span",{staticClass:"archived"},[t._v("Archived")]):t._e()])})),0):n("p",[t._v("Loading...")])]),t._v(" "),n("hr"),t._v(" "),n("transition",{attrs:{name:"module"}},[t.enableAd?n("div",{staticClass:"index-mammon"},[n("mammon",{attrs:{provider:t.adProvider}})],1):t._e()]),t._v(" "),n("h3",[t._v("My Projects")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("GitHub repositories that I've built.")]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.inited?n("ul",{staticClass:"detail-repo-list"},t._l(t.repositories,(function(e){return n("li",{key:e.clone_url,staticClass:"item"},[n("p",[n("i",{staticClass:"iconfont icon-repo"}),t._v(" "),n("a",{staticClass:"name",attrs:{target:"_blacnk",href:e.html_url}},[t._v(t._s(e.full_name))]),t._v(" "),e.archived?n("span",{staticClass:"archived"},[t._v("Archived")]):t._e()]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"meta"},[n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-star"}),t._v(" "),n("span",[t._v(t._s(e.stargazers_count))])]),t._v(" "),n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-fork"}),t._v(" "),n("span",[t._v(t._s(e.forks_count))])]),t._v(" "),n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-watch"}),t._v(" "),n("span",[t._v(t._s(e.watchers_count))])]),t._v(" "),e.license?n("span",{staticClass:"item license"},[n("i",{staticClass:"iconfont icon-law"}),t._v(" "),n("span",[t._v(t._s(e.license.name))])]):t._e(),t._v(" "),e.language?n("span",{staticClass:"item language"},[n("i",{staticClass:"iconfont icon-code"}),t._v(" "),n("span",[t._v(t._s(e.language))])]):t._e()])])})),0):n("p",[t._v("Loading...")])])],1)])])}),[],!1,null,"00abfd4a",null);component.options.__file="index.vue";e.default=component.exports}}]);
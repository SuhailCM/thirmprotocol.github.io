(function(t){function s(s){for(var a,o,r=s[0],c=s[1],l=s[2],m=0,u=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0055":function(t,s,e){t.exports=e.p+"img/coinmarketcap.d557820e.png"},"053c":function(t,s,e){t.exports=e.p+"img/sod.2a7584b8.png"},1943:function(t,s,e){"use strict";e("d06a")},"23a6":function(t,s,e){t.exports=e.p+"img/coingecko.257d2a26.png"},"4f6f":function(t,s){function e(t){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="4f6f"},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"bg"}),[e("b-navbar",{staticClass:"navbar-wrapper",attrs:{"fixed-top":!0,"wrapper-class":"container"}},[e("template",{slot:"brand"},[e("b-navbar-item",{staticClass:"logo",attrs:{tag:"router-link",to:{path:"/"}}},[t._v("HOME")])],1),e("template",{slot:"start"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/faq"}}},[t._v("FAQ")]),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/about"}}},[t._v("ABOUT")]),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/contact"}}},[t._v("CONTACT")]),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/governance"}}},[t._v("GOVERNANCE")])],1),e("template",{slot:"end"},[e("b-navbar-item",{attrs:{target:"_blank",href:"https://dapp.thirm.com/"}},[e("b-button",[t._v("APP")])],1),e("b-navbar-item",{attrs:{target:"_blank",href:"https://docs.thirm.com/"}},[e("b-button",[t._v("DOCS")])],1),e("b-navbar-item",{attrs:{target:"_blank",href:"https://github.com/orgs/thirmprotocol/projects"}},[e("b-button",[t._v("ROADMAP")])],1),e("b-navbar-item",{attrs:{target:"_blank",href:"https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"}},[e("b-button",[t._v("UNISWAP")])],1)],1)],2)],e("router-view"),e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"social-icons"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:t.discord}},[t._m(5)])])]),t._m(6)])])],2)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:"https://www.linkedin.com/company/thirm/?viewAsMember=true"}},[e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-linkedin fa-3x"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:"https://medium.com/thirmprotocol"}},[e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-medium fa-3x"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:"https://github.com/thirmprotocol"}},[e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-github fa-3x"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:"https://twitter.com/thirmprotocol"}},[e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-twitter fa-3x"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"social-icon-item",attrs:{target:"_blank",href:"https://t.me/thirm"}},[e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-telegram fa-3x"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"has-text-dark"},[e("i",{staticClass:"fab fa-discord fa-3x"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"footer-text subtitle"},[t._v("Copyright © 2020 THIRM SOLUTIONS")])])}],o=e("bc3a"),r=e.n(o),c={data(){return{discord:"https://discord.com/widget?id=712795894982115380&theme=dark"}},mounted(){try{r()({method:"GET",url:"https://discord.com/api/guilds/712795894982115380/widget.json"}).then(t=>{this.discord=t.data.instant_invite||"https://discord.com/widget?id=712795894982115380&theme=dark"})}catch(t){console.log("no discord")}}},l=c,d=(e("aa20"),e("2877")),m=Object(d["a"])(l,i,n,!1,null,"2f565511",null),u=m.exports,p=e("8c4f"),h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/feat.json",background:"transparent",speed:"0.6",loop:"",autoplay:""}})],1),e("div",{staticClass:"column is-offset-1"},[e("b-notification",{attrs:{type:"is-link is-light","aria-close-label":"Close notification"}},[t._v(" Approx 9000 THIRM is added on "),e("a",{attrs:{href:"https://app.bounce.finance/fixed-swap/4608"}},[t._v("bounce.finance")]),t._v(", 1 ETH = 40 THIRM. The generated ETH will be locked in Uniswap LP Permanently. ")]),t._m(0)],1)])])])]),t._m(1),e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered is-multiline"},[t._m(2),e("div",{staticClass:"column is-5 is-offset-1"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/1.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1)])])])]),e("all"),e("medium")],1)},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content box"},[e("strong",[t._v("THIRM VM")]),t._v(" links various cross-chain cryptocurrencies, allowing you to access your crypto assets on different blockchains.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline listing-wrapper"},[a("div",{staticClass:"column zoom"},[a("a",{staticClass:"listing",attrs:{target:"_blank",href:"https://www.stateofthedapps.com/dapps/thirm"}},[a("img",{attrs:{src:e("053c")}})])]),a("div",{staticClass:"column zoom"},[a("a",{staticClass:"listing",attrs:{target:"_blank",href:"https://www.coingecko.com/en/coins/thirm-protocol"}},[a("img",{attrs:{src:e("23a6")}})])]),a("div",{staticClass:"column zoom"},[a("a",{staticClass:"listing",attrs:{target:"_blank",href:"https://coinmarketcap.com/currencies/thirm-protocol"}},[a("img",{attrs:{src:e("0055")}})])]),a("div",{staticClass:"column zoom"},[a("a",{staticClass:"listing",attrs:{target:"_blank",href:"https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"}},[a("img",{attrs:{src:e("796d")}})])]),a("div",{staticClass:"column zoom"},[a("a",{staticClass:"listing",attrs:{target:"_blank",href:"https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"}},[a("img",{attrs:{src:e("c6c8")}})])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-6"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-4"},[e("div",{staticClass:"box"},[e("p",[t._v("Diversify")])])]),e("div",{staticClass:"column is-4"},[e("div",{staticClass:"box"},[e("p",[t._v("Earn Interest")])])]),e("div",{staticClass:"column is-4"},[e("div",{staticClass:"box"},[e("p",[t._v("Secured")])])]),e("div",{staticClass:"column is-12"},[e("div",{staticClass:"box"},[e("p",[t._v(" Use Non-ERC20 cryptocurrencies like BNB, BTC, LTC and NANO on the blockchain. You can use these currencies outside of the Thirm Ecosystem, too - no restrictions! ")])])])])])}],v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-medium is-hidden-mobile"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{ref:"medium-widget",staticClass:"lcontainer__medium-widget",class:{"lcontainer__medium-widget--loaded":t.isMediumLoaded},attrs:{id:"medium-widget"}})])])])},b=[],C={data(){return{isMediumLoaded:!1}},mounted(){this.$loadScript("https://medium-widget.pixelpoint.io/widget.js").then(()=>{this.initMedium()}).catch(()=>{console.error("Can't load Medium publication")})},beforeDestroy(){let t=this.$refs["medium-widget"];t.innerHTML="",this.$unloadScript("https://medium-widget.pixelpoint.io/widget.js")},methods:{initMedium(){window.MediumWidget.Init({renderTo:"#medium-widget",params:{resource:"https://medium.com/thirmprotocol",postsPerLine:4,limit:4,picture:"big",fields:["description"],ratio:"landscape"}}),setTimeout(()=>{this.isMediumLoaded=!0},500)}}},g=C,_=Object(d["a"])(g,v,b,!1,null,null,null),y=_.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v("Important Components")]),e("hr"),e("div",{staticClass:"columns is-vcentered is-multiline"},t._l(t.list,(function(s){return e("div",{key:s.title,staticClass:"column is-4"},[e("div",{staticClass:"box style1"},[e("strong",[t._v(t._s(s.title))]),e("hr"),t._v(" "+t._s(s.guide)+" ")])])})),0)])])]),e("section",{staticClass:"hero is-light is-hidden-mobile"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},t._l(t.lot,(function(t){return e("div",{key:t.symbol,staticClass:"column is-2"},[e("b-tooltip",{attrs:{label:t.name,position:"is-top"}},[e("a",{attrs:{target:"_blank",href:"https://etherscan.io/address/"+t.address}},[e("figure",{staticClass:"image is-128x128 box zoom"},[e("img",{attrs:{src:t.logoURI.trim()}})])])])],1)})),0)])])])])},T=[],w={data(){return{lot:[{name:"Thirm Hathor",symbol:"tHTR",address:"0xf11a94383bf3aa163cf04c47a2295a55026f2d08",logoURI:"https://ipfs.io/ipfs/QmTLDXpo1QCmWtSr3M4m5z4F4S1Ftwnnb1QDamz4rdMn5i"},{name:"Thirm Nano",symbol:"tNANO",address:"0x9DB44C215F14a874C0Ca45895f3A97f0839c29d9",logoURI:"https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tNANO.png"},{name:"Thirm Bitcoin",symbol:"tBTC",address:"0x36910c9695C1286c9377CEbc61D37bDEFcFdeAC6",logoURI:"https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tBTC.png"},{name:"Thirm Tether",symbol:"tUSDT",address:"0xB962776Fa4FaD32F46609A813488C4b62227325f",logoURI:"https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tUSDT.png"},{name:"Thirm Dai",symbol:"tDAI",address:"0xB29c13A70792B5B5D1Ab8e40b92233A16568Fe32",logoURI:"https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tDAI.png"},{name:"Thirm Ethereum",symbol:"tETH",address:"0x138083bd8a49357b4630733954e9538ed74df105",logoURI:"https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tETH.png"}],reward:200,ethprice:0,data:[],list:[{title:"THIRM VM",guide:"THIRM VM is software that allows you to access your cryptocurrencies on multiple blockchains."},{title:"THIRM",guide:"THIRM is a governance smart contract written on the Ethereum Blockchain and is tradeable with other cryptocurrencies as it follows the ERC20 Token Standard."},{title:"T-TOKENS",guide:"T-TOKENS are Tokenized cryptocurrencies by THIRM VM. Each T-TOKEN is backed by its native cryptocurrency. ( ex 1 tBTC = 1 BTC )"}]}}},x=w,E=(e("6732"),Object(d["a"])(x,k,T,!1,null,"c243d5f6",null)),H=E.exports,M={components:{medium:y,all:H}},O=M,R=(e("7a25"),Object(d["a"])(O,h,f,!1,null,null,null)),D=R.exports,I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/about.json",background:"transparent",speed:"0.5",loop:"",autoplay:""}})],1)])]),e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[t._m(0),e("div",{staticClass:"column is-offset-1"},[e("div",{staticClass:"at-grid",attrs:{"data-column":"2"}},t._l(t.team,(function(s){return e("div",{key:s.name,staticClass:"at-column"},[e("div",{staticClass:"at-user"},[e("div",{staticClass:"at-user__avatar"},[e("img",{attrs:{src:s.img}})]),e("div",{staticClass:"at-user__name"},[t._v(t._s(s.name))]),e("div",{staticClass:"at-user__title"},[t._v(t._s(s.title))])])])})),0)])])])])])])},A=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column"},[e("div",{staticClass:"subtitle"},[t._v(" We believe that cryptocurrencies should be convenient for everyone. We aim to make cryptocurrency investment/profit a hassle-free, one-click process. ")])])}],S={data(){return{team:[{name:"Aman Singh",title:"Founder, Lead Developer",img:"https://ipfs.io/ipfs/QmfK5JFYgT3BDEx4nT4yiG6WEHxS65GB3ae7ZVKP19TWno?filename=aman.PNG"},{name:"Madhav Poudel",title:"Frontend Developer",img:"https://ipfs.io/ipfs/QmYeag3Xbc2CP3kv5W5cmQszcfppRLLWtfNjtAwkfQ9tCJ?filename=madhav.PNG"}]}}},j=S,N=(e("1943"),Object(d["a"])(j,I,A,!1,null,"5364f8ad",null)),$=N.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/contact.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),t._m(0)])])])])])},W=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-offset-1"},[e("div",{staticClass:"subtitle has-text-centered"},[e("strong",[t._v("CONTACT US")])]),e("hr"),e("article",{staticClass:"message is-dark"},[e("div",{staticClass:"message-body"},[t._v("General : contact@thirm.com")])]),e("article",{staticClass:"message is-dark"},[e("div",{staticClass:"message-body"},[t._v("Developer : developer@thirm.com")])])])}],G={},L=Object(d["a"])(G,P,W,!1,null,null,null),Q=L.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/astro.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),e("div",{staticClass:"column is-offset-1"},t._l(t.collapses,(function(s,a){return e("b-collapse",{key:a,staticClass:"card",attrs:{animation:"slide",open:t.isOpen==a},on:{open:function(s){t.isOpen=a}},scopedSlots:t._u([{key:"trigger",fn:function(a){return e("div",{staticClass:"card-header",attrs:{role:"button"}},[e("p",{staticClass:"card-header-title"},[t._v(" "+t._s(s.title)+" ")]),e("a",{staticClass:"card-header-icon"},[e("b-icon",{attrs:{icon:a.open?"menu-down":"menu-up"}})],1)])}}],null,!0)},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v(" "+t._s(s.text)+" ")])])])})),1)])])])])},B=[],z={data(){return{isOpen:0,collapses:[{title:"THIRM Token",text:"THIRM Token is a governance/ownership tracking smart contract written on the ethereum blockchain."},{title:"THIRM Tokens Uses",text:"Thirm Tokens are your governance share in Thirm Protocol, all holders decide the future of Thirm VM."},{title:"THIRM Tokens Value",text:"THIRM holds no value, THIRM is only used to govern/operate/manage Thirm VM, it has no real world value."}]}}},K=z,F=Object(d["a"])(K,U,B,!1,null,null,null),q=F.exports,V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-6"},[e("lottie-player",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://thirm.com/animations/vote.json",background:"transparent",speed:"1",loop:"",autoplay:""}})],1),e("div",{staticClass:"column is-offset-1"},[e("div",{staticClass:"box"},[e("strong",[t._v(" Governance Platform")]),e("hr"),t._v(" Vote on every decision/proposal we make, using your THIRM tokens. "),e("hr"),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("a",{attrs:{href:"https://snapshot.page/#/thirm"}},[e("b-button",{attrs:{type:"is-primary is-light"}},[t._v("Vote On Proposals")])],1)]),e("div",{staticClass:"column"},[e("a",{attrs:{href:"https://snapshot.page/#/thirm/create"}},[e("b-button",{attrs:{type:"is-primary is-light"}},[t._v("Create Proposal ")])],1)]),e("div",{staticClass:"column"})])])])])])])])])},Z=[],J={},Y=Object(d["a"])(J,V,Z,!1,null,null,null),X=Y.exports;a["a"].use(p["a"]);var tt=new p["a"]({mode:"history",routes:[{path:"/",name:"index",component:D},{path:"/governance",name:"governance",component:X},{path:"/faq",name:"faq",component:q},{path:"/about",name:"about",component:$},{path:"/contact",name:"contact",component:Q}]}),st=e("289d"),et=(e("5abe"),e("67b0"));e("3294");a["a"].use(st["a"]),a["a"].use(et["a"]),a["a"].config.productionTip=!1,new a["a"]({router:tt,render:t=>t(u)}).$mount("#app")},6732:function(t,s,e){"use strict";e("930f")},"77a7":function(t,s,e){},"796d":function(t,s,e){t.exports=e.p+"img/uniswap.ddfacd75.png"},"7a25":function(t,s,e){"use strict";e("77a7")},"930f":function(t,s,e){},aa20:function(t,s,e){"use strict";e("d89c")},c6c8:function(t,s,e){t.exports=e.p+"img/etherscan.5b212e7f.png"},d06a:function(t,s,e){},d89c:function(t,s,e){}});
//# sourceMappingURL=app.c371ffd1.js.map
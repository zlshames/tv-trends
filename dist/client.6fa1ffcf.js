webpackJsonp([1,2],{151:function(t,e){},152:function(t,e){},153:function(t,e){},154:function(t,e){},155:function(t,e){},156:function(t,e){},165:function(t,e,s){s(156);var n=s(10)(s(87),s(175),null,null);t.exports=n.exports},166:function(t,e,s){s(153);var n=s(10)(s(88),s(172),"data-v-3b9a5b10",null);t.exports=n.exports},167:function(t,e,s){s(152);var n=s(10)(s(90),s(171),"data-v-0a757166",null);t.exports=n.exports},168:function(t,e,s){s(151);var n=s(10)(s(91),s(170),"data-v-044637dd",null);t.exports=n.exports},169:function(t,e,s){s(154);var n=s(10)(s(92),s(173),"data-v-3dbaae16",null);t.exports=n.exports},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("404 Page Not Found")]),t._v(" "),s("p",[t._v("Looks like you were trying to access a page that doesn't exist")])])}]}},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"panel"},[s("img",{staticClass:"icon",attrs:{src:"http://bundler.watch.aetnd.com/images/icons/icon-cable-provider.svg"}}),t._v(" "),s("h1",[t._v("Search for your favorite show!")]),t._v(" "),s("form",{staticClass:"search-box",on:{submit:function(e){e.preventDefault(),t.handleSearch(e)}}},[s("el-input",{attrs:{placeholder:"Enter title",icon:"search","on-icon-click":t.handleSearch},on:{click:t.handleSearch},model:{value:t.searchTxt,callback:function(e){t.searchTxt=e},expression:"searchTxt"}})],1)]),t._v(" "),s("div",{staticClass:"body-container"},[s("h2",[t._v("Top Shows")]),t._v(" "),t._l(t.results,function(e){return t.results.length>0?s("div",[s("tv-card",{attrs:{item:e,displayTrends:e.showTrends,toggleTrends:t.toggleTrends}})],1):t._e()})],2)])},staticRenderFns:[]}},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"}},[s("el-menu-item",{staticClass:"brand",attrs:{index:"1"},on:{click:function(e){t.$router.push({name:"home"})}}},[t._v("\n    TV Trends\n  ")]),t._v(" "),"home"!==t.$route.name?s("el-menu-item",{staticClass:"item-input",attrs:{index:"2"}},[s("form",{on:{submit:function(e){e.preventDefault(),t.handleSearch(e)}}},[s("el-input",{attrs:{placeholder:"Search",icon:"search","on-icon-click":t.handleSearch},on:{click:t.handleSearch},model:{value:t.searchTxt,callback:function(e){t.searchTxt=e},expression:"searchTxt"}})],1)]):t._e(),t._v(" "),s("el-menu-item",{staticClass:"item-input",staticStyle:{float:"right"},attrs:{index:"3"}},[s("a",{attrs:{href:"https://themoviedb.org",target:"_blank"}},[t._v("API")])])],1)},staticRenderFns:[]}},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-container"},[t._l(t.results,function(e){return t.results.length>0?s("div",[s("tv-card",{attrs:{item:e,displayTrends:e.showTrends,toggleTrends:t.toggleTrends}})],1):t._e()}),t._v(" "),0===t.results.length&&t.loading?s("p",{staticClass:"not-found"},[t._v("Loading...")]):t._e(),t._v(" "),0!==t.results.length||t.loading?t._e():s("p",{staticClass:"not-found"},[t._v("No results for your search")])],2)},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"header-content"},[s("div",{staticClass:"info-container"},[t.item.poster_path?s("img",{attrs:{src:"https://image.tmdb.org/t/p/original/"+t.item.poster_path}}):t._e(),t._v(" "),t.item.poster_path?t._e():s("img",{attrs:{src:"http://www.freeiconspng.com/uploads/no-image-icon-6.png"}}),t._v(" "),s("div",{staticClass:"info-list"},[s("span",{staticClass:"info-title"},[t._v(t._s(t.item.name))]),t._v(" "),s("div",{staticClass:"info-cols"},[s("div",{staticClass:"info-col"},[s("span",{staticClass:"info-misc"},[s("strong",[t._v("Rating:")]),t._v(" "+t._s(t.item.vote_average)+" / 10")]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[t._v("Year:")]),t._v(" "+t._s(t.getAirDate))]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[t._v("Seasons:")]),t._v(" "+t._s(t.item.number_of_seasons))]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[t._v("Episodes:")]),t._v(" "+t._s(t.item.number_of_episodes))])]),t._v(" "),s("div",{staticClass:"info-list"},[s("span",{staticClass:"info-misc"},[s("strong",[t._v("Total Votes:")]),t._v(" "+t._s(t.item.vote_count))]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[t._v("Current Popularity:")]),t._v(" "+t._s(t.item.popularity.toFixed(1))+"%")]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[t._v("Genre:")]),t._v(" "+t._s(t.item.genres[0]?t.item.genres[0].name:"N/A"))]),t._v(" "),s("span",{staticClass:"info-misc"},[s("strong",[s("a",{attrs:{href:t.item.homepage,target:"_blank"}},[t._v("Homepage")])])])])])])]),t._v(" "),s("div",{staticClass:"action-container"},[s("button",{staticClass:"el-button el-button--primary",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.toggleTrends(t.item.id)}}},[s("span",[t._v(t._s(t.displayTrends?"Hide Trends":"Show Trends"))])])])]),t._v(" "),t.displayTrends?s("div",{staticClass:"card-body",style:t.isMobile?{height:"500px"}:{height:"auto"}},["bySeason"===t.view&&t.chartData.rows.length>0?s("button",{staticClass:"el-button el-button--default",attrs:{type:"button"},on:{click:t.getDataByEpisode}},[t._v("\n      Load By Episode\n    ")]):t._e(),t._v(" "),"byEpisode"===t.view&&t.chartData.rows.length>0?s("button",{staticClass:"el-button el-button--default",attrs:{type:"button"},on:{click:t.getDataBySeason}},[t._v("\n      Load By Season\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"chart"},[t.chartData.rows.length>0?s("vue-chart",{attrs:{columns:t.chartData.columns,rows:t.chartData.rows,options:t.chartData.options}}):t._e()],1),t._v(" "),0!==t.chartData.rows.length||t.loading?t._e():s("p",[t._v("No trends available for this title")]),t._v(" "),0===t.chartData.rows.length&&t.loading?s("p",[t._v("Loading...")]):t._e()]):t._e()])},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navigation"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},179:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(s(63),s(62));s(64),n.a.$mount("#app")},180:function(t,e,s){t.exports=s.p+"static/media/element-icons.b02bdc1b.ttf"},181:function(t,e,s){t.exports=s.p+"static/media/element-icons.d2f69a92.woff"},61:function(t,e,s){s(155);var n=s(10)(s(89),s(174),"data-v-701adea4",null);t.exports=n.exports},62:function(t,e,s){"use strict";var n=s(96),a=s.n(n),r=s(3),i=s(165),o=s.n(i),c=s(93),u=s(137),l=s.n(u),h=s(150),d=(s.n(h),s(164)),p=s.n(d);s.d(e,"a",function(){return f}),r.default.use(l.a),r.default.use(p.a);var f=new r.default(a()({router:c.a},o.a))},63:function(t,e,s){"use strict";var n=s(159),a=s.n(n);window.Promise=window.Promise||a.a},64:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(158),a=s.n(n);a.a.install({onUpdateReady:function(){console.log("update ready"),a.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},87:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(166),a=s.n(n);e.default={components:{Navigation:a.a}}},88:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeIndex:"1",searchTxt:""}},methods:{handleSearch:function(){this.searchTxt.length>3&&this.$router.push({name:"search",params:{title:this.searchTxt}})}}}},89:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(22),a=s.n(n),r=s(21),i=s.n(r);e.default={props:["item","displayTrends","toggleTrends"],data:function(){return{view:"bySeason",loading:!1,chartData:{columns:[{type:"string",label:"Episode"},{type:"number",label:"Rating"}],rows:[],options:{legend:{position:"none"},title:"Rating by Episode",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:this.isMobile?325:600,height:400}}}},watch:{displayTrends:function(){this.displayTrends&&this.getDataBySeason()}},computed:{getAirDate:function(){return this.item.first_air_date?this.item.first_air_date.split("-")[0]:"N/A"},isMobile:function(){return!(window.innerWidth>786)}},methods:{fetchEpisodes:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,s,n,r,i,o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.item.number_of_seasons,s=[],n=0;case 3:if(!(n<e)){t.next=16;break}return r="https://api.themoviedb.org/3/tv/"+this.item.id+"/season/"+(n+1)+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=7,fetch(r);case 7:if(i=t.sent,!i.ok){t.next=13;break}return t.next=11,i.json();case 11:for(o=t.sent,c=0;c<o.episodes.length;c++)s.push(o.episodes[c]);case 13:n++,t.next=3;break;case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}},t,this)}));return t}(),getDataByEpisode:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,s,n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.view="byEpisode",t.next=4,this.fetchEpisodes();case 4:for(e=t.sent,s={columns:[{type:"string",label:"Episode"},{type:"number",label:"Rating"}],rows:[],options:{legend:{position:"none"},title:"Rating by Episode",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:this.isMobile?325:600,height:400}},n=0;n<e.length;n++)(r=Number(e[n].vote_average))>0&&s.rows.push(["S"+e[n].season_number+"E"+e[n].episode_number,r]);this.chartData=s,this.loading=!1;case 9:case"end":return t.stop()}},t,this)}));return t}(),getDataBySeason:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,s,n,r,i,o,c,u,l,h;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.view="bySeason",t.next=4,this.fetchEpisodes();case 4:for(e=t.sent,s={columns:[{type:"string",label:"Episode"}],rows:[],options:{title:"Rating by Season",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:this.isMobile?325:600,height:400}},n=0;n<this.item.number_of_seasons;n++)s.columns.push({type:"number",label:(this.isMobile?"S":"Season ")+(n+1)});for(r=[],i=0;i<e.length;i++)r.length<e[i].season_number&&r.push([]),r[e[i].season_number-1].push(e[i]);for(o=0,c=0;c<r.length;c++)r[c].length>o&&(o=r[c].length);for(u=0;u<o;u++){for(l=["Episode "+(u+1)],h=0;h<r.length;h++)r[h][u]?l.push(r[h][u].vote_average):l.push(NaN);s.rows.push(l)}this.chartData=s,this.loading=!1;case 14:case"end":return t.stop()}},t,this)}));return t}()}}},90:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(22),a=s.n(n),r=s(21),i=s.n(r),o=s(61),c=s.n(o);e.default={components:{TvCard:c.a},data:function(){return{searchTxt:"",results:[]}},mounted:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchShows();case 3:e=t.sent,this.results=e,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),methods:{handleSearch:function(){this.searchTxt.length>3&&this.$router.push({name:"search",params:{title:this.searchTxt}})},fetchShows:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,s,n,r,i,o,c,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/discover/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false",t.next=3,fetch(e);case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,r=[],i=0;case 9:if(!(i<5)){t.next=22;break}return o="https://api.themoviedb.org/3/tv/"+n.results[i].id+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=13,fetch(o);case 13:return c=t.sent,t.next=16,c.json();case 16:u=t.sent,u.showTrends=!1,r.push(u);case 19:i++,t.next=9;break;case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}},t,this)}));return t}(),toggleTrends:function(t){for(var e=0;e<this.results.length;e++)this.results[e].id===t?this.results[e].showTrends=!this.results[e].showTrends:this.results[e].showTrends=!1}}}},91:function(t,e){},92:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(22),a=s.n(n),r=s(21),i=s.n(r),o=s(61),c=s.n(o);e.default={components:{TvCard:c.a},data:function(){return{results:[],loading:!1}},watch:{$route:function(t){this.handleSearch()}},mounted:function(){this.handleSearch()},methods:{handleSearch:function(){function t(t){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(e){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.results=[],t.prev=2,s=this.$route.params.title,t.next=6,this.fetchSearchResults(s);case 6:n=t.sent,this.results=n,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this,[[2,10]])}));return t}(),fetchSearchResults:function(){function t(t){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(e){var s,n,r,i,o,c,u,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s="https://api.themoviedb.org/3/search/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&query="+e+"&page=1",t.next=3,fetch(s);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,i=[],o=0;case 9:if(!(o<r.results.length)){t.next=22;break}return c="https://api.themoviedb.org/3/tv/"+r.results[o].id+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=13,fetch(c);case 13:return u=t.sent,t.next=16,u.json();case 16:l=t.sent,l.showTrends=!1,i.push(l);case 19:o++,t.next=9;break;case 22:return t.abrupt("return",i);case 23:case"end":return t.stop()}},t,this)}));return t}(),toggleTrends:function(t){for(var e=0;e<this.results.length;e++)this.results[e].id===t?this.results[e].showTrends=!this.results[e].showTrends:this.results[e].showTrends=!1}}}},93:function(t,e,s){"use strict";var n=s(3),a=s(176),r=s(167),i=s.n(r),o=s(169),c=s.n(o),u=s(168),l=s.n(u);n.default.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",component:i.a,name:"home"},{path:"/search/:title",component:c.a,name:"search"},{path:"*",component:l.a,name:"not-found"}]})}},[179]);
//# sourceMappingURL=client.6fa1ffcf.js.map
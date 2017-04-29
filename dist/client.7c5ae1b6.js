webpackJsonp([1,2],{151:function(t,e){},152:function(t,e){},153:function(t,e){},154:function(t,e){},155:function(t,e){},156:function(t,e){},165:function(t,e,n){n(156);var s=n(10)(n(87),n(175),null,null);t.exports=s.exports},166:function(t,e,n){n(153);var s=n(10)(n(88),n(172),"data-v-3b9a5b10",null);t.exports=s.exports},167:function(t,e,n){n(152);var s=n(10)(n(90),n(171),"data-v-0a757166",null);t.exports=s.exports},168:function(t,e,n){n(151);var s=n(10)(n(91),n(170),"data-v-044637dd",null);t.exports=s.exports},169:function(t,e,n){n(154);var s=n(10)(n(92),n(173),"data-v-3dbaae16",null);t.exports=s.exports},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("404 Page Not Found")]),t._v(" "),n("p",[t._v("Looks like you were trying to access a page that doesn't exist")])])}]}},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"panel"},[n("img",{staticClass:"icon",attrs:{src:"http://bundler.watch.aetnd.com/images/icons/icon-cable-provider.svg"}}),t._v(" "),n("h1",[t._v("Search for your favorite show!")]),t._v(" "),n("form",{staticClass:"search-box",on:{submit:function(e){e.preventDefault(),t.handleSearch(e)}}},[n("el-input",{attrs:{placeholder:"Enter title",icon:"search","on-icon-click":t.handleSearch},on:{click:t.handleSearch},model:{value:t.searchTxt,callback:function(e){t.searchTxt=e},expression:"searchTxt"}})],1)]),t._v(" "),n("div",{staticClass:"body-container"},[n("h2",[t._v("Top Shows")]),t._v(" "),t._l(t.results,function(e){return t.results.length>0?n("div",[n("tv-card",{attrs:{item:e,displayTrends:e.showTrends,toggleTrends:t.toggleTrends}})],1):t._e()})],2)])},staticRenderFns:[]}},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"}},[n("el-menu-item",{staticClass:"brand",attrs:{index:"1"},on:{click:function(e){t.$router.push({name:"home"})}}},[t._v("\n    TV Trends\n  ")]),t._v(" "),"home"!==t.$route.name?n("el-menu-item",{staticClass:"item-input",attrs:{index:"2"}},[n("form",{on:{submit:function(e){e.preventDefault(),t.handleSearch(e)}}},[n("el-input",{attrs:{placeholder:"Search",icon:"search","on-icon-click":t.handleSearch},on:{click:t.handleSearch},model:{value:t.searchTxt,callback:function(e){t.searchTxt=e},expression:"searchTxt"}})],1)]):t._e(),t._v(" "),n("el-menu-item",{staticClass:"item-input",staticStyle:{float:"right"},attrs:{index:"3"}},[n("a",{attrs:{href:"https://themoviedb.org",target:"_blank"}},[t._v("API")])])],1)},staticRenderFns:[]}},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[t._l(t.results,function(e){return t.results.length>0?n("div",[n("tv-card",{attrs:{item:e,displayTrends:e.showTrends,toggleTrends:t.toggleTrends}})],1):t._e()}),t._v(" "),0===t.results.length&&t.loading?n("p",{staticClass:"not-found"},[t._v("Loading...")]):t._e(),t._v(" "),0!==t.results.length||t.loading?t._e():n("p",{staticClass:"not-found"},[t._v("No results for your search")])],2)},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"info-container"},[t.item.poster_path?n("img",{attrs:{src:"https://image.tmdb.org/t/p/original/"+t.item.poster_path}}):t._e(),t._v(" "),t.item.poster_path?t._e():n("img",{attrs:{src:"http://www.freeiconspng.com/uploads/no-image-icon-6.png"}}),t._v(" "),n("div",{staticClass:"info-list"},[n("span",{staticClass:"info-title"},[t._v(t._s(t.item.name))]),t._v(" "),n("div",{staticClass:"info-cols"},[n("div",{staticClass:"info-col"},[n("span",{staticClass:"info-misc"},[n("strong",[t._v("Rating:")]),t._v(" "+t._s(t.item.vote_average)+" / 10")]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[t._v("Year:")]),t._v(" "+t._s(t.getAirDate))]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[t._v("Seasons:")]),t._v(" "+t._s(t.item.number_of_seasons))]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[t._v("Episodes:")]),t._v(" "+t._s(t.item.number_of_episodes))])]),t._v(" "),n("div",{staticClass:"info-list"},[n("span",{staticClass:"info-misc"},[n("strong",[t._v("Total Votes:")]),t._v(" "+t._s(t.item.vote_count))]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[t._v("Current Popularity:")]),t._v(" "+t._s(t.item.popularity.toFixed(1))+"%")]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[t._v("Genre:")]),t._v(" "+t._s(t.item.genres[0]?t.item.genres[0].name:"N/A"))]),t._v(" "),n("span",{staticClass:"info-misc"},[n("strong",[n("a",{attrs:{href:t.item.homepage,target:"_blank"}},[t._v("Homepage")])])])])])])]),t._v(" "),n("div",{staticClass:"action-container"},[n("button",{staticClass:"el-button el-button--primary",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.toggleTrends(t.item.id)}}},[n("span",[t._v(t._s(t.displayTrends?"Hide Trends":"Show Trends"))])])])]),t._v(" "),t.displayTrends?n("div",{staticClass:"card-body"},["bySeason"===t.view&&t.chartData.rows.length>0?n("button",{staticClass:"el-button el-button--default",attrs:{type:"button"},on:{click:t.getDataByEpisode}},[t._v("\n      Load By Episode\n    ")]):t._e(),t._v(" "),"byEpisode"===t.view&&t.chartData.rows.length>0?n("button",{staticClass:"el-button el-button--default",attrs:{type:"button"},on:{click:t.getDataBySeason}},[t._v("\n      Load By Season\n    ")]):t._e(),t._v(" "),t.chartData.rows.length>0?n("vue-chart",{staticClass:"chart",attrs:{columns:t.chartData.columns,rows:t.chartData.rows,options:t.chartData.options}}):t._e(),t._v(" "),0!==t.chartData.rows.length||t.loading?t._e():n("p",[t._v("No trends available for this title")]),t._v(" "),0===t.chartData.rows.length&&t.loading?n("p",[t._v("Loading...")]):t._e()],1):t._e()])},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navigation"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(n(63),n(62));n(64),s.a.$mount("#app")},180:function(t,e,n){t.exports=n.p+"static/media/element-icons.b02bdc1b.ttf"},181:function(t,e,n){t.exports=n.p+"static/media/element-icons.d2f69a92.woff"},61:function(t,e,n){n(155);var s=n(10)(n(89),n(174),"data-v-701adea4",null);t.exports=s.exports},62:function(t,e,n){"use strict";var s=n(96),a=n.n(s),r=n(3),i=n(165),o=n.n(i),c=n(93),u=n(137),l=n.n(u),h=n(150),d=(n.n(h),n(164)),p=n.n(d);n.d(e,"a",function(){return f}),r.default.use(l.a),r.default.use(p.a);var f=new r.default(a()({router:c.a},o.a))},63:function(t,e,n){"use strict";var s=n(159),a=n.n(s);window.Promise=window.Promise||a.a},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(158),a=n.n(s);a.a.install({onUpdateReady:function(){console.log("update ready"),a.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},87:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(166),a=n.n(s);e.default={components:{Navigation:a.a}}},88:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeIndex:"1",searchTxt:""}},methods:{handleSearch:function(){this.searchTxt.length>3&&this.$router.push({name:"search",params:{title:this.searchTxt}})}}}},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(22),a=n.n(s),r=n(21),i=n.n(r);e.default={props:["item","displayTrends","toggleTrends"],data:function(){return{view:"bySeason",loading:!1,chartData:{columns:[{type:"string",label:"Episode"},{type:"number",label:"Rating"}],rows:[],options:{legend:{position:"none"},title:"Rating by Episode",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:600,height:400}}}},watch:{displayTrends:function(){this.displayTrends&&this.getDataBySeason()}},computed:{getAirDate:function(){return this.item.first_air_date?this.item.first_air_date.split("-")[0]:"N/A"}},methods:{fetchEpisodes:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,n,s,r,i,o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.item.number_of_seasons,n=[],s=0;case 3:if(!(s<e)){t.next=16;break}return r="https://api.themoviedb.org/3/tv/"+this.item.id+"/season/"+(s+1)+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=7,fetch(r);case 7:if(i=t.sent,!i.ok){t.next=13;break}return t.next=11,i.json();case 11:for(o=t.sent,c=0;c<o.episodes.length;c++)n.push(o.episodes[c]);case 13:s++,t.next=3;break;case 16:return t.abrupt("return",n);case 17:case"end":return t.stop()}},t,this)}));return t}(),getDataByEpisode:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,n,s,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.view="byEpisode",t.next=4,this.fetchEpisodes();case 4:for(e=t.sent,n={columns:[{type:"string",label:"Episode"},{type:"number",label:"Rating"}],rows:[],options:{legend:{position:"none"},title:"Rating by Episode",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:600,height:400}},s=0;s<e.length;s++)(r=Number(e[s].vote_average))>0&&n.rows.push(["S"+e[s].season_number+"E"+e[s].episode_number,r]);this.chartData=n,this.loading=!1;case 9:case"end":return t.stop()}},t,this)}));return t}(),getDataBySeason:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,n,s,r,i,o,c,u,l,h;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.view="bySeason",t.next=4,this.fetchEpisodes();case 4:for(e=t.sent,n={columns:[{type:"string",label:"Episode"}],rows:[],options:{title:"Rating by Season",hAxis:{title:"Episode"},vAxis:{title:"Rating"},width:window.innerWidth>786?600:350,height:400,backgroundColor:"transparent"}},s=0;s<this.item.number_of_seasons;s++)n.columns.push({type:"number",label:"Season "+(s+1)});for(r=[],i=0;i<e.length;i++)r.length<e[i].season_number&&r.push([]),r[e[i].season_number-1].push(e[i]);for(o=0,c=0;c<r.length;c++)r[c].length>o&&(o=r[c].length);for(u=0;u<o;u++){for(l=["Episode "+(u+1)],h=0;h<r.length;h++)r[h][u]?l.push(r[h][u].vote_average):l.push(NaN);n.rows.push(l)}this.chartData=n,this.loading=!1;case 14:case"end":return t.stop()}},t,this)}));return t}()}}},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(22),a=n.n(s),r=n(21),i=n.n(r),o=n(61),c=n.n(o);e.default={components:{TvCard:c.a},data:function(){return{searchTxt:"",results:[]}},mounted:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetchShows();case 3:e=t.sent,this.results=e,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),methods:{handleSearch:function(){this.searchTxt.length>3&&this.$router.push({name:"search",params:{title:this.searchTxt}})},fetchShows:function(){function t(){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(){var e,n,s,r,i,o,c,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/discover/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,r=[],i=0;case 9:if(!(i<5)){t.next=22;break}return o="https://api.themoviedb.org/3/tv/"+s.results[i].id+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=13,fetch(o);case 13:return c=t.sent,t.next=16,c.json();case 16:u=t.sent,u.showTrends=!1,r.push(u);case 19:i++,t.next=9;break;case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}},t,this)}));return t}(),toggleTrends:function(t){for(var e=0;e<this.results.length;e++)this.results[e].id===t?this.results[e].showTrends=!this.results[e].showTrends:this.results[e].showTrends=!1}}}},91:function(t,e){},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(22),a=n.n(s),r=n(21),i=n.n(r),o=n(61),c=n.n(o);e.default={components:{TvCard:c.a},data:function(){return{results:[],loading:!1}},watch:{$route:function(t){this.handleSearch()}},mounted:function(){this.handleSearch()},methods:{handleSearch:function(){function t(t){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(e){var n,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.results=[],t.prev=2,n=this.$route.params.title,t.next=6,this.fetchSearchResults(n);case 6:s=t.sent,this.results=s,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:this.loading=!1;case 14:case"end":return t.stop()}},t,this,[[2,10]])}));return t}(),fetchSearchResults:function(){function t(t){return e.apply(this,arguments)}var e=i()(a.a.mark(function t(e){var n,s,r,i,o,c,u,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/tv?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US&query="+e+"&page=1",t.next=3,fetch(n);case 3:return s=t.sent,t.next=6,s.json();case 6:r=t.sent,i=[],o=0;case 9:if(!(o<r.results.length)){t.next=22;break}return c="https://api.themoviedb.org/3/tv/"+r.results[o].id+"?api_key=b366cab222dc630764c88a1c3bfe41ab&language=en-US",t.next=13,fetch(c);case 13:return u=t.sent,t.next=16,u.json();case 16:l=t.sent,l.showTrends=!1,i.push(l);case 19:o++,t.next=9;break;case 22:return t.abrupt("return",i);case 23:case"end":return t.stop()}},t,this)}));return t}(),toggleTrends:function(t){for(var e=0;e<this.results.length;e++)this.results[e].id===t?this.results[e].showTrends=!this.results[e].showTrends:this.results[e].showTrends=!1}}}},93:function(t,e,n){"use strict";var s=n(3),a=n(176),r=n(167),i=n.n(r),o=n(169),c=n.n(o),u=n(168),l=n.n(u);s.default.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",component:i.a,name:"home"},{path:"/search/:title",component:c.a,name:"search"},{path:"*",component:l.a,name:"not-found"}]})}},[179]);
//# sourceMappingURL=client.7c5ae1b6.js.map
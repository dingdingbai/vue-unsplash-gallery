webpackJsonp([0],[,,function(t,n,o){"use strict";o.d(n,"a",function(){return r});var e=o(4),i=o(73),s=o.n(i),a=o(41),r=(o.n(a),o(55),o(54),new e.a);e.a.use(s.a)},function(t,n,o){function e(t){o(44)}var i=o(1)(o(31),o(65),e,null,null);t.exports=i.exports},,,,,,,,function(t,n,o){"use strict";function e(){for(var t="#",n=0;n<6;n++)t+="789ABCDF"[Math.floor(6*Math.random())];return t}n.a=e},function(t,n,o){function e(t){o(48),o(49)}var i=o(1)(o(32),o(69),e,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(4),i={};n.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(e.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(e.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,o=t.height;return Math.max(n,o)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,o=0;this.$children.forEach(function(t){n=Math.max(n,t.width),o=Math.max(o,t.height)}),this.childrenWidth=n,this.childrenHeight=o,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(o-t.height)/2})}},register:function(t){for(var n in t){var o=t[n];o.paths||(o.paths=[]),o.d&&o.paths.push({d:o.d}),o.polygons||(o.polygons=[]),o.points&&o.polygons.push({points:o.points}),i[n]=o}},icons:i}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(13),i=o.n(e),s=o(62),a=o.n(s),r=o(61),c=o.n(r),l=o(58),u=o.n(l),h=o(57),d=o.n(h),p=o(2),f=o(60),_=o.n(f);n.default={data:function(){return{page:1,layout:1,isLoading:!0,batch:1,allPhotos:null,zoomInPhotoURL:"",LIST_LAYOUT:1,GRID_LAYOUT:2}},methods:{fetchData:function(){var t=this;return i.a.get("https://api.unsplash.com/photos",{params:{page:this.page++,per_page:10,client_id:"47da73da2b740608b32dd1d201e72606000e8db1df885e6f2c72843cddca23a8"}}).then(function(n){null==t.allPhotos?t.allPhotos=n.data:t.allPhotos=t.allPhotos.concat(n.data),t.isLoading=!1})},zoomInPhoto:function(t){this.zoomInPhotoURL=t}},computed:{photos:function(){return null==this.allPhotos?null:this.allPhotos.slice(0,10*this.batch)}},created:function(){var t=this;p.a.$on("zoomIn",function(n){t.zoomInPhotoURL=n}),p.a.$on("nextBatch",function(){var n=t.allPhotos.length;10*t.batch===n?(t.isLoading=!0,t.fetchData().then(function(){t.batch++})):t.batch++}),this.fetchData()},components:{PhotoList:a.a,PhotoGrid:c.a,IconList:u.a,IconGrid:d.a,Loading:_.a}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(3),i=o.n(e),s=o(11),a=o(2);n.default={props:{photo:{type:Object,required:!0}},methods:{zoomIn:function(){a.a.$emit("zoomIn",this.photo.urls.full)}},computed:{photoStyle:function(){return{backgroundImage:"url("+this.photo.urls.small+")"}}},mounted:function(){var t=this.$el.clientWidth,n=this.photo.height/this.photo.width*t;this.$el.style.height=n+"px",this.$el.style.backgroundColor=o.i(s.a)()},components:{Icon:i.a}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{classObj:Object}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{classObj:Object}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(3),i=o.n(e),s=o(11),a=o(2);n.default={props:{photo:{type:Object,required:!0}},methods:{zoomIn:function(){a.a.$emit("zoomIn",this.photo.urls.full)}},mounted:function(){var t=this.$el.clientWidth,n=this.photo.height/this.photo.width*t;this.$el.style.height=n+"px",this.$el.style.backgroundColor=o.i(s.a)()},components:{Icon:i.a}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(56),i=o.n(e),s=o(2);n.default={props:{photos:{type:Array,required:!0}},data:function(){return{columnNumber:3}},methods:{columns:function(t){for(var n=[],o=0;o<t;o++)n.push(this.photos.filter(function(n,e){return e%t===o}));return n},nextBatch:function(){s.a.$emit("nextBatch")}},components:{GridItem:i.a}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(59),i=o.n(e),s=o(2);n.default={props:{photos:{type:Array,required:!0}},data:function(){return{text:""}},methods:{nextBatch:function(){s.a.$emit("nextBatch")}},components:{ListItem:i.a}}},function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(4),i=o(12),s=o.n(i);o(2);e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,,function(t,n,o){function e(t){o(42)}var i=o(1)(o(33),o(63),e,"data-v-114edd31",null);t.exports=i.exports},function(t,n,o){function e(t){o(45)}var i=o(1)(o(34),o(66),e,"data-v-4fec9411",null);t.exports=i.exports},function(t,n,o){function e(t){o(50)}var i=o(1)(o(35),o(70),e,"data-v-e5a7652e",null);t.exports=i.exports},function(t,n,o){function e(t){o(51)}var i=o(1)(o(36),o(71),e,"data-v-ebb58a4e",null);t.exports=i.exports},function(t,n,o){function e(t){o(47)}var i=o(1)(o(37),o(68),e,"data-v-6969cbf3",null);t.exports=i.exports},function(t,n,o){function e(t){o(46)}var i=o(1)(o(38),o(67),e,"data-v-56492ccc",null);t.exports=i.exports},function(t,n,o){function e(t){o(43)}var i=o(1)(o(39),o(64),e,null,null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"grid-item"},[o("div",{staticClass:"grid-item__photo",style:t.photoStyle}),o("div",{staticClass:"grid-item__hover",on:{click:t.zoomIn}}),o("div",{staticClass:"grid-item__info"},[o("div",{staticClass:"grid-item__info-likes"},[o("icon",{attrs:{name:"heart"}}),o("span",[t._v(t._s(t.photo.likes))])],1),o("div",{staticClass:"grid-item__info-user"},[o("img",{attrs:{src:t.photo.user.profile_image.small}}),o("a",{attrs:{href:t.photo.user.links.html}},[t._v(t._s(t.photo.user.name))])]),o("a",{staticClass:"grid-item__info-download",attrs:{href:t.photo.urls.raw,download:"download"}},[o("icon",{attrs:{name:"arrow-down"}})],1)])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"photo-list"},[t._l(t.photos.slice(0,-2),function(t){return o("list-item",{key:t.id,attrs:{photo:t}})}),o("v-waypoint",{on:{"waypoint-in":t.nextBatch}}),t._l(t.photos.slice(-2),function(t){return o("list-item",{key:t.id,attrs:{photo:t}})})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n){return o("path",t._b({},"path",n))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n){return o("polygon",t._b({},"polygon",n))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[o("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("svg",{staticClass:"gallery__layout__btn",class:t.classObj,attrs:{viewBox:"0 0 32 32",width:"32",height:"32"}},[o("path",{attrs:{d:"M0 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10c-1.104 0-2 0.894-2 2zM2 18c-1.104 0-2 0.894-2 2v10c0 1.106 0.896 2 2 2h10c1.104 0 2-0.894 2-2v-10c0-1.106-0.896-2-2-2h-10zM20 18c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10zM20 0c-1.106 0-2 0.894-2 2v10c0 1.106 0.894 2 2 2h10c1.106 0 2-0.894 2-2v-10c0-1.106-0.894-2-2-2h-10z"}})])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"photo-grid"},t._l(t.columns(3),function(n,e){return o("div",{staticClass:"photo-grid__column"},[t._l(n.slice(0,-2),function(t){return o("grid-item",{key:t.id,attrs:{photo:t}})}),e===t.columnNumber-1?o("v-waypoint",{on:{"waypoint-in":t.nextBatch}}):t._e(),t._l(n.slice(-2),function(t){return o("grid-item",{key:t.id,attrs:{photo:t}})})],2)}))},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[t._m(0),o("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.zoomInPhotoURL,expression:"zoomInPhotoURL !== ''"}],staticClass:"gallery__zoom-in",style:{backgroundImage:"url("+t.zoomInPhotoURL+")"},on:{click:function(n){t.zoomInPhotoURL=""}}}),o("div",{staticClass:"gallery__layout"},[o("icon-list",{staticClass:"gallery__layout__btn",attrs:{classObj:{"gallery__layout__btn--active":t.layout===t.LIST_LAYOUT}},nativeOn:{click:function(n){t.layout=t.LIST_LAYOUT}}}),o("icon-grid",{staticClass:"gallery__layout__btn",attrs:{classObj:{"gallery__layout__btn--active":t.layout===t.GRID_LAYOUT}},nativeOn:{click:function(n){t.layout=t.GRID_LAYOUT}}})],1),t.photos?[t.layout===t.LIST_LAYOUT?o("photo-list",{attrs:{photos:t.photos,isLoading:t.isLoading}}):t._e(),t.layout===t.GRID_LAYOUT?o("photo-grid",{attrs:{photos:t.photos}}):t._e()]:t._e(),t.isLoading?o("loading"):t._e()],2)},staticRenderFns:[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"gallery__header"},[o("h1",[t._v("Unsplash Gallery")]),o("p",[o("span",[t._v("Beautiful,free photos.")]),o("br"),o("span",[t._v("Gifted by the world's most generous community of photographers. 🎁")])])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("svg",{staticClass:"gallery__layout__btn",class:t.classObj,attrs:{viewBox:"0 0 32 32",width:"32",height:"32"}},[o("path",{attrs:{d:"M30 14c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m0 18c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"}})])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"list-item"},[o("div",{staticClass:"list-item__photo",style:{backgroundImage:"url("+t.photo.urls.regular+")"},on:{click:t.zoomIn}}),o("div",{staticClass:"list-item__info"},[o("div",{staticClass:"list-item__info-likes"},[o("icon",{attrs:{name:"heart"}}),o("span",[t._v(t._s(t.photo.likes))])],1),o("div",{staticClass:"list-item__info-user"},[o("img",{attrs:{src:t.photo.user.profile_image.small}}),o("a",{attrs:{href:t.photo.user.links.html}},[t._v(t._s(t.photo.user.name))])]),o("a",{staticClass:"list-item__info-download",attrs:{href:t.photo.urls.raw,download:"download"}},[t._v("Download")])])])},staticRenderFns:[]}}],[40]);
//# sourceMappingURL=app.87d3bcd6e40f78be3e20.js.map
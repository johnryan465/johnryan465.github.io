(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("9a975c92",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TagComponent",props:{tag:{type:Object,required:!0}},data:function(){return{vtag:this.tag}}}),l=(n(360),n(48)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-wrapper"},[e("NuxtLink",{staticClass:"tag-link",attrs:{to:{name:"tags-slug",params:{slug:this.tag.slug}}}},[e("span",{staticClass:"tag",style:{"background-color":this.tag.colour}},[this._v("\n      "+this._s(this.tag.name)+"\n    ")])])],1)}),[],!1,null,"565772c6",null);e.default=component.exports},360:function(t,e,n){"use strict";n(358)},361:function(t,e,n){(e=n(12)(!1)).push([t.i,".tag[data-v-565772c6]{box-sizing:border-box;padding:3px;border-radius:5px;border-style:solid;border-width:1px;color:#fff}.tag-link[data-v-565772c6]{text-decoration:none}.tag-wrapper[data-v-565772c6]{display:inline-block;margin:10px}",""]),t.exports=e},362:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TagsComponent",props:{tags:{type:Array,required:!0}},data:function(){return{vtags:this.tags}}}),l=n(48),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",this._l(this.tags,(function(t){return e("tag-component",{key:t.slug,attrs:{tag:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagComponent:n(359).default})},363:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"ArticleList",props:{articles:Array}}),l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.articles,(function(article){return n("div",{key:article.slug},[n("NuxtLink",{attrs:{to:{name:article.document.dir.substring(1)+"-slug",params:{slug:article.slug}}}},[n("div",[n("h2",{staticClass:"title"},[t._v(t._s(article.title))])])]),t._v(" "),n("p",[t._v("📅"+t._s(article.date.toDateString()))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("div",[n("tags-component",{attrs:{tags:article.tags}})],1),t._v(" "),n("hr")],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagsComponent:n(362).default})},386:function(t,e,n){"use strict";n.r(e);n(69);var r=n(14),l=n(1),o=n(234),c=l.a.extend({layout:"default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,Object(o.default)(n,n("projects",r.slug));case 3:return l=e.sent,e.abrupt("return",{projects:l});case 5:case"end":return e.stop()}}),e)})))()}}),d=n(48),f=n(77),v=n.n(f),h=n(351),m=n(357),_=n(353),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",[e("h1",{staticClass:"title"},[this._v("Projects")]),this._v(" "),e("hr"),this._v(" "),e("article-list",{attrs:{articles:this.projects}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ArticleList:n(363).default}),v()(component,{VCol:h.a,VContainer:m.a,VRow:_.a})}}]);
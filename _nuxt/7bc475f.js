(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{359:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0dc9a846",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TagComponent",props:{tag:{type:Object,required:!0}},data:function(){return{vtag:this.tag}}}),l=(n(361),n(48)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag-wrapper"},[e("NuxtLink",{staticClass:"tag-link",style:{color:this.tag.colour},attrs:{to:{name:"tags-slug",params:{slug:this.tag.slug}}}},[e("span",{staticClass:"tag",style:{"border-color":this.tag.colour}},[this._v("\n      "+this._s(this.tag.name)+"\n    ")])])],1)}),[],!1,null,"1de46b0d",null);e.default=component.exports},361:function(t,e,n){"use strict";n(359)},362:function(t,e,n){(e=n(12)(!1)).push([t.i,".tag[data-v-1de46b0d]{box-sizing:border-box;padding:3px;border-radius:5px;border-style:solid;border-width:1px;background-color:#d3d3d3}.tag-link[data-v-1de46b0d]{text-decoration:none}.tag-wrapper[data-v-1de46b0d]{display:inline-block;margin:10px}",""]),t.exports=e},364:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TagsComponent",props:{tags:{type:Array,required:!0}},data:function(){return{vtags:this.tags}}}),l=n(48),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",this._l(this.tags,(function(t){return e("tag-component",{key:t.slug,attrs:{tag:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagComponent:n(360).default})},372:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"ArticleList",props:{articles:Array}}),l=n(48),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.articles,(function(article){return n("div",{key:article.slug},[n("NuxtLink",{attrs:{to:{name:"posts-slug",params:{slug:article.slug}}}},[n("div",[n("h2",{staticClass:"title"},[t._v(t._s(article.title))])])]),t._v(" "),n("p",[t._v("📅"+t._s(article.date.toDateString()))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("div",[n("tags-component",{attrs:{tags:article.tags}})],1),t._v(" "),n("hr")],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagsComponent:n(364).default})},473:function(t,e,n){"use strict";n.r(e);n(69);var r=n(14),l=n(1),o=n(372),c=n(235),d=l.a.extend({components:{ArticleList:o.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,Object(c.default)(n,n("articles").where({tags:{$contains:[r.slug]}}));case 3:return l=e.sent,e.next=6,n("tags",r.slug).fetch();case 6:return e.sent,e.abrupt("return",{articles:l});case 8:case"end":return e.stop()}}),e)})))()}}),f=n(48),component=Object(f.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("article-list",{attrs:{articles:this.articles}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(372).default})}}]);
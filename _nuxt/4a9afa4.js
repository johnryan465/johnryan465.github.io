(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"TagComponent",props:{tag:{type:Object,required:!0}},data:function(){return{vtag:this.tag}}}),l=n(48),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{attrs:{to:{name:"tags-slug",params:{slug:this.tag.slug}}}},[e("p",{style:{color:this.tag.colour}},[this._v(this._s(this.tag.name))])])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3a603722",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n.r(e);var r=n(1),l=n(359),o=r.a.extend({components:{TagComponent:l.default},name:"ArticleComponent",props:{article:{type:Object,required:!0}}}),c=(n(373),n(48)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v(t._s(t.article.document.title))]),t._v(" "),t._l(t.article.tags,(function(t){return n("div",{key:t.slug},[n("tag-component",{attrs:{tag:t}})],1)})),t._v(" "),n("nuxt-content",{attrs:{document:t.article.document}}),t._v(" "),n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css",integrity:"sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw==",crossorigin:"anonymous"}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagComponent:n(359).default})},373:function(t,e,n){"use strict";n(363)},374:function(t,e,n){(e=n(12)(!1)).push([t.i,".nuxt-content h1{text-align:left}.nuxt-content h2{text-align:left;font-weight:700;font-size:28px}.nuxt-content h3{text-align:left;font-weight:700;font-size:22px}.nuxt-content p{text-align:left}.math{text-align:center}",""]),t.exports=e},467:function(t,e,n){"use strict";n.r(e);n(69);var r=n(14),l=n(1),o=n(364),c=n(235),f=l.a.extend({components:{ArticleComponent:o.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,e.next=3,Object(c.default)(r,r("articles",n.slug));case 3:return l=e.sent,article=l[0],e.abrupt("return",{article:article});case 6:case"end":return e.stop()}}),e)})))()}}),m=n(48),component=Object(m.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("article-component",{attrs:{article:this.article}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleComponent:n(364).default})}}]);
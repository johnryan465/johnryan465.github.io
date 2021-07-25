<template>
  <article class="p-3 container mx-auto">
    <h1 class="font-bold">{{ article.document.title }}</h1>
    <p>📅{{ article.date.toDateString() }}</p>
    <tags-component :tags="article.tags"></tags-component>
    <nuxt-content class="prose lg:prose-xl" :document="article.document" />
    <div v-if="article.document.libraries.includes('katex')">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css"
        integrity="sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw=="
        crossorigin="anonymous"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import Tag from "@/types/Tag";
import Article from "@/types/Article";
import TagsComponent from "@/components/common/TagsComponent.vue";

export default Vue.extend({
  components: { TagsComponent },
  name: "ArticleComponent",
  props: {
    article: {
      type: Object as Prop<Article>,
      required: true,
    },
  },
});
</script>

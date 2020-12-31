<template>
  <article class="p-3 container mx-auto">
    <h2>{{ article.document.title }}</h2>
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
import TagComponent from "../common/TagComponent.vue";

export default Vue.extend({
  components: { TagComponent },
  name: "ArticleComponent",
  props: {
    article: {
      type: Object as Prop<Article>,
      required: true,
    },
  },
});
</script>

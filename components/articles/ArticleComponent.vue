<template>
  <article>
    <h1>{{ article.document.title }}</h1>

    <div v-for="tag in article.tags" :key="tag.slug">
      <tag-component :tag="tag"></tag-component>
    </div>

    <nuxt-content :document="article.document" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css"
      integrity="sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw=="
      crossorigin="anonymous"
    />
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

<style>
.nuxt-content h1 {
  text-align: left;
}
.nuxt-content h2 {
  text-align: left;
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  text-align: left;
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  text-align: left;
}
.math {
  text-align: center;
}
</style>

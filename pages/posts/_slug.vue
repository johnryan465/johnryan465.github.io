<template>
  <article-component :article="article"></article-component>
</template>

<script lang="ts">
import Vue from "vue";
import ArticleComponent from "~/components/articles/ArticleComponent.vue";
import Article from "@/types/Article";
import Tag from "@/types/Tag";
import parseArticle from "@/middleware/parser";
export default Vue.extend({
  components: { ArticleComponent },
  async asyncData({ params, $content }) {
    const articles: Article[] = await parseArticle(
      $content,
      $content("articles", params.slug)
    );
    const article = articles[0];
    return {
      article,
    };
  },
});
</script>

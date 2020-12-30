<template>
  <article-component :article="project"></article-component>
</template>

<script lang="ts">
import Vue from "vue";
import ArticleComponent from "~/components/articles/ArticleComponent.vue";
import Article from "@/types/Article";
import parseArticle from "@/middleware/parser";

export default Vue.extend({
  components: { ArticleComponent },
  async asyncData({ params, $content }) {
    const projects: Article[] = await parseArticle(
      $content,
      $content("projects", params.slug)
    );
    const project = projects[0];
    return {
      project,
    };
  },
});
</script>

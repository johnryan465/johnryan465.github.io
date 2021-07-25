<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Blog Posts</h1>
        <hr />
        <article-list :articles="articles"></article-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import parseArticle from "@/middleware/parser";
import ArticleList from "@/components/articles/ArticleList.vue"

export default Vue.extend({
  layout: "default",
  components: {
    ArticleList
  },
  async asyncData({ params, $content }) {
    const articles = await parseArticle(
      $content,
      $content("posts", params.slug).without(["body"]).sortBy("date", "desc")
    );
    return {
      articles,
    };
  },
});
</script>

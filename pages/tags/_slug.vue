<template>
  <article-list :articles="articles"> </article-list>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import ArticleList from "@/components/articles/ArticleList.vue";
import parseArticle from "@/middleware/parser";

export default Vue.extend({
  components: { ArticleList },
  async asyncData({ $content, params }: Context) {
    const articles = await parseArticle(
      $content,
      $content("articles").where({ tags: { $contains: [params.slug] } })
    );
    const tag = await $content("tags", params.slug).fetch();
    console.log(articles);
    return {
      articles,
    };
  },
});
</script>

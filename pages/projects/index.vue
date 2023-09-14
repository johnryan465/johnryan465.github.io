<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Projects</h1>
        <hr />
        <article-list :articles="projects"></article-list>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import parseArticle from "@/middleware/parser";
import ArticleList from "@/components/articles/ArticleList.vue"

export default {
    layout: 'default',
    components: {
      ArticleList
    },
    async asyncData({ $content, params }) {
      const projects = await parseArticle(
        $content,
        $content("projects", params.slug)
      );
      return {
        projects
      }
    }
  };
</script>

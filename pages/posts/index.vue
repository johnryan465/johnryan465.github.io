<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Blog Posts</h1>
        <hr />
        <article-list :query="query"></article-list>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleList from "@/components/articles/ArticleList.vue"
import { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";


const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }] }
</script>


<script lang="ts">

export default {
  layout: "default",
  components: {
    ArticleList
  },
};

</script>

<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Blog Posts</h1>
        <hr />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import parseArticle from "@/middleware/parser";
import ArticleList from "@/components/articles/ArticleList.vue"


const articles = await parseArticle(await queryContent('projects').find())
</script>


<script lang="ts">

export default {
  layout: "default",
  components: {
    ArticleList
  },
};

</script>

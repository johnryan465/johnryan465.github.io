<script setup lang="ts">
import ArticleList from "@/components/articles/ArticleList.vue"
const route = useRoute()
const tag = route.params
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }], where: { tags: { $contains: tag.slug } } }
</script>

<template>
  <article-list :query="query"></article-list>
</template>

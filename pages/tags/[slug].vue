<script setup lang="ts">
const route = useRoute()
const tag = route.params
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/posts', sort: [{ date: -1 }], where: { tags: { $contains: tag.slug } } }
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>📅{{ article.date }}</p>
      </div>
    </ContentList>
  </main>
</template>

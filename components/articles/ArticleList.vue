<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink
        class="hover:text-blue-300"
        :to="article._path"
      >
        <div>
          <h2>{{ article.title }}</h2>
        </div>
      </NuxtLink>
      <p>📅{{ article.date }}</p>
      <p>{{ article.description }}</p>
      <div>
        <tags-component :tags="article.tags"></tags-component>
      </div>
      <hr />
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import TagsComponent from '../common/TagsComponent.vue';
const query = defineProps({
  query: {
    type: Object,
    required: true,
  },
});
</script>
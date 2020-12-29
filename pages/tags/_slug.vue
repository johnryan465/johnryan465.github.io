<template>
  <article-list :articles="articles"> </article-list>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
import ArticleList from '@/components/articles/ArticleList.vue';

export default Vue.extend({
  components: { ArticleList },
  async asyncData({ $content, params } : Context) {
    const articles = await $content('articles')
      .where({ tags: { $contains : [params.slug] }})
      .fetch()
    console.log(articles)
    return {
      articles
    }
  }
});
</script>

<style scoped>
.wrapper {
  padding: 10vh;
}
</style>
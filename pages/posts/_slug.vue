<template>
<article-component :article="article"></article-component>
</template>

<script>
import Vue from 'vue'
import ArticleComponent from '~/components/articles/ArticleComponent.vue';
import Article from '@/types/Article'
export default Vue.extend({
  components: { ArticleComponent },
  async asyncData({ $content, params }) {
    const article = new Article(await $content('articles', params.slug).fetch())

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    
    return {
      article,
      prev,
      next
    }
  }
});
</script>
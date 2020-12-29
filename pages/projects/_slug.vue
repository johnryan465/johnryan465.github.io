<template>
<article-component :article="project"></article-component>
</template>

<script>
import Vue from 'vue'
import ArticleComponent from '~/components/articles/ArticleComponent.vue';
import Article from "@/types/Article"
export default Vue.extend({
  components: { ArticleComponent },
  async asyncData({ $content, params }) {
    const project = new Article(await $content('projects', params.slug).fetch())
    
    return {
      project
    }
  }
});
</script>

<style scoped>
.wrapper {
  padding: 10vh;
}
</style>
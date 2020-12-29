<template>
    <div>
      <div v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'posts-slug', params: { slug: article.slug } }">
          <div>
            <h2 class="title">{{ article.title }}</h2>
          </div>
        </NuxtLink>
        <p>📅{{ new Date(article.date).toDateString() }} </p>
        <p>{{ article.description }}</p>
        <div v-for="tag of article.tags" :key="tag">
          <tag-component :name="tag"></tag-component>
        </div>
        <hr>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '@/types/Article'
import { Prop } from 'vue/types/options';

export default Vue.extend({
  name : "ArticleList",
  props : {
    articles: Array as Prop<Array<Article> >
  },
});
</script>
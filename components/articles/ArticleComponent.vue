<template>
<article class="wrapper">
    <h1>{{ article.document.title }} </h1>
    <nuxt-content :document="article.document" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css" integrity="sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw==" crossorigin="anonymous" />
</article>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from '@/types/Tag'
import Article from '~/types/Article';

export default Vue.extend({
  name : "ArticleComponent",
  props : {
    article:  {
      type: Article,
      required : true,
    }
  },
});
</script>


<style scoped>
.wrapper {
  padding: 10vh;
}
</style>

<style>
.nuxt-content h1 {
  text-align: left;
}
.nuxt-content h2 {
  text-align: left;
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  text-align: left;
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  text-align: left;
}
.math {
  text-align: center;
}
</style>
<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="title">{{ tag.name }}</h1>
        <hr />
        <article-list :articles="articles"> </article-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import Vue from "vue";
import ArticleList from "@/components/articles/ArticleList.vue";
import parseArticle from "@/middleware/parser";

export default Vue.extend({
  components: { ArticleList },
  async asyncData({ $content, params }: Context) {
    const articles = await parseArticle(
      $content,
      $content("posts").where({ tags: { $contains: [params.slug] } })
    );
    const tag = await $content("tags", params.slug).fetch();
    return {
      tag,
      articles,
    };
  },
});
</script>

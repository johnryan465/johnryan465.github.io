<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="title">Blog Posts</h1>
        <hr />
        <article-list :articles="articles"></article-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import parseArticle from "@/middleware/parser";

export default Vue.extend({
  layout: "default",
  async asyncData({ params, $content }) {
    console.log(params);
    const articles = await parseArticle(
      $content,
      $content("articles", params.slug)
        .only([
          "title",
          "date",
          "description",
          "img",
          "slug",
          "author",
          "excerpt",
          "tags",
        ])
        .sortBy("date", "desc")
    );
    return {
      articles,
    };
  },
});
</script>

<style scoped>
h1 {
  text-align: left;
}
h2 {
  text-align: left;
  font-weight: bold;
  font-size: 28px;
}
h3 {
  text-align: left;
  font-weight: bold;
  font-size: 22px;
}
p {
  text-align: left;
}
a {
  text-decoration: none;
}
</style>

<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="title">Projects</h1>
        <hr />
        <article-list :articles="projects"></article-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import Vue from 'vue'
import parseArticle from "@/middleware/parser";

export default Vue.extend({
    layout: 'default',
    async asyncData({ $content, params }) {
      const projects = await parseArticle(
        $content,
        $content("projects", params.slug)
      );
      return {
        projects
      }
    }
  });
</script>

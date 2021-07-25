<template>
  <div>
    <div v-for="article of articles" :key="article.slug">
      <NuxtLink
        class="hover:text-blue-300"
        :to="{
          name: article.document.dir.substring(1) + '-slug',
          params: { slug: article.slug },
        }"
      >
        <div>
          <h2>{{ article.title }}</h2>
        </div>
      </NuxtLink>
      <p>📅{{ article.date.toDateString() }}</p>
      <p>{{ article.description }}</p>
      <div>
        <tags-component :tags="article.tags"></tags-component>
      </div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Article from "@/types/Article";
import Tag from "@/types/Tag";
import TagsComponent from "@/components/common/TagsComponent.vue"

import { Prop } from "vue/types/options";

export default Vue.extend({
  name: "ArticleList",
  components: {
    TagsComponent
  },
  props: {
    articles: Array as Prop<Array<Article>>,
  },
});
</script>

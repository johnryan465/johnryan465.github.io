<template>
  <div>
    <div v-for="article of articles" :key="article.slug">
      <NuxtLink
        class="hover:text-blue-300"
        :to="article.document._path"
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
import TagsComponent from "@/components/common/TagsComponent.vue"
/*


*/
import { Prop } from "vue/types/options";

export default {
  name: "ArticleList",
  components: {
    TagsComponent
  },
  props: {
    articles: Array as Prop<Array<Article>>,
  },
};
</script>

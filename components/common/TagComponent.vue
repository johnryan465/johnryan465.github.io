<template>
  <div class="tag-wrapper">
    <NuxtLink
      class="tag-link"
      :style="{ color: tag.colour }"
      :to="{ name: 'tags-slug', params: { slug: tag.slug } }"
    >
      <span class="tag" :style="{ 'border-color': tag.colour }">
        {{ tag.name }}
      </span>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import Tag from "@/types/Tag";

export default Vue.extend({
  name: "TagComponent",
  props: {
    tag: {
      type: Object as Prop<Tag>,
      required: true,
    },
  },
  data() {
    return {
      vtag: this.tag,
    };
  },
});
</script>
<style scoped>
.tag {
  box-sizing: border-box;
  padding: 3px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  background-color: lightgray;
}
.tag-link {
  text-decoration: none;
}
.tag-wrapper {
  display: inline-block;
  margin: 10px;
}
</style>

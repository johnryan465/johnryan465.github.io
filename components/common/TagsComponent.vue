<template>
  <span>
    <tag-component v-for="tag in tags" :key="tag.slug" :tag="tag"></tag-component>
  </span>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import Tag from "@/types/Tag";

export default Vue.extend({
  name: "TagsComponent",
  props: {
    tags: {
      type: Array as Prop<Array<Tag>>,
      required: true,
    },
  },
  data() {
    return {
      vtags: this.tags,
    };
  },
});
</script>

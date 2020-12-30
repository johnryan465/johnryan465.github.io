<template>
  <NuxtLink :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
    <p :style="{ color: tag.colour }">{{ tag.name }}</p>
  </NuxtLink>
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

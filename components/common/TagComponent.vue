<template>
  <div class="inline-block m-3">
    <NuxtLink
      class="no-underline"
      :to="tag.slug"
    >
      <span
        class="tag p-1 text-white rounded-xl"
        :style="{ 'background-color': tag.colour }"
      >
        {{ tag.name }}
      </span>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import Tag from "@/types/Tag";

export default {
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
};
</script>

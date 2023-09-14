<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Tags</h1>
        <hr />
        <template>
          <div>
            <div v-for="tag of tags" :key="tag.slug">
              <tag-component :tag="tag"></tag-component>
              <hr />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tag from "@/types/Tag";
import TagComponent from "@/components/common/TagComponent.vue"


export default {
  layout: "default",
  components: {
    TagComponent
  },
  async asyncData({ $content, params }) {
    const tagsRes = await $content("tags", params.slug)
      .only(["slug", "name", "colour"])
      .fetch();
    const tags = tagsRes.map((x: any) => new Tag(x.name, x.colour, x.slug));
    return {
      tags,
    };
  },
};
</script>

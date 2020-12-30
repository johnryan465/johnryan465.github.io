<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Tag from "@/types/Tag";
export default Vue.extend({
  layout: "default",
  async asyncData({ $content, params }) {
    console.log(params);
    const tagsRes = await $content("tags", params.slug)
      .only(["slug", "name", "colour"])
      .fetch();
    const tags = tagsRes.map((x: any) => new Tag(x.name, x.colour, x.slug));
    return {
      tags,
    };
  },
});
</script>

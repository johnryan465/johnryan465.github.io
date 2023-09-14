<template>
  <div fill-height fluid>
    <div align="center" justify="center">
      <div>
        <h1 class="title">Tags</h1>
        <hr />
        <div>
          <div v-for="tag of tags" :key="tag.slug">
            <tag-component :tag="tag"></tag-component>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const tags_prev = await queryContent('tags').find()
const tags = tags_prev.map((x: any) => new Tag(x.name, x.colour, x._path));
console.log(tags)
</script>


<script lang="ts">
import Tag from "@/types/Tag";
import TagComponent from "@/components/common/TagComponent.vue"


export default {
  layout: "default",
  components: {
    TagComponent
  },
};
</script>

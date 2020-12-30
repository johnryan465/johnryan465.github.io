<template>
  <div class="container">
    <div>
      <h1 class="title">Index</h1>
      <NuxtLink :to="{ name: 'tags-slug', params: { slug: 'maths' } }">
        <div>
          <p>Test</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FunctionGraph from "@/components/FunctionGraph.vue";

export default Vue.extend({
  components: {
    FunctionGraph,
  },
  methods: {
    calc: function (x: number) {
      return x * x;
    },
  },
});
</script>

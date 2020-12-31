<template>
  <nav class="bg-blue-300" app dense color="var(--colour-2)">
    <div class="sm:block sm:ml-6">
      <div class="flex items-center justify-between">
        <span class="inline-block text-black">johnryan.tech</span>
        <div class="flex space-x-4">
          <nuxt-link
            v-for="link in links"
            :key="link[0]"
            :to="link[1]"
            exact-active-class="text-white"
            class="bg-blue-300 hover:bg-blue-400 block px-5 py-2 rounded-md text-base font-medium m-1"
          >
            {{ link[0] }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    links: [
      ["Home", "/"],
      ["Posts", "/posts"],
      ["Projects", "/projects"],
    ],
  }),
});
</script>

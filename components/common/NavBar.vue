<template>
  <nav>
    <div class="sm:block sm:ml-6 border-gray-400 border-b-2">
      <div class="flex items-center justify-between">
        <span class="hidden vs:inline-block text-black px-5">johnryan.tech</span>
        <div class="flex space-x-4">
          <nuxt-link
            v-for="link in links"
            :key="link[0]"
            :to="link[1]"
            exact-active-class="text-blue-300"
            class="hover:text-blue-300 block px-2 sm:px-5 py-2 rounded-md text-base font-medium m-1"
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

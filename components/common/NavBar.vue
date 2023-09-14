<template>
  <nav>
    <div class="sm:block sm:ml-6 border-gray-400 border-b-2">
      <div class="flex items-center justify-between">
        <span class="hidden vs:inline-block text-black px-5"
          >johnryan.tech
          <svg
            class="inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </span>
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

export default {
  name: "NavBar",
  data: () => ({
    links: [
      ["Home", "/"],
      ["Posts", "/posts"],
      ["Tags", "/tags"]
    ],
  }),
};
</script>

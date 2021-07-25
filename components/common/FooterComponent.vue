<template>
  <footer class="footer bg-white pt-1 border-b-2 border-gray-300 object-bottom">
    <div class="container mx-auto">
      <div class="border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center">
          <p class="text-sm font-bold">© {{ new Date().getFullYear() }} by John</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponent",
  props: {},
});
</script>

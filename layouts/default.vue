<script setup>
import FooterComponent from "~/components/common/FooterComponent.vue";
import NavBar from "~/components/common/NavBar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <NavBar></NavBar>
    <div class="mb-auto">
      <NuxtPage></NuxtPage>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

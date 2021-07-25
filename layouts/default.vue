<template>
  <div class="min-h-screen flex flex-col justify-between">
    <nav-bar></nav-bar>
    <div class="mb-auto">
      <Nuxt></Nuxt>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import NavBar from '@/components/common/NavBar.vue'

export default Vue.extend({
  components:{
    FooterComponent,
    NavBar
  }
})
</script>
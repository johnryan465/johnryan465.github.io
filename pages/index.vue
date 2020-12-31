<template>
  <div class="container">
    <div>
      <h1 class="title">Home</h1>
      <hr />
      <terminal-input text="Feel free to have a look around :)"></terminal-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TerminalInput from "~/components/TerminalInput.vue";

export default Vue.extend({
  name: "HomePage",
});
</script>

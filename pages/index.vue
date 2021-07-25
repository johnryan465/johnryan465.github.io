<template>
  <div>
    <div>
      <h1 class="text-center underline">About Me</h1>
      <div class="text-center">
        <span class="font-bold">Name:</span>
        John Ryan
        <br />
        <span class="font-bold">Nationality:</span>
        🇮🇪
        <br />
        <span class="font-bold">Education:</span> Msc in 💻@University of Oxford 2022
        <br />
        <br />
      </div>
    </div>
    <hr />
    <terminal-input
      :text="['Feel free to have a look around :)', 'Currently a WIP']"
    ></terminal-input>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TerminalInput from "~/components/TerminalInput.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    TerminalInput
  }
});
</script>

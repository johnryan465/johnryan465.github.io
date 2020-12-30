<template>
  <div id="item"></div>
</template>

<script lang="js">
import Vue from "vue";
import TypeIt from "typeit";

export default Vue.extend({
  name: "TerminalInput",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      vtext: this.text,
    };
  },
  mounted() {
    new TypeIt("#item", {
      strings: this.text,
    }).go();
  },
});
</script>
<style scoped>
.blinking {
  animation: blink 2s linear 0s infinite;
}
@keyframes blink {
  0% {
    background: #0a0;
  }
  47% {
    background: #090;
  }
  50% {
    background: #000;
  }
  97% {
    background: #000;
  }
  100% {
    background: #090;
  }
}
</style>

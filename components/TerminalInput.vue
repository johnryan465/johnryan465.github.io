<template>
  <div class="text-center" id="item"></div>
</template>

<script lang="js">
import TypeIt from "typeit";

export default {
  name: "TerminalInput",
  props: {
    text: {
      type: Array,
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
};
</script>

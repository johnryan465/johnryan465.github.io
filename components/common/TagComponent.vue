<template>
    <span
    v-bind:style="{color:col.colour}"
    >
    {{col.str}}
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from '@/types/Tag'

export default Vue.extend({
  name : "TagComponent",
  props : {
    name:  {
      type: String,
      required : true,
    }
  },
  data() {
    return {
      vname : this.name
    };
  },
  computed: {
    col: function () {
      var mapping : Map<String, Tag> = new Map<String, Tag>([
          ["maths",new Tag("Maths","red")],
          ["calculus" ,new Tag("Calc","red")],
          ["probability", new Tag("Probability 🎲","red")]
      ]);
      return mapping.get(this.name) || new Tag(this.name,"blue");
    }
  }
});
</script>
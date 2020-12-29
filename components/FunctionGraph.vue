<template>
  <div>
    <div id="function"></div>
    <div id="base_normal_curve"></div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Prop } from 'vue/types/options';
import * as d3 from "d3";

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default Vue.extend({
  name : "FunctionGraph",
  props : {
    func :  Function as Prop<(n: number) => number>,
    left:  {
      type: Number,
      required : true,
      default : 0
    },
    right: {
      type: Number,
      required : true,
      default : 1
    },
    divs: {
      type: BigInt,
      required : true,
      default : 100
    }
  },
  data() {
    return {
      func : this.func,
      left : this.left,
      right : this.right,
      divs : this.divs
    };
  },
  mounted() {
    var margin = {top: 10, right: 30, bottom: 30, left: 60};
    var width = 460 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var data = [...Array(this.$props.divs).keys()]
        .map(idx => this.$props.left + (idx * (this.$props.right - this.$props.left)/this.$props.divs))
        .map( x => new Point(x,this.$props.func(x)));

    var x = d3.scaleLinear()
      .domain([this.$props.left, this.$props.right ])
      .range([0, width]);

    var y = d3.scaleLinear()
      .domain([0 , 10000])
      .range([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);

    var svg = d3.select("#function").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var line = d3.line<Point>()
      .x( d => x(d.x))
      .y( d => y(d.y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
    }
});
</script>
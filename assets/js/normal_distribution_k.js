var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
width = $(window).width() - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;
base_mean = 0;
base_k = 1;

z_limit = 4;

var x = d3.scale.linear()
	//.domain([-7,7])
	.range([0, width]);

var y = d3.scale.linear()
	//.domain([0,.6])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

svg.append("path")
    .attr("class", "line")
	.attr("id", "base_normal_curve")

update(x, y);

//attach event
d3.selectAll(".inputbox").on("input", function(){
	update(x, y)
});

d3.select("#axislockcheck").on("change", function(){
	update(x, y)
});

//change the curve
function update(x, y){
	m = Number(d3.select("#meanbox").property("value"));
	s = Number(d3.select("#stdevbox").property("value"));
	if(!isNaN(m) && !isNaN(s) && s != 0){
		if(d3.select("#axisscalecheck").property("checked")){
			update_x_axis(m, s, x);
		}

		data = get_data(m, s, x);

		if(d3.select("#axisscalecheck").property("checked")){
			update_y_axis(data, m, s, y);
		}

		var line = d3.svg.line()
		    .x(function(d) {
		        return x(d.q);
		    })
		    .y(function(d) {
		        return y(d.p);
		    });

		d3.select("#base_normal_curve")
			.datum(data)
			.transition()
			.attr("d", line);
	}
}

//make the x axis min and max scale with the data
//needed before data generation
function update_x_axis(m, s, x){
	x.domain([m - (z_limit * s), m + (z_limit * s)]);
	d3.select(".x").transition().call(xAxis);
}

//make the y axis min and max scale with the data
//needed after data generation
function update_y_axis(data, m, s, y){
	y.domain(d3.extent(data, function(d) {
	    return d.p;
	}));
	d3.select(".y").transition().call(yAxis);
}

//given a mean, sigma, and an x scale, return a an array
//representing the y points of a normal distribution
function get_data(mean, k, x){
	data = []; //erase current data

	//populate the data
	for (i = 0; i < width; i++) {
		q = x.invert(i);
	    p = gaussian_pdf_k(q, mean, k); // calc prob of each point
	    el = {
	        "q": q,
	        "p": p
	    }
		//console.log(el);
	    data.push(el);
	};
	return data
}

//taken from Jason Davies science library
// https://github.com/jasondavies/science.js/blob/master/src/stats/distribution/gaussian.js
function gaussian_pdf(x, mean, sigma) {
	var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
    x = (x - mean) / sigma;
    return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
};
function gaussian_pdf_k(x, mean, k) {
	var gaussianConstant = Math.sqrt(k/(2 * Math.PI));
    return gaussianConstant * Math.exp((-k/2) * (x-mean) * (x-mean));
};

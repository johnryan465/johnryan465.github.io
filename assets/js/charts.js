window.chartColors = {
	red: 'rgb(255, 99, 132)',
	blue: 'rgb(54, 162, 235)'
};

var file_data = {};
$(document).ready(function() {
    var $result = $("#result");
    $("#file").on("change", function(evt) {
        $result.html("");
        $("#result_block").removeClass("hidden").addClass("show");
        $("#graph_button").css({"display": "inline"});
        function handleFile(f) {
            var $title = $("<h4>", {
                text : f.name
            });
            var $fileContent = $("<ul>");
            $result.append($title);
            $result.append($fileContent);

            var dateBefore = new Date();
            JSZip.loadAsync(f)                                   // 1) read the Blob
            .then(function(zip) {
                var dateAfter = new Date();
                $title.append($("<span>", {
                    "class": "small",
                    text:" (loaded in " + (dateAfter - dateBefore) + "ms)"
                }));

                zip.forEach(function (relativePath, zipEntry) {  // 2) print entries

                    zipEntry.async("text").then(function (t) {
                        if((zipEntry.name).slice(0,4) == "json"){
                          file_data[zipEntry.name] = JSON.parse(t);
                        }
                        console.log(file_data);
                    });
                    $fileContent.append($("<li>", {
                        text : zipEntry.name
                    }));
                });
            }, function (e) {
                $result.append($("<div>", {
                    "class" : "alert alert-danger",
                    text : "Error reading " + f.name + ": " + e.message
                }));
            });
        }

        var files = evt.target.files;
        for (var i = 0; i < files.length; i++) {
            handleFile(files[i]);
        }
    });
    $("#graph_button").click(function(){
      $("#graphs_block").css({"display": "inline"});
      var received = {};
      var sent = {};
      for(var i = 0; i < file_data["json/snap_history.json"]["Sent Snap History"].length; i++){
        console.log( file_data["json/snap_history.json"]["Sent Snap History"][i] );
        sent[file_data["json/snap_history.json"]["Sent Snap History"][i]["To"]] = (sent[file_data["json/snap_history.json"]["Sent Snap History"][i]["To"]] || 0) + 1;
      }
      for(var i = 0; i < file_data["json/snap_history.json"]["Received Snap History"].length; i++){
        console.log( file_data["json/snap_history.json"]["Received Snap History"][i] );
        received[file_data["json/snap_history.json"]["Received Snap History"][i]["From"]] = (received[file_data["json/snap_history.json"]["Received Snap History"][i]["From"]] || 0) + 1;
      }
      console.log(Object.keys(received));
      console.log(file_data["json/snap_history.json"]["Received Snap History"][0]);
		var LABELS = Object.keys(received);//['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		//var LABELS = ["test"];//LABELS.splice(0,4);
    var DATASET1 = Object.keys(received);//[5,5,5,5,5,5,5,5,5,5,5,5];
    for(var i = 0; i < LABELS.length; i++){
      DATASET1[i] = received[LABELS[i]];
    }
    var DATASET2 = Object.keys(received);
    for(var i = 0; i < LABELS.length; i++){
      DATASET2[i] = sent[LABELS[i]];
    }
		document.getElementById('container_1').setAttribute("style","height:" + (15*LABELS.length + 40) + "px");
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: LABELS,
			datasets: [{
				label: 'Recieved',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: DATASET1
			}, {
				label: 'Sent',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				data: DATASET2
			}]
		};
			var ctx = document.getElementById('canvas_1').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Snap History'
					},
					yAxes: [{
            	barThickness : 3
        		}],
					maintainAspectRatio: false,
				}
			});
      var received = {};
      var sent = {};
      for(var i = 0; i < file_data["json/chat_history.json"]["Sent Chat History"].length; i++){
        console.log( file_data["json/chat_history.json"]["Sent Chat History"][i] );
        sent[file_data["json/chat_history.json"]["Sent Chat History"][i]["To"]] = (sent[file_data["json/chat_history.json"]["Sent Chat History"][i]["To"]] || 0) + 1;
      }
      for(var i = 0; i < file_data["json/chat_history.json"]["Received Chat History"].length; i++){
        console.log( file_data["json/chat_history.json"]["Received Chat History"][i] );
        received[file_data["json/chat_history.json"]["Received Chat History"][i]["From"]] = (received[file_data["json/chat_history.json"]["Received Chat History"][i]["From"]] || 0) + 1;
      }
      console.log(Object.keys(received));
		var LABELS = Object.keys(received);
		//LABELS = LABELS.splice(0,4);
    var DATASET1 = Object.keys(received);
    for(var i = 0; i < LABELS.length; i++){
      DATASET1[i] = received[LABELS[i]];
    }
    var DATASET2 = Object.keys(received);
    for(var i = 0; i < LABELS.length; i++){
      DATASET2[i] = sent[LABELS[i]];
    }
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: LABELS,
			datasets: [{
				label: 'Recieved',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: DATASET1
			}, {
				label: 'Sent',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				data: DATASET2
			}]
		};
			var ctx = document.getElementById('canvas_2').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Chat History'
					},
					yAxes: [{
            	barThickness : 3
        		}],
					maintainAspectRatio: false
				}
			});
			document.getElementById('container_2').setAttribute("style","height:" + (15*LABELS.length + 40) + "px");
  });

function randomNumber(min, max) {
			return Math.random() * (max - min) + min;
		}

		function randomBar(date, lastClose) {
			var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
			var close = randomNumber(open * 0.95, open * 1.05);
			return {
				t: date.valueOf(),
				y: close
			};
		}

		var dateFormat = 'MMMM DD YYYY';
		var date = moment('April 01 2017', dateFormat);
		var data = [randomBar(date, 30)];
		var labels = [date];
		while (data.length < 60) {
			date = date.clone().add(1, 'd');
			if (date.isoWeekday() <= 5) {
				data.push(randomBar(date, data[data.length - 1].y));
				labels.push(date);
			}
		}

		var ctx = document.getElementById('chart1').getContext('2d');
		ctx.canvas.width = 1000;
		ctx.canvas.height = 300;
		var cfg = {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'CHRT - Chart.js Corporation',
					data: data,
					type: 'line',
					pointRadius: 0,
					fill: false,
					lineTension: 0,
					borderWidth: 2
				}]
			},
			options: {
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Closing price ($)'
						}
					}]
				}
			}
		};
		var chart = new Chart(ctx, cfg);

		document.getElementById('update').addEventListener('click', function() {
			var type = document.getElementById('type').value;
			chart.config.data.datasets[0].type = type;
			chart.update();
		});
});

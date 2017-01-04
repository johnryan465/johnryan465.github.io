---
title: "Harassment Detection"
layout: splash
excerpt: "Harassment Detection"
sitemap: false
permalink: /harassmentdetection.html
author_profile: true
---
An Harassment Detection API is being developed currently by us.
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="http://www.solaire.ie/assets/js/raphael-2.1.4.min.js"></script>
<script src="http://www.solaire.ie/assets/js/justgage.js"></script>
<script>
    $(document).ready(function() {
        var g1 = new JustGage({
          id: "g1",
          value: NaN,
          min: 0.0,
          max: 1.0,
          title: "Harassment Detector",
          decimals: 5,
          levelColorsGradient: false,
          label: "Confidence"
        });
        $("#submit1").click(function(){
            console.log($("#text").val() );
            $.get("http://52.212.223.189:5000/classify",{ text: $("#text").val() }, function(data, status){
                g1.refresh(data);
            });
        });
    });
</script>
<input type="text" id="text">
<input id="submit1" type="button" value="Submit"/>
<div id="g1"></div>
If you would like to be updated on the current status please sign up below.
{% include email_signup.html %}

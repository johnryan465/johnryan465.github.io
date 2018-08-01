---
title: "Harassment Detection"
layout: splash
excerpt: "Harassment Detection"
sitemap: false
permalink: /harassmentdetection.html
author_profile: true
---

(Server is currently inactive)
This is a Harassment Detection API built using deep neural networks.
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="assets/js/raphael-2.1.4.min.js"></script>
<script src="assets/js/justgage.js"></script>
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
          label: "Confidence",
          width: 100
        });
        $("#submit1").click(function(){
            console.log($("#text").val() );
            $.get("http://35.166.201.150:5000/classify",{ text: $("#text").val() }, function(data, status){
                g1.refresh(data);
            });
        });
    });
</script>
<input type="text" id="text"><input id="submit1" type="submit" value="Submit"/>
<br>
<div id="g1" style="  width: 100%;max-width: 400px; " align="center"></div>
Any questions or comments, send an email to john@solaire.ie

If you would like to be updated on the current status please sign up below.
{% include email_signup.html %}

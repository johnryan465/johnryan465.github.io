---
title: "Harassment Detection"
layout: splash
excerpt: "Harassment Detection"
sitemap: false
permalink: /harassmentdetection
author_profile: true
---

This is a Harassment Detection API built using deep neural networks.
It is being served via tensorflow.js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.12.0"> </script>
<script src="assets/js/raphael-2.1.4.min.js"></script>
<script src="assets/js/justgage.js"></script>
<script src="assets/js/harassment_model.js"></script>

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
            t = (model.predict(to_one_hot_char($("#text").val())));
            console.log(to_one_hot_char($("#text").val()).dataSync());
            console.log(Array.from(t.dataSync())[0]);
            g1.refresh(Array.from(t.dataSync())[0]);
        });
    });
</script>
<input type="text" id="text"><input id="submit1" type="submit" value="Submit"/>
<br>
<div id="g1" style="  width: 100%;max-width: 400px; " align="center"></div>
Any questions or comments, send an email to john@solaire.ie

If you would like to be updated on the current status please sign up below.
{% include email_signup.html %}

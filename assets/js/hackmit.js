var data = "username=johnryan465_a18a5c";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://nosedive.hackmirror.icu/beta/boost_rating");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "fda4bea5-cea2-43f4-89e9-e6c0188d43d9");

xhr.send(data);

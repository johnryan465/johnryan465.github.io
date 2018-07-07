var data = "username=johnryan465_a18a5c";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "/beta/boost_rating");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

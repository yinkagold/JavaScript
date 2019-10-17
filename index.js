/*
var request = new XMLHttpRequest();
request.open("GET", "data.json", true);
request.onload = function() {
  var data = JSON.parse(this.response);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + "is a " + data[i].race);
  }
};
request.send();

//using the fecth

fetch("./data.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {});

// using Jquery
$(document).ready(function() {
  var data;
  $.ajax({
    dataType: "json",
    url: "data.json",
    data: data,
    success: function(data) {
      data.map(elem => {
        console.log(elem);
      });
      //data.forEach(elem => {
      //console.log(elem);
    }
  });
});
*/
const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://bwa-2019-2020.herokuapp.com/v1/trips", true);
xhr.setRequestHeader("X-API-Key", "bwa_2019-2020");
xhr.onload = function() {
  var data = JSON.parse(this.response);
  data.forEach(trips => {
    //console.log(trips.scooter_id);
  });
  console.log(xhr.responseText);
};
xhr.send();

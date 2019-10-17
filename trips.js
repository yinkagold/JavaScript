$(document).ready(() => {
  $.support.cors = true;
  const api = `https://bwa-2019-2020.herokuapp.com/v1`;
  $("#search").click(() => {
    var end = $("#endDate").val();
    var start = $("#startDate").val();
    $.ajax({
      crossDomain: true,
      url: `${api}/trips?startDate=${start}&endDate=${end}`,
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("X-API-Key", "bwa_2019-2020");
      },
      success: data => {
        $("#trips").empty();
        for (let trip of data) {
          $("#trips").append(
            `<tr><td>${trip.scooter_id}</td><td>${trip.average_speed}</td></tr>`
          );
        }
        console.log(data);
      },
      error: error => console.log("error", error)
    });
  });
});

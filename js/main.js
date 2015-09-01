$(document).on('ready', function() {

  var my_city = "Denver";
  var my_key = "85bb4ac0b5e70ea54dad0f87a4b88";
  var num_of_days = 1;

  var getResults = function() {
    var request = $.ajax({
      url: "http://api.worldweatheronline.com/free/v2/weather.ashx",
      method: "GET",
      data: {
        key: my_key,
        q: my_city,
        num_of_days: num_of_days,
        format: "json"
      },
      dataType: "json",
    });
    request.done(function(apiResponse) {
      temperature = apiResponse.data.current_condition[0].temp_F;
      $(".temp").html(temperature + " degrees in Fahrenheit");
      $(".Location").html(my_city);
    });
  };
  $(".btn").click(function(event) {
    event.preventDefault();
    getResults();
  });

});

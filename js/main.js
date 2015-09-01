$(document).on('ready', function() {



$("form").on("submit",function(event) {
    event.preventDefault();

    getResults();
    // console.log(my_city);
  });

  var getResults = function() {
    var my_city = $("#search-term").val().trim();
    var num_of_days = 1;
    var my_key = "85bb4ac0b5e70ea54dad0f87a4b88";
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
      console.log(apiResponse.data.current_condition[0].temp_F);
      // temperature = apiResponse.data.current_condition[0].temp_F;
      // $(".temp").html(temperature + " degrees in Fahrenheit in " + my_city);
      // $(".Location").html(my_city);
    });
  };

});

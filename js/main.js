$(document).on('ready', function() {
  console.log('sanity check!');


  var my_city = "New" + "York";
  var my_key = "85bb4ac0b5e70ea54dad0f87a4b88";
  var num_of_days = 1;

  console.log('getting here');

  var getResults = function() {
    var request = $.ajax({
      url: "http://api.worldweatheronline.com/free/v2/weather.ashx",
      method: "GET",
      data: {
        key: my_key,
        q: "New" + "York",

        num_of_days: num_of_days,
        format: "json"
      },
      dataType: "json",

    });
    request.done(function(apiResponse) {
      console.log(apiResponse.data.current_condition[0].temp_F);
      // temperature = apiResponse.data.current_condition[0].temp_F;
      // console.log(temperature);

      // $(".temperature results-area").html(quote);
    });
  };

  $(".btn").click(function(event) {
    event.preventDefault();
    getResults();
  });

});

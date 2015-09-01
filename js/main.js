$(document).on('ready', function(event) {
  console.log('sanity check!');
   // event.preventDefault();
   getResults();


// var my_city="Washington,USA";
// var my_key="85bb4ac0b5e70ea54dad0f87a4b88";
// var num_of_days=2;
// // build URI:
// var uri="http://free.worldweatheronline.com/feed/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// // uri-encode it to prevent errors :
// uri=encodeURI(uri);


function getResults() {
    $.ajax({
      url: "HTTP: http://api.worldweatheronline.com/free/v2/weather.ashx",
      method:"GET",
      data: {
        key:my_key,
        q:my_city,
        num_of_days: num_of_days,
        format: "jsonp"
      },
       dataType: "jsonp",
      success: function(apiResponse) {
        temperature = apiResponse.data.current_condition[0].temp_F;
        author = apiResponse.quoteAuthor;
        console.log(temperature);

        $(".temperature results-area").html(quote);
        if(author === ''){

          author = "Anonymous";
        }
        $(".group").html("--" + author);
      }
    });
  }

});

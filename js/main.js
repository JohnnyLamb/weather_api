$(document).on('ready', function(event) {
  console.log('sanity check!');
   event.preventDefault();
    getResults();


var my_city="Washington,USA";
var my_key="85bb4ac0b5e70ea54dad0f87a4b88";
var no_of_days=2;
// build URI:
var uri="http://free.worldweatheronline.com/feed/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// uri-encode it to prevent errors :
uri=encodeURI(uri);


jQuery.get(uri,function(r){

 if(r.data.error) {

  // error exists, so display it
  alert(r.data.error[0].msg);

  } else {

   // no error
   // do normal stuff

 }//end if

},"jsonp"); // end jQuery.get()




});

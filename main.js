//d7a07cac0ddfce9ec5404d635e6a5010



$.ajax({
  url: 'http://ipinfo.io/json',
  success: function(res,txt,xhr){
    console.log(res);
    $("#ciudad").html(res.city);
    $("#pais").html(res.country);

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+res.city+',us&APPID=d7a07cac0ddfce9ec5404d635e6a5010',
      success: function(res2,txt2,xhr2){
        console.log(res2);
        var tempCelcius = Math.round(Number(res2.main.temp)) - 273;
        $('#temp').html(tempCelcius);
      //  $("#ciudad").html(res.city);
      //  $("#pais").html(res.country);
      }
     });
  }
});

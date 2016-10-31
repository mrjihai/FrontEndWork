
var lat,lon

var getLocation = function(){
    $.getJSON("https://freegeoip.net/json/", function(data){
          lat = data.latitude;
          lon = data.longitude;
          var city = data.city
          var code = data.region_code
          var zipCode = data.zip_code

          getWeather(lat,lon,city,code,zipCode)
          getDayandTime()
          console.log('data',city,code,zipCode,data)
    });
}


var getWeather = function(lat,lon,city,code,zipCode){
    $.getJSON("https://api.darksky.net/forecast/752d72f732230515fda08531e4d58c37/" + lat + "," + lon + "?callback=?",
        function(data){
            console.log(data)
          var weather = data.currently.summary
          var tempF = data.currently.apparentTemperature.toFixed(1)
          var weatherIcon = data.currently.icon
          var precipProbability = data.currently.precipProbability
          var windSpeed = data.currently.windSpeed
          var humidity = data.currently.humidity
          $('.city').html(city + "，" + code+"，"+zipCode)
          $('.weather').html(weather)
          $('.tempture').html(tempF)
          $('.precipProbability').html("  "+precipProbability*100 + "%")
          $('.windSpeed').html("   " +windSpeed + " mph")
          $('.humidity').html("   " + (humidity*100).toFixed(2) +"%")
          //$('.weatherLogo').html("<div><i class='fa-5x wi wi-forecast-io-" + weatherIcon + " '></i></div>")
          addIcon(weatherIcon)
          setBackground(weatherIcon)
          changeUint(tempF)
   })
}
var addIcon= function (weatherIcon){
    var skycons  = new Skycons({"color": "white"})
    skycons.set('icon',weatherIcon)
    skycons.play()
}
var getDayandTime = function(){
    var array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Saturday']
    var day = array[(new Date).getDay()]
    var hours=(new Date).getHours();
    var minutes=(new Date).getMinutes();
    if(hours<10){
        hours = '0' + hours
    }
    if(minutes<10){
        minutes = '0' + minutes
    }
    $(".day").html(day + " " + hours +":"+minutes)
}

var setBackground = function(weatherIcon){
        $(".container-bg").css('background-image',"url(imgs/"+ weatherIcon +".jpg)")
}

var changeUint = function(tempF) {

    var tempC = ((tempF-32)*5/9).toFixed(1)

    $('.c').on('click',function(){
        if($('.c').hasClass('active')){
            $('.f').addClass('active')
            $('.c').removeClass('active')
            $('.f').html('°F')
            $('.c').html('/°C')
            $('.tempture').html(tempF)
        }else{
            $('.f').removeClass('active')
            $('.c').addClass('active')
            $('.f').html('°C')
            $('.c').html('/°F')
            $('.tempture').html(tempC)
        }
    })
}

getLocation()

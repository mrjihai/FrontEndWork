
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
          //add the daily weather
          var daily_weather = data.daily.data
          console.log('daily --->'+ daily_weather[0].summary)
          for(var i =0; i < daily_weather.length;i++){
              //$('.item'+[i+1]).append('<div>'+daily_weather[i]+'</div>')
              console.log(daily_weather[i].icon);
              addDailyWeatherIcon(daily_weather[i].icon,i)
              showDailyDay(daily_weather[i].time,i)
              showMaxAndMin(daily_weather[i].temperatureMax.toFixed(0),daily_weather[i].temperatureMin.toFixed(0),i)
          }
          addCurrentWeatherIcon(weatherIcon)
          setBackground(weatherIcon)
          changeUint(tempF)
   })
}

var addCurrentWeatherIcon= function (weatherIcon){
    var skycons  = new Skycons({"color": "white"})
    skycons.set('icon',weatherIcon)
    skycons.play()
}
var addDailyWeatherIcon = function(weatherIcon,i){
    var skycons  = new Skycons({"color": "white"})
    skycons.set('icon'+(i+1),weatherIcon)
}

var showMaxAndMin = function(max,min,i){
    $('.item'+(i+1)).append(`<span class='min'>${min}°F</span>`)
    $('.item'+(i+1)).append(`<span class='max'>${max}°F</span>`)
}
var showDailyDay = function(date,i){
    var array = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
    var day = array[new Date(date*1000).getDay()]
    //console.log(day);
    $('.item'+(i+1)).find('div').text(day)
}

var getDayandTime = function(){
    var array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var day = array[(new Date).getDay()]
    var hours=(new Date).getHours();
    var minutes=(new Date).getMinutes();
    if(hours<10){
        hours = '0' + hours
    }
    if(minutes<10){
        minutes = '0' + minutes
    }
    // $(".day").html(day + " " + hours +":"+minutes)
    $(".day").html(day )
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

var showDaily = function(){
    $('.daily').owlCarousel({
    items:4,
    margin:0,
    nav:false,
    dots:true,
    touchDrag:true,

})

}
getLocation()
showDaily()

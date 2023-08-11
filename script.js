$(document).ready(function(){
    $("#searchbutton").click(function(){
        var city = $("#search-city").val();
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&Appid=06427b00db3081819715a5c3db1c57fa&units=metric',
            success: function(json_data){
                $(".result").show();
                $("#weather").text(json_data.weather[0].main);
                $("#temp").text(json_data.main.temp+' Celsius');
                $("#pressure").text(json_data.main.pressure+'Pa');
                $("#humidity").text(json_data.main.humidity+'%');
                $("#city").text(json_data.name);
                $("#weatherimg").html('<img src="http://openweathermap.org/img/w/'+json_data.weather[0].icon+'.png" width="100px">');
                $("#wind").text(json_data.wind.speed+ ' meter/sec');
                var dt = new Date();
                var time = dt.getHours() + ":" + dt.getMinutes();
                $("#time").text(time);

            }
        });
    });
});

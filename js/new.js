/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather(){
    var town = document.getElementById("town").value;
    if (town === ""){town = "London,uk"}
    
    var conditionsPath = "http://api.openweathermap.org/data/2.5/weather?q="+town+"&units=metric&APPID=8c332ce265b43d4ce8e56d9f6dbf0526";
    var forecastPath = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+town+"&units=metric&cnt=7&APPID=8c332ce265b43d4ce8e56d9f6dbf0526";
    
    
    // GET THE CONDITIONS
    weatherConditions.open('GET', conditionsPath , true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);
    
    //Get the forecast
weatherForecast.open('GET', forecastPath, true);
weatherForecast.responseType = 'text';
weatherForecast.send();
}//end function

    
weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        //console.log(cObj);
        document.getElementById('location').innerHTML= cObj.name;
        document.getElementById('weather').innerHTML= cObj.weather[0].description;
        document.getElementById('temperature').innerHTML= cObj.main.temp+ "&deg;C";

        //current weather icon
        //currentWeather
        var imagePath2 = "http://openweathermap.org/img/w/"+cObj.weather[0].icon+".png";
        document.getElementById('currentWeather').src = imagePath2;
        
    } //end if
}; //end function


//weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&cnt=7&APPID=8c332ce265b43d4ce8e56d9f6dbf0526', true);

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	//console.log(fObj);
//	document.getElementById('desc').innerHTML= fObj.list[0].weather[0].description;
    
    
    
    /*time stamp*/
    


    var D0 = new Date (fObj.list[0].dt *1000);
//    console.log(D0);
    var D1 = new Date (fObj.list[1].dt *1000);
//    console.log(D1);
    var D2 = new Date (fObj.list[2].dt *1000);
//    console.log(D2);
    var D3 = new Date (fObj.list[3].dt *1000);
//    console.log(D3);
    var D4 = new Date (fObj.list[4].dt *1000);
//    console.log(D4);
    var D5 = new Date (fObj.list[5].dt *1000);
//    console.log(D5);
    var D6 = new Date (fObj.list[6].dt *1000);
//    console.log(D6);
    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var checkDay = D1.getDay();
    console.log(checkDay);

    
//Day 1
    document.getElementById('r1c1').innerHTML= days[D1.getDay()];
    document.getElementById('r1c3').innerHTML= fObj.list[1].temp.max+ "&deg;C";
    document.getElementById('r1c4').innerHTML= fObj.list[1].temp.min+ "&deg;C";
    var imagePath = "http://openweathermap.org/img/w/"+fObj.list[1].weather[0].icon+".png";
    document.getElementById('r1c2').src = imagePath;
   
    //Day 2
    document.getElementById('r2c1').innerHTML= days[D2.getDay()];
    document.getElementById('r2c3').innerHTML= fObj.list[2].temp.max+ "&deg;C";
    document.getElementById('r2c4').innerHTML= fObj.list[2].temp.min+ "&deg;C";   
    var imagePath = "http://openweathermap.org/img/w/"+fObj.list[2].weather[0].icon+".png";
    document.getElementById('r2c2').src = imagePath;
   
    //Day 3
    document.getElementById('r3c1').innerHTML= days[D3.getDay()];
    document.getElementById('r3c3').innerHTML= fObj.list[3].temp.max+ "&deg;C";
    document.getElementById('r3c4').innerHTML= fObj.list[3].temp.min+ "&deg;C";
    var imagePath = "http://openweathermap.org/img/w/"+fObj.list[3].weather[0].icon+".png";
    document.getElementById('r3c2').src = imagePath;
} //end if
}; //end function



loadWeather();
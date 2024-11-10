const smtBtn = document.getElementById("submit");
var spinner = document.querySelector(".loader");
var cityNameElem = document.getElementById("cityName");
var countryNameElem = document.getElementById("countryName");
var imageElem = document.getElementById("image");
var weatherDisElem = document.getElementById("weatherDis");
var timeElem = document.getElementById("time");
var tempElem = document.getElementById("temp");
var windSpeedElem = document.getElementById("windSpeed");
var humidityElem = document.getElementById("humidity");

function hide_spinner() {
  spinner.style.display = "none";
}

function show_spinner() {
  spinner.style.display = "flex";
}

function getweather() {
  show_spinner();
  var notif = document.getElementById("notifier").innerHTML = 'Loading...';
  var cityname = document.getElementById("city").value;

  var url = `https://api.weatherstack.com/current?access_key=63e6a090e18bdb8d1e274c53451a306f&query=${cityname}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error("error ${response.status}");
      }
      return response.json();
    })

    .then(data => {
      
      var CityName = data.location.name;
      var CountryName = data.location.country;
      var LocalTime = data.location.localtime;
      var Temp = data.current.temperature;
      var windSpeed = data.current.wind_speed;
      var humidity = data.current.humidity;
      var wheatherDis = data.current.weather_descriptions;

      cityNameElem.innerHTML = CityName + ", ";
      countryNameElem.innerHTML = CountryName;
      timeElem.innerHTML = "Local Time :" + LocalTime;
      tempElem.innerHTML = "Temperature : " + Temp;
      windSpeedElem.innerHTML = "Wind speed : " + windSpeed;
      humidityElem.innerHTML = "Humidity : " + humidity;
      weatherDisElem.innerHTML = wheatherDis;
      if (wheatherDis[0] == 'Clear '){
        imageElem.src = `assets/Sunny.png`
      }
      else{
        imageElem.src = `assets/${wheatherDis}.png`;
      }
      hide_spinner();
    });
}

smtBtn.addEventListener("click", getweather);

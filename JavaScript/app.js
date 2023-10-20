//const apiKey = "85b5fbb8ce33832c5aebb78aab45717e";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHtml = data.name;
  document.querySelector(".temp").innerHtml = data.main.temp + "°c";
  document.querySelector(".humidity").innerHtml = data.main.humidity + "%";
  document.querySelector(".wind").innerHtml = data.wind.speed + "km/h";
}

checkWeather();
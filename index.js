let weather = {
   
   fetchWeather: function (city){
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric&rapidapi-key=8353202b44mshea3903074cf65f8p195b62jsnf5596ec5107c`)
    .then((resp) => resp.json())
    .then((data) => this.displayWeather(data))
   },

   displayWeather: function(data){
    const {name} = data;
    const {icon,description} = data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    //console.log(name,icon,description,temp,speed,humidity)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
    document.querySelector(".description").innerText = description
    document.querySelector(".temp").innerText = temp + "°C"
    document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h"
    document.querySelector(".humidity").innerText = "Humdity:" + humidity + "%"
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`
   },
   search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value)
   }
};
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        weather.search();
    }
})

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
});



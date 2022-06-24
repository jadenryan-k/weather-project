//Creating an object to fetch and display data
let weather = {
   
    fetchWeather: function (city){
     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric&rapidapi-key=8353202b44mshea3903074cf65f8p195b62jsnf5596ec5107c`)
     .then((resp) => resp.json())
     .then((data) => this.displayWeather(data))
    },
 
 //Displaying the weather
    displayWeather: function(data){
     const {name} = data;
     const {icon} = data.weather[0];
     const {description} = data.weather[0];
     const {humidity} = data.main;
     const {temp} = data.main;
 
     const {speed} = data.wind;
     //console.log(name,icon,description,temp,speed,humidity)
     document.querySelector(".weather").innerHTML=`
         <h2 class="city">${"Weather in " + name}</h2>
         <div class= "temp">${temp + "°C" }</div>
         <img src= "https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon"/>
         <div class="description">${description}</div>
         <div class="humidity">${"Humidity:" + humidity + "%"}</div>
         <div class="wind">${"Wind Speed:" + speed + "km/h"}</div>
     `
     document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`
    },
 
    //A function to that is called to add Event LIstener
    search: function(){
     this.fetchWeather(document.querySelector(".search-bar").value)
    }
 };
  //Adding an Event Listener to the Enter Key 
 document.querySelector(".search-bar").addEventListener("keyup", (event) => {
     if(event.key === "Enter"){
         weather.search();
     }
 })
  //Adding an Event Listener to the Search icon
 document.querySelector(".search button").addEventListener("click", () => {
     weather.search();
 });
 
 
 
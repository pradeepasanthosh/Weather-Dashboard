const apiKey="YOUR_API_KEY";

const cityInput=document.getElementById("city");

const searchBtn=document.getElementById("searchBtn");

const weather=document.getElementById("weather");

async function getWeather(city){

try{

weather.innerHTML="Loading...";

const response=await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

);

if(!response.ok){

throw new Error("City not found");

}

const data=await response.json();

displayWeather(data);

}

catch(error){

weather.innerHTML=

`<p class="error">${error.message}</p>`;

}

}

function displayWeather(data){

weather.innerHTML=`

<h2>${data.name}, ${data.sys.country}</h2>

<p>🌡 Temperature : ${data.main.temp} °C</p>

<p>🤒 Feels Like : ${data.main.feels_like} °C</p>

<p>💧 Humidity : ${data.main.humidity}%</p>

<p>🌬 Wind Speed : ${data.wind.speed} m/s</p>

<p>☁ Weather : ${data.weather[0].description}</p>

`;

}

searchBtn.addEventListener("click",()=>{

const city=cityInput.value.trim();

if(city===""){

alert("Please enter a city");

return;

}

getWeather(city);

});

cityInput.addEventListener("keypress",(event)=>{

if(event.key==="Enter"){

searchBtn.click();

}

});

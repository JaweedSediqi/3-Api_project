// bffd6a3f45cb329e8cf4d8c149cf531e
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api_key = 'bffd6a3f45cb329e8cf4d8c149cf531e';
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const img = document.getElementById('img');
async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    if(response.status == 404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
        const data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
        if (data.weather[0].main == "Clouds") {
            img.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            img.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            img.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Mist") {
            img.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            img.src = "images/drizzle.png";
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
    }
   
}
btn.addEventListener('click', () => {
    checkWeather(input.value);
})

const API_KEY = "dd4bece55fa3b0e33ba2448331556968";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const cityC = document.querySelector("#weather span:first-child");
        const weatherC = document.querySelector("#weather span:last-child");
        const temp = data.main.temp
        const city = data.name;
        const weather = data.weather[0].main;
        cityC.innerText = city;
        weatherC.innerText = `${weather} ${temp}`;
    });
}

function onGeoError() {
    alert("We can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



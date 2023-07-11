async function getWeatherData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fad787c82amsh842c451e8ba64d4p13b3c9jsn1916ed7e46a6',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        // Update HTML elements with data from API
        const humidityElement = document.querySelector('#hh1');
        const temperatureElement = document.querySelector('#temp');
        const windElement = document.querySelector("#wih1");//to change values in wind speed
        const cityElement = document.querySelector('#ch1');


        humidityElement.textContent = result.humidity + '%';
        temperatureElement.textContent = result.temp + '°C';
        windElement.textContent = result.wind_speed + 'km/hr';
        cityElement.textContent = city;
    } catch (error) {
        console.error(error);
    }
}

const searchButton = document.querySelector('.search-container button');
const cityInput = document.querySelector('.search-container input');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    getWeatherData(city);
});

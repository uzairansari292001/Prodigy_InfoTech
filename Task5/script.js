const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const getWeatherButton = document.getElementById('getWeather');
const weatherResult = document.getElementById('weatherResult');

getWeatherButton.addEventListener('click', () => {
    const location = document.getElementById('location').value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Location not found');
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            const weatherHTML = `
                <h2>Weather in ${name}</h2>
                <p>Temperature: ${main.temp} °C</p>
                <p>Conditions: ${weather[0].description}</p>
            `;
            weatherResult.innerHTML = weatherHTML;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}

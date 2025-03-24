const apiKey = '194d40f6e033f574606aa6ace66920c6'; // Replace with your API key

// Set background when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"; // Dark blue-violet gradient
});

async function getWeather() {
    const searchInput = document.getElementById('search').value;
    if (!searchInput) {
        alert('Please enter a city, ZIP code, or coordinates.');
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        
        if (!weatherResponse.ok) {
            throw new Error('Weather data not found');
        }

        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function displayWeather(weatherData) {
    const resultDiv = document.getElementById('weather-result');
    
    resultDiv.innerHTML = `
        <br>
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <br>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}

const apiKey = '194d40f6e033f574606aa6ace66920c6'; // Using the API Key I got from https://openweathermap.org/

// Set background when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"; // Dark blue-violet gradient
});

async function getWeather() {
    const searchInput = document.getElementById('search').value;
    if (!searchInput) {
        alert('Please enter a city or country to search.');
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
        <h2>Currently In ${weatherData.name}, ${weatherData.sys.country}:</h2>
        <br>
        <p><b>Temperature:</b> ${weatherData.main.temp}°C</p>
        <p><b>Humidity:</b> ${weatherData.main.humidity}%</p>
        <p><b>Wind Speed:</b> ${weatherData.wind.speed} m/s</p>
        <br>
        </p><b>Brief Weather Description:</b> ${weatherData.weather[0].description}</p>
    `;
}

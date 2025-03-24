const apiKey = '194d40f6e033f574606aa6ace66920c6'; // Replace with your API key

// Set background when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background = "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"; // Dark blue-violet gradient
});

async function getWeather() {
    const searchInput = document.getElementById('search').value;
    if (!searchInput) {
        alert('Please enter a city or country');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const resultDiv = document.getElementById('weather-result');
    resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <br>
        <br>
        <p>Temperature: ${data.main.temp}°C</p>
        <br>
        <p>Humidity: ${data.main.humidity}%</p>
        <br>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <br>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

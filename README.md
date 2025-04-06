# Playing Around with APIs: Weather Dashboard Application

🎥 Link to demo video: https://bit.ly/weatherappdemo

This is a simple weather web application that uses the [OpenWeatherMap API](https://openweathermap.org/api) to display real-time weather data based on city names. The application was developed using HTML, CSS, and JavaScript. To run it locally, clone the repository, navigate to the project folder, and open `index.html` in your browser. Ensure you generate your own API key from OpenWeatherMap and add it securely to the script.

For deployment, the app files were uploaded to `/var/www/html/playing_around_with_APIs/weather_dashboard` on two Ubuntu web servers (Web01 and Web02). A third server was configured as a load balancer using Nginx. The load balancer config was updated under `/etc/nginx/sites-available/load_balancer` with an upstream block pointing to the IP addresses of the two web servers. After linking it to `sites-enabled` and ensuring Nginx was running on all servers, the app became accessible via the load balancer’s public IP. Functionality was tested and confirmed from different devices to ensure balanced request routing.

Challenges included configuring Nginx to avoid HTTPS redirection, resolving 403/404 errors due to incorrect root paths, and stopping HAProxy (which conflicted on port 80). These were resolved by correcting file paths, adjusting firewall settings, and ensuring only Nginx listened on port 80. 

Special thanks to [OpenWeatherMap](https://openweathermap.org/api) for their free weather data API. No external libraries were used.

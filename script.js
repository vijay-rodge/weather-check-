document.getElementById("cityInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stops new line in textarea
        fetchWeather();         
    }
});


function fetchWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `https://goweather.xyz/weather/${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let output = "";

            // Current weather
            output += "<h3>Current Weather</h3>";
            output += "Temperature: " + data.temperature + "<br>";
            output += "Wind: " + data.wind + "<br>";
            output += "Description: " + data.description + "<br><br>";

            // 3-day forecast
            output += "<h3>3 Day Forecast</h3>";

            output += "Day 1: " + data.forecast[0].temperature +
                      ", Wind: " + data.forecast[0].wind + "<br>";

            output += "Day 2: " + data.forecast[1].temperature +
                      ", Wind: " + data.forecast[1].wind + "<br>";

            output += "Day 3: " + data.forecast[2].temperature +
                      ", Wind: " + data.forecast[2].wind + "<br>";

            document.getElementById("weather").innerHTML = output;

            console.log("SUCCESS");
        })
        .catch(error => {
            console.log("ERROR", error);
        });
}

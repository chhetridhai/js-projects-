const cityInput = document.getElementById("city-input");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherInfo = document.getElementById("weather-info");
const cityNameDisplay = document.getElementById("city-name");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const errorMessage = document.getElementById("error-message"); 

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      // If the response is not OK, parse the JSON and throw an error
      if (!response.ok) {  
        return response.json().then((err) => {throw new Error(err.message)}); // Throw API error
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      cityNameDisplay.innerText = city;
      temperatureDisplay.textContent = `Temperature: ${data.main.temp} °C`;
      descriptionDisplay.textContent = `Description: ${data.weather[0].description}`; 
      weatherInfo.classList.remove("hidden"); // Use classList for better practice
      errorMessage.textContent = "";       // Clear any previous error messages
    })
    .catch(error => {
      console.error("Error:", error);  
      //errorMessage.textContent = error.message; // Display the error message to the user
      console.log(error);
      console.log(error.message);
      
      
      errorMessage.classList.remove("hidden")
      weatherInfo.classList.add("hidden"); // Hide the weather info if there's an error
    });
});

// making the same project using async and await
const axios = require("axios");

const getWeather = async (city) => {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    if (response.data.error) {
      return { error: response.data.error.info };
    }
    return {
      location: response.data.location.name,
      temperature: response.data.current.temperature,
      description: response.data.current.weather_descriptions[0],
    };
  } catch (error) {
    return { error: "Unable to fetch weather data." };
  }
};

module.exports = getWeather;

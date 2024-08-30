const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHERSTACK_API_KEY = "6431c1fe821c66172d7df0bab60ddc9a"; // Directly include the key here

app.get("/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: "Please provide a city" });
  }

  try {
    const response = await axios.get(`http://api.weatherstack.com/current`, {
      params: {
        access_key: WEATHERSTACK_API_KEY,
        query: city,
      },
    });

    if (response.data.error) {
      return res.status(404).json({ error: "City not found" });
    }

    const weatherData = response.data.current;
    res.json({
      city: response.data.location.name,
      temperature: weatherData.temperature,
      description: weatherData.weather_descriptions[0],
      wind_speed: weatherData.wind_speed,
      humidity: weatherData.humidity,
      feelslike: weatherData.feelslike,
      observation_time: weatherData.observation_time,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

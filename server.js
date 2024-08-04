const express = require("express");
const getWeather = require("./weather");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send({ error: "You must provide a city name." });
  }

  const weatherData = await getWeather(city);
  if (weatherData.error) {
    return res.status(500).send({ error: weatherData.error });
  }

  res.send(weatherData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

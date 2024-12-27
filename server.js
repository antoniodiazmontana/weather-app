const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "[YOUR_API_KEY_HERE]";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.render("index", { weather: response.data, error: null });
  } catch (error) {
    res.render("index", { weather: null, error: "Error obtaining weather data. Check your API key" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

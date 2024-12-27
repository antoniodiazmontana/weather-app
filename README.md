# Weather App

A modern and user-friendly weather application built with Node.js, Express, and EJS. This app allows users to search for real-time weather conditions in any city worldwide using the OpenWeatherMap API.

## Features

- Search weather by city name.
- Display current temperature, weather condition, and city information.
- Responsive and aesthetically pleasing user interface.
- Error handling for invalid city names or server issues.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS (embedded), EJS (template engine)
- **API**: OpenWeatherMap API

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```env
     API_KEY=your_api_key_here
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

1. On the homepage, enter the name of a city in the search bar.
2. Click the "Get Weather" button to retrieve the weather information.
3. If successful, the page will display:
   - City name
   - Current temperature (in Celsius)
   - Weather condition (e.g., sunny, cloudy, etc.)
4. If there is an error (e.g., invalid city name), an error message will be displayed.

## Project Structure

```plaintext
weather-app/
├── views/
│   └── index.ejs      # Main template for rendering the UI
├── server.js          # Application server
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Improvements

Here are some potential enhancements for the application:

1. **Environment Variables**: Move the API key to a `.env` file for improved security.
2. **Caché**: Implement caching to optimize repeated API calls for the same city.
3. **Internationalization**: Add support for multiple languages.
4. **Responsive Design**: Further refine the UI for better compatibility with smaller devices.
5. **Styling**: Externalize CSS to a dedicated file for cleaner code and easier maintenance.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for API requests.
- [EJS](https://ejs.co/): Embedded JavaScript templates for server-side rendering.

## API Reference

This app uses the [OpenWeatherMap API](https://openweathermap.org/api):

- Base URL: `http://api.openweathermap.org/data/2.5/weather`
- Query Parameters:
  - `q`: City name (e.g., `London`)
  - `appid`: Your API key
  - `units`: Unit system (e.g., `metric` for Celsius)

Example:
```url
http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=your_api_key&units=metric
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API.
- Node.js and Express communities for robust backend tools.
- EJS for simplifying template rendering.

---

Feel free to fork this repository and contribute to the project!


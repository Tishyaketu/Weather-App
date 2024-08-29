# Weather App

This Weather App is a React-based web application that allows users to check current weather conditions.

## Features

- Search for weather by city name
- Display current weather conditions including temperature, feels like temperature, humidity, and wind speed
- Responsive design using Material-UI components

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have a Windows/Linux/Mac machine.
* You have read [OpenWeatherMap API documentation](https://openweathermap.org/api).

## Installing Weather App

To install Weather App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Navigate to the project directory:
   ```
   cd weather-app
   ```
3. Install the dependencies:
   ```
   yarn install
   ```

## Configuring the app

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env` file in the root of your project.
3. Add your API key to the `.env` file:
   ```
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

## Using Weather App

To use Weather App, follow these steps:

1. Start the development server:
   ```
   yarn start
   ```
2. Open your web browser and visit `http://localhost:3000`
3. Enter a city name in the search box or allow the app to use your current location.

## Contributing to Weather App

To contribute to Weather App, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

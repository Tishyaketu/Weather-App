import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@material-ui/core';
import { getWeather, getForecast } from './services/weatherService';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import InfoButton from './components/InfoButton';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async () => {
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
      // const forecastData = await getForecast(city);
      // setForecast(forecastData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Weather App
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
      {weather && <WeatherDisplay weather={weather} />}
      {forecast && <ForecastDisplay forecast={forecast} />}
      <InfoButton />
    </Container>
  );
}

export default App;
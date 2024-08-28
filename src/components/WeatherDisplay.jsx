import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const getWeatherIcon = (iconCode) => {
  switch (iconCode) {
    case '01d':
    case '01n':
      return <WiDaySunny size={50} />;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <WiCloudy size={50} />;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return <WiRain size={50} />;
    case '11d':
    case '11n':
      return <WiThunderstorm size={50} />;
    case '13d':
    case '13n':
      return <WiSnow size={50} />;
    case '50d':
    case '50n':
      return <WiFog size={50} />;
    default:
      return <WiDaySunny size={50} />;
  }
};

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <Card style={{ marginTop: '20px' }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {getWeatherIcon(weather.weather[0].icon)}
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {weather.name}, {weather.sys.country}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" gutterBottom>
          {weather.weather[0].description}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">
                Temperature: {Math.round(weather.main.temp)}°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">
                Feels like: {Math.round(weather.main.feels_like)}°C
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">
                Humidity: {weather.main.humidity}%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Typography variant="h6">
                Wind: {weather.wind.speed} m/s
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
// src/components/WeatherDisplay.js
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const WeatherDisplay = ({ weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {weather.name}
        </Typography>
        <Typography color="textSecondary">
          Temperature: {weather.main.temp}°F
        </Typography>
        <Typography color="textSecondary">
          Feels like: {weather.main.feels_like}°F
        </Typography>
        <Typography color="textSecondary">
          Description: {weather.weather[0].description}
        </Typography>
        <Typography color="textSecondary">
          Humidity: {weather.main.humidity}%
        </Typography>
        <Typography color="textSecondary">
          Wind Speed: {weather.wind.speed} mi/hr
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
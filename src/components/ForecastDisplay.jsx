// src/components/ForecastDisplay.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const ForecastDisplay = ({ forecast }) => {
  const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          5-Day Forecast
        </Typography>
        <Grid container spacing={2}>
          {dailyForecasts.map((day, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography color="textSecondary">
                {new Date(day.dt * 1000).toLocaleDateString()}
              </Typography>
              <Typography color="textSecondary">
                {day.main.temp}°C
              </Typography>
              <Typography color="textSecondary">
                {day.weather[0].description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ForecastDisplay;
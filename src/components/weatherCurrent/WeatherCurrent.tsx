import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button } from "../button";
import LocationService from "../../services/location/LocationService";

const WeatherCurrent = () => {
  const [loading, setLoading] = useState(false);
  const navitagion = useNavigation();

  const handleFetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const position = await LocationService.getCurrentPosition();
      navitagion.navigate("Weather", position);
    } catch (e) {}
    setLoading(false);
  }, [navitagion]);

  return (
    <Button
      label="Weather at my position"
      onPress={handleFetchWeather}
      testID="weather-current"
      loading={loading}
    />
  );
};

export default WeatherCurrent;

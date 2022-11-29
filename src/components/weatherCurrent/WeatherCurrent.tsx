import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import LocationService from "../../services/location/LocationService";

const WeatherCurrent = () => {
  const navitagion = useNavigation();

  const handleFetchWeather = useCallback(async () => {
    const position = await LocationService.getCurrentPosition();
    navitagion.navigate("Weather", position);
  }, [navitagion]);

  return (
    <Button label="aaa" onPress={handleFetchWeather} testID="weather-current" />
  );
};

export default WeatherCurrent;

import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button } from "../button";
import LocationService from "../../services/location/LocationService";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles/generalStyles/constans";

const WeatherCurrent = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navitagion = useNavigation();

  const handleFetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const position = await LocationService.getCurrentPosition();
      navitagion.navigate("Weather", position);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  }, [navitagion]);

  return (
    <Button
      label="Weather at my position"
      onPress={handleFetchWeather}
      testID="weather-current"
      loading={loading}
      style={error && styles.error}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    borderColor: Colors.ERROR,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default WeatherCurrent;

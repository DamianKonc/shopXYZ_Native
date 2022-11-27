import { WeatherAppScreen } from "../weatherAppScreen";
import WeatherNavigation from "../WeatherNavigation";
import { WeatherScreen } from "../weatherScreen";

import { View } from "react-native";
import { render, waitFor } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

jest.mock("../weatherAppScreen/WeatherAppScreen", () => jest.fn());
jest.mock("../weatherScreen/WeatherScreen", () => jest.fn());

describe("WeatherNavigation", () => {
  test("Should render WeatherAppScreen", async () => {
    (WeatherAppScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />
    );
    const wrapper = render(<WeatherNavigation />);

    await waitFor(() => {
      wrapper.getByTestId("mock-home-screen");
    });
  });

  test('Should render weatherScreen on "weather" route', async () => {
    (WeatherAppScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();

      useEffect(() => {
        navigation.navigate("Weather");
      }, [navigation]);

      return null;
    });

    (WeatherScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-weather-screen" />
    );
    const wrapper = render(<WeatherNavigation />);

    await waitFor(() => {
      wrapper.getByTestId("mock-weather-screen");
    });
  });
});

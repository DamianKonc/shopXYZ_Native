import { render } from "@testing-library/react-native";
import { View } from "react-native";
import WeatherCoordinates from "../../components/weatherCoordinates/WeatherCoordinates";
import WeatherCurrent from "../../components/weatherCurrent/WeatherCurrent";
import { WeatherAppScreen } from "../weatherAppScreen";

jest.mock("../../components/weatherCoordinates/WeatherCoordinates", () =>
  jest.fn().mockReturnValue(null)
);

jest.mock("../../components/weatherCurrent/WeatherCurrent", () =>
  jest.fn().mockReturnValue(null)
);

describe("WeatherAppScreen", () => {
  test("Should render correctly", () => {
    const wrapper = render(<WeatherAppScreen />);
    wrapper.getByTestId("WeatherAppScreen");
  });

  describe("Title section", () => {
    beforeEach(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(946684800000); //Saturday, 01 January 2000 00:00 UTC
    });
    afterEach(() => {
      jest.useRealTimers();
    });

    test("Should contain current date", () => {
      const wrapper = render(<WeatherAppScreen />);
      wrapper.getByText("Jan 01, 2000");
    });

    test("Should contain current day", () => {
      const wrapper = render(<WeatherAppScreen />);
      wrapper.getByText("Saturday");
    });
  });

  test("Should contain a section to get current weather", () => {
    (WeatherCurrent as jest.Mock).mockReturnValue(
      <View testID="mock-weather-current"></View>
    );
    const wrapper = render(<WeatherAppScreen />);
    wrapper.getByTestId("mock-weather-current");
  });

  test("Should contain a divider", () => {
    const wrapper = render(<WeatherAppScreen />);
    wrapper.getByTestId("weatherAppScreen-divider");
  });

  test("Should contain a section to get coordinates", () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(
      <View testID="mock-coordinates-current"></View>
    );
    const wrapper = render(<WeatherAppScreen />);
    wrapper.getByTestId("mock-coordinates-current");
  });
});

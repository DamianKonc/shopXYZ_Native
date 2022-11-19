import { render } from "@testing-library/react-native";
import { WeatherAppScreen } from "../WeatherAppScreen";

describe("WeatherAppScreen", () => {
  test("Should render correctly", () => {
    const wrapper = render(<WeatherAppScreen />);
    wrapper.getByTestId("WeatherAppScreen");
  });
});

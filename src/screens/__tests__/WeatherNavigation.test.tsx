import { WeatherAppScreen } from "../weatherAppScreen";
import WeatherNavigation from "../WeatherNavigation";

import { View } from "react-native";
import { render, waitFor } from "@testing-library/react-native";

jest.mock("../weatherAppScreen/WeatherAppScreen", () => jest.fn());

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
});

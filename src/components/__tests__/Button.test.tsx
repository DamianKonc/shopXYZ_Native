import { render } from "@testing-library/react-native";
import { Button } from "../button";

describe("Button", () => {
  test("should render correctly", () => {
    const wrapper = render(<Button />);
    wrapper.getByTestId("button");
  });
});

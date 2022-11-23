import React from "react";
import { render } from "@testing-library/react-native";
import App from "../app/App";

describe("App", () => {
  test("Should render correctly", () => {
    render(<App />);
  });
});

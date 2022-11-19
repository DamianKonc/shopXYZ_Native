import React from "react";
import renderer from "react-test-renderer";
import App from "../screens/app/App";

describe("App", () => {
  test("Should render correctly", () => {
    renderer.create(<App />);
  });
});

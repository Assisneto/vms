import React from "react";
import { Home } from "./index";
import { withProviders } from "@utils/withProviders";

describe("<Home/>", () => {
  it("renders correctly", () => {
    const { getByText } = withProviders(<Home />);
    expect(getByText("vms")).toBeTruthy();
  });
});

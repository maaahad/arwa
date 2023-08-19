import { applyResponsiveCSS, getResponsiveCSSPropertyValue } from ".";
import { Theme } from "../themes";
import { BreakpointTokens } from "../../tokens";

describe("responsiveness", () => {
  test("getResponsiveCSSPropertyValue", () => {
    expect(getResponsiveCSSPropertyValue(100)).toBe("100px");
    expect(getResponsiveCSSPropertyValue("100%")).toBe("100%");
  });

  test("should get correct responsive CSS decleration", () => {
    const got1 = applyResponsiveCSS({
      theme: Theme.Light,
      width: [10, 20, 30, 40, 50],
      height: ["100px", 500, "100%"],
    });

    const got2 = applyResponsiveCSS({
      theme: Theme.Light,
      width: undefined,
      height: ["100px", 500, "100%"],
    });

    expect(got1).toMatchSnapshot();
    expect(got2).toMatchSnapshot();
  });
});

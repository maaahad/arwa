import { applyResponsiveness, getResponsiveCSSPropertyValue } from ".";
import { Theme } from "../themes";
import { BreakpointTokens } from "../../tokens";

describe("responsiveness", () => {
  test("getResponsiveCSSPropertyValue", () => {
    expect(getResponsiveCSSPropertyValue(100)).toBe("100px");
    expect(getResponsiveCSSPropertyValue("100%")).toBe("100%");
  });

  test("should get correct responsive CSS decleration", () => {
    const got = applyResponsiveness({
      theme: Theme.Light,
      width: [10, 20, 30, 40, 50],
      height: ["100px", 500, "100%"],
    });

    expect(got).toMatchSnapshot();
  });
});

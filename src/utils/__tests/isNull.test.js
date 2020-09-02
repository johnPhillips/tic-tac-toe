import isNull from "../isNull";

describe("isNull", () => {
  it("returns true if passed a null value", () => {
    expect(isNull(null)).toBe(true);
  });

  it("returns false if passed a non-null value", () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull("string")).toBe(false);
    expect(isNull(123)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
  });
});

import { getTotalTip } from "../calculate";

describe("Calculations Utils", () => {
  describe("get the total of tip from a bill", () => {
    it("returns the tip amount", () => {
       expect(getTotalTip(1000, 10)).toBe(100);
       expect(getTotalTip(500, 10)).toBe(50);
       expect(getTotalTip(500, 0)).toBe(0);
    });

    it("returns zero for error handling", () => {
      expect(getTotalTip(1000)).toBe(0);
      expect(getTotalTip(null, 10)).toBe(0);
      expect(getTotalTip([], 10)).toBe(0);
      expect(getTotalTip({}, 10)).toBe(0);
      expect(getTotalTip(100, undefined)).toBe(0);
      expect(getTotalTip(10, null)).toBe(0);
      expect(getTotalTip(10, [])).toBe(0);
      expect(getTotalTip(10, {})).toBe(0);
      expect(getTotalTip(undefined, {})).toBe(0);
    });
  });
});
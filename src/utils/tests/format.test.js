import { formatCurrency } from '../format';

describe("Formatting Utils", () => {
  describe("should format currency", () => {
    it("returns a formatted string", () => {
      expect(formatCurrency(1000)).toBe('£1,000');
      expect(formatCurrency(1000.15)).toBe('£1,000.15');
      expect(formatCurrency(2000000)).toBe('£2,000,000');
      expect(formatCurrency(10.12)).toBe('£10.12');
      expect(formatCurrency(10.10)).toBe('£10.10');
      expect(formatCurrency(10.00)).toBe('£10');
    });

    it("returns an empty string for error handling", () => {
      expect(formatCurrency()).toEqual('');
      expect(formatCurrency('asdasd')).toEqual('');
      expect(formatCurrency([])).toEqual('');
      expect(formatCurrency({})).toEqual('');
      expect(formatCurrency(true)).toEqual('');
    });
  });
});
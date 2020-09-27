jest.mock("@/i18n/index", () => {
  return {
    getI18n: () => ({ t: (message: String) => message })
  };
});
import {
  greater,
  smaller,
  smallerEqual,
  greaterEqual,
  stringNotEmpty,
  required
} from "@/tools/formRules";

describe("formRules.ts", () => {
  it("test greater,", () => {
    const border = 2;
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = greater(2, violationMessage);
    expect(testFn(3)).toBe(true);
    expect(testFn(2)).toBe(violationMessage);
    expect(testFn(1)).toBe(violationMessage);
  });
  it("test smaller,", () => {
    const border = 2;
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = smaller(2, violationMessage);
    expect(testFn(1)).toBe(true);
    expect(testFn(2)).toBe(violationMessage);
    expect(testFn(3)).toBe(violationMessage);
  });
  it("test smallerEqual,", () => {
    const border = 2;
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = smallerEqual(2, violationMessage);
    expect(testFn(1)).toBe(true);
    expect(testFn(2)).toBe(true);
    expect(testFn(3)).toBe(violationMessage);
  });
  it("test greaterEqual,", () => {
    const border = 2;
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = greaterEqual(2, violationMessage);
    expect(testFn(1)).toBe(violationMessage);
    expect(testFn(2)).toBe(true);
    expect(testFn(3)).toBe(true);
  });
  it("test stringNotEmpty,", () => {
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = stringNotEmpty(violationMessage);
    expect(testFn("")).toBe(violationMessage);
    expect(testFn("2")).toBe(true);
  });
  it("test required", () => {
    const violationMessage = '345434dsewrwer3424asd3243423§"$"§3';
    const testFn = required(violationMessage);
    expect(testFn(null)).toBe(violationMessage);
    expect(testFn(undefined)).toBe(violationMessage);
    expect(testFn("2")).toBe(true);
  });
});

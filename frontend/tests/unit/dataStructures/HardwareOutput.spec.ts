import HardwareOutput from "@/dataStructures/HardwareOutput";

describe("dataStructure HardwareOutput class", () => {
  it("test if string or number values end up in number values,", () => {
    const ho = new HardwareOutput("name", 1, 0, 100, 100, 1, 100);

    const values: any = [1, "1"];
    const typesafeAttributes = [
      "maxValue",
      "minValue",
      "pwmFrequency",
      "displayedMaxValue",
      "displayedMinValue",
      "displayedSteps",
      "value"
    ];
    values.forEach((value: any) => {
      ho.maxValue = value;
      expect(typeof ho.maxValue).toBe("number");
    });
    values.forEach((value: any) => {
      ho.minValue = value;
      expect(typeof ho.minValue).toBe("number");
    });
    values.forEach((value: any) => {
      ho.pwmFrequency = value;
      expect(typeof ho.pwmFrequency).toBe("number");
    });
    values.forEach((value: any) => {
      ho.displayedMaxValue = value;
      expect(typeof ho.displayedMaxValue).toBe("number");
    });
    values.forEach((value: any) => {
      ho.displayedMinValue = value;
      expect(typeof ho.displayedMinValue).toBe("number");
    });
    values.forEach((value: any) => {
      ho.displayedSteps = value;
      expect(typeof ho.displayedSteps).toBe("number");
    });
    values.forEach((value: any) => {
      ho.value = value;
      expect(typeof ho.value).toBe("number");
    });
  });
  it("test rage errors of value property,", () => {
    const ho = new HardwareOutput("name", 1, 0.2, 100, 100, 1, 100);
    expect(() => (ho.value = 10)).toThrow(RangeError);
    expect(() => (ho.value = 0.1)).toThrow(RangeError);
    expect(() => (ho.value = 1)).not.toThrow(RangeError);
    expect(() => (ho.value = 0.2)).not.toThrow(RangeError);
  });
});

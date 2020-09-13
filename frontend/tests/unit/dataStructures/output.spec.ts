import { Actuator } from "@/dataStructures/Output";

const dS = {
  type: "servo",
  name: "Head-Yaw",
  outputs: [
    {
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    }
  ]
};

describe("dataStructure Actuator class", () => {
  it("test static fromPlainObject,", () => {
    const obj = Actuator.fromPlainObject(dS);
    expect(obj.type).toBe("servo");
    expect(obj.name).toBe("Head-Yaw");
    expect(obj.outputs.length).toBe(1);
  });

  it("test static fromPlainObject typeChecking,", () => {
    Object.keys(dS).forEach(key => {
      const brokenPlainObject: any = JSON.parse(JSON.stringify(dS));
      delete brokenPlainObject[key];
      expect(() => Actuator.fromPlainObject(brokenPlainObject)).toThrowError();
      try {
        Actuator.fromPlainObject(brokenPlainObject);
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
    Object.keys(dS.outputs[0]).forEach(key => {
      const brokenPlainObject: any = JSON.parse(JSON.stringify(dS));
      delete brokenPlainObject.outputs[0][key];
      expect(() => Actuator.fromPlainObject(brokenPlainObject)).toThrowError();
      try {
        Actuator.fromPlainObject(brokenPlainObject);
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
    });
  });

  it("test getValue and setValue,", () => {
    const actuator = Actuator.fromPlainObject(dS);
    const value = 0.7;
    actuator.setValue(0, value);
    expect(actuator.getValue(0)).toBe(value);
  });

  it("test maximum and minimum boundaries,", () => {
    const actuator = Actuator.fromPlainObject(dS);
    try {
      actuator.setValue(0, dS.outputs[0].maxValue + 0.1);
    } catch (e) {
      expect(e).toBeInstanceOf(RangeError);
    }
    expect(() => actuator.setValue(0, dS.outputs[0].maxValue + 0.1)).toThrow();
    try {
      actuator.setValue(0, dS.outputs[0].minValue - 0.1);
    } catch (e) {
      expect(e).toBeInstanceOf(RangeError);
    }
    expect(() => actuator.setValue(0, dS.outputs[0].minValue - 0.1)).toThrow();
  });
});

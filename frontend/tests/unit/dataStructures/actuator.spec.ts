import Actuator from "@/dataStructures/Actuator";
import HardwareOutput from "@/dataStructures/HardwareOutput";
const dS = {
  id: 1,
  type: "servo",
  name: "Head-Yaw",
  outputs: [
    {
      id: 11,
      name: " Output1",
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    },
    {
      id: 12,
      name: "Output2",
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    },
    {
      id: 13,
      name: "Output3",
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
    expect(obj.outputs.length).toBe(3);
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

  it("test displayed value mapping,", () => {
    const actuator = Actuator.fromPlainObject(dS);
    const value = 0.5;
    actuator.setValue(0, value);
    expect(actuator.getDisplayedValue(0)).toBe(50);
  });

  it("test displayed value mapping,", () => {
    const actuator = Actuator.fromPlainObject(dS);
    const value = 0.5;
    actuator.setValue(0, value);
    expect(actuator.getDisplayedValue(0)).toBe(50);
  });

  it("test deleteOutput method deletes correct position", () => {
    const actuator = Actuator.fromPlainObject(dS);
    const oldLength = actuator.outputs.length;
    const testID = actuator.outputs[2].id;
    actuator.delteOutput(1);
    expect(actuator.outputs.length).toBe(oldLength - 1);
    expect(actuator.outputs[1].id).toBe(testID);
  });

  it("test addingOutput method ", () => {
    const actuator = Actuator.fromPlainObject(dS);
    const oldLength = actuator.outputs.length;
    const newID = 2222;
    actuator.addOutput(
      new HardwareOutput(2222, "test", 1, 0, 100, 100, 0, 100)
    );
    expect(actuator.outputs.length).toBe(oldLength + 1);
    expect(actuator.outputs[actuator.outputs.length - 1].id).toBe(newID);
  });
});

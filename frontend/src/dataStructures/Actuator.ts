import HardwareOutput from "@/dataStructures/HardwareOutput";
export enum actuatorTypes {
  Servo = "servo",
  Led = "led",
  RgbLed = "rgbLed"
}
export default class Actuator {
  id: number;
  name: string;
  type: actuatorTypes;
  outputs: Array<HardwareOutput>;
  constructor(
    id: number,
    name: string,
    type: actuatorTypes,
    outputs: Array<HardwareOutput>
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.outputs = outputs;
  }
  public setValue(position: number, value: number): void {
    const output = this.outputs[position];
    if (value < output.minValue || value > output.maxValue) {
      throw new RangeError(
        `Value has to be in the defined Rage of this output ${output.minValue} - ${output.maxValue} value: ${value} `
      );
    }
    output.value = value;
  }
  public getValue(position: number): number {
    return this.outputs[position].value;
  }
  public getDisplayedValue(position: number): number {
    const {
      value,
      minValue,
      maxValue,
      displayedMaxValue,
      displayedMinValue
    } = this.outputs[position];
    // Transform current value to

    const normalisedValue = (value - minValue) / (maxValue - minValue);
    return (
      normalisedValue * (displayedMaxValue - displayedMinValue) +
      displayedMinValue
    );
  }
  public delteOutput(index: number) {
    this.outputs.splice(index, 1);
  }
  public addOutput(output: HardwareOutput) {
    this.outputs.push(output);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromPlainObject(plainObject: any): Actuator {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const outputs = plainObject.outputs.map((output: any) => {
      // Typechecking all parameters
      if (
        typeof output.id !== "number" ||
        typeof output.name !== "string" ||
        typeof output.maxValue !== "number" ||
        typeof output.minValue !== "number" ||
        typeof output.pwmFrequency !== "number" ||
        typeof output.displayedMaxValue !== "number" ||
        typeof output.displayedMinValue !== "number" ||
        typeof output.displayedSteps !== "number"
      ) {
        throw TypeError(
          `Wrong type in output array during instantiating of Actuator ${JSON.stringify(
            output
          )}`
        );
      }

      return new HardwareOutput(
        output.id,
        output.name,
        output.maxValue,
        output.minValue,
        output.pwmFrequency,
        output.displayedMaxValue,
        output.displayedMinValue,
        output.displayedSteps
      );
    });
    if (
      !Array.isArray(plainObject.outputs) ||
      typeof plainObject.id !== "number" ||
      typeof plainObject.type !== "string" ||
      typeof plainObject.name !== "string"
    ) {
      throw TypeError(
        `Wrong type during instantiating Actuator ${JSON.stringify(
          plainObject
        )}`
      );
    }
    return new Actuator(
      plainObject.id,
      plainObject.name,
      plainObject.type,
      outputs
    );
  }
}

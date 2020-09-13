export enum actuatorTypes {
  Servo = "servo",
  Led = "led",
  RgbLed = " rgbLed"
}
export class Output {
  name: string;
  maxValue: number;
  minValue: number;
  pwmFrequency: number;
  displayedMaxValue: number;
  displayedMinValue: number;
  displayedSteps: number;
  value: number;
  constructor(
    name = "",
    maxValue: number,
    minValue: number,
    pwmFrequency: number,
    displayedMaxValue: number,
    displayedMinValue: number,
    displayedSteps: number
  ) {
    this.name = name;
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.pwmFrequency = pwmFrequency;
    this.displayedMaxValue = displayedMaxValue;
    this.displayedMinValue = displayedMinValue;
    this.displayedSteps = displayedSteps;
    // set middle value as startvalue
    this.value = (maxValue - minValue) / 2 + minValue;
  }
}

export class Actuator {
  name: string;
  type: actuatorTypes;
  outputs: Array<Output>;
  constructor(name: string, type: actuatorTypes, outputs: Array<Output>) {
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
  static fromPlainObject(plainObject: any): Actuator {
    const outputs = plainObject.outputs.map((output: any) => {
      // Typechecking all parameters
      if (
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

      return new Output(
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
      typeof plainObject.type !== "string" ||
      typeof plainObject.name !== "string"
    ) {
      throw TypeError(
        `Wrong type during instantiating Actuator ${JSON.stringify(
          plainObject
        )}`
      );
    }
    return new Actuator(plainObject.name, plainObject.type, outputs);
  }
}

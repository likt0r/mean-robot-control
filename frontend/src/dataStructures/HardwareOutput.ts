export default class HardwareOutput {
  name: string;
  private _maxValue: number;
  private _minValue: number;
  private _pwmFrequency: number;
  private _displayedMaxValue: number;
  private _displayedMinValue: number;
  private _displayedSteps: number;
  private _value: number;
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
    this._maxValue = maxValue;
    this._minValue = minValue;
    this._pwmFrequency = pwmFrequency;
    this._displayedMaxValue = displayedMaxValue;
    this._displayedMinValue = displayedMinValue;
    this._displayedSteps = displayedSteps;
    // set middle value as startvalue
    this._value = (maxValue - minValue) / 2 + minValue;
  }
  private convertToNumber = (value: number | string) => {
    if (typeof value === "string") {
      const t = Number(value);
      if (isNaN(t))
        throw new TypeError(
          "Expect a number or string convertable to a number"
        );
      return t;
    }
    return value;
  };
  set maxValue(value: number) {
    this._maxValue = this.convertToNumber(value);
  }
  get maxValue(): number {
    return this._maxValue;
  }
  set minValue(value: number) {
    this._minValue = this.convertToNumber(value);
  }
  get minValue(): number {
    return this._minValue;
  }
  set pwmFrequency(value: number) {
    this._pwmFrequency = this.convertToNumber(value);
  }
  get pwmFrequency(): number {
    return this._pwmFrequency;
  }
  set displayedMaxValue(value: number) {
    this._displayedMaxValue = this.convertToNumber(value);
  }
  get displayedMaxValue(): number {
    return this._displayedMaxValue;
  }
  set displayedMinValue(value: number) {
    this._displayedMinValue = this.convertToNumber(value);
  }
  get displayedMinValue(): number {
    return this._displayedMinValue;
  }
  set displayedSteps(value: number) {
    this._displayedSteps = this.convertToNumber(value);
  }
  get displayedSteps(): number {
    return this._displayedSteps;
  }
  set value(value: number) {
    const t = this.convertToNumber(value);
    if (t > this._maxValue || t < this._minValue || t < 0) {
      throw new RangeError();
    }
    this._value = t;
  }
  get value(): number {
    return this._value;
  }
}

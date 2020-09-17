export default class HardwareOutput {
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

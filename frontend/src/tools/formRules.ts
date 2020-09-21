import { getI18n } from "@/i18n/index";
export function greater(border: number, message: string) {
  const translated = getI18n().t(message);
  return function(value: number) {
    return value > border || translated;
  };
}
export function smaller(border: number, message: string) {
  const translated = getI18n().t(message);
  return function(value: number) {
    return value < border || translated;
  };
}
export function smallerEqual(border: number, message: string) {
  const translated = getI18n().t(message);
  return function(value: number) {
    return value <= border || translated;
  };
}
export function greaterEqual(border: number, message: string) {
  const translated = getI18n().t(message);
  return function(value: number) {
    return value >= border || translated;
  };
}

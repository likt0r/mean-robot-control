import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import Vuetify from "vuetify";
import HardwareOutputComponent from "@/components/HardwareOutputComponent.vue";
import HardwareOutput from "@/dataStructures/HardwareOutput";

import VueI18n from "vue-i18n";
import { getI18n } from "@/i18n/index";
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueCompositionAPI);
const oD = new HardwareOutput(12, "head-yaw", 1, 0.2, 100, 100, 0, 100);

describe("HardwareOutputComponent.vue", () => {
  it("renders all values in its correct input", () => {
    const wrapper = mount(HardwareOutputComponent, {
      propsData: {
        name: oD.name,
        pwmFrequency: oD.pwmFrequency,
        maxValue: oD.maxValue,
        minValue: oD.minValue,
        displayedMaxValue: oD.displayedMaxValue,
        displayedMinValue: oD.displayedMinValue,
        displayedSteps: oD.displayedSteps
      },
      localVue: createLocalVue(),
      vuetify: new Vuetify({}),
      stubs: {}
    });

    expect((wrapper.vm.$refs.name as HTMLInputElement).value).toBe(oD.name);
    expect((wrapper.vm.$refs.maxValue as HTMLInputElement).value).toBe(
      oD.maxValue
    );
    expect((wrapper.vm.$refs.minValue as HTMLInputElement).value).toBe(
      oD.minValue
    );
    expect((wrapper.vm.$refs.pwmFrequency as HTMLInputElement).value).toBe(
      oD.pwmFrequency
    );
    expect((wrapper.vm.$refs.displayedMaxValue as HTMLInputElement).value).toBe(
      oD.displayedMaxValue
    );
    expect((wrapper.vm.$refs.displayedMinValue as HTMLInputElement).value).toBe(
      oD.displayedMinValue
    );
    expect((wrapper.vm.$refs.displayedSteps as HTMLInputElement).value).toBe(
      oD.displayedSteps
    );
  });
  it("Test input rules are working correct", () => {
    const wrapper = mount(HardwareOutputComponent, {
      propsData: {
        name: oD.name,
        pwmFrequency: oD.pwmFrequency,
        maxValue: oD.maxValue,
        minValue: oD.minValue,
        displayedMaxValue: oD.displayedMaxValue,
        displayedMinValue: oD.displayedMinValue,
        displayedSteps: oD.displayedSteps
      },
      localVue: createLocalVue(),
      stubs: {},
      i18n: getI18n()
    });

    // greaterMinValue,
    // smallerMaxValue,
    // greaterDisplayedMinValue,
    // smallerDisplayedMaxValue
    expect(typeof (wrapper.vm as any).greaterZero(-1)).toBe("string");
    expect(typeof (wrapper.vm as any).greaterZero(0)).toBe("string");
    expect((wrapper.vm as any).greaterZero(1)).toBe(true);

    expect(typeof (wrapper.vm as any).greaterEqualZero(-1)).toBe("string");
    expect((wrapper.vm as any).greaterEqualZero(1)).toBe(true);
    expect((wrapper.vm as any).greaterEqualZero(1)).toBe(true);

    expect(typeof (wrapper.vm as any).smallerOne(2)).toBe("string");
    expect(typeof (wrapper.vm as any).smallerOne(1)).toBe("string");
    expect((wrapper.vm as any).smallerOne(-1)).toBe(true);

    expect(typeof (wrapper.vm as any).smallerEqualOne(2)).toBe("string");
    expect((wrapper.vm as any).smallerEqualOne(1)).toBe(true);
    expect((wrapper.vm as any).smallerEqualOne(-1)).toBe(true);

    expect(typeof (wrapper.vm as any).greaterMinValue(oD.minValue)).toBe(
      "string"
    );
    expect(typeof (wrapper.vm as any).greaterMinValue(oD.minValue - 1)).toBe(
      "string"
    );
    expect((wrapper.vm as any).greaterMinValue(oD.minValue + 1)).toBe(true);

    expect(typeof (wrapper.vm as any).smallerMaxValue(oD.maxValue)).toBe(
      "string"
    );
    expect(typeof (wrapper.vm as any).smallerMaxValue(oD.maxValue + 1)).toBe(
      "string"
    );
    expect((wrapper.vm as any).smallerMaxValue(oD.maxValue - 1)).toBe(true);
  });
});

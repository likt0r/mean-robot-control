import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import Vuetify from "vuetify";
import HardwareOutputComponent from "@/components/HardwareOutputComponent.vue";
import HardwareOutput from "@/dataStructures/HardwareOutput";
jest.mock("@/i18n/index", () => {
  return {
    getI18n: () => ({ t: (message: String) => message })
  };
});
Vue.use(Vuetify);
Vue.use(VueCompositionAPI);
const oD = new HardwareOutput(12, "head-yaw", 1, 0.2, 100, 100, 0, 100);

describe("ListSubItemHardwareOutput.vue", () => {
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
});

import Actuator, { actuatorTypes } from "@/dataStructures/Actuator";
import VueCompositionAPI from "@vue/composition-api";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";

import Vue from "vue";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import { getI18n } from "@/i18n";
import ListItemActuator from "@/components/ListItemActuator.vue";
import HardwareOutputComponent from "@/components/HardwareOutputComponent.vue";
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueCompositionAPI);
const i18n = getI18n();
const dS = {
  id: 1,
  type: "servo",
  name: "Head-Yaw",
  outputs: [
    {
      id: 11,
      name: "output 1",
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    },
    {
      id: 12,
      name: "output 2",
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    },
    {
      id: 13,
      name: "output 3",
      maxValue: 0.9,
      minValue: 0.1,
      pwmFrequency: 100,
      displayedMaxValue: 100,
      displayedMinValue: 0,
      displayedSteps: 100
    }
  ]
};

describe("ListItemActuator.vue", () => {
  it("renders all HardwareOutputComponents", () => {
    const wrapper = mount(ListItemActuator, {
      propsData: { data: Actuator.fromPlainObject(dS) },
      localVue: createLocalVue(),
      vuetify: new Vuetify({}),
      i18n,
      stubs: {}
    });
    expect(wrapper.findAllComponents(HardwareOutputComponent).length).toBe(3);
  });

  // it("delte one HardwareOutputComponent", done => {
  //   const wrapper = mount(ListItemActuator, {
  //     propsData: { data: Actuator.fromPlainObject(dS) },
  //     localVue: createLocalVue(),
  //     vuetify: new Vuetify({}),
  //     stubs: {}
  //   });
  //   // wrapper
  //   wrapper
  //     .findComponent(HardwareOutputComponent)
  //     .findComponent({
  //       ref: "delete"
  //     })
  //     .trigger("click");
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.findAllComponents(HardwareOutputComponent).length).toBe(2);
  //     done();
  //   });
  // });
});

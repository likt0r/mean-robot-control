import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import ActuatorOutput from "@/components/ActuatorOutput.vue";
import HardwareOutput from "@/dataStructures/HardwareOutput";

Vue.use(Vuetify);
const outputData = new HardwareOutput("head-yaw", 1, 0.2, 100, 100, 0, 100);

// describe("ActuatorOutput.vue", () => {
//   it("renders all values in its correct input", () => {
//     const wrapper = mount(ActuatorOutput, {
//       propsData: { data: outputData },
//       localVue: createLocalVue(),
//       vuetify: new Vuetify({})
//     });
//     const inputs = wrapper.find("input");
//     // expect(wrapper.find(".v-tab")).toHaveLength(2);
//     expect(inputs.text()).toBe(outputData.name);
//   });
// });

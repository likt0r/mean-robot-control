import Actuator, { actuatorTypes } from "@/dataStructures/Actuator";
import VueCompositionAPI from "@vue/composition-api";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
jest.mock("@/i18n/index", () => {
  return {
    getI18n: () => ({ t: (message: String) => message })
  };
});
import Vue from "vue";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import { getI18n } from "@/i18n";
import NewHardwareOutput from "@/components/NewHardwareOutput.vue";
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueCompositionAPI);
const i18n = getI18n();

describe("NewHardwareOutput.vue", () => {
  it("open on button click", next => {
    document.body.setAttribute("data-app", "true");
    const wrapper = mount(NewHardwareOutput, {
      localVue: createLocalVue(),
      vuetify: new Vuetify({}),
      i18n,
      stubs: {}
    });
    expect(document.body.querySelector(".v-dialog")).toBeFalsy();
    wrapper.findComponent({ ref: "openDialogButton" }).trigger("click");
    wrapper.vm.$nextTick(() => {
      wrapper.vm.$nextTick(() => {
        expect(document.body.querySelector(".v-dialog")).toBeTruthy();
        next();
      });
    });
  });

  // it("check input boundaries", () => {
  //   document.body.setAttribute("data-app", "true");
  //   const wrapper = mount(NewHardwareOutput, {
  //     localVue: createLocalVue(),
  //     vuetify: new Vuetify({}),
  //     i18n,
  //     stubs: {}
  //   });
  //   expect(
  //     wrapper.findComponent({ ref: "dialogContent" }).isVisible()
  //   ).toBeTruthy();
  // });

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

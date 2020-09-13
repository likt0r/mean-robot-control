import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import PortalVue from "portal-vue";
import Fragment from "vue-fragment";
import NavigationBar from "@/components/NavigationBar.vue";

Vue.use(PortalVue);
Vue.use(Fragment.Plugin);
Vue.use(Vuetify);

describe("NavigationBar.vue", () => {
  it("renders all tab items when passed", () => {
    const tabItems = ["tab1", "tab2", "tab3"];
    const wrapper = mount(NavigationBar, {
      propsData: { tabItems },
      localVue: createLocalVue(),
      vuetify: new Vuetify({}),
      stubs: {
        Fragment: true
      }
    });
    const tabs = wrapper.findAll(".v-tab");
    // expect(wrapper.find(".v-tab")).toHaveLength(2);
    expect(tabs.length).toBe(tabItems.length);
    tabItems.forEach((tab, index) => {
      expect(tabs.wrappers[index].text()).toBe(tab);
    });
  });
});

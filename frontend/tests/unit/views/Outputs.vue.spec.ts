import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import NavigationBar from "@/components/NavigationBar.vue";

Vue.use(Vuetify);
const tabItems = [
  {
    title: "tab1Text",
    route: "tab1"
  },
  {
    title: "tab2Text",
    route: "tab2"
  },
  {
    title: "tab3Text",
    route: "tab3"
  }
];
describe("NavigationBar.vue", () => {
  jest.mock("axios", () => ({
    get: Promise.resolve("value")
  }));

  it("renders all tab items when passed", () => {
    const wrapper = mount(NavigationBar, {
      propsData: { tabItems },
      localVue: createLocalVue(),
      vuetify: new Vuetify({}),
      stubs: {
        Fragment: true,
        routerLink: true,
        portalTarget: true
      }
    });
    const tabs = wrapper.findAll(".v-tab");
    // expect(wrapper.find(".v-tab")).toHaveLength(2);
    expect(tabs.length).toBe(tabItems.length);
    tabItems.forEach((tab, index) => {
      expect(tabs.wrappers[index].text()).toBe(tab.title);
      expect(tabs.wrappers[index].props("to")).toBe(tab.route);
    });
  });
});

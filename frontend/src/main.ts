import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { messages, defaultLocale } from "@/i18n";
import PortalVue from "portal-vue";
import Fragment from "vue-fragment";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(VueCompositionAPI);
Vue.use(PortalVue);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale
});
new Vue({
  router,
  store,
  i18n,
  vuetify: new Vuetify({}),
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import PortalVue from "portal-vue";
import Fragment from "vue-fragment";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { messages, defaultLocale } from "@/i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale
});

Vue.use(VueCompositionAPI);
Vue.use(PortalVue);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");

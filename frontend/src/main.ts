import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionAPI from "@vue/composition-api";
import PortalVue from "portal-vue";
import vuetify from "./plugins/vuetify";
import Fragment from "vue-fragment";

Vue.use(VueCompositionAPI);
Vue.use(PortalVue);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

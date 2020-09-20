<template>
  <v-app id="app">
    <portal-target name="navigation-drawer-portal">
      <!--
  This component is located in Navigationbar
  -->
    </portal-target>
    <navigation-bar :tab-items="tabItems" />
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent, ref } from "@vue/composition-api";

import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavigationBar
  },
  setup() {
    const tabItems = ref([
      {
        title: "postures",
        route: "/postures"
      },
      {
        title: "motions",
        route: "/motions"
      },
      {
        title: "inputs",
        route: "/inputs"
      },
      {
        title: "outputs",
        route: "/outputs"
      }
    ]);
    return { tabItems };
  }
});
</script>

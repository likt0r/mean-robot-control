<template>
  <v-app id="app">
    <portal-target name="navigation-drawer-portal">
      <!--
  This component is located in Navigationbar.vue
  -->
    </portal-target>
    <navigation-bar :tab-items="tabItems" />
    <v-main>
      <transition
        :name="transitionName"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view></router-view>
      </transition>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import NavigationBar from "@/components/NavigationBar.vue";
import usePageTransitions from "./compositions/pageTransitions";
export default defineComponent({
  name: "App",
  components: {
    NavigationBar
  },
  setup(_, { root }) {
    const tabItems = ref([
      {
        title: "postures",
        route: "/postures",
        icon: "inbox-full-outline"
      },
      {
        title: "motions",
        route: "/motions",
        icon: "state-machine"
      },
      {
        title: "inputs",
        route: "/inputs",
        icon: "inbox-arrow-down-outline"
      },
      {
        title: "outputs",
        route: "/outputs",
        icon: "inbox-arrow-up-outline"
      }
    ]);
    const {
      prevHeight,
      transitionName,
      enter,
      beforeLeave,
      afterEnter
    } = usePageTransitions(root.$router);
    return {
      tabItems,
      prevHeight,
      transitionName,
      enter,
      beforeLeave,
      afterEnter
    };
  }
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>

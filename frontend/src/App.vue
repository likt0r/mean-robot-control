<template>
  <v-app id="app">
    <portal-target name="navigation-drawer-portal">
      <!--
  This component is located in Navigationbar
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
const DEFAULT_TRANSITION = "fade";
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
    const prevHeight = ref(0);
    const transitionName = ref(DEFAULT_TRANSITION);
    function beforeLeave(element: any) {
      prevHeight.value = parseInt(getComputedStyle(element).height);
    }
    function enter(element: any) {
      const { height } = getComputedStyle(element);

      element.style.height = prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    }
    function afterEnter(element: any) {
      element.style.height = "auto";
    }
    root.$router.beforeEach((to, from, next) => {
      let newTransitionName =
        to.meta.transitionName || from.meta.transitionName;
      if (newTransitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        newTransitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      transitionName.value = newTransitionName || DEFAULT_TRANSITION;

      next();
    });

    return { tabItems, prevHeight, transitionName };
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

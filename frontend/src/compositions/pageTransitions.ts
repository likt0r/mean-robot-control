import { ref } from "@vue/composition-api";
import VueRouter, { Route } from "vue-router";

export default function usePageTransitions(router: VueRouter) {
  const DEFAULT_TRANSITION = "fade";
  const prevHeight = ref(0);
  const transitionName = ref(DEFAULT_TRANSITION);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function beforeLeave(element: any) {
    prevHeight.value = parseInt(getComputedStyle(element).height);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function enter(element: any) {
    const { height } = getComputedStyle(element);
    element.style.height = prevHeight.value;
    setTimeout(() => {
      element.style.height = height;
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function afterEnter(element: any) {
    element.style.height = "auto";
  }
  router.beforeEach((to: Route, from: Route, next: Function) => {
    let newTransitionName = to.meta.transitionName || from.meta.transitionName;
    if (newTransitionName === "slide") {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      newTransitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }

    transitionName.value = newTransitionName || DEFAULT_TRANSITION;

    next();
  });
  return { prevHeight, transitionName, beforeLeave, enter, afterEnter };
}

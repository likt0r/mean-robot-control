// Doesnt work when its placed here
import usePageTransition from "@/compositions/pageTransitions";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
Vue.use(VueCompositionAPI);
import VueRouter, { Route } from "vue-router";

describe("test pageTransition composition methods", () => {
  it("beforeLeave stores current page height,", () => {
    document.body.innerHTML = `<div id="#dummy" style="height:100px">
      </div>`;
    const { prevHeight, beforeLeave } = usePageTransition(new VueRouter());
    beforeLeave(document.body.firstChild);
  });

  it("after enter set height to auto,", async () => {
    const local = await import("@/compositions/pageTransitions");
    document.body.innerHTML = `<div id="#dummy" style="height:11px"></div>`;
    const { prevHeight, enter, afterEnter } = usePageTransition(
      new VueRouter()
    );
    afterEnter(document.body.firstChild);
    expect((document.body.firstChild as any).style.height).toBe("auto");
    // jest.runAllTimers();
    // expect(prevHeight.value).toBe(100);
  });
});

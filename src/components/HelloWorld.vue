<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This is my counter {{ state.counter }}</p>
    <h3>Installed CLI Plugins</h3>
    <button @click="inc">increment</button>
    <button @click="dec">decrement</button>
    <button @click="setCounter">reset</button>
    <p>This is my double counter {{ doubleCounter }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { ActionTypes, MutationTypes } from "@/store/types";
import { useStore } from "@/store";
export default defineComponent({
  name: "hello World",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const state = ref(store.state);

    const inc = () => {
      store.commit(MutationTypes.SET_COUNTER, store.state.counter + 1);
    };
    const dec = () => {
      store.commit(MutationTypes.SET_COUNTER, store.state.counter - 1);
    };
    const doubleCounter = computed(() => store.getters.doubledCounter);
    return {
      state,
      inc,
      dec,
      doubleCounter,
    };
  },
  methods: {
    setCounter(): void {
      this.$store.dispatch(ActionTypes.GET_COUNTER, undefined);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

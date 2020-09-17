<template> </template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  // type inference enabled
  props: {
    tabItems: Array
  },
  setup() {
    const drawer = ref(null);
    const tab = ref(null);
    return { drawer, tab };
  }
});
</script>

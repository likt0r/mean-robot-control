<template>
  <v-container>
    <h1>Posture ID {{ $route.params.id }}</h1>
    <v-button to="/posutures">single postures</v-button>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

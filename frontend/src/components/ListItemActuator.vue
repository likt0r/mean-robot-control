<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img src=""></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="data.name"></v-list-item-title>
      <v-form v-model="valid">
        <v-container>
          <ActuatorOutput
            v-for="output in data.outputs"
            :key="output.id"
            :data="output"
          />
        </v-container>
      </v-form>
    </v-list-item-content>

    <v-list-item-icon>
      <v-icon>chat_bubble</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Actuator from "../dataStructures/Actuator";
import ActuatorOutput from "./ActuatorOutput.vue";
export default defineComponent({
  components: {
    ActuatorOutput
  },
  props: {
    data: Actuator
  },
  setup() {
    const valid = ref(false);
    return { valid };
  }
});
</script>

<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img src=""></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="data.name"></v-list-item-title>

      <v-container>
        <HardwareOutputComponent
          v-for="(output, index) in data.outputs"
          :key="output.id"
          :data="output"
          @delete="deleteOutput(index)"
        />
        <NewHardwareOutput> </NewHardwareOutput>
      </v-container>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import Actuator from "../dataStructures/Actuator";
import HardwareOutput from "../dataStructures/HardwareOutput";
import HardwareOutputComponent from "./HardwareOutputComponent.vue";
import NewHardwareOutput from "./NewHardwareOutput.vue";
export default defineComponent({
  components: {
    HardwareOutputComponent,
    NewHardwareOutput
  },
  props: {
    data: Actuator
  },
  setup(props) {
    const valid = ref(false);
    function deleteOutput(index: number) {
      if (props && props.data) props.data.delteOutput(index);
    }
    function addOutput() {
      if (props && props.data)
        props.data.addOutput(new HardwareOutput(1, "1", 1, 0, 100, 100, 1, 2));
    }
    return { valid, deleteOutput, addOutput };
  }
});
</script>

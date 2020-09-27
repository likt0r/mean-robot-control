<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img src=""></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="data.name"></v-list-item-title>

      <v-container>
        <v-form ref="form" v-model="valid">
          <HardwareOutputComponent
            :outlined="true"
            v-for="(output, index) in data.outputs"
            :key="output.id"
            :name="output.name"
            :pwmFrequency="output.pwmFrequency"
            :maxValue="output.maxValue"
            :minValue="output.minValue"
            :displayedMaxValue="output.displayedMaxValue"
            :displayedMinValue="output.displayedMinValue"
            :displayedSteps="output.displayedSteps"
          >
            <template v-slot:headerCardActions>
              <v-btn
                ref="delete"
                icon
                color="primary"
                @click="deleteOutput(index)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </HardwareOutputComponent>
        </v-form>
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

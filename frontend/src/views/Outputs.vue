<template>
  <v-list>
    <ListItemActuator v-for="output in outputs" :key="output.id" :data="output">
    </ListItemActuator>
  </v-list>
</template>

<script lang="ts">
// import axios from "axios";
import { defineComponent, ref } from "@vue/composition-api";
import ListItemActuator from "@/components/ListItemActuator.vue";
import Acutator from "../dataStructures/Actuator";

export default defineComponent({
  components: {
    ListItemActuator
  },
  setup() {
    // const result = axios.get();
    const outputs = ref(
      [
        {
          id: 1,
          type: "servo",
          name: "Head-Yaw",
          outputs: [
            {
              name: "Pin 1",
              id: 11,
              maxValue: 0.9,
              minValue: 0.1,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 50
            }
          ]
        },
        {
          id: 2,
          type: "servo",
          name: "Head-Tilt",
          outputs: [
            {
              id: 12,
              name: "Pin 2",
              maxValue: 0.4,
              minValue: 0.2,
              pwmFrequency: 100,
              displayedMaxValue: 30,
              displayedMinValue: 10,
              displayedSteps: 20
            }
          ]
        },
        {
          id: 3,
          type: "servo",
          name: "Head-Pitch",
          outputs: [
            {
              id: 13,
              name: "Pin 12",
              maxValue: 0.9,
              minValue: 0.2,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 100
            }
          ]
        },
        {
          id: 4,
          type: "led",
          name: "Arm-Pitch",
          outputs: [
            {
              id: 14,
              name: "Pin 48",
              maxValue: 1,
              minValue: 0,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 100
            }
          ]
        },
        {
          id: 5,
          type: "rgbLed",
          name: "LED",
          outputs: [
            {
              id: 15,
              name: "Red Pin 48",
              maxValue: 1,
              minValue: 0,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 100
            },
            {
              id: 16,
              name: "Green Pin 48",
              maxValue: 1,
              minValue: 0,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 100
            },
            {
              id: 17,
              name: "Blue Pin 48",
              maxValue: 1,
              minValue: 0,
              pwmFrequency: 100,
              displayedMaxValue: 100,
              displayedMinValue: 0,
              displayedSteps: 100
            }
          ]
        }
      ].map(el => Acutator.fromPlainObject(el))
    );
    return { outputs };
  }
});
</script>

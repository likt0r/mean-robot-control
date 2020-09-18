<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-text-field v-model="data.name" label="Name" required></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-text-field
        v-model="data.pwmFrequency"
        :rules="[
          rules.pwmIsNumber(data.pwmFrequency),
          rules.pwmGreaterZero(data.pwmFrequency)
        ]"
        type="number"
        label="PWM-Frequency"
        required
        single-line
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import HardwareOutput from "../dataStructures/HardwareOutput";
export default defineComponent({
  // type inference enabled
  props: {
    data: HardwareOutput
  },
  setup() {
    const rules = ref({
      pwmGreaterZero: (value: number) =>
        value > 0 || "PWM-Frequency must be greater 0",
      pwmIsNumber: (value: any) =>
        !isNaN(parseInt(value)) || "PWM-Frequency must be a number "
    });

    return { rules };
  }
});
</script>

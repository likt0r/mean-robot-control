<template>
  <v-card outlined>
    <v-card-actions class="pt-0">
      <v-text-field
        ref="name"
        v-model="data.name"
        :label="$t('output')"
        required
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn ref="delete" icon color="primary" @click="$emit('delete')">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-text-field
            ref="pwmFrequency"
            v-model="data.pwmFrequency"
            :rules="[pwmGreaterZero(data.pwmFrequency)]"
            type="number"
            :label="$t('pwmFrequency')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="maxValue"
            v-model="data.maxValue"
            type="number"
            :label="$t('maxValue')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="minValue"
            v-model="data.minValue"
            type="number"
            :label="$t('minValue')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-text-field
            ref="displayedMaxValue"
            v-model="data.displayedMaxValue"
            type="number"
            :label="$t('displayedMaxValue')"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="displayedMinValue"
            v-model="data.displayedMinValue"
            type="number"
            :label="$t('displayedMinValue')"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            ref="displayedSteps"
            v-model="data.displayedSteps"
            type="number"
            :label="$t('displayedSteps')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HardwareOutput from "../dataStructures/HardwareOutput";
export default defineComponent({
  // type inference enabled
  props: {
    data: HardwareOutput
  },

  methods: {
    // use old vue style because of jest could not find rules for v-text-field
    pwmGreaterZero(value: number) {
      return value > 0 || "PWM-Frequency must be greater 0";
    }
  }
});
</script>

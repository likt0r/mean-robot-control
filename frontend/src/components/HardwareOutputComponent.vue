<template>
  <v-card :outlined="outlined">
    <slot name="header"></slot>
    <v-card-actions class="pt-0">
      <v-text-field
        ref="name"
        v-model="name"
        :label="$t('output')"
        required
      ></v-text-field>

      <v-spacer></v-spacer>
      <slot name="headerCardActions"></slot>
    </v-card-actions>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" sm="3">
          <v-text-field
            ref="pwmFrequency"
            v-model="pwmFrequency"
            :rules="[greaterZero(pwmFrequency)]"
            type="number"
            :label="$t('pwmFrequency')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="maxValue"
            max="1"
            min="0"
            v-model="maxValue"
            :rules="[greaterZero(maxValue), smallerEqualOne(maxValue)]"
            type="number"
            :label="$t('maxValue')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="minValue"
            v-model="minValue"
            :rules="[greaterEqualZero(minValue), smallerOne(minValue)]"
            type="number"
            :label="$t('minValue')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="3">
          <v-text-field
            ref="displayedMaxValue"
            v-model="displayedMaxValue"
            :rules="[
              greaterEqualZero(displayedMaxValue),
              smallerOne(displayedMaxValue)
            ]"
            type="number"
            :label="$t('displayedMaxValue')"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="displayedMinValue"
            v-model="displayedMinValue"
            :rules="[greaterEqualZero(displayedMinValue)]"
            type="number"
            :label="$t('displayedMinValue')"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="displayedSteps"
            v-model="displayedSteps"
            type="number"
            :label="$t('displayedSteps')"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="pt-0">
      <slot name="footerCardActions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HardwareOutput from "../dataStructures/HardwareOutput";
import {
  greaterEqual,
  smallerEqual,
  greater,
  smaller
} from "../tools/formRules";
export default defineComponent({
  // type inference enabled
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    name: String,
    pwmFrequency: Number,
    maxValue: Number,
    minValue: Number,
    displayedMaxValue: Number,
    displayedMinValue: Number,
    displayedSteps: Number
  },
  setup() {
    return {
      greaterZero: greater(0, "greaterZero"),
      greaterEqualZero: greaterEqual(0, "greaterEqualZero"),
      smallerEqualOne: smallerEqual(1, "smallerEqualOne"),
      smallerOne: smaller(1, "smallerOne")
    };
  }
});
</script>

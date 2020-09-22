<template>
  <v-card :outlined="outlined">
    <slot name="header"></slot>
    <v-card-actions class="pt-0">
      <v-text-field
        ref="name"
        v-model="name"
        :rules="[nameNotEmpty(name)]"
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
            :rules="[
              greaterZero(maxValue),
              smallerEqualOne(maxValue),
              greaterMinValue(maxValue)
            ]"
            type="number"
            :label="$t('maxValue')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="minValue"
            v-model="minValue"
            :rules="[
              greaterEqualZero(minValue),
              smallerOne(minValue),
              smallerMaxValue(minValue)
            ]"
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
              greaterZero(displayedMaxValue),
              greaterDisplayedMinValue(displayedMaxValue)
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
            :rules="[
              greaterEqualZero(displayedMinValue),
              smallerDisplayedMaxValue(displayedMinValue)
            ]"
            type="number"
            :label="$t('displayedMinValue')"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            ref="displayedSteps"
            v-model="displayedSteps"
            :rules="[greaterOne(displayedSteps)]"
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
  smaller,
  stringNotEmpty
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
  setup(props, ctx) {
    function greaterMinValue(value: number) {
      if (props.minValue === null) return true;
      else return value > props.minValue || ctx.root.$i18n.t("greaterMinValue");
    }
    function smallerMaxValue(value: number) {
      if (props.maxValue === null) return true;
      else return value < props.maxValue || ctx.root.$i18n.t("smallerMaxValue");
    }
    function greaterDisplayedMinValue(value: number) {
      if (props.displayedMinValue === null) return true;
      else
        return (
          value > props.displayedMinValue ||
          ctx.root.$i18n.t("greaterDisplayedMinValue")
        );
    }
    function smallerDisplayedMaxValue(value: number) {
      if (props.displayedMaxValue === null) return true;
      else
        return (
          value < props.displayedMaxValue ||
          ctx.root.$i18n.t("smallerDisplayedMaxValue")
        );
    }
    return {
      greaterZero: greater(0, "greaterZero"),
      greaterOne: greater(1, "greaterOne"),
      greaterEqualZero: greaterEqual(0, "greaterEqualZero"),
      smallerEqualOne: smallerEqual(1, "smallerEqualOne"),
      smallerOne: smaller(1, "smallerOne"),
      nameNotEmpty: stringNotEmpty("nameHasToBeSet"),
      greaterMinValue,
      smallerMaxValue,
      greaterDisplayedMinValue,
      smallerDisplayedMaxValue
    };
  }
});
</script>

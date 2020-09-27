<template>
  <v-card :outlined="outlined">
    <slot name="header"></slot>
    <v-card-actions class="pt-0">
      <v-text-field
        ref="name"
        v-model="_name"
        @input="$emit('update:name', $event)"
        :rules="[required(name), nameNotEmpty(name)]"
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
            v-model="_pwmFrequency"
            @input="$emit('update:pwmFrequency', parseInt($event))"
            :rules="[required(pwmFrequency), greaterZero(pwmFrequency)]"
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
            v-model="_maxValue"
            @input="$emit('update:maxValue', parseFloat($event))"
            :rules="[
              required(maxValue),
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
            v-model="_minValue"
            @input="$emit('update:minValue', parseFloat($event))"
            :rules="[
              required(minValue),
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
            v-model="_displayedMaxValue"
            @input="$emit('update:displayedMaxValue', parseFloat($event))"
            :rules="[
              required(displayedMaxValue),
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
            v-model="_displayedMinValue"
            @input="$emit('update:displayedMinValue', parseFloat($event))"
            :rules="[
              required(displayedMinValue),
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
            v-model="_displayedSteps"
            @input="$emit('update:displayedSteps', parseInt($event))"
            :rules="[required(displayedSteps), greaterOne(displayedSteps)]"
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
import { defineComponent, ref, watch } from "@vue/composition-api";
import {
  greaterEqual,
  smallerEqual,
  greater,
  smaller,
  stringNotEmpty,
  required
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
    const _name = ref(props.name);
    const _pwmFrequency = ref(props.pwmFrequency);
    const _maxValue = ref(props.maxValue);
    const _minValue = ref(props.minValue);
    const _displayedMaxValue = ref(props.displayedMaxValue);
    const _displayedMinValue = ref(props.displayedMinValue);
    const _displayedSteps = ref(props.displayedSteps);

    function greaterMinValue(value: number) {
      if (typeof props.minValue === "undefined" || props.minValue === null)
        return true;
      else return value > props.minValue || ctx.root.$i18n.t("greaterMinValue");
    }
    function smallerMaxValue(value: number) {
      if (typeof props.maxValue === "undefined" || props.maxValue === null)
        return true;
      else return value < props.maxValue || ctx.root.$i18n.t("smallerMaxValue");
    }
    function greaterDisplayedMinValue(value: number) {
      if (
        typeof props.displayedMinValue === "undefined" ||
        props.displayedMinValue === null
      )
        return true;
      else
        return (
          value > props.displayedMinValue ||
          ctx.root.$i18n.t("greaterDisplayedMinValue")
        );
    }
    function smallerDisplayedMaxValue(value: number) {
      if (
        typeof props.displayedMaxValue === "undefined" ||
        props.displayedMaxValue === null
      )
        return true;
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
      required: required("valueRequired"),
      greaterMinValue,
      smallerMaxValue,
      greaterDisplayedMinValue,
      smallerDisplayedMaxValue,
      _name,
      _pwmFrequency,
      _maxValue,
      _minValue,
      _displayedMaxValue,
      _displayedMinValue,
      _displayedSteps
    };
  },

  methods: {
    validate() {
      // eslint-disable-next-line
      (this.$refs.form as any).validate();
    },
    submit() {
      // eslint-disable-next-line
      (this.$refs.form as any).submit();
    },
    reset() {
      // eslint-disable-next-line
      (this.$refs.form as any).reset();
    },
    resetValidation() {
      // eslint-disable-next-line
      (this.$refs.form as any).resetValidation();
    }
  }
});
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" icon v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ $t("newHardwareOutputTitle") }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false" :disabled="valid">{{
              $t("add")
            }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
            <v-row justify="center">
              <v-col cols="10">
                <v-text-field
                  ref="name"
                  :rules="[greaterZero]"
                  v-model="data.name"
                  :label="$t('output')"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  ref="pwmFrequency"
                  v-model="data.pwmFrequency"
                  min="0"
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
                  v-model="data.maxValue"
                  type="number"
                  :label="$t('maxValue')"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  ref="minValue"
                  min="0"
                  v-model="data.minValue"
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
                  v-model="data.displayedMaxValue"
                  type="number"
                  :label="$t('displayedMaxValue')"
                  min="0"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  ref="displayedMinValue"
                  v-model="data.displayedMinValue"
                  type="number"
                  :label="$t('displayedMinValue')"
                  min="0"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  ref="displayedSteps"
                  v-model="data.displayedSteps"
                  type="number"
                  :label="$t('displayedSteps')"
                  min="0"
                  required
                ></v-text-field>
              </v-col> </v-row
          ></v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { defineComponent, ref, reactive } from "@vue/composition-api";
import { greaterEqual, smallerEqual, greater } from "../tools/formRules";
export default defineComponent({
  setup() {
    const dialog = ref(false);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
    const valid = ref(true);
    const data = reactive({
      pwmFrequency: null,
      maxValue: null,
      minValue: null,
      displayedSteps: null,
      displayedMinValue: null,
      displayedMaxValue: null
    });
    return {
      valid,
      data,
      dialog,
      notifications,
      sound,
      widgets,
      greaterZero: greaterEqual(0, "greaterZero"),
      maxValue: greaterEqual(0, "greaterZero"),
      minValue: smallerEqual(0, "smallerEqualOne")
    };
  }
});
</script>

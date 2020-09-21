<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          ref="openDialogButton"
          color="primary"
          dark
          v-bind="attrs"
          icon
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <form v-bind="valid">
        <HardwareOutputComponent
          :name="output.name"
          :pwmFrequency="output.pwmFrequency"
          :maxValue="output.maxValue"
          :minValue="output.minValue"
          :displayedMaxValue="output.displayedMaxValue"
          :displayedMinValue="output.displayedMinValue"
          :displayedSteps="output.displayedSteps"
        >
          <template v-slot:header>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{
                $t("newHardwareOutputTitle")
              }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false" :disabled="valid">{{
                  $t("add")
                }}</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </template>
        </HardwareOutputComponent>
      </form>
    </v-dialog>
  </v-row>
</template>

<script>
import { defineComponent, ref, reactive } from "@vue/composition-api";
import { greaterEqual, smallerEqual, greater } from "../tools/formRules";
import HardwareOutputComponent from "./HardwareOutputComponent.vue";
export default defineComponent({
  components: {
    HardwareOutputComponent
  },
  setup() {
    const dialog = ref(false);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
    const valid = ref(true);
    const output = reactive({
      name: "",
      pwmFrequency: null,
      maxValue: null,
      minValue: null,
      displayedMaxValue: null,
      displayedMinValue: null,
      displayedSteps: null
    });
    return {
      valid,
      output,
      dialog,
      notifications,
      sound,
      widgets,
      greaterZero: greaterEqual(0, "greaterZero"),
      greaterEqualZero: greaterEqual(0, "greaterEqualZero"),
      smallerEqualOne: smallerEqual(0, "smallerEqualOne")
    };
  }
});
</script>

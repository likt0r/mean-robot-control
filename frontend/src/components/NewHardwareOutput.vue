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
      <v-form ref="form" v-model="valid">
        <HardwareOutputComponent
          ref="hardwareOutputs"
          :name.sync="output.name"
          :pwmFrequency.sync="output.pwmFrequency"
          :maxValue.sync="output.maxValue"
          :minValue.sync="output.minValue"
          :displayedMaxValue.sync="output.displayedMaxValue"
          :displayedMinValue.sync="output.displayedMinValue"
          :displayedSteps.sync="output.displayedSteps"
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
                <v-btn dark text @click="submit()">{{ $t("add") }}</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </template>
        </HardwareOutputComponent>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import HardwareOutputComponent from "./HardwareOutputComponent.vue";
export default defineComponent({
  components: {
    HardwareOutputComponent
  },

  setup() {
    const dialog = ref(false);
    const valid = ref(true);
    const notifications = ref(false);
    const sound = ref(true);
    const widgets = ref(false);
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
      widgets
    };
  },
  methods: {
    submit() {
      if (!this.valid) return this.$refs.form.validate();
      this.dialog = false;
    }
  }
});
</script>

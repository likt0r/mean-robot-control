<template>
  <v-list>
    <v-list-item v-for="item in outputs" :key="item.id">
      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon>chat_bubble</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import axios from "axios";
export default defineComponent({
  setup() {
    // const result = axios.get();
    const outputs = ref([]);
    return { outputs };
  }
});
</script>

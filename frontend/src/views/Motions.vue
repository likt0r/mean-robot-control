<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title">
      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'"
          >chat_bubble</v-icon
        >
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const items = ref([
      {
        active: true,
        title: "Jason Oner",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        active: true,
        title: "Ranee Carlson",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        title: "Cindy Baker",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        title: "Ali Connors",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      }
    ]);

    return { items };
  }
});
</script>

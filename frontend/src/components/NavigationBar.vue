<template>
  <fragment>
    <portal-target name="navigation-drawer">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item
            v-for="item in tabItems"
            :key="item.title"
            :to="item.route"
            link
          >
            <v-list-item-action>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </portal-target>
    <v-app-bar app clipped-left color="accent" class="white--text">
      <fragment v-if="$vuetify.breakpoint.width < 600">
        <v-app-bar-nav-icon
          color="white"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </fragment>
      <v-tabs v-else v-model="tab" icons-and-text centered>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item.title" :to="item.route">
          {{ $t(item.title) }}
          <v-icon v-if="item.icon">mdi-{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </fragment>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  // type inference enabled
  props: {
    tabItems: Array
  },
  setup() {
    const drawer = ref(null);
    const tab = ref(null);
    return { drawer, tab };
  }
});
</script>

<style scoped>
.v-tab,
.v-tab .v-icon {
  color: white !important;
}
a.v-tab.v-tab--active {
  color: var(--primary) !important;
}
</style>

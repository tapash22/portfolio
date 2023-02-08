<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>

<style scoped>
.v-main {
  margin-top: 12px;
}
</style>

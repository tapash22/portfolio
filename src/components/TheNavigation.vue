<template>
  <div class="navigation">
    <v-app-bar elevation="0" outlined>
      <router-link to="/" class="text-decoration-none; w-25">
        <v-app-bar-title class="title black--text">PORTFOLIO</v-app-bar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-list class="d-block" color="transparent">
        <v-list-item class="d-flex justify-end align-center">
          <v-list-item-title v-for="list in lists" :key="list.id" class="mx-2">
            <v-chip :to="list.link" active-class="green" outlined>
              {{ list.name }}
            </v-chip>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "About",
          link: "about",
        },
        {
          id: 2,
          name: "Skills",
          link: "skills",
        },
        {
          id: 3,
          name: "Portfolio",
          link: "projects",
        },
        {
          id: 4,
          name: "Contact",
          link: "contacts",
        },
      ],
    };
  },
};
</script>

<style>
.navigation {
  background-color: linear-gradient(90deg, transparent 66.6667%, rgb(141, 9, 9) 33.3333%);
}
</style>

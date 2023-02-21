<template>
  <div class="projects">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          class="d-flex justify-center my-2"
        >
          <v-sheet
            width="200"
            height="50"
            elevation="2"
            class="d-flex justify-center align-center title"
          >
            <h2 class="text-h6 fontn-weight-bold">PORTFOLIO</h2>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="my-5">
        <v-col
          cols="12"
          sm="12"
          md="3"
          lg="3"
          xl="3"
          v-for="project in projects"
          :key="project.id"
        >
          <v-card class="" outlined>
            <v-card-text class="pa-0">
              <v-img cover :src="project.img" />
            </v-card-text>

            <v-card-tile class="text-body-1 pa-2">{{ project.name }}</v-card-tile>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "projects",

  computed: {
    ...mapState(["projects"]),
  },
};
</script>

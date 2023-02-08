<template>
  <div class="about">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
        <v-sheet
          width="200"
          height="50"
          elevation="2"
          class="d-flex justify-center align-center title"
        >
          <h2 class="text-h6 fontn-weight-bold">ABOUT ME</h2>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">
        <v-sheet>
          <h3 class="text-body-1 font-weight-bold text-center d-inline" width="200">
            {{ about.name }}
          </h3>
          <div class="text">
            <p class="text-body-2 pa-2 text-justify">
              {{ about.text }}
            </p>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">
        <v-sheet class="pa-3 align-center d-flex justify-center">
          <div class="text">
            <p class="text-body-2 pa-2 d-flex justify-center">
              {{ about.subtext }}
            </p>
            <v-btn @click="onClick" color="green lighten-2 offset-1">Download</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about",

  computed: {
    ...mapState(["about"]),
  },

  methods: {
    onClick() {
      console.log(this.about.file);
    },
  },
};
</script>

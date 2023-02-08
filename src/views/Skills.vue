<template>
  <div class="skills">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
        <v-sheet
          width="200"
          height="50"
          elevation="2"
          class="d-flex justify-center align-center title"
        >
          <h2 class="text-h6 fontn-weight-bold">SKILLS</h2>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="4" sm="4" md="2" lg="2" xl="2" v-for="skill in skills" :key="skill.id">
        <v-sheet elevation="2" rounded="lg">
          <v-img :src="skill.img" height="100" contain />
          <p class="text-body-1 text-center">{{ skill.name }}</p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "skills",

  computed: {
    ...mapState(["skills"]),
  },
};
</script>

<template>
  <div class="home">
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="d-flex justify-center align-center header"
      >
        <v-sheet class="" height="200" color="transparent">
          <h2 class="text-body-1 font-weight-bold my-2 black-text">Hi, I am</h2>
          <h1 class="text-h4 font-weight-bold mt-5">TAPASH PAUL</h1>
          <p class="text-body-1 gray">Front-end Developer</p>
          <v-list class="d-flex justify-center" color="transparent">
            <v-list-item class="d-flex justify-start">
              <router-link
                v-for="list in links"
                :key="list.id"
                :to="list.link"
                class="text-decoration-none mx-2"
              >
                <v-avatar color="green lighten-2">
                  <v-icon size="40" color="white">{{ list.icon }}</v-icon>
                </v-avatar>
              </router-link>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="pa-0">
        <v-sheet height="400" elevation="0" class="sheet"> </v-sheet>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center second">
      <v-col cols="12" sm="12" md="10" lg="10" xl="10">
        <h2 class="text-h6 font-weight-bold my-3 white--text">Front end Developer</h2>
        <p class="white--text text-body-2">
          I'm a Front End Developer. I have professional experience working in Vue. Vue is
          a javaScript Framework with Vue 2, Vue 3 and Vuetify Framework. Also working
          with Laravel api, MySql, Postman for api integration.
          <span v-if="show">
            In my project using State Management System VueX for api integration, Axios,
            Mixin, Props and lots of utility for logial design and also using Sass,
            Tailwind Css, Metarial icon for pixel perfect as Figma
          </span>
          <br />
          <v-btn @click.prevent="show = !show" color="green lighten-2" class="my-2"
            >Read more</v-btn
          >
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      show: false,
    };
  },

  computed: {
    ...mapState(["links"]),
  },

  components: {},

  methods: {
    onClick() {
      console.log("download link need");
    },
  },
};
</script>

<style scoped>
.header {
  background: rgba(240, 239, 239, 0.87);
}

.sheet {
  width: 100%;
  height: 0;
  border-bottom: 400px solid rgba(0, 0, 0, 0.938);
  border-left: 70px solid rgba(240, 239, 239, 0.87);
}

.second {
  background: rgba(0, 0, 0, 0.856);
}

.title {
  border-top: 3px solid rgb(180, 170, 170);
  border-bottom: 2px solid black;
}
</style>

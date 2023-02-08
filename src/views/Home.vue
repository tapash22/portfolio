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
    <v-container>
      <!-- about -->

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
            <h2 class="text-h6 fontn-weight-bold">ABOUT ME</h2>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">
          <v-sheet>
            <h3 class="text-body-1 font-weight-bold text-center d-inline" width="200">
              INTRODUCE
            </h3>
            <div class="text">
              <p class="text-body-2 pa-2 text-justify">
                My name is Tapash paul, i'm complete my graduation from Northern
                Univercity Bangladesh in Computer Science & Engineering. I like to
                travelling, playing, reading and so many of thing i like to do. For
                details check it my portfolio or given CV link.
              </p>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">
          <v-sheet class="pa-3 align-center d-flex justify-center">
            <div class="text">
              <p class="text-body-2 pa-2 d-flex justify-center">
                you can download my CV.
              </p>
              <v-btn @click="onClick" color="green lighten-2 offset-1">Download</v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <!-- about end -->

      <!-- skills -->
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
            <h2 class="text-h6 fontn-weight-bold">SKILLS</h2>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col
          cols="4"
          sm="4"
          md="2"
          lg="2"
          xl="2"
          v-for="skill in skills"
          :key="skill.id"
        >
          <v-sheet elevation="2" rounded="lg">
            <v-img :src="skill.img" height="100" contain />
            <p class="text-body-1 text-center">{{ skill.name }}</p>
          </v-sheet>
        </v-col>
      </v-row>

      <!-- skills end -->

      <!-- project  -->
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

      <!-- project end  -->

      <!-- contact  -->
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
            <h2 class="text-h6 fontn-weight-bold">CONTACT</h2>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <form>
            <v-text-field
              dense
              hide-details
              v-model="name"
              outlined
              label="Enter your name"
              class="my-3"
            />
            <v-text-field
              dense
              hide-details
              v-model="email"
              outlined
              label="Enter your email"
              class="my-3"
            />
            <v-text-field
              dense
              hide-details
              v-model="subject"
              outlined
              label="Enter your subject"
              class="my-3"
            />
            <v-textarea
              v-model="message"
              outlined
              hide-details
              class="my-3"
              label="Enter your message"
            ></v-textarea>

            <v-btn color="green lighten-3">Send</v-btn>
          </form>
        </v-col>
      </v-row>
      <!-- contact end -->
    </v-container>
    <!-- footer  -->

    <!-- footer end -->
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
    ...mapState(["links", "skills", "projects"]),
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

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        id: 1,
        icon: "mdi-facebook",
        link: "",
      },
      {
        id: 2,
        icon: "mdi-github",
        link: "",
      },
      {
        id: 3,
        icon: "mdi-linkedin",
        link: "",
      },
    ],

  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

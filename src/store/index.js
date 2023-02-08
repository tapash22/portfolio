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
    about: {
      name: "INTRODUCE",
      text: " My name is Tapash paul, i'm complete my graduation from Northern Univercity Bangladesh in Computer Science & Engineering. I like to travelling, playing, reading and so many of thing i like to do. For details check it my portfolio or given CV link.",
      subtext: "you can download my CV.",
      file: "",
    },
    skills: [
      {
        id: 1,
        name: "Html5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJYpziu85zQT4QtW1Pxp-sHgcH7Fq1QhbQwUq0Dx9fw&s",
      },
      {
        id: 2,
        name: "Css3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQL3NnKg6lk8yxUlqNQm8vunmtLnAICX85Q&usqp=CAU",
      },
      {
        id: 3,
        name: "Sass",
        img: "https://w7.pngwing.com/pngs/206/645/png-transparent-sass-logos-and-brands-line-filled-icon.png",
      },
      {
        id: 4,
        name: "Tailwind",
        img: "https://avatars.githubusercontent.com/u/67109815?s=280&v=4",
      },
      {
        id: 5,
        name: "Bootstrap",
        img: "https://www.clipartmax.com/png/middle/184-1844911_bootstrap-bootstrap-4-logo-png.png",
      },
      {
        id: 6,
        name: "JavaScript",
        img: "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
      },
      {
        id: 7,
        name: "Vue",
        img: "https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png",
      },
      {
        id: 8,
        name: "Vuetify",
        img: "https://external-preview.redd.it/AOJtwr7lW8E4k5rsua3rPoky1ySO_34UkAVmm6PuVpM.jpg?auto=webp&s=2645657b4d14ff6f7321db22bcb96f4652876af8",
      },
      {
        id: 9,
        name: "Figma",
        img: "https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png",
      },
      {
        id: 10,
        name: "Postman",
        img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      },
      {
        id: 11,
        name: "MySql",
        img: "https://cdn.freebiesupply.com/logos/large/2x/mysql-logo-png-transparent.png",
      },
      {
        id: 12,
        name: "Laravel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      },
    ],

    projects: [
      {
        id: 1,
        name: "Food Web",
        img: "https://i.ibb.co/4Ks8LnR/Screenshot-from-2023-02-06-21-49-23.png",
      },
      {
        id: 2,
        name: "Blog",
        img: "https://i.ibb.co/vHqpYTq/Screenshot-from-2023-02-05-01-13-30.png",
      },
      {
        id: 3,
        name: "Real State",
        img: "https://i.ibb.co/gg6PDyf/1.png",
      },
      {
        id: 4,
        name: "NTF Marketplace",
        img: "https://i.ibb.co/r2hcMvM/1.png",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

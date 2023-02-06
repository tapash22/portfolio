<template>
<div class="home">

    <v-row>
        <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="d-flex justify-center align-center">
            <v-sheet class="" height="200" color="">
                <h2 class="text-body-1 font-weight-bold my-2 black-text">Hi, I am</h2>
                <h1 class="text-h4 font-weight-bold mt-5">TAPASH PAUL</h1>
                <p class="text-body-1 gray">Front-end Developer</p>
                <v-list class="d-flex justify-center" color="transparent">
                    <v-list-item class="d-flex justify-start">
                        <router-link v-for="list in lists" :key="list.id" :to="list.link" class="text-decoration-none mx-2">
                            <v-avatar color="green lighten-2">
                                <v-icon size="40" color="white">{{ list.icon }}</v-icon>
                            </v-avatar>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-sheet>
        </v-col>
        <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="pa-0">
            <v-sheet height="400" elevation="0" class="sheet">

            </v-sheet>
        </v-col>
    </v-row>

    <v-row class="d-flex justify-center second">
        <v-col cols="12" sm="12" md="10" lg="10" xl="10">
            <h2 class="text-h6 font-weight-bold my-3 white--text">INTRODUCE</h2>
            <p class="white--text text-body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo reiciendis
                consequuntur earum numquam voluptatibus molestias maxime. Voluptates, officia dolor
                culpa nisi iure nihil nobis eveniet totam, minus nemo quam rem eius vitae soluta
                voluptatibus quae! Laboriosam ducimus excepturi id? Aut maxime illum impedit excepturi
                <span v-if="show">
                    reiciendis fugit est neque, iusto deleniti error, recusandae sit voluptatem numquam
                    vitae? Facere dolore vitae dignissimos id eius quasi? Non, odit. Aperiam ratione
                    exercitationem qui reprehenderit earum provident nam quas quisquam quibusdam.
                    Voluptatum modi sed qui, non delectus voluptatem quo facere, natus minima tempore
                    rem. Totam quisquam saepe distinctio sint fuga debitis velit, laudantium commodi!
                </span>
                <br />
                <v-btn @click.prevent="show = !show" color="green lighten-2" class="my-2">Read more</v-btn>
            </p>
        </v-col>
    </v-row>
    <v-container>
        <!-- about -->

        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
                <v-sheet width="200" height="50" elevation="2" class="d-flex justify-center align-center title">
                    <h2 class="text-h6 fontn-weight-bold ">
                        ABOUT ME
                    </h2>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">

                <v-sheet>
                    <h3 class="text-body-1 font-weight-bold text-center d-inline" width="200">Front end Developer</h3>
                    <div class="text">
                        <p class="text-body-2 pa-2 text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae excepturi maxime praesentium autem dolorum laboriosam consectetur ab fugiat voluptatibus deleniti quod tenetur aut nisi quos, aliquam rem? Excepturi ut deserunt et quisquam beatae voluptatem ad incidunt mollitia! Blanditiis, aut distinctio nostrum consectetur quod ipsum sit ea, omnis sunt fugit eos.
                        </p>
                    </div>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center my-2">
                <v-sheet class="pa-3 align-center d-flex justify-center ">
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
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
                <v-sheet width="200" height="50" elevation="2" class="d-flex justify-center align-center title">
                    <h2 class="text-h6 fontn-weight-bold ">
                        SKILLS
                    </h2>
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

        <!-- skills end -->

        <!-- project  -->
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
                <v-sheet width="200" height="50" elevation="2" class="d-flex justify-center align-center title">
                    <h2 class="text-h6 fontn-weight-bold ">
                        PORTFOLIO
                    </h2>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row class="my-5">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="project in projects" :key="project.id">
                <v-card class="" outlined>
                    <v-card-text class="pa-0">
                        <v-img contain :src="project.img" />
                    </v-card-text>

                    <v-card-tile class="text-body-1 pa-2 ">{{ project.name }}</v-card-tile>
                </v-card>
            </v-col>
        </v-row>

        <!-- project end  -->

        <!-- contact  -->
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
                <v-sheet width="200" height="50" elevation="2" class="d-flex justify-center align-center title">
                    <h2 class="text-h6 fontn-weight-bold ">
                        CONTACT
                    </h2>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <form>
                    <v-text-field dense hide-details v-model="name" outlined label="Enter your name" class="my-3" />
                    <v-text-field dense hide-details v-model="email" outlined label="Enter your email" class="my-3" />
                    <v-text-field dense hide-details v-model="subject" outlined label="Enter your subject" class="my-3" />
                    <v-textarea v-model="message" outlined hide-details class="my-3" label="Enter your message"></v-textarea>

                    <v-btn color="green lighten-3">Send</v-btn>
                </form>
            </v-col>
        </v-row>
        <!-- contact end -->

    </v-container>
    <!-- footer  -->
    <v-row class="footer d-flex justify-center pa-2  mt-5">
        <div class="d-block">
          <v-list class="d-flex justify-start" color="transparent pa-0">
                <v-list-item class="d-flex justify-start">
                    <router-link v-for="list in lists" :key="list.id" :to="list.link" class="text-decoration-none mx-2">
                        <v-avatar color="green lighten-2" size="30">
                            <v-icon size="24" color="white">{{ list.icon }}</v-icon>
                        </v-avatar>
                    </router-link>
                </v-list-item>
            </v-list>
            <p class="text-body-1 white--text">&copy; 2023 Tapash paul</p>

        </div>
    </v-row>
    <!-- footer end -->
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            show: false,
            lists: [{
                    id: 1,
                    icon: 'mdi-facebook',
                    link: ''
                },
                {
                    id: 2,
                    icon: 'mdi-github',
                    link: ''
                },
                {
                    id: 3,
                    icon: 'mdi-linkedin',
                    link: ''
                },
            ],

            skills: [{
                    id: 1,
                    name: 'Html5',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJYpziu85zQT4QtW1Pxp-sHgcH7Fq1QhbQwUq0Dx9fw&s',
                },
                {
                    id: 2,
                    name: 'Css3',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQL3NnKg6lk8yxUlqNQm8vunmtLnAICX85Q&usqp=CAU',
                },
                {
                    id: 3,
                    name: 'Sass',
                    img: 'https://w7.pngwing.com/pngs/206/645/png-transparent-sass-logos-and-brands-line-filled-icon.png',
                },
                {
                    id: 4,
                    name: 'Tailwind',
                    img: 'https://avatars.githubusercontent.com/u/67109815?s=280&v=4',
                },
                {
                    id: 5,
                    name: 'Bootstrap',
                    img: 'https://www.clipartmax.com/png/middle/184-1844911_bootstrap-bootstrap-4-logo-png.png',
                },
                {
                    id: 6,
                    name: 'JavaScript',
                    img: 'https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png',
                },
                {
                    id: 7,
                    name: 'Vue',
                    img: 'https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png',
                },
                {
                    id: 8,
                    name: 'Vuetify',
                    img: 'https://external-preview.redd.it/AOJtwr7lW8E4k5rsua3rPoky1ySO_34UkAVmm6PuVpM.jpg?auto=webp&s=2645657b4d14ff6f7321db22bcb96f4652876af8',
                },
                {
                    id: 9,
                    name: 'Figma',
                    img: 'https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png',
                },
                {
                    id: 10,
                    name: 'Postman',
                    img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png',
                },
                {
                    id: 11,
                    name: 'MySql',
                    img: 'https://cdn.freebiesupply.com/logos/large/2x/mysql-logo-png-transparent.png',
                },
                {
                    id: 12,
                    name: 'Laravel',
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
                },

            ],

            projects: [{
                    id: 1,
                    name: 'Food Web',
                    img: 'https://i.ibb.co/4Ks8LnR/Screenshot-from-2023-02-06-21-49-23.png'
                },
                {
                    id: 2,
                    name: 'E-Commerce',
                    img: 'https://i.ibb.co/4Ks8LnR/Screenshot-from-2023-02-06-21-49-23.png'
                },
                {
                    id: 3,
                    name: 'Blog',
                    img: 'https://i.ibb.co/4Ks8LnR/Screenshot-from-2023-02-06-21-49-23.png'
                },
                {
                    id: 4,
                    name: 'Real State',
                    img: 'https://i.ibb.co/4Ks8LnR/Screenshot-from-2023-02-06-21-49-23.png'
                }
            ]
        }
    },

    components: {

    },

    methods: {
        onClick() {
            console.log('download link need');
        }
    }
}
</script>

<style scoped>
.sheet {
    width: 100%;
    height: 0;
    border-bottom: 400px solid rgba(0, 0, 0, 0.938);
    border-left: 70px solid transparent;
}

.second {
    background: rgba(0, 0, 0, 0.856);
}

.title {
    border-top: 3px solid rgb(180, 170, 170);
    border-bottom: 2px solid black;
}

.footer {
    background: rgba(0, 0, 0, 0.856);
}
</style>

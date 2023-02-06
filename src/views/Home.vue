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
                            <v-avatar color="green lighten-2" >
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
    <v-row class="d-flex justify-center second" >
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
<br/>
                <v-btn @click.prevent="show = !show"  color="green lighten-2" class="my-2">Read more</v-btn>
            </p>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
          show:false,
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
            ]
        }
    },

    components: {

    },
}
</script>

<style scoped>
.sheet {
    width: 100%;
    height: 0;
    border-bottom: 400px solid rgba(0, 0, 0, 0.938);
    border-left: 70px solid transparent;
}
.second{
  background: rgba(0, 0, 0, 0.856);
}
</style>

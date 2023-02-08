<template>
  <v-footer color="black">
    <v-row class="footer d-flex justify-center pa-2 mt-5">
      <div class="d-block">
        <v-list class="d-flex justify-start" color="transparent pa-0">
          <v-list-item class="d-flex justify-start">
            <router-link
              v-for="list in links"
              :key="list.id"
              :to="list.link"
              class="text-decoration-none mx-2"
            >
              <v-avatar color="green lighten-2" size="30">
                <v-icon size="24" color="white">{{ list.icon }}</v-icon>
              </v-avatar>
            </router-link>
          </v-list-item>
        </v-list>
        <p class="text-body-1 white--text">&copy; 2023 Tapash paul</p>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["links"]),
  },
};
</script>

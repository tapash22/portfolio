<template>
  <div class="contacts">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center my-2">
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
            v-model="form.name"
            outlined
            label="Enter your name"
            class="my-3"
          />
          <v-text-field
            dense
            hide-details
            v-model="form.email"
            outlined
            label="Enter your email"
            class="my-3"
          />
          <v-text-field
            dense
            hide-details
            v-model="form.subject"
            outlined
            label="Enter your subject"
            class="my-3"
          />
          <v-textarea
            v-model="form.message"
            outlined
            hide-details
            class="my-3"
            label="Enter your message"
          ></v-textarea>

          <v-btn color="green lighten-3">Send</v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "contacts",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>

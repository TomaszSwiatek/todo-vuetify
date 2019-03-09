<template>
  <div class="team">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12>
          <v-snackbar
            v-model="snackbar"
            :timeout="6000"
            top
            dark
            color="teal darken-1"
          >You successfully added a new person.
            <v-btn flat @click="snackbar = !snackbar">Close</v-btn>
          </v-snackbar>

          <v-toolbar flat class="grey--text">
            <v-toolbar-title class="headline">
              <span class="font-weight-light">Te</span>am
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <!-- add button / @onclick shows dialog to add new person -->
              <DialogTeam @personAdded="snackbar = true"></DialogTeam>
            </v-toolbar-items>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 flat v-for="mate in team" :key="mate.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="mate.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{mate.person}}</div>
              <div class="teal--text mt-2">{{mate.occupation}}</div>
              <div class="teal--text">Added: {{mate.date}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="grey--text">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import DialogTeam from "@/components/DialogTeam";
import db from "@/fb";
export default {
  components: {
    DialogTeam
  },
  data() {
    return {
      team: [],
      snackbar: false
    };
  },
  created() {
    //created is alwaysa good place to get data from API, this is firebase syntax, check it ninja/31lesson
    db.collection("team").onSnapshot(res => {
      const CHANGES = res.docChanges();

      CHANGES.forEach(change => {
        if (change.type === "added") {
          this.team.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

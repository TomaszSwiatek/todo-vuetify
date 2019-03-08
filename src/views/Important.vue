<template>
  <div class="important">
    <v-container class="my-5">
      <v-layout column>
        <v-flex class>
          <v-snackbar
            v-model="snackbar"
            :timeout="6000"
            top
            dark
            color="teal darken-1"
          >You successfully added a new issue.
            <v-btn flat @click="snackbar = !snackbar">Close</v-btn>
          </v-snackbar>
          <v-toolbar flat class="grey--text">
            <v-toolbar-title class="headline">
              <span class="font-weight-light">Important</span>matters
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <!-- add button / @onclick shows dialog to add new person -->
              <DialogImportant @importantAdded="snackbar = true"></DialogImportant>
            </v-toolbar-items>
          </v-toolbar>
        </v-flex>
        <v-flex class="mx-0">
          <v-expansion-panel dark popout inset>
            <v-expansion-panel-content
              class="teal lighten-2 mt-4"
              v-for=" important in importantMatters"
              :key="important.id"
            >
              <template v-slot:header>
                <div>{{important.title}}</div>
              </template>

              <v-card light>
                <v-card-text class="grey--text">
                  <v-layout align-center justify-space-between row fill-height>
                    <div class="text-uppercase">{{important.tag}}</div>
                    <div right>{{important.saved}}</div>
                  </v-layout>
                  <div class="content mt-2">{{important.content}}</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DialogImportant from "@/components/DialogImportant";
import db from "@/fb";
export default {
  components: {
    DialogImportant
  },
  data() {
    return {
      importantMatters: [],
      snackbar: false
    };
  },
  created() {
    //gets data from fb
    db.collection("importantMatters").onSnapshot(res => {
      const dataSnapshot = res.docChanges();

      dataSnapshot.forEach(childSnapshot => {
        if (childSnapshot.type === "added") {
          this.importantMatters.push({
            ...childSnapshot.doc.data(),
            //we re also adding id from fb that we can always manage each item - it is good in case that i.e title isnt unique
            id: childSnapshot.doc.id
          });
        }
      });
    });
  }
};
</script>

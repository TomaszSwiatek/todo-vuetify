<template>
  <div class="important">
    <v-container class="my-5">
      <v-layout column>
        <v-flex class="mx-3">
          <h1 class="headline">
            <span class="font-weight-light">Important</span>matters
          </h1>
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
import db from "@/fb";
export default {
  data() {
    return {
      importantMatters: []
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

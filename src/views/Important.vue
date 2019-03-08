<template>
  <div class="important">
    <h1 class="subheading">Important</h1>
    <v-container class="my-5">
      <v-expansion-panel dark popout>
        <v-expansion-panel-content
          class="teal lighten-2 mt-4"
          v-for=" important in importantMatters"
          :key="important.title"
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
    db.collection("importantMatters").onSnapshot(res => {
      const dataSnapshot = res.docChanges();

      dataSnapshot.forEach(childSnapshot => {
        if (childSnapshot.type === "added") {
          this.importantMatters.push({
            ...childSnapshot.doc.data(),
            id: childSnapshot.doc.id
          });
        }
      });
    });
  }
};
</script>

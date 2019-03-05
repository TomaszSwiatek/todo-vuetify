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
export default {
  data() {
    return {
      importantMatters: [
        {
          title: "To whet swords.",
          saved: "23 Apr 2018",
          content:
            "When Im in a dwarven city, find a good craftsman who will whet both swords and I will not pay for that fortune.",
          tag: "equipment"
        },
        {
          title: "Remember to visit a Witcher mate in Wyzima",
          saved: "12 Fab 2019",
          content:
            "In Wyzima I will be in about two weeks, be sure to go to Srebrna Street and buy something as a gift.",
          tag: "mates"
        },
        {
          title: "Feed the horse",
          saved: "05 Jan 2019",
          content:
            "I will buy horse's food when I am in a bigger city, I also need to change horseshoes for new ones.",
          tag: "equipment"
        },
        {
          title: "Visit the newest bathhouse",
          saved: "29 Dec 2018",
          content:
            "Jaskier said that in many cities beautiful baths have opened, so you can use it well and wash up after weeks of travel.",
          tag: "entertainment"
        }
      ]
    };
  }
};
</script>

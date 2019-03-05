<template>
  <div class="team">
    <h1 class="subheading">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 flat v-for="mate in team" :key="mate.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="mate.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{mate.name}}</div>
              <div class="teal--text">{{mate.role}}</div>
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
export default {
  data() {
    return {
      team: [
        {
          name: "Yennefer",
          role: "Witch",
          avatar: "/avatar-7.jpg"
        },
        {
          name: "Yarpen",
          role: "Warrior",
          avatar: "/avatar-4.jpg"
        },
        {
          name: "Jaskier",
          role: "Songster",
          avatar: "/avatar-6.jpg"
        },
        {
          name: "Zoltan",
          role: "Leader of the dwarven group",
          avatar: "/avatar-2.jpg"
        },
        {
          name: "Regis",
          role: "Vampire",
          avatar: "/avatar-5.jpg"
        }
      ]
    };
  }
};
</script>

<template>
  <nav>
    <!-- app daje position:fixed, flat-likwiduje cień -->
    <v-toolbar app dark color="teal lighten-2 ">
      <v-toolbar-side-icon @click="drawerVisibility = !drawerVisibility"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>witcher</span>
      </v-toolbar-title>
      <!-- vspacer gives space between this two tags - title&iconlogout -->
      <v-spacer></v-spacer>
      <v-btn flat color>
        <span>sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- zauważ że jest za toolbarem ale jeszcze w navie - bo to bedzie wyjezdzajaca szuflada troche oderwana od kontentu ale jednak element nawigacji -->
    <!-- by sterowac widzialnoscia szuflady musimy to robic za pomocą v-model i potem np przypisac do buttona -->
    <!-- zeby drawer sie wyswietlal to musi byc dodany prop : app. Inaczej wyświetla sie tylko ciemne podswietlenie backgroundu -->
    <v-navigation-drawer v-model="drawerVisibility" dark app class="teal lighten-1">
      <v-list>
        <!-- 1 item start -->
        <v-list-tile
          v-for="link in links"
          :key="link.content"
          router
          :to="link.route"
          active-class="red--text"
        >
          <v-list-tile-action>
            <v-icon class>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="text-capitalize">{{link.content}}</v-list-tile-content>
        </v-list-tile>
        <!-- 1 item end -->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawerVisibility: false,
      links: [
        { icon: "dashboard", content: "dashboard", route: "/" },
        { icon: "alarm", content: "important", route: "/important" },
        { icon: "face", content: "team", route: "/team" }
      ]
    };
  }
};
</script>

<style>
</style>

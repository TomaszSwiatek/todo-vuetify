<template>
  <nav>
    <!-- app daje position:fixed, flat-likwiduje cień -->
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawerVisibility = !drawerVisibility"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ofc</span>
      </v-toolbar-title>
      <!-- vspacer gives space between this two tags - title&iconlogout -->
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- zauważ że jest za toolbarem ale jeszcze w navie - bo to bedzie wyjezdzajaca szuflada troche oderwana od kontentu ale jednak element nawigacji -->
    <!-- by sterowac widzialnoscia szuflady musimy to robic za pomocą v-model i potem np przypisac do buttona -->
    <!-- zeby drawer sie wyswietlal to musi byc dodany prop : app. Inaczej wyświetla sie tylko ciemne podswietlenie backgroundu -->
    <v-navigation-drawer v-model="drawerVisibility" app class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawerVisibility: false
    };
  }
};
</script>

<style>
</style>

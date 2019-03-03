<template>
  <div class="home">
    <h1>Homepage</h1>
    <p
      class="red white--text"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate?</p>
    <p
      class="pink lighten-3 red--text text--darken-4"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, consectetur!</p>
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn color="pink" dark depressed>click me</v-btn>
    <v-btn color="pink" flat>click me</v-btn>
    <v-btn color="success">
      <!-- material.io/tools/icons -->
      <v-icon left>3d_rotation</v-icon>
      <span>rotate me</span>
    </v-btn>
    <v-btn small color="success">
      <!-- material.io/tools/icons -->
      <v-icon small left>3d_rotation</v-icon>
      <span>rotate me</span>
    </v-btn>

    <v-btn large color="success">
      <!-- material.io/tools/icons -->
      <span>rotate me</span>
      <v-icon right large>3d_rotation</v-icon>
    </v-btn>
    <v-btn small fab color="indigo" dark>
      <!-- material.io/tools/icons -->
      <v-icon small>favorite</v-icon>
    </v-btn>

    <v-btn class="hidden-sm-and-down" small color="indigo" dark>
      <!-- material.io/tools/icons -->
      <v-icon small left>favorite</v-icon>
      <span>hidden on small sizes</span>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

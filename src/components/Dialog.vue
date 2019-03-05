<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on }" max-width="100%">
      <v-btn flat dark v-on="on" class="text-capitalize" outline>Add new commission</v-btn>
    </template>
    <v-card flat>
      <v-card-title class="headline teal white--text lighten-1">Add new commission:</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <v-text-field color="teal" label="Title" v-model="commissions.title" prepend-icon="title"></v-text-field>
        <v-text-field color="teal" label="From" v-model="commissions.person" prepend-icon="people"></v-text-field>
        <v-select color="teal" :items="availableStatus" label="Status" required prepend-icon="sort"></v-select>
        <v-menu>
          <v-text-field
            color="teal"
            slot="activator"
            label="Date"
            v-model="commissions.date"
            prepend-icon="date_range"
          ></v-text-field>
          <v-date-picker color="teal lighten-2" v-model="commissions.date"></v-date-picker>
        </v-menu>
      </v-card-text>

      <v-spacer></v-spacer>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal lighten-2" class="mr-4 mb-4" outline flat @click="addCommission">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      availableStatus: ["planned", "ongoing", "overdue"],
      commissions: [
        {
          title: "",
          person: "",
          date: "",
          status: ""
        }
      ]
    };
  },
  methods: {
    addCommission() {
      console.log(
        this.commissions.title,
        this.commissions.person,
        this.commissions.date,
        this.commissions.status
      );
    }
  }
};
</script>



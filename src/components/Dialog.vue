<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on }" max-width="100%">
      <v-btn flat dark v-on="on" class="text-capitalize" outline>Add new commission</v-btn>
    </template>
    <v-card flat>
      <v-card-title class="headline teal white--text lighten-1">Add new commission:</v-card-title>
      <v-divider></v-divider>
      <v-form ref="form">
        <v-card-text class="pa-4">
          <v-textarea
            label="Content"
            color="teal"
            v-model="commissions.title"
            prepend-icon="title"
            :rules="inputRules"
          ></v-textarea>

          <v-text-field
            color="teal"
            label="From"
            v-model="commissions.person"
            prepend-icon="people"
            :rules="inputRules"
          ></v-text-field>

          <v-select
            color="teal"
            prepend-icon="sort"
            :rules="inputRules"
            item-text="status"
            item-value="id"
            :items="select"
            v-model="commissions.status"
          ></v-select>

          <v-menu>
            <v-text-field
              color="teal"
              slot="activator"
              label="Date"
              v-model="commissions.date"
              prepend-icon="date_range"
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker color="teal lighten-2" v-model="commissions.date"></v-date-picker>
          </v-menu>
        </v-card-text>

        <v-spacer></v-spacer>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal lighten-2" class="mr-4 mb-4" outline flat @click="addCommission">Add</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      //validation of forms - at least 3 char. or error message
      inputRules: [
        //length is equal or more than 3 oraz show message: 'Type at least 3 characters'
        v => v.length >= 3 || "Type at least 3 characters"
      ],
      //   availableStatus: ["planned", "ongoing", "overdue"],
      select: [
        {
          id: "ongoing",
          status: "ongoing"
        },
        {
          id: "overdue",
          status: "overdue"
        },
        {
          id: "planned",
          status: "planned"
        }
      ],
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
      if (this.$refs.form.validate()) {
        console.log(
          this.commissions.title,
          this.commissions.person,
          this.commissions.date,
          this.commissions.status
        );
      } else {
        console.log("submit error");
      }
    }
  }
};
</script>



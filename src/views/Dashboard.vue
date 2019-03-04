<template>
  <div class="dashboard">
    <h1 class="subheading">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn
            flat
            color="teal"
            class="text-lowercase caption"
            @click="sortBy('title')"
            slot="activator"
          >
            <v-icon>style</v-icon>
            <span>By commission name</span>
          </v-btn>
          <span>Sort elements by commission name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn
            flat
            color="teal"
            class="text-lowercase caption"
            @click="sortBy('person')"
            slot="activator"
          >
            <v-icon>how_to_reg</v-icon>
            <span>By person</span>
          </v-btn>
          <span>Sort elements by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="commission in commissions " :key="commission.title">
        <v-layout row wrap :class="`pa-3 commission ${commission.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Commission</div>
            <div>{{commission.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">From</div>
            <div>{{commission.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{commission.date}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <!-- spycha content diva do prawej -->
            <div class="right">
              <v-chip
                :class="` ${commission.status} py-1 my-1 caption white--text`"
              >{{commission.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commissions: [
        {
          title: "Find her daughter and bring to her.",
          person: "Yennefer",
          date: "1st Jan 2020",
          status: "ongoing"
        },
        {
          title: "Avenge all the dwarves who died in a just cause",
          person: "Zoltan Chivay",
          date: "1st Fab 2021",
          status: "ongoing"
        },
        {
          title: "Help her when she needs it",
          person: "Milva",
          date: "1st Dec 2040",
          status: "planned"
        },
        {
          title: "Kill people who are preparing a coup d'état",
          person: "King Foltest",
          date: "2nd Jan 2019",
          status: "overdue"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      // zastosowany ternary epression, ale reszte wyjasnia metoda sort z vanilla js
      this.commissions.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss" scoped>
.commission.ongoing {
  border-left: 4px solid rgb(0, 174, 255);
}
.commission.overdue {
  border-left: 4px solid red;
}
.commission.planned {
  border-left: 4px solid rgb(255, 136, 0);
}

.v-chip.ongoing {
  background: rgb(0, 174, 255);
}
.v-chip.overdue {
  background: red;
}
.v-chip.planned {
  background: rgb(255, 136, 0);
}
</style>


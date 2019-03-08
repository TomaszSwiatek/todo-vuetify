<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-layout row wrap class="mb-3" align-end justify-space-between fill-height>
        <h1 class="headline">
          <span class="font-weight-light">Dash</span>board
        </h1>
        <div class="sort-section">
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
        </div>
      </v-layout>

      <v-card flat v-for="commission in commissions " :key="commission.id">
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
import db from "@/fb";
export default {
  data() {
    return {
      commissions: []
    };
  },
  methods: {
    sortBy(prop) {
      // zastosowany ternary epression, ale reszte wyjasnia metoda sort z vanilla js
      this.commissions.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    //created is alwaysa good place to get data from API, this is firebase syntax, check it ninja/31lesson
    db.collection("commissions").onSnapshot(res => {
      const CHANGES = res.docChanges();

      CHANGES.forEach(change => {
        if (change.type === "added") {
          this.commissions.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
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


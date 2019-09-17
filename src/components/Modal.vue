<template>
  <v-row justify="center">

    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Diagram</v-btn>
      </template>
      <v-card>
        <Diagrams/>
        <v-card-actions>
          <v-btn @click = 'dialog=false'>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  
</template>

<script>
  import Diagrams from './Diagrams'
  export default {
    components: {
      Diagrams
    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
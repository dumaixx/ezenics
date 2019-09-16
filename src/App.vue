<template>
  <v-app>
    <v-content>
      <ToolBar/>
       <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="300"
    >
      <v-container style="height: 1000px;"> </v-container>
    </v-sheet>
    </v-content>
  </v-app>
  
</template>

<script>
import ToolBar from './components/ToolBar'
import Diagram from './components/diagrams'

export default {
  name: 'App',
  components: {
    ToolBar,
    Diagram,
  },
};
</script>

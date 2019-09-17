<template>
  <v-app>

    <v-window
    class="mx-auto">
      <v-content>
        <ToolBar/>
          <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"

    >
      <v-container style="height: 500px; width: 500px">
        <p>Wijmo represents a new generation of JavaScript controls.
          It takes full advantage of the latest HTML5 technologies, making no compromises to support legacy browsers.
          The result is a set of controls that are much faster, smaller, and easier to use than what was possible before.
        </p>
      </v-container>
    </v-sheet>
      </v-content>
    </v-window>

  </v-app>
</template>

<script>
  import ToolBar from './components/ToolBar'
  import Modal from './components/Modal'

  export default {
    name: 'app',
    props: ['ifShow'],
    components: {
      ToolBar,
      Modal,
    },
  };
</script>

<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-toolbar-title>Ezenics</v-toolbar-title>
      <div class="flex-grow-1" ></div>
      <v-menu
        :close-on-content-click="false"
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>diagram </v-list-item-title>
            <v-list-item-action>
              <v-switch ></v-switch>
            </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <Modal />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import Modal from './Modal';

export default {
  components: {
    Modal,
  },
};
</script>

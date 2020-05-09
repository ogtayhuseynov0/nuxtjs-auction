<template>
  <div>
    <Drawer :drawer="drawer" />
    <v-app-bar
      fixed
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer.on = !drawer.on" />
      <v-toolbar-title
        v-text="title"
        v-if="searchVisible"
      />
      <v-spacer v-if="searchVisible" />
      <v-text-field
        flat
        dense
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        :class="searchVisible ? 'hidden-sm-and-down' : ''"
      >
      </v-text-field>
      <v-icon
        v-if="!searchVisible"
        style="cursor: pointer"
        class="ml-2"
        @click="searchVisible = !searchVisible"
      >mdi-close-circle</v-icon>
      <v-spacer v-if="searchVisible" />
      <v-btn
        class="mr-2 hidden-md-and-up"
        fab
        v-if="searchVisible"
        text
        :retain-focus-on-click=false
        :color="$vuetify.theme.dark ? 'white': 'black'"
        small
        @click="searchVisible = !searchVisible"
      >
        <v-icon dark>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        v-if="searchVisible"
        class="mr-2"
        fab
        text
        :retain-focus-on-click=false
        :color="$vuetify.theme.dark ? 'white': 'black'"
        small
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon dark>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn
        v-if="searchVisible"
        text
        class="mr-2 hidden-xs-only"
        to="/"
        nuxt
      >
        <v-icon>mdi-home</v-icon>&nbsp;
        Home
      </v-btn>
      <v-btn
        v-if="searchVisible"
        text
        class="mr-2 hidden-xs-only"
        color="primary"
        to="login"
        nuxt
      >
        <v-icon>mdi-login</v-icon>&nbsp;
        Login
      </v-btn>
    </v-app-bar>
  </div>

</template>

<script>
import Drawer from './Drawer'
export default {
  name: 'NavBar',
  components: { Drawer },
  data () {
    return {
      drawer: { on: false },
      fixed: false,
      searchVisible: true,
      title: 'Auction'
    }
  }
}
</script>

<style>
</style>
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
        @click="$router.push('/')"
        style="cursor: pointer"
      />
      <v-spacer v-if="searchVisible" />
      <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      item-text="text"
      item-value="link"
      clearable
      flat
      dense
      hide-no-data
      hide-details
      label="Search"
      :class="searchVisible ? 'hidden-sm-and-down' : ''"
      solo-inverted
      prepend-inner-icon="mdi-magnify"
    ></v-autocomplete>
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
      title: 'Auction',
      loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          {
            text: 'Home',
            link: '/'
          },
            {
            text: 'Login',
            link: '/login'
          },
          ,
            {
            text: 'Register',
            link: '/register'
          },
        ]
    }
  },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
      select (val) {
        if(val !== null && val !== undefined){
          this.select = undefined
          this.$router.push(val)
        }
      }
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e.text || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    }
}
</script>

<style>
</style>
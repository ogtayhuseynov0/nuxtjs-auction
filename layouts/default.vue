<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-text-field
        flat
        dense
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer />
      <v-btn
        class="mx-2"
        fab
        text
        retain-focus-on-click=false
        :color="$vuetify.theme.dark ? 'white': 'black'"
        small
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon dark>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn
        class="mr-2"
        color="primary"
        to="login"
      >
        <v-icon>mdi-login</v-icon>&nbsp;
        Login
      </v-btn>
      <v-btn
        text
        color="primary"
        to="register"
      >
        <v-icon>mdi-account-plus</v-icon>
        &nbsp; <span class="font-weight-bold">Register </span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
      ],
      title: 'Auction'
    }
  }
}
</script>

<template>
  <v-navigation-drawer
    v-model="drawer.on"
    fixed
    app
  >
    <v-list nav>
      <v-subheader>MENU
        <v-spacer />
        <v-icon
          style="cursor:pointer"
          @click="drawer.on = !drawer.on"
        >mdi-close</v-icon>
      </v-subheader>
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
</template>

<script>
export default {
  name: 'Drawer',
  props: ['drawer'],
  data () {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: 'login'
        },
        {
          icon: 'mdi-account-plus',
          title: 'Register',
          to: 'register'
        },
      ],
    }
  }
}
</script>

<style>
</style>
<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: { NavBar },
  data () {
    return {

    }
  }
}
</script>

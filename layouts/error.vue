<template>
  <v-app dark>
    <v-flex
      align-self-center
      justify-space-between
    >
      <v-card
        style="min-width: 350px"
        class="text-center"
      >
        <v-card-text>
          <h1>{{error.statusCode}}</h1>
        </v-card-text>
        <v-card-text>
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
        </v-card-text>
        <v-card-actions>
          <v-btn
            to="/"
            nuxt
            block
          >
            <v-icon>mdi-home</v-icon> &nbsp;
            Home
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

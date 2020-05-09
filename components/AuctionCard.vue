<template>
  <v-col
    cols="12"
    xs="12"
    sm="6"
    md="4"
  >
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AuctionCard'
}
</script>

<style>
</style>
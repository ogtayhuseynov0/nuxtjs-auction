<template>
  <v-col
    cols="12"
    xs="12"
    sm="6"
    md="4"
  >
    <v-card>
      <v-img
        :aspect-ratio="16/9"
        class="white--text "
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-alert
          v-if="special"
          dense
          icon="mdi-star-circle"
          border="left"
          color="teal"
          type="success"
        >
          <strong>Special</strong>
        </v-alert>
        <v-alert
          v-if="!special"
          dense
          icon="mdi-clock-fast"
          border="left"
          color="green"
          type="success"
        >
          <strong>NEW</strong>
        </v-alert>
      </v-img>
      <v-card-title class=" align-end">10S Garden</v-card-title>

      <v-card-subtitle class="pb-0 d-flex font-weight-medium">
        <div>
          <v-icon>mdi-clock-start</v-icon>&nbsp;
          Inital &bull; 150$
        </div>
        <v-spacer />
        <div>
          <v-icon>mdi-timelapse</v-icon>

          14 Hours
        </div>
      </v-card-subtitle>

      <v-card-text class="text--primary font-weight-medium">
        <div>
          <v-icon>
            mdi-chart-line-variant
          </v-icon>&nbsp;
          Highest &bull; 250$
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn
          color="orange"
          text
          block
        >
          <v-icon>mdi-tag-plus</v-icon>&nbsp;
          Make an Offer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'AuctionCard',
  props: ['special']
}
</script>

<style>
</style>
<template>
  <div>
    <Heading
      color="teal"
      icon="mdi-star-circle"
      text="Special Auctions"
    />
    <!-- <div class="d-flex flex-wrap align-center justify-space-between"> -->
    <v-row>
      <AuctionCard
        v-for="n in 7"
        :key="n"
      />
    </v-row>
    <!-- </div> -->
  </div>
</template>

<script>
import Heading from '../components/Heading'
import AuctionCard from '../components/AuctionCard'

export default {
  components: {
    Heading,
    AuctionCard
  }
}
</script>

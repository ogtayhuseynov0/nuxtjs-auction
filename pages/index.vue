<template>
  <div>
    <!-- {{hello}} -->
    <Heading
      color="teal"
      icon="mdi-star-circle"
      text="Special Auctions"
    />
    <v-row>
      <AuctionCard
        v-for="n in 3"
        :key="n"
        :special=true
      />
    </v-row>
    <v-row class="my-2 mx-0">
      <v-btn
        block
        text
        color="teal"
      >
        <v-icon>mdi-dots-horizontal</v-icon> &nbsp;
        View More Specials

      </v-btn>
    </v-row>
    <Heading
      color="green"
      icon="mdi-clock-fast"
      text="New Auctions"
    />
    <v-row>
      <AuctionCard
        v-for="n in 3"
        :key="n"
        :special=false
      />
    </v-row>
    <v-row class="my-2 mx-0">
      <v-btn
        block
        text
        color="green"
      >
        <v-icon>mdi-dots-horizontal</v-icon> &nbsp;

        View More New Auctions
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import Heading from '../components/Heading'
import AuctionCard from '../components/AuctionCard'

export default {
  components: {
    Heading,
    AuctionCard
  },
  // async asyncData ({ params, $axios }) {
  //   const { data } = await $axios.get(`http://localhost:3000/api/auctions`)
  //   console.log('hello')
  //   return { hello: data.hello }
  // }
}
</script>

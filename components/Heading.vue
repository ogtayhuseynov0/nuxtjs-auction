<template>
  <div>
    <v-alert
      :color="color"
      text
      border="left"
      dense
      :icon="icon"
    >
      {{text}}
    </v-alert>

  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['icon', 'text', 'color']

}
</script>

<style>
</style>
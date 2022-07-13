<template>
  <ul class="channnel">
      <li @click="$store.commit('channel/updateCurrentChannel', item.id)" :class="{select: item.id === currentChannel}" v-for="item in channels" :key="item.id">{{  item.name }}</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['channels', 'currentChannel'])
  },
  created () {
    this.$store.dispatch('channel/getChannels')
  }

}
</script>

<style>

</style>

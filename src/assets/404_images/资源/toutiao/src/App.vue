<template>
  <div id="app">
     <channel />
     <new-list></new-list>
  </div>
</template>

<script>
import Channel from './components/channel.vue'
import NewList from './components/new-list.vue'
export default {
  name: 'App',
  components: {
    Channel,
    NewList
  }
}
</script>

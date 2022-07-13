import Vue from 'vue'
import Vuex from 'vuex'

import channel from './modules/channel'
import newlist from './modules/newlist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    channel,
    newlist
  },
  getters: {
    channels: state => state.channel.channels,
    currentChannel: state => state.channel.currentChannel,
    currentList: state => state.newlist.allData[state.channel.currentChannel] || []

  }
})

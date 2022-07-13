import axios from 'axios'
export default {
  namespaced: true,
  state: {
    channels: [],
    currentChannel: ''
  },
  mutations: {
    updateChannels (state, payload) {
      state.channels = payload
    },
    updateCurrentChannel (state, payload) {
      state.currentChannel = payload
    }
  },
  actions: {
    async getChannels ({ commit }) {
      const { data: { data: { channels } } } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
      commit('updateChannels', channels)
      commit('updateCurrentChannel', channels[0].id)
    }
  }
}

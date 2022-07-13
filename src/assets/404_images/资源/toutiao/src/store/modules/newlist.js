import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList (state, { currentChannel, list }) {
      // 不是响应式的
      // state.allData[currentChannel] = list // 这样做事大错特错第  感觉不到变化 就不会通知组件
      state.allData = { ...state.allData, [currentChannel]: list }
      // 这句代码的含义 就相当于 在一个新的对象后面追加了一个属性  更新某个属性的内容
    }
  },
  actions: {
    // 获取新闻列表数据
    // 分类id只能通过传递的方式传进来
    async getNewList ({ commit }, channelId) {
      const { data: { data: { results } } } = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${channelId}&timestamp=${Date.now()}&with_top=1`)
      // results是新闻列表
      commit('updateList', { currentChannel: channelId, list: results })
    }
  }
}

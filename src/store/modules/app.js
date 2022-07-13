import { login } from '@/api/user'

const state = {
  token: ''
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  async login (context, data) {
    try {
      const res = await login(data)
      console.log(res)
      context.commit('setToken', res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

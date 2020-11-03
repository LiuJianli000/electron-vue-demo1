const state = {
  count: 0
}

const mutations = {
  add (state, num) {
    state.count += num
  },
  minus (state, num) {
    state.count -= num
  }
}

const actions = {
  asyncAdd ({ commit }, num) {
    setTimeout(() => {
      commit('add', num)
    }, 2000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

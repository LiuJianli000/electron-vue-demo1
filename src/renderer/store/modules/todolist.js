import axios from 'axios'

const state = {
  list: []
}

const mutations = {
  addItem (state, inputValue) {
    state.list.push(inputValue)
  },
  deleItem (state, index) {
    state.list.splice(index, 1)
  },
  fetch (state, list) {
    state.list = [...list]
  }
}

const actions = {
  fetchList ({ commit }) {
    axios
      .get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')
      .then(res => {
        commit('fetch', res.data.data.list)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

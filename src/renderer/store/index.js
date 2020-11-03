import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { createPersistedState } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    // 刷新 数据不会消失
    createPersistedState()
    // 多进程间共享 vuex store 状态
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})

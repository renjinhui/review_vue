import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:123
  },
  mutations: {
    addCount(state,options){
      state.count += options.num
    }
  },
  actions: {
    addCountAsync({commit},options){
      setTimeout(() => {
        commit('addCount',options)
      }, 2000);
    }
  },
  modules: {
  }
})

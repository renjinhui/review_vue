import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    china_data:{
      add_daily:{}
    }
  },
  mutations: {
    getChinaData(state,options){
      state.china_data = options;
    }
  },
  actions: {
    getChinaData({commit},options){
      commit('getChinaData',options)
    }
  },
  modules: {
  }
})

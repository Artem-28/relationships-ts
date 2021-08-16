import Vue from 'vue'
import Vuex from 'vuex'
import Boxes from './modules/boxes'
import Relationships from './modules/relationships'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Boxes,
    Relationships
  }
})

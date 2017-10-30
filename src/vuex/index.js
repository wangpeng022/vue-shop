import Vue from 'vue'
import Vuex from 'vuex'
import user from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  modules: {
    user
  }
})

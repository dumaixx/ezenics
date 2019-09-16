import Vue from 'vue'
import Vuex from 'vuex'
import diagram from './modules/diagramData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    diagram
  }

})
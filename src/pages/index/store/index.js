import Vue from 'vue'
import Vuex from 'vuex'
import { wrapStore } from '@utils'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  baseInfo: {
    budget: 0,
    income: 0,
    outlay: 0,
  },
  todayInfo: {
    income: 0,
    outlay: 0,
  },
  weekInfo: {
    income: 0,
    outlay: 0,
  },
  bookList: [],
}

const store = wrapStore({
  state,
  getters,
  actions,
  mutations,
})

export default store

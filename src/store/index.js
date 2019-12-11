import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexPageTitle: 'BRAIN.JS Crypto Price Analysis',
    btcPrice: '00.00',
    ethPrice: '00.00',
    bchPrice: '00.00',
    xlmPrice: '00.00',
    errorMsg: ''
  },
  mutations: {
    getBtcPrice: (state, payload) => {
      state.btcPrice = payload.btcGottenPrice
      state.ethPrice = payload.ethGottenPrice
      state.bchPrice = payload.bchGottenPrice
      state.xlmPrice = payload.xlmGottenPrice
    },
    getErrorMsg: (state, payload) => {
      state.errorMsg = payload
    }
  },
  actions: {
    getBtcPrice: (context) => {
      var anObject = {
        'btcGottenPrice': '',
        'ethGottenPrice':'',
        'bchGottenPrice': '',
        'xlmGottenPrice': ''
      }
      axios.get('https://api.coincap.io/v2/assets')
      .then((res) => {
        anObject.btcGottenPrice = res.data.data[0].priceUsd
        anObject.ethGottenPrice = res.data.data[1].priceUsd
        anObject.bchGottenPrice = res.data.data[4].priceUsd
        anObject.xlmGottenPrice = res.data.data[9].priceUsd
        context.commit('getBtcPrice', anObject)
      })
      .catch(err => context.commit('getErrorMsg', err))
      
    }
  },
  modules: {
  }
})

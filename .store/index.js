import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: {
        strategy: 'auth0'
      }
    }
  })
}

export default createStore

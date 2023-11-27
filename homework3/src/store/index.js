import { createStore } from 'vuex'

export default createStore({
  state: {
    jsonData: []
  },
  getters: {
  },
  mutations: {
    setJsonData(state, data) {
      state.jsonData = data
    },

    incrementCounter(state, elementId) {
      const element = state.jsonData.find(el => el.id === elementId);
      if (element) {
        element.counter++;
      }

    },

    resetLikes: state => {
      state.jsonData.forEach(post => {
          post.counter = 0;
      })
    }
  },
  actions: {
    fetchJson({commit}) {
    fetch('https://api.npoint.io/48609dec2ba5b143263c')
    .then((response) => response.json())
    .then(data => {
      var dataArrayWithCounter = data.map(item => ({
        ...item,
        counter: 0,
      }));
      commit('setJsonData', dataArrayWithCounter);
    })
    .catch(err => console.log(err.message))
    },

    incrementCounter({ commit }, elementId) {
      commit('incrementCounter', elementId);
    },

    resetLikes: act => {
      act.commit("resetLikes")
    }
  },
  modules: {
  }
})

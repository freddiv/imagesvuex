import api from '../../api/imgur'
import qs from 'qs'
import router from '../../router'

const state = {
  token: window.localStorage.getItem('imgur-token') || null,
};

const getters = {
  isLoggedIn: (state) =>  !!state.token
}

const actions = {  
  login: () => {
    api.login()
  },
  finalizeLogin({commit}, hash) {
   const accessToken = qs.parse(hash.replace('#', '')).access_token 
   commit('setToken', accessToken)
   window.localStorage.setItem('imgur-token', accessToken)
   router.push('/Gallery')
  },
  logout: ({commit}) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur-token')
  },

}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
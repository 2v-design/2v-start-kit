import { defineStore } from 'pinia'
import api from 'api'

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => ({
    access_token: localStorage.getItem('access_token')
  }),
  actions: {
    async getAccessToken(params) {
      try {
        return api.post('/login', params)
      } catch (error) {
        console.log('===error', error)
      }
    },

    getUserInfo(access_token) {
      try {
        return api.get(`/userInfo/${access_token}`)
      } catch (error) {
        console.log('===error', error)
      }
    }
  }
})

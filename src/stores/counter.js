import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 1,
    message: '默认message'
  }),
  getters: {
    doubleCount: (state) => state.count * 5
  }
})

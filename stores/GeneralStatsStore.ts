// ~/stores/statsStore.ts
import { defineStore } from 'pinia'
import { fetchTotalRequests, fetchRequestsPerUser } from '~/repository/statsRepository'

export const useStatsStore = defineStore('stats', {
  state: () => ({
    totalRequests: 0,
    requestsPerUser: {} as Record<string, number>,
  }),

  actions: {
    async loadStats() {
      const total = await fetchTotalRequests()
      const perUser = await fetchRequestsPerUser()
      this.totalRequests = total.data
      this.requestsPerUser = perUser.data
    },
  }
})

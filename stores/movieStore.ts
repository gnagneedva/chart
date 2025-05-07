// /stores/movieStore.ts
import { defineStore } from 'pinia'
import { fetchPopularMovies } from '~/repository/movieRepository'
import type { Movie } from '~/types/Movie'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    popular: [] as Movie[],
  }),

  actions: {
    async loadPopularMovies() {
      this.popular = await fetchPopularMovies()
    },
  },
})

// /stores/movieStore.ts
import { defineStore } from 'pinia'
import {
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchUpcomingMovies,
  fetchMovieGenres,
  fetchTVGenres,
} from '~/repository/movieRepository'

import type { Movie } from '~/types/Movie'
import type { TVShow } from '~/types/TVShow'
import type { Genre } from '~/types/Genre'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    popular: [] as Movie[],
    tvShows: [] as TVShow[],
    upcomingMovies: [] as Movie[],
    movieGenres: [] as Genre[],
    tvGenres: [] as Genre[],
  }),

  actions: {
    async loadPopularMovies() {
      this.popular = await fetchPopularMovies()
    },

    async loadAll() {
      this.popular = await fetchPopularMovies()
      this.tvShows = await fetchPopularTVShows()
      this.upcomingMovies = await fetchUpcomingMovies()
      this.movieGenres = await fetchMovieGenres()
      this.tvGenres = await fetchTVGenres()
    },

    countMoviesByGenre(genreId: number) {
      return this.popular.filter(movie => movie.genre_ids.includes(genreId)).length
    },

    countTVShowsByGenre(genreId: number) {
      return this.tvShows.filter(show => show.genre_ids.includes(genreId)).length
    },
  },
})

import type { Movie } from '~/types/Movie'
import type { TVShow } from '~/types/TVShow'
import type { Genre } from '~/types/Genre'

const baseUrl = 'https://api.themoviedb.org/3'

interface PopularMoviesResponse {
  results: Movie[]
}

interface PopularTVShowsResponse {
  results: TVShow[]
}

interface UpcomingMoviesResponse {
  results: Movie[]
}

interface GenreResponse {
  genres: Genre[]
}

// ✅ Films populaires
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const config = useRuntimeConfig()

  const { data, error} = await useFetch<PopularMoviesResponse>(
    `${baseUrl}/movie/popular`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    }
  )

  if (error.value) {
    console.error('Fetch Error (Popular Movies):', error.value)
  }

  return data.value?.results || []
}

// ✅ Séries populaires
export const fetchPopularTVShows = async (): Promise<TVShow[]> => {
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<PopularTVShowsResponse>(
    `${baseUrl}/tv/popular`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    }
  )

  if (error.value) {
    console.error('Fetch Error (Popular TV Shows):', error.value)
  }

  return data.value?.results || []
}

// ✅ Films à venir
export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<UpcomingMoviesResponse>(
    `${baseUrl}/movie/upcoming`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    }
  )

  if (error.value) {
    console.error('Fetch Error (Upcoming Movies):', error.value)
  }

  return data.value?.results || []
}

// ✅ Genres de films
export const fetchMovieGenres = async (): Promise<Genre[]> => {
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<GenreResponse>(
    `${baseUrl}/genre/movie/list`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      params: {
        language: 'en-US',
      },
    }
  )

  if (error.value) {
    console.error('Fetch Error (Movie Genres):', error.value)
  }

  return data.value?.genres || []
}

// ✅ Genres de séries
export const fetchTVGenres = async (): Promise<Genre[]> => {
  const config = useRuntimeConfig()

  const { data, error } = await useFetch<GenreResponse>(
    `${baseUrl}/genre/tv/list`,
    {
      headers: {
        Authorization: `Bearer ${config.public.tmdbApiKey}`,
      },
      params: {
        language: 'en-US',
      },
    }
  )

  if (error.value) {
    console.error('Fetch Error (TV Genres):', error.value)
  }

  return data.value?.genres || []
}

import type { Movie } from '~/types/Movie'

interface PopularMoviesResponse {
  results: Movie[]
}

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const config = useRuntimeConfig()

  // ✅ Ajoute ce log pour vérifier que la clé est bien chargée
  console.log('TMDB API Key:', config.public.tmdbApiKey)

  const { data, error, status } = await useFetch<PopularMoviesResponse>(
    'https://api.themoviedb.org/3/movie/popular',
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

  // ✅ Log des erreurs et des statuts
  if (error.value) {
    console.error('Fetch Error:', error.value)
  }

  console.log('Status:', status.value)
  console.log('Data:', data.value)

  // ✅ Retourne les films si dispo, sinon tableau vide
  return data.value?.results || []
}

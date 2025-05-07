import { ref, onMounted } from 'vue'
import { fetchPopularMovies } from '~/repository/movieRepository'
import type { Movie } from '~/types/Movie'

export function usePopularMovies() {
  const movies = ref<Movie[]>([]) // ✅ Typage ici

  const getMovies = async () => {
    movies.value = await fetchPopularMovies()
  }

  onMounted(getMovies)

  return { movies }
}

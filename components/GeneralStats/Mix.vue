<template>
    <div>
      <!-- Sélecteur du type de graphique -->
      <select v-model="selectedChartType" class="mb-2 p-2 rounded border">
        <option value="bar">Barres</option>
        <option value="line">Courbe</option>
      </select>
  
      <!-- Sélecteur du critère de tri -->
      <select v-model="selectedMetric" class="mb-4 p-2 rounded border ml-4">
        <option value="popularity">Popularité</option>
        <option value="duration">Durée</option>
      </select>
  
      <!-- Le graphique -->
      <component
        :is="selectedChartType === 'bar' ? Bar : Line"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { Bar, Line } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { useMovieStore } from '~/stores/movieStore'
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  )
  
  const selectedChartType = ref<'bar' | 'line'>('line')
  const selectedMetric = ref<'popularity' | 'duration' | 'genre'>('popularity')

  const chartData = ref({
    labels: [] as string[],
    datasets: [] as {
      label: string;
      data: (number | null)[];
      backgroundColor: string;
      borderColor: string;
      tension?: number;
      fill?: boolean;
      pointBackgroundColor?: string;
      borderWidth?: number;
      borderRadius?: number;
    }[]
  })
  
  const movieStore = useMovieStore()
  
  const updateChartData = () => {
  const metric = selectedMetric.value

  if (metric === 'genre') {
    const genreCount: Record<string, number> = {}

    movieStore.popular.forEach(movie => {
      movie.genre_ids?.forEach(id => {
        const genreName = movieStore.movieGenres.find((g) => g.id === id)?.name

        if (genreName) {
          genreCount[genreName] = (genreCount[genreName] || 0) + 1
        }
      })
    })

    const labels = Object.keys(genreCount)
    const data = Object.values(genreCount)

    chartData.value = {
      labels,
      datasets: [{
        label: 'Nombre de films par genre',
        data,
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: '#3b82f6',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#3b82f6',
        borderWidth: 2,
        borderRadius: selectedChartType.value === 'bar' ? 8 : 0
      }]
    }
  } else {
    const sortedMovies = [...movieStore.popular]
      .filter(m => m[metric] !== undefined)
      .sort((a, b) => b[metric] - a[metric])
      .slice(0, 5)

    chartData.value = {
      labels: sortedMovies.map(m => m.title),
      datasets: [{
        label: metric === 'popularity' ? 'Popularité' : 'Durée (min)',
        data: sortedMovies.map(m => m[metric]),
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderColor: '#3b82f6',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#3b82f6',
        borderWidth: 2,
        borderRadius: selectedChartType.value === 'bar' ? 8 : 0
      }]
    }
  }
}

  
  onMounted(async () => {
    await movieStore.loadAll()

    updateChartData()
  })
  
  // met à jour le graphique quand le critère change
  watch([selectedMetric, selectedChartType], updateChartData)
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
  </script>
  
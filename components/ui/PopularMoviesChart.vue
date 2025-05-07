<!-- components/ui/PopularMoviesChart.vue -->
<template>
  
    <Bar :data="chartData" :options="chartOptions" />
  </template>
  
  <script setup lang="ts">
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { useMovieStore } from '~/stores/movieStore'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const movieStore = useMovieStore()
  await movieStore.loadPopularMovies()
  
  const chartData = {
    labels: movieStore.popular.slice(0, 5).map(m => m.title),
    datasets: [{
      label: 'Popularité',
      data: movieStore.popular.slice(0, 5).map(m => m.popularity),
      backgroundColor: '#3b82f6'
    }]
  }
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
  </script>
  
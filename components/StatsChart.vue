<template>
    <div class="w-full mx-auto">
      <Bar v-if="!loading && chartData" :data="chartData" :options="chartOptions"  style="width: 70vw;"/>
      <p v-else-if="loading">Chargement...</p>
      <p v-else>{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useStats } from '@/composables/useStats';
  import { Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  const { data, loading, error } = useStats();
  
  const chartData = computed(() => {
    if (!data.value.length) return null;
  
    return {
      labels: data.value.map((item) => item.screen || 'Inconnu'),
      datasets: [
        {
          label: 'Requêtes par écran',
          backgroundColor: '#3B82F6',
          borderRadius: 8,
          barPercentage: 0.1,        // Largeur des barres (plus petit = plus étroit)
        categoryPercentage: 4,   // Espace entre les groupes de barres
          data: data.value.map((item) => item.total_requests),
        },
      ],
    };
  });
  
  const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Nombre de requêtes par écran' },
  },
  scales: {
    x: {
      ticks: {
        font: { size: 10 }, // taille de la police des labels
        maxRotation: 90, // angle maximal de rotation
        minRotation: 90, // angle minimal de rotation
        autoSkip: false, // évite de sauter certains labels
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

  </script>
  
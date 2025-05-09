<!-- pages/index.vue -->
<template>
  <div
    class="font-poppins flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-gray-50 gap-4 items-center justify-center p-32"
    >
    <Box class="font-poppins" />
    
      <StatsChart class="font-poppins shadow-md rounded-lg bg-white p-16" />
      <!-- <Mix style="width: 300px; height: 300px;" class="w-32 h-32" />
        <PopularMoviesChart style="width: 300px; height: 300px;" class="w-32 h-32" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Box from "~/components/GeneralStats/Box.vue";
// import Mix from '~/components/GeneralStats/Mix.vue';
// import PopularMoviesChart from '~/components/GeneralStats/PopularMoviesChart.vue'
</script>

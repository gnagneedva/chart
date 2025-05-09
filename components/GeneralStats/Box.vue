<script setup lang="ts">
import { onMounted } from "vue";
import { useStatsStore } from "~/stores/GeneralStatsStore";

const statsStore = useStatsStore();

onMounted(async () => {
  await statsStore.loadStats();
});
</script>

<template>
  <div>
    <h2>Statistiques E-agri</h2>
    
    <h3 class="mt-4 font-poppins">📋 Requêtes par utilisateur :</h3>
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-7 px-4 py-3">
      <div class=" bg-white rounded-xl shadow-md flex items-start flex-col gap-3 justify-start p-4">
        <div class="text-xs flex justify-between items-center gap-2 text-gray-500">
          <span>Total de requêtes envoyées </span>
          <span class="bg-gray-200 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          </span>
        </div> 
        <span class="text-2xl font-bold">{{ statsStore.totalRequests }}</span>
      </div>
      <div class=" bg-gray-300 rounded-xl"></div>
      <div class="w-42 h-24 bg-gray-300 rounded-xl"></div>
      <div class="w-42 h-24 bg-gray-300 rounded-xl"></div>
    </div>
    <!---->
  </div>
</template>

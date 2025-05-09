import { ref, onMounted } from 'vue';
import { fetchRequestsPerScreen } from '@/repository/statsRepository';
import type { Datum } from '@/types/requestPerScreen';

export function useStats() {
  const loading = ref(true);
  const data = ref<Datum[]>([]);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      const res = await fetchRequestsPerScreen();
      data.value = res.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      error.value = 'Erreur lors du chargement des statistiques';
    } finally {
      loading.value = false;
    }
  });

  return { loading, data, error };
}

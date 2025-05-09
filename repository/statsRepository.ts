// ~/repository/statsRepository.ts
import { api } from '~/utils/api'
import type { RequestPerScreen } from '@/types/requestPerScreen'
export async function fetchTotalRequests() {
  const { data } = await api.get('/total-requests')
  return data
}

export async function fetchRequestsPerScreen(): Promise<RequestPerScreen> {
  const { data } = await api.get<RequestPerScreen>('/requests-per-screen')
  return data
}

export async function fetchRequestsPerUser() {
  const { data } = await api.get('/requests-per-user')
  return data
}

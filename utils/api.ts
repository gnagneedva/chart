// ~/utils/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.prod.eagri.ci/api/v1/mob-log/mobile/stats',
})

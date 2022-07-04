import axios from 'axios'
import env from '@/config/environemnt'

export const apiServices = axios.create({
  baseURL: env.serveConfig.SERVICE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  mode: 'cors'
})

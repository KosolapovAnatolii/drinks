import axios from 'axios'
import { useUserStore } from 'stores/user-store'

const axiosInstance = axios.create({
  baseURL: 'https://drinks-backend-x4zi.onrender.com/api',
})

axiosInstance.interceptors.request.use((config) => {
  const userStore = useUserStore()
  const token = userStore.userToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

export default axiosInstance

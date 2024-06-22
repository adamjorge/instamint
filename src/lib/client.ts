import axios from "axios"

const axiosClient = axios.create({
  baseURL: "/api",
  timeout: 1000
})

export default axiosClient

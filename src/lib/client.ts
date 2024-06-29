import axios from "axios"

const axiosClient = axios.create({
  baseURL: "/api",
  timeout: 5000
})

export default axiosClient

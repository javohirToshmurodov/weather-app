import axios from "axios"

export const api = axios.create({
  baseURL:"https://api.openweathermap.org",
  params:{
    appid:"cffbb4ba676651c9514d4ca954dab73c",
    units :"metric"
  }
})
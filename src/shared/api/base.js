import axios from "axios";

export const API_URL = `https://api.anilibria.tv/v3/`

export const API_IMAGES = `https://anilibria.wtf/`

export const apiInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
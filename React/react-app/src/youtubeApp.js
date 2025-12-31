import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: API_KEY
    }
})
import axios from "axios";

// Create an Axios instance with TMDB base URL
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default Instance;

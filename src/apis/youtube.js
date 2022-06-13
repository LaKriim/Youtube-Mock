import axios from "axios";

const KEY = "AIzaSyDJ2GO7wCUqC04kME3hUvux-c5XJRyKBaU";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 30,
    key: KEY,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://physio-server-ccho3et04-ayushsingh05.vercel.app/",
  headers: {
    "Content-type": "application/json",
  }
});

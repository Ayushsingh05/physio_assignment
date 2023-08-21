import axios from "axios";

export default axios.create({
  baseURL: "https://physio-backend-txb1.vercel.app/",
  headers: {
    "Content-type": "application/json",
  }
});
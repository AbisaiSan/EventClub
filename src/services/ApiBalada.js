import axios from "axios";

const apiBalada = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});




export default apiBalada;

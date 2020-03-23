import axios from "axios";

const Cinema = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default Cinema;

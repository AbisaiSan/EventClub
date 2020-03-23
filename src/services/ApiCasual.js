import axios from "axios";

const Casual = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default Casual;

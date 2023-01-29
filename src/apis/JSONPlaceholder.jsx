import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const JSONPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default setupCache(JSONPlaceholder)

import axios from "axios";

const instance = axios.create({
  baseURL: "https://680faa7b67c5abddd1962fd5.mockapi.io",
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});
export default instance;

// Функция установки токена
export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функция удаления токена
export const clearAuthHeader = () => {
  delete instance.defaults.headers.common.Authorization;
};

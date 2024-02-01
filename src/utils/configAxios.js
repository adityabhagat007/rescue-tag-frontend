import axios from "axios";
import { BASE_URL } from "./config";
import { getLocalStorageItem } from "../services/localStorageService";
import { LOCAL_STORAGE_CONSTANTS } from "../constants/constant";

const authInterceptor = (req) => {
  const token = getLocalStorageItem(LOCAL_STORAGE_CONSTANTS.authToken);
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};
/**
 * *With out token requests
 */
export const PUBLIC_API_REQ = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

/**
 * *With token requests
 */
export const PROTECTED_API_REQ = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

PROTECTED_API_REQ.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";
  return authInterceptor(req);
});

export const apiErrorHandler = async (err) => {
  try {
    const errorMsg = err?.response?.data || { message:"Something went wrong....."};
    const status = err?.response?.status || 500;
    console.error("API REQUEST FAIL..........", err, errorMsg, status);
    return { data: errorMsg, status: status };
  } catch (err) {
    console.error(err);
  }
};

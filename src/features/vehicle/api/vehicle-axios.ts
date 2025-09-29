import { env } from "@/utils/env";
import axios from "axios";
import qs from "qs";

export const vehicleAxios = axios.create({
  baseURL: env.VITE_API_BASE_URL + "/vehicle",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
  },
  timeout: 10000,
});


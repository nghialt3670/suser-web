import { env } from "@/utils/env";
import axios from "axios";
import qs from "qs";
import { userManager } from "@/lib/oidc-client";

export const userAxios = axios.create({
  baseURL: env.VITE_API_BASE_URL + "/api/users",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
  },
  timeout: 10000,
});

userAxios.interceptors.request.use(async (config) => {
  const user = await userManager.getUser();
  const token = user?.access_token;
  if (token) {
    config.headers = config.headers ?? {};
    if (!("Authorization" in config.headers)) {
      (config.headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});



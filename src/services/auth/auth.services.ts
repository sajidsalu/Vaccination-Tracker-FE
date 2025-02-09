import requests from "@/config/api";
import { API_URL } from "@/constants/api-endpoints.constants";
import { LoginPayload } from "./auth.types";

export const loginUser = async (payload: LoginPayload) => {
  return await requests.post(API_URL.LOGIN, payload);
};

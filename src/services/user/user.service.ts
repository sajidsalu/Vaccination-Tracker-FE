import requests from "@/config/api";
import { API_URL } from "@/constants/api-endpoints.constants";

export const getChildList = async (userId: string) => {
  return await requests.get(API_URL.USER_KIDS_LIST.replace(":userId", userId));
};

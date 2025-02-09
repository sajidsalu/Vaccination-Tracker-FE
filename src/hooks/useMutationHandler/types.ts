import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { UseMutationOptions } from "@tanstack/react-query";

export type APIResponse<T> = T & FailedAPIResponse;

type QueryOptions = Omit<
  UseMutationOptions,
  "onSuccess" | "onError" | "mutationFn"
>;

export type MutationOptions<T, U> = {
  mutationFn: (payload: U) => Promise<APIResponse<T>>;
  resource: string;
  handler?: APIHandlerType<T>;
  successCodes?: number[];
  defaultErrorMsg?: string;
  queryOptions?: QueryOptions;
};

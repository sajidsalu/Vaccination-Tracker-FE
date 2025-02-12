import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { QueryKey, UndefinedInitialDataOptions } from "@tanstack/react-query";

export type QueryOptions = Omit<
  UndefinedInitialDataOptions,
  "queryKey" | "queryFn"
>;
export type APIResponse<T> = T & FailedAPIResponse;

export type Options<T> = {
  queryKey: QueryKey;
  queryFn: () => Promise<T>;
  resource?: string;
  queryOptions?: QueryOptions;
  successCodes?: number[];
  handler?: APIHandlerType<T>;
  defaultErrorMsg?: string;
};

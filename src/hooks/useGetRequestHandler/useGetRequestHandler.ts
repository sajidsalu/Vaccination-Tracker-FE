import { useQuery } from "@tanstack/react-query";
import { APIResponse, Options } from "./types";
import { FailedAPIResponse } from "@/types/api.types";
import { useEffect } from "react";

const useGETRequestHandler = <T>(options: Options<T>) => {
  const {
    queryFn,
    queryKey,
    queryOptions,
    handler,
    successCodes = [200],
  } = options;

  const onRejected = (error: FailedAPIResponse) => {
    // const errorInfo = getErrorInfo(error);
    handler?.onError?.(error);
  };

  const onFulfilled = (res: APIResponse<T>) => {
    // const hasError = checkError(res);
    if (!successCodes?.includes(res?.status as number)) {
      onRejected(res);
      return;
    }
    handler?.onSuccess?.(res);
  };

  const { isError, isLoading, isSuccess, data, error, ...rest } = useQuery<T>({
    queryKey,
    queryFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(queryOptions as any),
  });

  useEffect(() => {
    if (isSuccess) {
      onFulfilled(data as APIResponse<T>);
    } else if (isError && (data || error)) {
      const errorRes = data ?? error;
      onRejected(errorRes as unknown as FailedAPIResponse);
    }
  }, [isSuccess, isError, data, error]);

  return { isError, isLoading, isSuccess, data, error, ...rest };
};

export default useGETRequestHandler;

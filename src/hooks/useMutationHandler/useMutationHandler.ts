/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { APIResponse, MutationOptions } from "./types";
import { FailedAPIResponse } from "@/types/api.types";

/**
 * @param options `T - APIResponse Type, U - Payload Type`
 */
const successCodes = [200, 201];

const useMutationWithHandler = <T, U>(options: MutationOptions<T, U>) => {
  const { mutationFn, queryOptions, handler } = options;

  //   const { checkError, getErrorInfo } = useAPIErrorHandler(resource, defaultErrorMsg);

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

  return useMutation<T, Error, U>({
    mutationFn,
    onSuccess: onFulfilled,
    onError: onRejected,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(queryOptions as any),
  });
};

export default useMutationWithHandler;

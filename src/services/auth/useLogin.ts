import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { useQueryClient } from "@tanstack/react-query";
import { LoginAPIResponse, LoginPayload } from "./auth.types";
import { loginUser } from "./auth.services";
import { useMutationHandler } from "@/hooks";

type APIResponse = LoginAPIResponse & FailedAPIResponse;

const useLogin = (handler?: APIHandlerType<LoginAPIResponse>) => {
  const queryClient = useQueryClient();

  const onFulFilled = (res: APIResponse) => {
    queryClient.clear();
    queryClient.invalidateQueries();
    queryClient.removeQueries();

    handler?.onSuccess?.(res);
  };

  return useMutationHandler<APIResponse, LoginPayload>({
    mutationFn: loginUser,
    handler: {
      onSuccess: onFulFilled,
      onError: handler?.onError,
    },
    resource: "",
  });
};

export default useLogin;

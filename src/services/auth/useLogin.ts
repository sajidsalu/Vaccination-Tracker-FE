import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { LoginAPIResponse, LoginPayload } from "./auth.types";
import { loginUser } from "./auth.services";
import { useMutationHandler } from "@/hooks";

type APIResponse = LoginAPIResponse & FailedAPIResponse;

const useLogin = (handler?: APIHandlerType<LoginAPIResponse>) => {
  return useMutationHandler<APIResponse, LoginPayload>({
    mutationFn: loginUser,
    handler,
  });
};

export default useLogin;

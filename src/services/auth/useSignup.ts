import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { LoginAPIResponse, SignUpPayload } from "./auth.types";
import { signupUser } from "./auth.services";
import { useMutationHandler } from "@/hooks";

type APIResponse = LoginAPIResponse & FailedAPIResponse;

const useSignup = (handler?: APIHandlerType<LoginAPIResponse>) => {
  return useMutationHandler<APIResponse, SignUpPayload>({
    mutationFn: signupUser,
    handler,
  });
};

export default useSignup;

import { APIHandlerType, FailedAPIResponse } from "@/types/api.types";
import { UserChildListAPIResponse } from "./user.types";
import { getChildList } from "./user.service";
import { useMutationHandler } from "@/hooks";

type APIResponse = UserChildListAPIResponse & FailedAPIResponse;

const useGetChildList = (
  handler?: APIHandlerType<UserChildListAPIResponse>
) => {
  return useMutationHandler<APIResponse, string>({
    mutationFn: getChildList,
    handler,
  });
};

export default useGetChildList;

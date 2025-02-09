import { toast } from "react-toastify";

const useToast = () => {
  return {
    showSuccessToast: (message: string) => toast.success(message),
    showErrorToast: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
    warn: (message: string) => toast.warn(message),
  };
};

export default useToast;

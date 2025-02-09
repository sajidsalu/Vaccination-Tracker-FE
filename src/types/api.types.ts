export type APICommonResponseType = {
  status: number;
};

export type FailedAPIResponse = {
  status: number;
  result: {
    message: string;
    error: string;
    statusCode: number;
  };
};

export type FailedAPIStatus = {
  status: number;
  result: {
    message: string;
    error: string;
    statusCode: number;
  };
};

export type APIHandlerType<T = unknown> = {
  onSuccess?: (data: T) => void;
  onError?: (errorInfo: FailedAPIStatus) => void;
};

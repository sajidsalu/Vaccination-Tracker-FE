export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginAPIResponse = {
  result: LoginResponse;
};

export type LoginResponse = {
  userId: string;
  refreshToken: string;
  authToken: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

export interface User {
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  status: string;
  data?: any;
}

export interface LoginResponse {
  token: string;
  message: string;
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email:string,password:string) => void;
  logout: () => void;
}

export type LoginFormState = {
  email: string;
  password: string;
};


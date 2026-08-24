import type { ApiResponse, ApiError } from "../types/index";

export async function ApiRequest<T>(url: string): Promise<ApiResponse<T> | ApiError> {
  const res = await fetch(url);

  if (!res.ok) {
    return {
      message: `Request failed with status ${res.status}`,
      status: res.status
    };
  }

  const data = await res.json();

  const result: ApiResponse<T> = {
    data: data as T,
    status: res.status,
    message: "Success"
  };

  return result;
}

export function isApiError<T>(response: ApiResponse<T> | ApiError): response is ApiError {
  return !("data" in response);
}
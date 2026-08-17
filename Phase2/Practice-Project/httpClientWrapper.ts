interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiSuccess<T> {
  success: true;
  data: T;
  status: number;
  message: string;
}

interface ApiFailure {
  success: false;
  message: string;
  status?: number;
  code?: string;
}

type ApiResult<T> = ApiSuccess<T> | ApiFailure;

type RequestConfig = {
  url: string;
  headers?: Record<string, string>;
};

type RequestInterceptor = (config: RequestConfig) => RequestConfig;

type ResponseInterceptor<T> = (
  response: ApiResponse<T>
) => ApiResponse<T>;

const requestInterceptors: RequestInterceptor[] = [];

/*
  Global response interceptors are optional.

  `unknown` is safer than `any`, but since globally registered
  interceptors may be designed for different T values, the cast is
  needed when registering them.
*/
const globalResponseInterceptors: ResponseInterceptor<unknown>[] = [];

function addRequestInterceptor(interceptor: RequestInterceptor): void {
  requestInterceptors.push(interceptor);
}

function addResponseInterceptor<T>(
  interceptor: ResponseInterceptor<T>
): void {
  globalResponseInterceptors.push(
    interceptor as ResponseInterceptor<unknown>
  );
}

async function apiRequest<T>(
  url: string,
  requestResponseInterceptors: ResponseInterceptor<T>[] = []
): Promise<ApiResult<T>> {
  let config: RequestConfig = { url };

  try {
    // Apply request interceptors.
    for (const interceptor of requestInterceptors) {
      config = interceptor(config);
    }

    const response = await fetch(config.url, {
      ...(config.headers ? { headers: config.headers } : {}),
    });

    // Convert HTTP failures such as 404 or 500 into ApiFailure.
    if (!response.ok) {
      return {
        success: false,
        message: `Request failed with status ${response.status}`,
        status: response.status,
      };
    }

    // Handle JSON responses.
    const data = (await response.json()) as T;

    let result: ApiResponse<T> = {
      data,
      status: response.status,
      message: "Success",
    };

    // Apply global response interceptors.
    for (const interceptor of globalResponseInterceptors) {
      result = (interceptor as ResponseInterceptor<T>)(result);
    }

    // Apply response interceptors specific to this request.
    for (const interceptor of requestResponseInterceptors) {
      result = interceptor(result);
    }

    return {
      success: true,
      data: result.data,
      status: result.status,
      message: result.message,
    };
  } catch (error) {
    // Covers network failures, invalid JSON, and interceptor errors.
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
      code: "REQUEST_ERROR",
    };
  }
}

async function main(): Promise<void> {
  addRequestInterceptor((config) => {
    console.log("Request interceptor: Adding auth header");

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: "Bearer token",
      },
    };
  });

  // Global interceptor. It will run for every API request.
  addResponseInterceptor<User[]>((response) => {
    console.log("Global response interceptor executed");

    return {
      ...response,
      message: `${response.message} | Modified globally`,
    };
  });

  const result = await apiRequest<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    [
      (response) => {
        console.log("Request-specific response interceptor executed");

        return {
          ...response,
          message: `${response.message} | Modified for users request`,
        };
      },
    ]
  );

  // `success` is a discriminant, so TypeScript automatically narrows the type.
  if (!result.success) {
    console.error("Error:", result.message);
    console.error("Status:", result.status);
    console.error("Code:", result.code);
    return;
  }

  console.log("Message:", result.message);
  console.log("Status:", result.status);
  console.log("Users:", result.data);

  result.data.forEach((user) => {
    console.log(`${user.id}: ${user.name} — ${user.email}`);
  });
}

main();
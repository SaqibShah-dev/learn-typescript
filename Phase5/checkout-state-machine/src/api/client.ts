import type { ApiClient, Routes } from '../types/api';

// Mock implementation (replace with real fetch/axios)
export function createApiClient(): ApiClient {
  const client: Partial<ApiClient> = {};

  for (const route of Object.keys({}) as (keyof Routes)[]) {
    client[route] = async (...args: any[]) => {
      // Mock response based on route
      return {} as any;
    };
  }

  return client as ApiClient;
}
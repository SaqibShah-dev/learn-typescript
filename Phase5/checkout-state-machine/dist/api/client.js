"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = createApiClient;
// Mock implementation (replace with real fetch/axios)
function createApiClient() {
    const client = {};
    for (const route of Object.keys({})) {
        client[route] = async (...args) => {
            // Mock response based on route
            return {};
        };
    }
    return client;
}

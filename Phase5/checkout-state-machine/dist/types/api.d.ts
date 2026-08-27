import type { CartItem, Address, PaymentMethod, Order } from './entities';
import type { Email } from './branded';
export type Routes = {
    'GET /cart': {
        response: CartItem[];
    };
    'POST /shipping': {
        body: Address;
        response: {
            success: boolean;
        };
    };
    'POST /payment': {
        body: PaymentMethod;
        response: {
            transactionId: string;
        };
    };
    'GET /order/:id': {
        params: {
            id: string;
        };
        response: Order;
    };
    'POST /confirmation': {
        body: {
            email: Email;
        };
        response: {
            confirmed: boolean;
        };
    };
};
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type ApiClient = {
    [K in keyof Routes]: Routes[K] extends {
        params: infer P;
    } ? (params: P, body?: never) => Promise<Routes[K]['response']> : Routes[K] extends {
        body: infer B;
    } ? (body: B) => Promise<Routes[K]['response']> : () => Promise<Routes[K]['response']>;
};
export type RoutesByMethod<M extends Method> = {
    [K in keyof Routes as K extends `${M} ${string}` ? K : never]: Routes[K];
};

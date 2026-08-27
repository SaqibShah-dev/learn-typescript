import type { CartItem, Address, PaymentMethod } from './entities';
export type CheckoutState = {
    status: 'cart';
    items: CartItem[];
} | {
    status: 'shipping';
    items: CartItem[];
    address: Address;
} | {
    status: 'payment';
    items: CartItem[];
    address: Address;
    paymentMethod: PaymentMethod;
} | {
    status: 'review';
    items: CartItem[];
    address: Address;
    paymentMethod: PaymentMethod;
} | {
    status: 'confirmation';
    orderId: string;
    timestamp: number;
};
export type AllowedTransitions<T extends CheckoutState['status']> = T extends 'cart' ? 'shipping' : T extends 'shipping' ? 'payment' : T extends 'payment' ? 'review' : T extends 'review' ? 'confirmation' : never;
export type TransitionData<T extends CheckoutState['status']> = T extends 'shipping' ? {
    address: Address;
} : T extends 'payment' ? {
    paymentMethod: PaymentMethod;
} : T extends 'confirmation' ? {
    orderId: string;
    timestamp: number;
} : never;
export type StateByStatus<S extends CheckoutState['status']> = Extract<CheckoutState, {
    status: S;
}>;

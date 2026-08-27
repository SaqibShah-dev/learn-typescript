export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};
export type Address = {
    street: string;
    city: string;
    zip: string;
    country: string;
};
export type PaymentMethod = {
    type: 'credit-card';
    lastFour: string;
    expiry: string;
} | {
    type: 'paypal';
    email: string;
};
export type Order = {
    id: string;
    items: CartItem[];
    address: Address;
    paymentMethod: PaymentMethod;
    total: number;
    timestamp: number;
};

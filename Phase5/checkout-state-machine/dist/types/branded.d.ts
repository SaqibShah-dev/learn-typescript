export type Email = string & {
    readonly brand: unique symbol;
};
export type OrderId = string & {
    readonly brand: unique symbol;
};
export declare function isValidEmail(email: string): email is Email;
export declare function isValidOrderId(id: string): id is OrderId;

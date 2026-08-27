export type DeepPartial<T> = T extends object ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;
export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};
export type FormHandlers<T extends object> = {
    [K in keyof T]: (value: T[K]) => void;
};
export type ValueOf<T extends object> = T[keyof T];
export type RequiredKeys<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};

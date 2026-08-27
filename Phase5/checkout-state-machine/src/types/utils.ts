export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

// Mutable utility type (removes readonly)
export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Form handlers: generate change handlers for each field
export type FormHandlers<T extends object> = {
  [K in keyof T]: (value: T[K]) => void;
};

// Extract value types from object
export type ValueOf<T extends object> = T[keyof T];

// Pick only required fields
export type RequiredKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Email = string & { readonly brand: unique symbol };
export type OrderId = string & { readonly brand: unique symbol };

// Type guards
export function isValidEmail(email: string): email is Email {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidOrderId(id: string): id is OrderId {
  return /^ORD-\d{8}$/.test(id);
}
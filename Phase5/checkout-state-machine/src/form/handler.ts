import type { FormHandlers } from '../types/utils';
import type { Address } from '../types/entities';

// Example: create form handlers for Address
export function createAddressHandlers(
  updateField: <K extends keyof Address>(field: K, value: Address[K]) => void
): FormHandlers<Address> {
  return {
    street: (value) => updateField('street', value),
    city: (value) => updateField('city', value),
    zip: (value) => updateField('zip', value),
    country: (value) => updateField('country', value),
  };
}
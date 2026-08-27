// Main entry point
import { CheckoutMachine } from './state-machine/machine';
import { createApiClient } from './api/client';
import { defaultFlags, getFlag } from './config/feature-flags';
import type { CheckoutState } from './types/state';

// Example usage
function main() {
  const initialState: CheckoutState = {
    status: 'cart',
    items: [
      { id: '1', name: 'Widget', price: 29.99, quantity: 2 },
    ],
  };

  const machine = new CheckoutMachine(initialState);
  const api = createApiClient();  
  // Transition to shipping
  machine.transition('shipping', {
    address: {
      street: '123 Main St',
      city: 'NYC',
      zip: '10001',
      country: 'USA',
    },
  });
  
  
  // Feature flag example
  const maxItems = getFlag(defaultFlags, 'maxItems');
}

main();
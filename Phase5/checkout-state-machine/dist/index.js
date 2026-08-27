"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main entry point
const machine_1 = require("./state-machine/machine");
const client_1 = require("./api/client");
const feature_flags_1 = require("./config/feature-flags");
// Example usage
function main() {
    const initialState = {
        status: 'cart',
        items: [
            { id: '1', name: 'Widget', price: 29.99, quantity: 2 },
        ],
    };
    const machine = new machine_1.CheckoutMachine(initialState);
    const api = (0, client_1.createApiClient)();
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
    const maxItems = (0, feature_flags_1.getFlag)(feature_flags_1.defaultFlags, 'maxItems');
}
main();

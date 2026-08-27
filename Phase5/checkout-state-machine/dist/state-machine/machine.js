"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutMachine = void 0;
// State machine class
class CheckoutMachine {
    state;
    constructor(initialState) {
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    // Type-safe transition function
    transition(nextState, data) {
        const currentState = this.state;
        // Type narrowing based on nextState
        switch (nextState) {
            case 'shipping':
                this.state = {
                    status: 'shipping',
                    items: currentState.items,
                    address: data.address,
                };
                break;
            case 'payment':
                this.state = {
                    status: 'payment',
                    items: currentState.items,
                    address: currentState.address,
                    paymentMethod: data.paymentMethod,
                };
                break;
            case 'review':
                this.state = {
                    status: 'review',
                    items: currentState.items,
                    address: currentState.address,
                    paymentMethod: currentState.paymentMethod,
                };
                break;
            case 'confirmation':
                this.state = {
                    status: 'confirmation',
                    orderId: data.orderId,
                    timestamp: Date.now(),
                };
                break;
            default:
                throw new Error('Invalid transition');
        }
    }
}
exports.CheckoutMachine = CheckoutMachine;

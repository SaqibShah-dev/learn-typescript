import type { CheckoutState, AllowedTransitions, TransitionData } from '../types/state';
export declare class CheckoutMachine {
    private state;
    constructor(initialState: CheckoutState);
    getState(): CheckoutState;
    transition<T extends CheckoutState['status']>(nextState: AllowedTransitions<T>, data: TransitionData<NextState>): void;
}

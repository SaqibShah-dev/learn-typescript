import type { 
  CheckoutState, 
  AllowedTransitions, 
  TransitionData,
  StateByStatus 
} from '../types/state';

// State machine class
export class CheckoutMachine {
  private state: CheckoutState;

  constructor(initialState: CheckoutState) {
    this.state = initialState;
  }

  getState(): CheckoutState {
    return this.state;
  }

  // Type-safe transition function
  transition<
    T extends CheckoutState['status'],
    NextState extends AllowedTransitions<T>
  >(
    nextState: NextState,
    data: TransitionData<NextState>
  ): void {
    // Type narrowing based on nextState
    switch (nextState) {
      case 'shipping':
        if (this.state.status !== 'cart') {
          throw new Error('Invalid transition');
        }
        this.state = {
          status: 'shipping',
          items: this.state.items,
          address: (data as TransitionData<'shipping'>).address,
        };
        break;
      case 'payment':
        if (this.state.status !== 'shipping') {
          throw new Error('Invalid transition');
        }
        this.state = {
          status: 'payment',
          items: this.state.items,
          address: this.state.address,
          paymentMethod: (data as TransitionData<'payment'>).paymentMethod,
        };
        break;
      case 'review':
        if (this.state.status !== 'payment') {
          throw new Error('Invalid transition');
        }
        this.state = {
          status: 'review',
          items: this.state.items,
          address: this.state.address,
          paymentMethod: this.state.paymentMethod,
        };
        break;
      case 'confirmation':
        if (this.state.status !== 'review') {
          throw new Error('Invalid transition');
        }
        this.state = {
          status: 'confirmation',
          orderId: (data as TransitionData<'confirmation'>).orderId,
          timestamp: (data as TransitionData<'confirmation'>).timestamp,
        };
        break;
      default:
        throw new Error('Invalid transition');
    }
  }
}
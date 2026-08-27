import {expectType} from 'tsd';
import type {CheckoutState, AllowedTransitions} from '../src/types/state';
import type {ApiClient} from '../src/types/api';

// Test: AllowedTransitions only allows valid next states
type CartTransitions = AllowedTransitions<'cart'>;
expectType<'shipping'>({} as CartTransitions);

type ShippingTransitions = AllowedTransitions<'shipping'>;
expectType<'payment'>({} as ShippingTransitions);

// Test: Invalid transitions are never
type ConfirmationTransitions = AllowedTransitions<'confirmation'>;
expectType<never>({} as ConfirmationTransitions);
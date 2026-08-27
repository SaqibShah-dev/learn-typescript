import type { FormHandlers } from '../types/utils';
import type { Address } from '../types/entities';
export declare function createAddressHandlers(updateField: <K extends keyof Address>(field: K, value: Address[K]) => void): FormHandlers<Address>;

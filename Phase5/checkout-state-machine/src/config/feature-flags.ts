// Index signatures for dynamic config
export type FeatureFlags = {
  [flag: string]: boolean | number | string;
  enableCheckout: boolean;
  maxItems: number;
  promoCode: string;
};

export const defaultFlags: FeatureFlags = {
  enableCheckout: true,
  maxItems: 10,
  promoCode: 'WELCOME10',
};

// Type-safe flag getter
export function getFlag<T extends keyof FeatureFlags>(
  flags: FeatureFlags,
  key: T
): FeatureFlags[T] {
  return flags[key];
}
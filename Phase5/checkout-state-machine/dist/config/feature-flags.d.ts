export type FeatureFlags = {
    [flag: string]: boolean | number | string;
    enableCheckout: boolean;
    maxItems: number;
    promoCode: string;
};
export declare const defaultFlags: FeatureFlags;
export declare function getFlag<T extends keyof FeatureFlags>(flags: FeatureFlags, key: T): FeatureFlags[T];

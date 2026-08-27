"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFlags = void 0;
exports.getFlag = getFlag;
exports.defaultFlags = {
    enableCheckout: true,
    maxItems: 10,
    promoCode: 'WELCOME10',
};
// Type-safe flag getter
function getFlag(flags, key) {
    return flags[key];
}

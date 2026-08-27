"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddressHandlers = createAddressHandlers;
// Example: create form handlers for Address
function createAddressHandlers(updateField) {
    return {
        street: (value) => updateField('street', value),
        city: (value) => updateField('city', value),
        zip: (value) => updateField('zip', value),
        country: (value) => updateField('country', value),
    };
}

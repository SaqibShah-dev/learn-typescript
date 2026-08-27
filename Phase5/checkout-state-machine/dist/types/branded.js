"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isValidOrderId = isValidOrderId;
// Type guards
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidOrderId(id) {
    return /^ORD-\d{8}$/.test(id);
}

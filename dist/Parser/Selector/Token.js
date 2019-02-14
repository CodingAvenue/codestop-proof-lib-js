"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    isStringDanger() {
        return this.type === 'quote' || this.type === 'comma';
    }
}
exports.default = Token;

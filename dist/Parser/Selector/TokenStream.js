"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token_1 = require("./Token");
class TokenStream {
    constructor() {
        this.tokens = [];
        this.cursor = 0;
    }
    push(type, value) {
        this.tokens.push(new Token_1.default(type, value));
    }
    getNextToken() {
        if (this.hasTokens() && this.cursor < this.getLength()) {
            return this.tokens[this.cursor++];
        }
        return null;
    }
    peekNextToken() {
        if (this.hasTokens() && this.cursor + 1 < this.getLength()) {
            return this.tokens[this.cursor + 1];
        }
        return null;
    }
    peekPreviousToken() {
        if (!this.hasTokens() || this.cursor === 0) {
            return null;
        }
        return this.tokens[this.cursor - 1];
    }
    getCurrentToken() {
        if (!this.hasTokens()) {
            return null;
        }
        return this.tokens[this.cursor];
    }
    getCursor() {
        return this.cursor;
    }
    getLength() {
        return this.tokens.length;
    }
    hasTokens() {
        return this.getLength() !== 0;
    }
    getRemainingLength() {
        return this.getLength() - this.cursor;
    }
    isEnd() {
        return this.getRemainingLength() === 0;
    }
    skipWhiteSpaceTokens() {
        while (this.getRemainingLength() !== 0) {
            const token = this.peekNextToken();
            if (token.getType() === 'whitespace') {
                this.getNextToken();
                continue;
            }
            break;
        }
    }
}
exports.default = TokenStream;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuoteHandler {
    handle(reader, stream) {
        const char = reader.getCurrentChar();
        if (!this.isQuote(char)) {
            return false;
        }
        reader.movePosition(1);
        stream.push(this.getType(), char);
        return true;
    }
    getType() {
        return 'quote';
    }
    isQuote(char) {
        return char === '"' || char === "'";
    }
}
exports.default = QuoteHandler;

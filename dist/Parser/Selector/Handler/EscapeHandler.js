"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EscapeHandler {
    handle(reader, stream) {
        const char = reader.getCurrentChar();
        const next = reader.getNextChar();
        if (char === '\\' && (next === "'" || next === '"')) {
            reader.movePosition(1);
            return true;
        }
        return false;
    }
    getType() {
        return 'escape';
    }
}
exports.default = EscapeHandler;

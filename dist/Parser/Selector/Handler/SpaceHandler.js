"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpaceHandler {
    handle(reader, stream) {
        const char = reader.getCurrentChar();
        if (!this.isWhiteSpace(char)) {
            return false;
        }
        reader.movePosition(1);
        stream.push(this.getType(), char);
        return true;
    }
    getType() {
        return 'whitespace';
    }
    isWhiteSpace(char) {
        return (char == ' ' || char == '\t' || char == '\n' || char == '\r');
    }
}
exports.default = SpaceHandler;

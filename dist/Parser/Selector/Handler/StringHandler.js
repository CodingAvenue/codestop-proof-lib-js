"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringHandler {
    handle(reader, stream) {
        const char = reader.getCurrentChar();
        reader.movePosition(1);
        stream.push(this.getType(), char);
        return true;
    }
    getType() {
        return 'string';
    }
}
exports.default = StringHandler;

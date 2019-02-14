"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EqualHandler {
    handle(reader, stream) {
        const char = reader.getCurrentChar();
        if (char !== '=') {
            return false;
        }
        reader.movePosition(1);
        stream.push(this.getType(), char);
        return true;
    }
    getType() {
        return 'equal';
    }
}
exports.default = EqualHandler;

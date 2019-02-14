"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SourceReader {
    constructor(source) {
        this.source = source;
        this.length = source.length;
        this.position = 0;
    }
    isEnd() {
        return this.position >= this.length;
    }
    getCurrentChar() {
        return this.source.substr(this.position, 1);
    }
    getNextChar() {
        return this.source.substr(this.position + 1, 1);
    }
    movePosition(length) {
        if (this.getRemainingLength() < length) {
            throw new Error("Position is outside the length of the source");
        }
        this.position += length;
    }
    getRemainingLength() {
        return this.length - this.position;
    }
    isWhiteSpace() {
        const char = this.getCurrentChar();
        return (char == ' ' || char == '\t' || char == '\n' || char == '\r');
    }
    getPosition() {
        return this.position;
    }
    getLength() {
        return this.length;
    }
    getSource() {
        return this.source;
    }
}
exports.default = SourceReader;

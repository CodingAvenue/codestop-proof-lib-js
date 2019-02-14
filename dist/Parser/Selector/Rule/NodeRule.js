"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeRule {
    isStartToken(token) {
        return token.getType() === 'string';
    }
    isEndToken(token) {
        return token.getType() === 'open_square_bracket' || token.getType() === 'whitespace';
    }
    isUnexpectedToken(token) {
        return token.getType() === 'close_square_bracket' || token.getType() === 'equal';
    }
    getRuleType() {
        return 'node';
    }
    handle(stream) {
        let token = stream.getCurrentToken();
        if (!this.isStartToken(token)) {
            throw new Error(`Unsatisfied startToken rule detected. Current stream cursor is at token ${token.getValue()}`);
        }
        let node = '';
        while (!stream.isEnd()) {
            token = stream.getCurrentToken();
            if (this.isUnexpectedToken(token)) {
                throw new Error(`Unexpected token ${token.getValue()}`);
            }
            if (this.isEndToken(token)) {
                break;
            }
            node += token.getValue();
            token = stream.getNextToken();
        }
        return node;
    }
}
exports.default = NodeRule;

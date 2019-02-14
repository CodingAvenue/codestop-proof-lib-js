"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeRule {
    isStartToken(token) {
        return token.getType() === 'open_square_bracket';
    }
    isEndToken(token) {
        return token.getType() === 'close_square_bracket';
    }
    isUnexpectedToken(token) {
        return false;
    }
    getRuleType() {
        return 'attribute';
    }
    handle(stream) {
        let token = stream.getCurrentToken();
        if (!this.isStartToken(token)) {
            throw new Error(`Unsatisfied startToken rule detected. Current stream cursor is at token ${token.getValue()}`);
        }
        token = stream.getNextToken();
        const attribute = {};
        let keyMode = true;
        let attrKey = '';
        let attrVal = '';
        let firstValTok = false;
        while (!stream.isEnd()) {
            token = stream.getCurrentToken();
            if (this.isEndToken(token)) {
                break;
            }
            if (keyMode) {
                if (token.getValue() === "=") {
                    attribute[attrKey] = '';
                    keyMode = false;
                    firstValTok = true;
                }
                else {
                    attrKey += token.getValue();
                }
            }
            else {
                if (token.getType() === "quote") {
                    const nextToken = stream.peekNextToken();
                    if (nextToken == null || nextToken.getType() === 'close_square_bracket' || (nextToken.isStringDanger() && !firstValTok)) {
                        attribute[attrKey] = attrVal;
                        attrKey = '';
                        attrVal = '';
                        keyMode = true;
                        while (!stream.isEnd()) {
                            let tok = stream.peekNextToken();
                            if (this.isEndToken(tok) || tok.getType() === 'string') {
                                break;
                            }
                            tok = stream.getNextToken();
                        }
                    }
                    else {
                        attrVal += firstValTok ? '' : token.getValue();
                    }
                }
                else {
                    attrVal += token.getValue();
                }
                firstValTok = false;
            }
            token = stream.getNextToken();
        }
        if (!this.isEndToken(token)) {
            throw new Error(`Expecting an close_square_bracket_token before the end of the stream`);
        }
        stream.getNextToken();
        return attribute;
    }
}
exports.default = AttributeRule;

import Token from '../Token';
import TokenStream from '../TokenStream';

export default class NodeRule {
    isStartToken(token: Token): boolean {
        return token.getType() === 'string';
    }

    isEndToken(token: Token): boolean {
        return token.getType() === 'open_square_bracket' || token.getType() === 'whitespace';
    }

    isUnexpectedToken(token: Token): boolean {
        return token.getType() === 'close_square_bracket' || token.getType() === 'equal';
    }

    getRuleType(): string {
        return 'node';
    }

    handle(stream: TokenStream) {
        let token = stream.getCurrentToken();

        if (!this.isStartToken(token)) {
            throw new Error(`Unsatisfied startToken rule detected. Current stream cursor is at token ${token.getValue()}`);
        }

        let node = '';

        while(!stream.isEnd()) {
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
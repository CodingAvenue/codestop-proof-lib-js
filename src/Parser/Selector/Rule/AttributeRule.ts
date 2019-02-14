import Token from '../Token';
import TokenStream from '../TokenStream';

export default class AttributeRule {
    isStartToken(token: Token): boolean {
        return token.getType() === 'open_square_bracket';
    }

    isEndToken(token: Token): boolean {
        return token.getType() === 'close_square_bracket';
    }

    isUnexpectedToken(token: Token): boolean {
        return false;
    }

    getRuleType(): string {
        return 'attribute';
    }

    handle(stream: TokenStream) {
        let token = stream.getCurrentToken();

        if (!this.isStartToken(token)) {
            throw new Error(`Unsatisfied startToken rule detected. Current stream cursor is at token ${token.getValue()}`);
        }

        token = stream.getNextToken();

        const attribute: any = {};
        let keyMode: boolean = true;
        let attrKey: string = '';
        let attrVal: string = '';
        let firstValTok: boolean = false;

        while(!stream.isEnd()) {
            token = stream.getCurrentToken();

            if (this.isEndToken(token)) {
                break;
            }

            if (keyMode) {
                if (token.getValue() === "=") {
                    attribute[attrKey] = '';
                    keyMode = false;
                    firstValTok = true;
                } else {
                    attrKey += token.getValue();
                }
            } else {
                if (token.getType() === "quote") {
                    const nextToken = stream.peekNextToken();

                    if (nextToken == null || nextToken.getType() === 'close_square_bracket' || (nextToken.isStringDanger() && !firstValTok)) {
                        attribute[attrKey] = attrVal;
                        attrKey = '';
                        attrVal = '';
                        keyMode = true;

                        while(!stream.isEnd()) {
                            let tok = stream.peekNextToken();

                            if (this.isEndToken(tok) || tok.getType() === 'string') {
                                break;
                            }

                            tok = stream.getNextToken();
                        }

                    } else {
                        attrVal += firstValTok ? '' : token.getValue();
                    }
                } else {
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
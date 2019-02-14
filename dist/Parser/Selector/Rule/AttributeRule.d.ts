import Token from '../Token';
import TokenStream from '../TokenStream';
export default class AttributeRule {
    isStartToken(token: Token): boolean;
    isEndToken(token: Token): boolean;
    isUnexpectedToken(token: Token): boolean;
    getRuleType(): string;
    handle(stream: TokenStream): any;
}

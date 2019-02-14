import Token from './Token';
export default class TokenStream {
    private tokens;
    private cursor;
    constructor();
    push(type: string, value: string): void;
    getNextToken(): Token;
    peekNextToken(): Token;
    peekPreviousToken(): Token;
    getCurrentToken(): Token;
    getCursor(): number;
    getLength(): number;
    hasTokens(): boolean;
    getRemainingLength(): number;
    isEnd(): boolean;
    skipWhiteSpaceTokens(): void;
}

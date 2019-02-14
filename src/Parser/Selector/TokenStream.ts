import Token from './Token';

export default class TokenStream {
    private tokens: Token[];
    private cursor: number;

    constructor() {
        this.tokens = [];
        this.cursor = 0;
    }

    push(type: string, value: string) {
        this.tokens.push( new Token(type, value) );
    }

    getNextToken() {
        if (this.hasTokens() && this.cursor < this.getLength()) {
            return this.tokens[this.cursor++];
        }

        return null;
    }

    peekNextToken() {
        if (this.hasTokens() && this.cursor + 1 < this.getLength()) {
            return this.tokens[this.cursor + 1];
        }

        return null;
    }

    peekPreviousToken() {
        if (!this.hasTokens() || this.cursor === 0) {
            return null;
        }

        return this.tokens[this.cursor - 1];
    }

    getCurrentToken() {
        if (!this.hasTokens()) {
            return null;
        }

        return this.tokens[this.cursor]
    }

    getCursor(): number {
        return this.cursor;
    }

    getLength(): number {
        return this.tokens.length;
    }

    hasTokens(): boolean {
        return this.getLength() !== 0;
    }

    getRemainingLength(): number {
        return this.getLength() - this.cursor;
    }

    isEnd(): boolean {
        return this.getRemainingLength() === 0;
    }

    skipWhiteSpaceTokens() {
        while(this.getRemainingLength() !== 0) {
            const token = this.peekNextToken();
            if (token.getType() === 'whitespace') {
                this.getNextToken();
                continue;
            }

            break;
        }
    }
}
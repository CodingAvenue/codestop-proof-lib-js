import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class QuoteHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        if (!this.isQuote(char)) {
            return false;
        }

        reader.movePosition(1);

        stream.push(this.getType(), char);

        return true;
    }

    getType(): string {
        return 'quote';
    }

    isQuote(char: string): boolean {
        return char === '"' || char === "'";
    }
}
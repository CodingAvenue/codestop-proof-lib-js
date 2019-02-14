import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';
export default class QuoteHandler {
    handle(reader: SourceReader, stream: TokenStream): boolean;
    getType(): string;
    isQuote(char: string): boolean;
}

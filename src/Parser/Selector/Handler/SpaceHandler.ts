import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class SpaceHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        if (!this.isWhiteSpace(char)) {
            return false;
        }

        reader.movePosition(1);

        stream.push(this.getType(), char);

        return true;
    }

    getType(): string {
        return 'whitespace';
    }

    isWhiteSpace(char: string): boolean {
        return (char == ' ' || char == '\t' || char == '\n' || char == '\r');
    }
}
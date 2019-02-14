import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class OpenSquareBracketHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        if (char !== '[') {
            return false;
        }

        reader.movePosition(1);

        stream.push(this.getType(), char);

        return true;
    }

    getType(): string {
        return 'open_square_bracket';
    }
}
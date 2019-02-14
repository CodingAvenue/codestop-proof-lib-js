import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class StringHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        reader.movePosition(1);

        stream.push(this.getType(), char);

        return true;
    }

    getType(): string {
        return 'string';
    }
}
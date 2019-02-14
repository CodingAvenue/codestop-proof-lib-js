import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class CommaHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        if (char !== ',') {
            return false;
        }

        reader.movePosition(1);

        stream.push(this.getType(), char);

        return true;
    }

    getType(): string {
        return 'comma';
    }
}
import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';

export default class EscapeHandler {
    handle(reader: SourceReader, stream: TokenStream) {
        const char = reader.getCurrentChar();
        const next = reader.getNextChar();

        if (char === '\\' && (next === "'" || next === '"')) {
            reader.movePosition(1);
            return true;
        }

        return false;
    }

    getType(): string {
        return 'escape';
    }
}
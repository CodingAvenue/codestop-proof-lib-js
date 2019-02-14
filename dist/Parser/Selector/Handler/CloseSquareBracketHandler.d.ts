import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';
export default class CloseSquareBracketHandler {
    handle(reader: SourceReader, stream: TokenStream): boolean;
    getType(): string;
}

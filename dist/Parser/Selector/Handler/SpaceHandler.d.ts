import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';
export default class SpaceHandler {
    handle(reader: SourceReader, stream: TokenStream): boolean;
    getType(): string;
    isWhiteSpace(char: string): boolean;
}

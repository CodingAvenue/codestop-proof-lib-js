import SourceReader from '../SourceReader';
import TokenStream from '../TokenStream';
export default class CommaHandler {
    handle(reader: SourceReader, stream: TokenStream): boolean;
    getType(): string;
}

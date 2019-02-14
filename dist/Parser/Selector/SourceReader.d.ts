export default class SourceReader {
    private source;
    private length;
    private position;
    constructor(source: string);
    isEnd(): boolean;
    getCurrentChar(): string;
    getNextChar(): string;
    movePosition(length: number): void;
    getRemainingLength(): number;
    isWhiteSpace(): boolean;
    getPosition(): number;
    getLength(): number;
    getSource(): string;
}

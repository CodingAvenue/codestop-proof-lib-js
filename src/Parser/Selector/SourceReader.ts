export default class SourceReader {
    private source: string;
    private length: number;
    private position: number;

    constructor(source: string) {
        this.source = source;
        this.length = source.length;
        this.position = 0;
    }

    isEnd(): boolean {
        return this.position >= this.length;
    }

    getCurrentChar(): string {
        return this.source.substr(this.position, 1);
    }

    getNextChar(): string {
        return this.source.substr(this.position + 1, 1);
    }

    movePosition(length: number) {
        if (this.getRemainingLength() < length) {
            throw new Error("Position is outside the length of the source");
        }

        this.position += length;
    }

    getRemainingLength(): number {
        return this.length - this.position;
    }

    isWhiteSpace(): boolean {
        const char = this.getCurrentChar();
        return (char == ' ' || char == '\t' || char == '\n' || char == '\r');
    }

    getPosition(): number {
        return this.position;
    }

    getLength(): number {
        return this.length;
    }

    getSource(): string {
        return this.source;
    }
}
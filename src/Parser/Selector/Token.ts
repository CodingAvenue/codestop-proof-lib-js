export default class Token {
    private type: string;
    private value: string;

    constructor(type: string, value: string) {
        this.type = type;
        this.value = value;
    }

    getType(): string {
        return this.type;
    }

    getValue(): string {
        return this.value;
    }

    isStringDanger(): boolean {
        return this.type === 'quote' || this.type === 'comma';
    }
}
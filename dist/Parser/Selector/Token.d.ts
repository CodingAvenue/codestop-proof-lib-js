export default class Token {
    private type;
    private value;
    constructor(type: string, value: string);
    getType(): string;
    getValue(): string;
    isStringDanger(): boolean;
}

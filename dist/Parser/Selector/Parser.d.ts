import TokenStream from './TokenStream';
export default class Parser {
    private source;
    private handlers;
    constructor(source: string);
    loadHandlers(): void;
    addHandler(handler: any): this;
    parse(): TokenStream;
}

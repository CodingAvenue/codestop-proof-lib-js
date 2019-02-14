import TokenStream from '../TokenStream';
export default class ArrayTransformer {
    private stream;
    private rules;
    constructor(stream: TokenStream);
    private addDefaultRules;
    private addRule;
    transform(): any;
    getNextToken(): import("../Token").default;
}

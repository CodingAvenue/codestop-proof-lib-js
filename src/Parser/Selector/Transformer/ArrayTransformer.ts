import TokenStream from '../TokenStream';
import * as Rule from '../Rule';

export default class ArrayTransformer {
    private stream: TokenStream;
    private rules: any;

    constructor(stream: TokenStream) {
        this.stream = stream;
        this.rules = [];
        this.addDefaultRules();
    }

    private addDefaultRules() {
        this.addRule(new Rule.NodeRule());
        this.addRule(new Rule.AttributeRule());
    }

    private addRule(rule: any) {
        this.rules.push(rule);
    }

    transform() {
        const transformed: any = [];

        OUTER: while (!this.stream.isEnd()) {
            const startToken = this.stream.getCurrentToken();

            for (let i = 0; i < this.rules.length; i++) {
                const rule = this.rules[i];

                if (rule.isStartToken(startToken)) {
                    if (transformed[rule.getRuleType()]) {
                        throw new Error(`Detecting multiple selector, we don't support multiple selector as of this time.`);
                    }

                    transformed[rule.getRuleType()] = rule.handle(this.stream);
                    continue OUTER;
                }
            }

            throw new Error(`No rules can handle this token ${startToken.getValue()}`)
        }

        return transformed;
    }

    getNextToken() {
        return this.stream.getNextToken();
    }
}
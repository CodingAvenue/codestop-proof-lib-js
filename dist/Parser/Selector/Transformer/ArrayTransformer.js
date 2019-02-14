"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule = require("../Rule");
class ArrayTransformer {
    constructor(stream) {
        this.stream = stream;
        this.rules = [];
        this.addDefaultRules();
    }
    addDefaultRules() {
        this.addRule(new Rule.NodeRule());
        this.addRule(new Rule.AttributeRule());
    }
    addRule(rule) {
        this.rules.push(rule);
    }
    transform() {
        const transformed = [];
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
            throw new Error(`No rules can handle this token ${startToken.getValue()}`);
        }
        return transformed;
    }
    getNextToken() {
        return this.stream.getNextToken();
    }
}
exports.default = ArrayTransformer;

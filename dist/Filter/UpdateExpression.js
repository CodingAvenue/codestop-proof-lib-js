"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filter_1 = require("./Filter");
const RuleFactory_1 = require("../Rule/RuleFactory");
class UpdateExpression extends Filter_1.default {
    getRuleClass() {
        return RuleFactory_1.default.createRule(this.getOperator(), this.getRuleFilter());
    }
    getRuleFilter() {
        return this.attributes;
    }
    getOperator() {
        const operator = this.attributes['operator'];
        switch (operator) {
            case '++':
                return 'increment';
            case '--':
                return 'decrement';
            default:
                throw new Error(`Unknown operator ${operator}`);
        }
    }
}
exports.default = UpdateExpression;

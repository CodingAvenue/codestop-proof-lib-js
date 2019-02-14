"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filter_1 = require("./Filter");
const RuleFactory_1 = require("../Rule/RuleFactory");
class BinaryExpression extends Filter_1.default {
    getRuleClass() {
        return RuleFactory_1.default.createRule(this.getOperator(), this.getRuleFilter());
    }
    getRuleFilter() {
        const attributes = this.attributes;
        delete attributes['operator'];
        return attributes;
    }
    getOperator() {
        const operator = this.attributes['operator'];
        switch (operator) {
            case '+':
                return 'plus';
            case '-':
                return 'minus';
            case '*':
                return 'mul';
            case '/':
                return 'div';
            case '%':
                return 'mod';
            case '>':
                return 'greater-than';
            case '<':
                return 'less-than';
            case '==':
                return 'equals';
            case '<=':
                return 'less-equal';
            case '>=':
                return 'greater-equal';
            default:
                throw new Error(`Unknown operator ${operator}`);
        }
    }
}
exports.default = BinaryExpression;

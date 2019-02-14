import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class BinaryExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule(this.getOperator(), this.getRuleFilter());
    }

    getRuleFilter() {
        const attributes = this.attributes;

        delete attributes['operator'];
        return attributes;
    }

    private getOperator() {
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
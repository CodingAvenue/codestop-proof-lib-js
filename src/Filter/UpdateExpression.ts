import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class UpdateExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule(this.getOperator(), this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }

    private getOperator() {
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
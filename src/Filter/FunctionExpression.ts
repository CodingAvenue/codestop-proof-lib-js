import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class FunctionExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('function-expression', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class UnarytExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('unary-expression', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
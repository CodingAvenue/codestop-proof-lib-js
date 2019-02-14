import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class CallExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('call_', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
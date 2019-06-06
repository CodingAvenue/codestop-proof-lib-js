import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class MemberExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('member-call', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
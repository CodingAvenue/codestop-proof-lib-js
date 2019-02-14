import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class AssignmentExpression extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('assignment', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class ForStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('for-statement', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class ContinueStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('continue', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
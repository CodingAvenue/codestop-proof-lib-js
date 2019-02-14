import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class BreakStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('break', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class IfStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('if', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class WhileStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('while-statement', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
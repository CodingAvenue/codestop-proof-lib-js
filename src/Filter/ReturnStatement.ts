import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class ReturnStatement extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('return', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class Argument extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('argument', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class Identifier extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('identifier', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
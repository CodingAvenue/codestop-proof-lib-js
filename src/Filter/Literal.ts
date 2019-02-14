import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class Literal extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('literal', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class ArrowFunction extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('arrow-function', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
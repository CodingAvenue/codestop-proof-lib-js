import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class SwitchDefault extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('switch-default', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
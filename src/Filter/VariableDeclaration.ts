import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class VariableDeclaration extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('variable-declaration', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
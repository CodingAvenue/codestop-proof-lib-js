import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class FunctionDeclaration extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('function-declaration', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
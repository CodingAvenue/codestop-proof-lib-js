import Filter from './Filter';
import RuleFactory from '../Rule/RuleFactory';

export default class Switch_ extends Filter {
    getRuleClass() {
        return RuleFactory.createRule('switch', this.getRuleFilter());
    }

    getRuleFilter() {
        return this.attributes;
    }
}
import Rule from '../Rule';
export default class UnaryExpression extends Rule {
    getRule(): any;
    allowedOptionalFilter(): string[];
}

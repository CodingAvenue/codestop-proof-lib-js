import Rule from '../Rule';
export default class Literal extends Rule {
    getRule(): any;
    allowedOptionalFilter(): string[];
}

import Rule from '../Rule';
export default class Argument extends Rule {
    getRule(): any;
    allowedOptionalFilter(): string[];
    private getTypeIndex;
}

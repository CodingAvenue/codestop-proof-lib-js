export default abstract class Rule {
    protected filters: any;
    constructor(filters: any);
    applyRule(nodes: any): any;
    checkOptionalFilter(): void;
    abstract getRule(): void;
    abstract allowedOptionalFilter(): string[];
}

export default abstract class Filter {
    protected name: string;
    protected attributes: any;

    constructor(name: string, attributes: any) {
        this.name = name;
        this.attributes = attributes;
    }

    applyFilter(nodes: any) {
        const rule = this.getRuleClass();
        return rule.applyRule(nodes);
    }

    subNodes(): any {
        return [];
    }

    abstract getRuleClass(): any;
    abstract getRuleFilter(): any;
}
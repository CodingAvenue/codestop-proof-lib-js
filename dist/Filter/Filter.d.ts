export default abstract class Filter {
    protected name: string;
    protected attributes: any;
    constructor(name: string, attributes: any);
    applyFilter(nodes: any): any;
    subNodes(): any;
    abstract getRuleClass(): any;
    abstract getRuleFilter(): any;
}

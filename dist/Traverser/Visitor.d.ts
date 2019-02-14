export default class Visitor {
    private filterCallback;
    private foundNodes;
    constructor(filterCallback: any);
    enter(node: any): any;
    getFoundNodes(): any;
}

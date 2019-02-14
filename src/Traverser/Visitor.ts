export default class Visitor {
    private filterCallback: any;
    private foundNodes: any;

    constructor(filterCallback: any) {
        this.filterCallback = filterCallback;
        this.foundNodes = [];
    }

    enter(node: any) {
        const callback = this.filterCallback;

        if (callback(node)) {
            this.foundNodes.push(node);
            return node;
        }

        return null;
    }

    getFoundNodes() {
        return this.foundNodes;
    }
}
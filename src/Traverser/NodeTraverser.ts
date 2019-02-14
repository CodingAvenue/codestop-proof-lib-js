import Visitor from './Visitor';

export default class NodeTraverser {
    private visitors: Visitor[];

    constructor() {
        this.visitors = [];
    }

    addVisitor(visitor: Visitor) {
        this.visitors.push(visitor);
    }

    traverse(nodes: any): any {
        const outNodes: any = [];

        nodes = nodes['body'] ? nodes['body'] : nodes;

        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];

            const returnVal = this.visitors[0].enter(node);

            if (!returnVal) {
                outNodes.push(returnVal);
            }
        }

        return outNodes;
    }
}
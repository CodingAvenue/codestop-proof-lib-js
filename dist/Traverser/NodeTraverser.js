"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeTraverser {
    constructor() {
        this.visitors = [];
    }
    addVisitor(visitor) {
        this.visitors.push(visitor);
    }
    traverse(nodes) {
        const outNodes = [];
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
exports.default = NodeTraverser;

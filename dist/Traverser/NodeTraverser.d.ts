import Visitor from './Visitor';
export default class NodeTraverser {
    private visitors;
    constructor();
    addVisitor(visitor: Visitor): void;
    traverse(nodes: any): any;
}

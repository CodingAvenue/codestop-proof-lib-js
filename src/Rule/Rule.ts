import * as _ from 'lodash';
import Visitor from '../Traverser/Visitor';
import NodeTraverser from '../Traverser/NodeTraverser';

export default abstract class Rule {
    protected filters: any;

    constructor(filters: any) {
        this.filters = filters;
    }

    applyRule(nodes: any) {
        const visitor = new Visitor(this.getRule());
        const traverser = new NodeTraverser();
        traverser.addVisitor(visitor);
        traverser.traverse(nodes);

        return visitor.getFoundNodes();
    }

    checkOptionalFilter() {
        const allowed = this.allowedOptionalFilter();

        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i];

            if (!_.includes(allowed, filter)) {
                throw new Error(`${this.constructor.name} allowed optional filters are ${allowed.join(', ')}`);
            }
        }

    }

    abstract getRule(): void

    abstract allowedOptionalFilter(): string[]
}
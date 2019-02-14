"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Visitor_1 = require("../Traverser/Visitor");
const NodeTraverser_1 = require("../Traverser/NodeTraverser");
class Rule {
    constructor(filters) {
        this.filters = filters;
    }
    applyRule(nodes) {
        const visitor = new Visitor_1.default(this.getRule());
        const traverser = new NodeTraverser_1.default();
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
}
exports.default = Rule;

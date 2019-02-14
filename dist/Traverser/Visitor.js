"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Visitor {
    constructor(filterCallback) {
        this.filterCallback = filterCallback;
        this.foundNodes = [];
    }
    enter(node) {
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
exports.default = Visitor;

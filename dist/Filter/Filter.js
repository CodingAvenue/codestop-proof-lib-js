"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Filter {
    constructor(name, attributes) {
        this.name = name;
        this.attributes = attributes;
    }
    applyFilter(nodes) {
        const rule = this.getRuleClass();
        return rule.applyRule(nodes);
    }
    subNodes() {
        return [];
    }
}
exports.default = Filter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../../Rule");
class Console extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return ((node['type'] == 'ExpressionStatement'
                && node['expression']['type'] == 'CallExpression'
                && node['expression']['callee']['object']['name'] == 'console')
                &&
                    filters['property']
                ? node['expression']['callee']['property']['name'] == filters['property']
                : true);
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Console;

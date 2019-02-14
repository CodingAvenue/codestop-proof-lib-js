"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Assignment extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return ((node['type'] == 'ExpressionStatement'
                && node['expression']['type'] == 'AssignmentExpression'
                && (filters['operator']
                    ? filters['operator'] == node['expression']['operator']
                    : true)) ||
                (node['type'] == 'AssignmentExpression'
                    && (filters['operator']
                        ? filters['operator'] == node['operator']
                        : true)));
        };
    }
    allowedOptionalFilter() {
        return ['operator'];
    }
}
exports.default = Assignment;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class UnaryExpression extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'UnaryExpression'
                && node['operator'] == '-');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = UnaryExpression;

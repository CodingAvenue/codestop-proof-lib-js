"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class ArrowFunction extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'ArrowFunctionExpression');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = ArrowFunction;

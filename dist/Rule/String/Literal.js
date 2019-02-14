"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Literal extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return (node['type'] == 'Literal'
                && (filters['value']
                    ? filters['value'] == node['value']
                    : true));
        };
    }
    allowedOptionalFilter() {
        return ['type', 'value', 'quoted'];
    }
}
exports.default = Literal;

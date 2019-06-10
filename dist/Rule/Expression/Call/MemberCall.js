"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../../Rule");
class MemberCall extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            if (node['type'] == 'ExpressionStatement') {
                node = node['expression'];
            }
            return ((filters && filters['name']
                ? node['object']['name'] == filters['name']
                : true)
                &&
                    (filters && filters['property']
                        ? node['property']['name'] == filters['property']
                        : true)
                &&
                    (filters && filters['value']
                        ? node['property']['type'] == 'Literal' && node['property']['value'] == filters['value']
                        : true));
        };
    }
    allowedOptionalFilter() {
        return ['property', 'name'];
    }
}
exports.default = MemberCall;

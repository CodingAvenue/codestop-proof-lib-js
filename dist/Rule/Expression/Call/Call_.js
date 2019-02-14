"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../../Rule");
class Call_ extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            if (node['type'] == 'ExpressionStatement') {
                node = node['expression'];
            }
            if (node['callee']['type'] && node['callee']['type'] == 'MemberExpression') {
                return ((node['type'] == 'CallExpression'
                    && node['callee']['object']['name'] == filters['name'])
                    &&
                        filters['property']
                    ? node['callee']['property']['name'] == filters['property']
                    : true);
            }
            else {
                return (node['type'] == 'Callexpression'
                    && (filters['name']
                        ? filters['name'] == node['callee']['name']
                        : true));
            }
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Call_;

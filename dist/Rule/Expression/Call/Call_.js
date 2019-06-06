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
            if (node['type'] != 'CallExpression') {
                return false;
            }
            if (node['type'] == 'CallExpression') {
                if (node['callee']['type'] == 'Identifier') { // function call e.g. log('test');
                    return ((filters['name']
                        ? node['callee']['name'] == filters['name']
                        : true)
                        &&
                            ( // for direct function call, it doesn't have a property.
                            filters['property']
                                ? false
                                : true));
                }
                else if (node['callee']['type'] == 'MemberExpression') { // Method calls e.g. console.log('test');
                    return ((filters['name']
                        ? node['callee']['object']['name'] == filters['name']
                        : true)
                        &&
                            (filters['property']
                                ? node['callee']['property']['name'] == filters['property']
                                : true));
                }
            }
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Call_;

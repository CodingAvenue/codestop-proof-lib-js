"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Decrement_ extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return ((node['type'] == 'ExpressionStatement'
                && node['expression']['type'] == 'UpdateExpression'
                && node['expression']['operator'] == '--') ||
                (node['type'] == 'UpdateExpression'
                    && node['operator'] == '--'));
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Decrement_;

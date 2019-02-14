"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Less_ extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return (node['type'] == 'BinaryExpression'
                && (node['operator'] == '<'));
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Less_;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Identifier extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        return (node) => {
            return ((node['type'] == 'VariableDeclarator'
                && (filters['name']
                    ? node['id']['name'] == filters['name']
                    : true)) ||
                (node['type'] == 'Identifier'
                    && (filters['name']
                        ? node['name'] == filters['name']
                        : true)));
        };
    }
    allowedOptionalFilter() {
        return ['name'];
    }
}
exports.default = Identifier;

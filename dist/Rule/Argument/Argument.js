"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Argument extends Rule_1.default {
    getRule() {
        const filters = this.filters;
        const getIndex = this.getTypeIndex();
        return (node) => {
            const index = getIndex === null ? null : getIndex(node);
            return ((node['type'] == 'ExpressionStatement'
                && node['expression']['arguments']
                && node['expression']['arguments'].length > 0)
                && (filters['type']
                    ? index
                        ? true
                        : false
                    : true)
                && (filters['name']
                    ? index
                        ? node['expression']['arguments'][index]['name'].toLowerCase() == filters['name'].toLowerCase()
                        : false
                    : true)
                && (filters['value']
                    ? index
                        ? node['expression']['arguments'][index]['value'].toLowerCase() == filters['value'].toLowerCase()
                        : false
                    : true));
        };
    }
    allowedOptionalFilter() {
        return ['type', 'name', 'value'];
    }
    getTypeIndex() {
        const type = this.filters['type'];
        return (node) => {
            let foundIndex = null;
            const args = node['expression']['arguments'];
            for (let i = 0; i < args.length; i++) {
                const arg = args[i];
                if (arg.toLowerCase() === type.toLowerCase()) {
                    foundIndex = i;
                    break;
                }
            }
            return foundIndex;
        };
    }
}
exports.default = Argument;

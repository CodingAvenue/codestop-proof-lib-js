"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class SwitchDefault extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'SwitchCase'
                && node['test'] instanceof Array);
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = SwitchDefault;

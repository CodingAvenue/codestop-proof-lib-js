"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class VariableDeclaration extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'VariableDeclaration');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = VariableDeclaration;

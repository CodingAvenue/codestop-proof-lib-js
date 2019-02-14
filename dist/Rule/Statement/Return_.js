"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Return_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'ReturnStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Return_;

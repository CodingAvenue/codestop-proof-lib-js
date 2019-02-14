"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Break_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'BreakStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Break_;

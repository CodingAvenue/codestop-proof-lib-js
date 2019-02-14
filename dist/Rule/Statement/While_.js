"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class While_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'WhileStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = While_;

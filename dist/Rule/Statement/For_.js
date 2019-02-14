"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class For_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'ForStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = For_;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class If_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'IfStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = If_;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = require("../Rule");
class Switch_ extends Rule_1.default {
    getRule() {
        return (node) => {
            return (node['type'] == 'SwitchStatement');
        };
    }
    allowedOptionalFilter() {
        return [];
    }
}
exports.default = Switch_;

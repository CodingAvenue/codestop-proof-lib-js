"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filter_1 = require("./Filter");
const RuleFactory_1 = require("../Rule/RuleFactory");
class BreakStatement extends Filter_1.default {
    getRuleClass() {
        return RuleFactory_1.default.createRule('break', this.getRuleFilter());
    }
    getRuleFilter() {
        return this.attributes;
    }
}
exports.default = BreakStatement;

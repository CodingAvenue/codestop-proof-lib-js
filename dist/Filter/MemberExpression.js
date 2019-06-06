"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filter_1 = require("./Filter");
const RuleFactory_1 = require("../Rule/RuleFactory");
class MemberExpression extends Filter_1.default {
    getRuleClass() {
        return RuleFactory_1.default.createRule('member-call', this.getRuleFilter());
    }
    getRuleFilter() {
        return this.attributes;
    }
}
exports.default = MemberExpression;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilterClasses = require("./index");
class FilterFactory {
    static createFilter(name, attributes) {
        const filters = FilterFactory.getFilters();
        const filter = filters[name] ? filters[name] : null;
        if (!filter) {
            throw new Error(`No Filter class found to handle ${name}`);
        }
        return new filter(name, attributes);
    }
    static getFilters() {
        return {
            'call-expression': FilterClasses.CallExpression,
            'binary-expression': FilterClasses.BinaryExpression,
            'assignment-expression': FilterClasses.AssignmentExpression,
            'update-expression': FilterClasses.UpdateExpression,
            'identifier': FilterClasses.Identifier,
            'literal': FilterClasses.Literal,
            'argument': FilterClasses.Argument,
            'variable-declaration': FilterClasses.VariableDeclaration,
            'function-declaration': FilterClasses.FunctionDeclaration,
            'function-expression': FilterClasses.FunctionExpression,
            'unary-expression': FilterClasses.UnaryExpression,
            'arrow-function': FilterClasses.ArrowFunction,
            'if-statement': FilterClasses.IfStatement,
            'switch': FilterClasses.Switch_,
            'switch-default': FilterClasses.SwitchDefault,
            'break': FilterClasses.BreakStatement,
            'continue': FilterClasses.ContinueStatement,
            'return': FilterClasses.ReturnStatement,
            'for-statement': FilterClasses.ForStatement,
            'while-statement': FilterClasses.WhileStatement
        };
    }
}
exports.default = FilterFactory;

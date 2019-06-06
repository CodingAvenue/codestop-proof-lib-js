import * as RuleClasses from './index';

export default class RuleFactory {
    static createRule(name: string, filters: any) {
        const rules = RuleFactory.getRules();

        const ruleClass = rules[name] ? rules[name] : null;

        if (!ruleClass) {
            throw new Error(`No Rule class to handle rule ${name}`);
        }

        return new ruleClass(filters);
    }

    static getRules(): any {
        return {
            'console'               : RuleClasses.Console,
            'call_'                 : RuleClasses.Call_,
            'member-call'           : RuleClasses.MemberCall,
            'variable-declaration'  : RuleClasses.VariableDeclaration,
            'identifier'            : RuleClasses.Identifier,
            'literal'               : RuleClasses.Literal,
            'argument'              : RuleClasses.Argument,
            'assignment'            : RuleClasses.Assignment,
            'plus'                  : RuleClasses.Plus_,
            'minus'                 : RuleClasses.Minus_,
            'mul'                   : RuleClasses.Mul,
            'div'                   : RuleClasses.Div,
            'mod'                   : RuleClasses.Mod,
            'greater-than'          : RuleClasses.GreaterEqual,
            'less-than'             : RuleClasses.LessEqual,
            'equals'                : RuleClasses.Equals,
            'less-equal'            : RuleClasses.LessEqual,
            'greater-equal'         : RuleClasses.GreaterEqual,
            'increment'             : RuleClasses.Increment_,
            'decrement'             : RuleClasses.Decrement_,
            'if'                    : RuleClasses.If_,
            'switch'                : RuleClasses.Switch_,
            'switch-default'        : RuleClasses.SwitchDefault,
            'for-statement'         : RuleClasses.For_,
            'while-statement'       : RuleClasses.While_,
            'break'                 : RuleClasses.Break_,
            'return'                : RuleClasses.Return_,
            'continue'              : RuleClasses.Continue_,
            'function-declaration'  : RuleClasses.FunctionDeclaration,
            'arrow-function'        : RuleClasses.ArrowFunction,
            'function-expression'   : RuleClasses.FunctionExpression,
            'unary-expression'      : RuleClasses.UnaryExpression
        };
    }
}
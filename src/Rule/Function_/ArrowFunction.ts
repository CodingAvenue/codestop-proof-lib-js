import Rule from '../Rule';

export default class ArrowFunction extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'ArrowFunctionExpression');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
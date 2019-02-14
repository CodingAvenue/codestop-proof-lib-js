import Rule from '../Rule';

export default class UnaryExpression extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (
                node['type'] == 'UnaryExpression'
                && node['operator'] == '-'
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
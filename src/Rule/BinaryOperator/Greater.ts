import Rule from '../Rule';

export default class Greater extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                node['type'] == 'BinaryExpression'
                && ( node['operator'] == '>')
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
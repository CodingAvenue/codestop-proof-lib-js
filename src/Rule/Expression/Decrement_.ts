import Rule from '../Rule';

export default class Decrement_ extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                (
                    node['type'] == 'ExpressionStatement'
                    && node['expression']['type'] == 'UpdateExpression'
                    && node['expression']['operator'] == '--'
                ) ||
                (
                    node['type'] == 'UpdateExpression'
                    && node['operator'] == '--'
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
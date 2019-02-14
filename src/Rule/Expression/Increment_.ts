import Rule from '../Rule';

export default class Increment_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (
                (
                    node['type'] == 'ExpressionStatement'
                    && node['expression']['type'] == 'UpdateExpression'
                    && node['expression']['operator'] == '++'
                ) ||
                (
                    node['type'] == 'UpdateExpression'
                    && node['operator'] == '++'
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
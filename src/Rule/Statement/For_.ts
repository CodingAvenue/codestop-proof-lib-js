import Rule from '../Rule';

export default class For_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'ForStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
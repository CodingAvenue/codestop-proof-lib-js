import Rule from '../Rule';

export default class While_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'WhileStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
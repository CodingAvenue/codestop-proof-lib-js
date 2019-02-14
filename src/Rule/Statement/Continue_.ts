import Rule from '../Rule';

export default class Continue_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'ContinueStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
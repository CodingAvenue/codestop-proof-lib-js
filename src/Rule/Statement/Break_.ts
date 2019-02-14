import Rule from '../Rule';

export default class Break_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'BreakStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
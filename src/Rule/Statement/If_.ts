import Rule from '../Rule';

export default class If_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'IfStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
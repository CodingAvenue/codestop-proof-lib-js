import Rule from '../Rule';

export default class Switch_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'SwitchStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
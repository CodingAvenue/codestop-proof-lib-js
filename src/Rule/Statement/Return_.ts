import Rule from '../Rule';

export default class Return_ extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'ReturnStatement');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
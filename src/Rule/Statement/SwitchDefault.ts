import Rule from '../Rule';

export default class SwitchDefault extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (
                node['type'] == 'SwitchCase'
                && node['test'] instanceof Array
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
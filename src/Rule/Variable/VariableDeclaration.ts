import Rule from '../Rule';

export default class VariableDeclaration extends Rule {
    getRule(): any {
        return (node: any): boolean => {
            return (node['type'] == 'VariableDeclaration');
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
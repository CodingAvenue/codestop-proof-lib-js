import Rule from '../Rule';

export default class FunctionDeclaration extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                node['type'] == 'FunctionDeclaration'
                &&
                    filters['name']
                        ? node['id']['name'] == filters['name']
                        : true
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return ['name'];
    }
}
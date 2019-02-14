import Rule from '../Rule';

export default class FunctionExpression extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                node['type'] == 'FunctionExpression'
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
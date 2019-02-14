import Rule from '../../Rule';

export default class Console extends Rule {
    getRule(): any {
        const filters = this.filters;
        
        return (node: any): boolean => {
            return (
                (
                    node['type'] == 'ExpressionStatement'
                    && node['expression']['type'] == 'CallExpression'
                    && node['expression']['callee']['object']['name'] == 'console'
                )
                &&
                    filters['property']
                        ? node['expression']['callee']['property']['name'] == filters['property']
                        : true
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
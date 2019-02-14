import Rule from '../../Rule';

export default class Call_ extends Rule {
    getRule(): any {
        const filters = this.filters;
        
        return (node: any): boolean => {
            if (node['type'] == 'ExpressionStatement') {
                node = node['expression'];
            }

            if (node['callee']['type'] && node['callee']['type'] == 'MemberExpression') {
                return (
                    (node['type'] == 'CallExpression'
                    && node['callee']['object']['name'] == filters['name'])
                    &&
                        filters['property']
                            ? node['callee']['property']['name'] == filters['property']
                            : true
                );
            } else {
                return (
                    node['type'] == 'Callexpression'
                    && (
                        filters['name']
                            ? filters['name'] == node['callee']['name']
                            : true
                    )
                );
            }
        };
    }

    allowedOptionalFilter(): string[] {
        return [];
    }
}
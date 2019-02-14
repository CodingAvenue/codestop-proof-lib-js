import Rule from '../Rule';

export default class Identifier extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                (
                    node['type'] == 'VariableDeclarator'
                    && (
                        filters['name']
                            ? node['id']['name'] == filters['name']
                            : true
                    )
                ) ||
                (
                    node['type'] == 'Identifier'
                    && (
                        filters['name']
                            ? node['name'] == filters['name']
                            : true
                    )
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return ['name'];
    }
}
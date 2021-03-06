import Rule from '../../Rule';

export default class MemberCall extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            if (node['type'] == 'ExpressionStatement') {
                node = node['expression'];
            }

            return (
                (
                    filters && filters['name']
                        ? node['object']['name'] == filters['name']
                        : true
                )
                &&
                (
                    filters && filters['property']
                        ? node['property']['name'] == filters['property']
                        : true
                )
                &&
                (
                    filters && filters['value']
                        ? node['property']['type'] == 'Literal' && node['property']['value'] == filters['value']
                        : true
                )
            )
        }
    }

    allowedOptionalFilter(): string[] {
        return ['property', 'name'];
    }
}
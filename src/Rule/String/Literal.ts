import Rule from '../Rule';

export default class Literal extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                node['type'] == 'Literal'
                && (
                    filters['value']
                        ? filters['value'] == node['value']
                        : true
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return ['type', 'value', 'quoted'];
    }
}
import Rule from '../Rule';

export default class Assignment extends Rule {
    getRule(): any {
        const filters = this.filters;

        return (node: any): boolean => {
            return (
                (
                    node['type'] == 'ExpressionStatement'
                    && node['expression']['type'] == 'AssignmentExpression'
                    && (
                        filters['operator']
                            ? filters['operator'] == node['expression']['operator']
                            : true
                    )
                ) ||
                (
                    node['type'] == 'AssignmentExpression'
                    && (
                        filters['operator']
                            ? filters['operator'] == node['operator']
                            : true
                    )
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return ['operator'];
    }
}
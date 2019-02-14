import Rule from '../Rule';

export default class Argument extends Rule {
    getRule(): any {
        const filters = this.filters;
        const getIndex = this.getTypeIndex()

        return (node: any): boolean => {
            const index = getIndex === null ? null : getIndex(node);

            return (
                (
                    node['type'] == 'ExpressionStatement'
                    && node['expression']['arguments']
                    && node['expression']['arguments'].length > 0
                )
                && (
                    filters['type']
                        ? index  
                            ? true
                            : false
                        : true
                )
                && (
                    filters['name']
                        ? index
                            ? node['expression']['arguments'][index]['name'].toLowerCase() == filters['name'].toLowerCase()
                            : false
                        : true
                )
                && (
                    filters['value']
                        ? index
                            ? node['expression']['arguments'][index]['value'].toLowerCase() == filters['value'].toLowerCase()
                            : false
                        : true
                )
            );
        };
    }

    allowedOptionalFilter(): string[] {
        return ['type', 'name', 'value'];
    }

    private getTypeIndex() {
        const type = this.filters['type'];

        return (node: any): number => {
            let foundIndex = null;

            const args = node['expression']['arguments'];
            for(let i = 0; i < args.length; i++) {
                const arg = args[i];
                if (arg.toLowerCase() === type.toLowerCase()) {
                    foundIndex = i;
                    break;
                }
            }

            return foundIndex;
        }
    }
}
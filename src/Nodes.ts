import * as _ from 'lodash';
import SelectorParser from './Parser/Selector/Parser';
import ArrayTransformer from './Parser/Selector/Transformer/ArrayTransformer';
import FilterFactory from './Filter/FilterFactory';

export default class Nodes {
    private parsedCode: any;

    constructor(parsedCode: any) {
        this.parsedCode = parsedCode;
    }

    find(rawSelector: string) {
        const selector = this.parseSelector(rawSelector);
        
        const filter = FilterFactory.createFilter(selector['node'], selector['attribute']);
        const filterNodes = filter.applyFilter(this.parsedCode);

        return new Nodes(filterNodes);
    }

    parseSelector(selector: string) {
        const parser = new SelectorParser(selector);
        const stream = parser.parse();

        const transformer = new ArrayTransformer(stream);
        return transformer.transform();
    }

    getSubNode(subNode: string, isEmpty: boolean = false) {
        if (_.has(this.parsedCode, subNode)) {
            return new Nodes([this.parsedCode[subNode]]);
        } else {
            let nodes: any = []

            for (let i = 0; i < this.parsedCode.length; i++) {
                const node = this.parsedCode[i];

                if (subNode == 'MemberCall') { // getting to the inner property call e.g foo.bar.baz() this will give us the foo.bar node.
                    if (_.has(node, 'expression') && _.has(node['expression'], 'callee') && node['expression']['callee']['type'] == 'MemberExpression' && _.has(node['expression']['callee']['object'], 'type')) {
                        nodes.push(node['expression']['callee']['object']);
                    }
                    else if (node['type'] == 'MemberExpression' && _.has(node, 'object') && _.has(node['object'], 'callee') && node['object']['callee']['type'] == 'MemberExpression') {
                        nodes.push(node['object']);
                    }
                    else if (node['type'] == 'CallExpression' && _.has(node, 'callee') && node['callee']['type'] == 'MemberExpression' && _.has(node['callee'], 'object') && node['callee']['object']['type'] == 'CallExpression') {
                        nodes.push(node['callee']['object']);
                    }
                    else if (node['type'] == 'CallExpression' && _.has(node, 'callee') && node['callee']['type'] == 'MemberExpression' && _.has(node['callee'], 'object') && node['callee']['object']['type'] == 'MemberExpression') {
                        nodes.push(node['callee']['object']);
                    }
                    else if (node['type'] == 'MemberExpression' && _.has(node, 'object') && node['object']['type'] == 'MemberExpression') {
                        nodes.push(node['object']);
                    }
                }

                if (_.has(node, subNode) && (node[subNode] instanceof Array || node[subNode] instanceof Object)) {
                    if (subNode == 'declarations' || subNode == 'cases') {
                        nodes = [...nodes, ...node[subNode]];
                    } else if (subNode == 'body') {
                        nodes = [...nodes, ...node[subNode][subNode]];
                    } else {
                        if (subNode == 'arguments' || subNode == 'params') {
                            nodes = [...nodes, ...node[subNode]];
                        } else {
                            nodes.push(node[subNode]);
                        }
                    }
                } else if (_.has(node, 'expression') && _.has(node['expression'], subNode) && (node['expression'][subNode] instanceof Array || node['expression'][subNode] instanceof Object)) {
                    if (subNode == 'arguments') {
                        nodes = [...nodes, ...node['expression'][subNode]];
                    } else {
                        nodes.push(node['expression'][subNode]);
                    }
                } else if (_.has(node, 'object') && _.has(node['object'], subNode) && (node['object'][subNode] instanceof Array || node['object'][subNode] instanceof Object)) {
                    if (subNode == 'arguments') {
                        nodes = [...nodes, ...node['object'][subNode]];
                    } else {
                        nodes.push(node['object'][subNode]);
                    }
                } else if (_.has(node, 'type') && node['type'] == 'MemberExpression' && _.has(node, 'property') && (node['property'] instanceof Array || node['property'] instanceof Object)) {
                    if (subNode == 'identifier' && node['property']['type'] == 'Identifier') {
                        nodes.push(node['property']);
                    }
                }
            }

            return new Nodes(nodes)
        }
    }

    getSubIndex(index: number) {
        if (index > this.parsedCode.length) {
            throw new Error(`Can't find a subnode for index ${index}`);
        }

        if (this.parsedCode[index] instanceof Array) {
            return new Nodes(this.parsedCode[index]);
        } else {
            return new Nodes([this.parsedCode[index]]);
        }
    }

    count(): number {
    	return this.parsedCode.length
    }
}

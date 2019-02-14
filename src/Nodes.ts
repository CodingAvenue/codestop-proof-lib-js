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
        if (_.includes(this.parsedCode, subNode)) {
            console.log("Inside if");
            return new Nodes([this.parsedCode[subNode]]);
        } else {
            console.log("inside else")
            let nodes: any = []

            for (let i = 0; i < this.parsedCode.length; i++) {
                const node = this.parsedCode[i];
                console.log(node);

                if (_.includes(node, subNode) && node[subNode] instanceof Array) {
                    if (subNode == 'declarations' || subNode == 'body' || subNode == 'cases') {
                        nodes = [...nodes, ...node[subNode]];
                    } else {
                        if (subNode == 'arguments' || subNode == 'params') {
                            nodes = [...nodes, ...node[subNode]];
                        } else {
                            nodes.push(node[subNode]);
                        }
                    }
                } else if (_.includes(node, 'expression') && _.includes(node['expression'], subNode) && node['expression'][subNode] instanceof Array) {
                    if (subNode == 'arguments') {
                        nodes = [...nodes, ...node['expression'][subNode]];
                    } else {
                        nodes.push(node['expression'][subNode]);
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
}
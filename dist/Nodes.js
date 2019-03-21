"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Parser_1 = require("./Parser/Selector/Parser");
const ArrayTransformer_1 = require("./Parser/Selector/Transformer/ArrayTransformer");
const FilterFactory_1 = require("./Filter/FilterFactory");
class Nodes {
    constructor(parsedCode) {
        this.parsedCode = parsedCode;
    }
    find(rawSelector) {
        const selector = this.parseSelector(rawSelector);
        const filter = FilterFactory_1.default.createFilter(selector['node'], selector['attribute']);
        const filterNodes = filter.applyFilter(this.parsedCode);
        return new Nodes(filterNodes);
    }
    parseSelector(selector) {
        const parser = new Parser_1.default(selector);
        const stream = parser.parse();
        const transformer = new ArrayTransformer_1.default(stream);
        return transformer.transform();
    }
    getSubNode(subNode, isEmpty = false) {
        if (_.has(this.parsedCode, subNode)) {
            return new Nodes([this.parsedCode[subNode]]);
        }
        else {
            let nodes = [];
            for (let i = 0; i < this.parsedCode.length; i++) {
                const node = this.parsedCode[i];
                if (_.has(node, subNode) && (node[subNode] instanceof Array || node[subNode] instanceof Object)) {
                    if (subNode == 'declarations' || subNode == 'body' || subNode == 'cases') {
                        nodes = [...nodes, ...node[subNode]];
                    }
                    else {
                        if (subNode == 'arguments' || subNode == 'params') {
                            nodes = [...nodes, ...node[subNode]];
                        }
                        else {
                            nodes.push(node[subNode]);
                        }
                    }
                }
                else if (_.has(node, 'expression') && _.has(node['expression'], subNode) && (node['expression'][subNode] instanceof Array || node['expression'][subNode] instanceof Object)) {
                    if (subNode == 'arguments') {
                        nodes = [...nodes, ...node['expression'][subNode]];
                    }
                    else {
                        nodes.push(node['expression'][subNode]);
                    }
                }
            }
            return new Nodes(nodes);
        }
    }
    getSubIndex(index) {
        if (index > this.parsedCode.length) {
            throw new Error(`Can't find a subnode for index ${index}`);
        }
        if (this.parsedCode[index] instanceof Array) {
            return new Nodes(this.parsedCode[index]);
        }
        else {
            return new Nodes([this.parsedCode[index]]);
        }
    }
    count() {
        return this.parsedCode.length;
    }
}
exports.default = Nodes;

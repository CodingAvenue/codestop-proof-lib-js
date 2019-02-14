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
        if (_.includes(this.parsedCode, subNode)) {
            console.log("Inside if");
            return new Nodes([this.parsedCode[subNode]]);
        }
        else {
            console.log("inside else");
            let nodes = [];
            for (let i = 0; i < this.parsedCode.length; i++) {
                const node = this.parsedCode[i];
                console.log(node);
                if (_.includes(node, subNode) && node[subNode] instanceof Array) {
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
                else if (_.includes(node, 'expression') && _.includes(node['expression'], subNode) && node['expression'][subNode] instanceof Array) {
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
}
exports.default = Nodes;

export default class Nodes {
    private parsedCode;
    constructor(parsedCode: any);
    find(rawSelector: string): Nodes;
    parseSelector(selector: string): any;
    getSubNode(subNode: string, isEmpty?: boolean): Nodes;
    getSubIndex(index: number): Nodes;
    count(): number;
}

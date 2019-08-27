import Nodes from './Nodes';
declare const parseFile: (codeFile: string) => Promise<Nodes>;
declare const parseString: (content: string) => Promise<Nodes>;
export { parseFile, parseString };

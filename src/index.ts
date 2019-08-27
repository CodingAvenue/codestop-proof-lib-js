import * as parser from './Parser/Code';
import Nodes from './Nodes';

const parseFile = async (codeFile: string) => {
    try {
	const parsed = await parser.parseFile(codeFile);
	return new Nodes(parsed);
    } catch (e) {
	throw e;
    }
}

const parseString = async (content: string) => {
    try {
	const parsed = await parser.parseString(content);
	return new Nodes(parsed);
    } catch (e) {
	throw e;
    }
   
}

export {
    parseFile,
    parseString
}


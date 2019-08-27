import * as esprima from 'esprima';
import * as fs from 'fs';
import { promisify } from 'util';

const accessFile = promisify(fs.access);
const readFile = promisify(fs.readFile);

const parseFile = async (codeFile: string) => {
    try {
        await accessFile(codeFile);
	return parseString(await readFile(codeFile, 'utf-8'));
    } catch(e) {
        throw e;
    }
}

const parseString = async (content: string) => {
    try {
        if (!content) {
            throw new Error("code file is empty")
        }

        const parsed = esprima.parseScript(content);
        return JSON.parse(JSON.stringify(parsed));
    } catch(e) {
        throw e;
    }
}

export {
    parseFile,
    parseString
}

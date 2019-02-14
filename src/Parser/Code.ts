import * as esprima from 'esprima';
import * as fs from 'fs';
import { promisify } from 'util';

const accessFile = promisify(fs.access);
const readFile = promisify(fs.readFile);

export default async (codeFile: string) => {
    try {
        await accessFile(codeFile);
        const content = await readFile(codeFile, 'utf-8');

        if (!content) {
            throw new Error("code file is empty")
        }

        return esprima.parseScript(content);
    } catch(e) {
        throw e;
    }
}
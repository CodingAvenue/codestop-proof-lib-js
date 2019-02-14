import codeParser from './Parser/Code';
import Nodes from './Nodes';

export default async (codeFile: string) => {
    try {
        const parsed = await codeParser(codeFile);
        return new Nodes(parsed);
    } catch (e) {
        throw e;
    }
};


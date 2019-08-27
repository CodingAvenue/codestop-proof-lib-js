"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser = require("./Parser/Code");
const Nodes_1 = require("./Nodes");
const parseFile = (codeFile) => __awaiter(this, void 0, void 0, function* () {
    try {
        const parsed = yield parser.parseFile(codeFile);
        return new Nodes_1.default(parsed);
    }
    catch (e) {
        throw e;
    }
});
exports.parseFile = parseFile;
const parseString = (content) => __awaiter(this, void 0, void 0, function* () {
    try {
        const parsed = yield parser.parseString(content);
        return new Nodes_1.default(parsed);
    }
    catch (e) {
        throw e;
    }
});
exports.parseString = parseString;

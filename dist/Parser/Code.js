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
const esprima = require("esprima");
const fs = require("fs");
const util_1 = require("util");
const accessFile = util_1.promisify(fs.access);
const readFile = util_1.promisify(fs.readFile);
const parseFile = (codeFile) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield accessFile(codeFile);
        return parseString(yield readFile(codeFile, 'utf-8'));
    }
    catch (e) {
        throw e;
    }
});
exports.parseFile = parseFile;
const parseString = (content) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (!content) {
            throw new Error("code file is empty");
        }
        const parsed = esprima.parseScript(content);
        return JSON.parse(JSON.stringify(parsed));
    }
    catch (e) {
        throw e;
    }
});
exports.parseString = parseString;

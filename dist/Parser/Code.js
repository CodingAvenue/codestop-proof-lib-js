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
exports.default = (codeFile) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield accessFile(codeFile);
        const content = yield readFile(codeFile, 'utf-8');
        if (!content) {
            throw new Error("code file is empty");
        }
        return esprima.parseScript(content);
    }
    catch (e) {
        throw e;
    }
});

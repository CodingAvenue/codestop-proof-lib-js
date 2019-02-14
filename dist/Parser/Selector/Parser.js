"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceReader_1 = require("./SourceReader");
const TokenStream_1 = require("./TokenStream");
const Handler = require("./Handler");
class Parser {
    constructor(source) {
        this.source = source;
        this.handlers = [];
        this.loadHandlers();
    }
    loadHandlers() {
        this
            .addHandler(new Handler.SpaceHandler())
            .addHandler(new Handler.OpenSquareBracketHandler())
            .addHandler(new Handler.CloseSquareBracketHandler())
            .addHandler(new Handler.QuoteHandler())
            .addHandler(new Handler.EqualHandler())
            .addHandler(new Handler.CommaHandler())
            .addHandler(new Handler.EscapeHandler())
            .addHandler(new Handler.StringHandler());
    }
    addHandler(handler) {
        this.handlers.push(handler);
        return this;
    }
    parse() {
        const reader = new SourceReader_1.default(this.source);
        const stream = new TokenStream_1.default();
        while (!reader.isEnd()) {
            let handled = false;
            for (let i = 0; i < this.handlers.length; i++) {
                const handler = this.handlers[i];
                if (handler.handle(reader, stream)) {
                    i = this.handlers.length;
                    handled = true;
                }
            }
            if (!handled) {
                throw new Error(`Cannot find any handler to handle this character ${reader.getCurrentChar()}`);
            }
        }
        return stream;
    }
}
exports.default = Parser;

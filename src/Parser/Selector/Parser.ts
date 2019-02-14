import SourceReader from './SourceReader';
import TokenStream from './TokenStream';
import * as Handler from './Handler';

export default class Parser {
    private source: string;
    private handlers: any;

    constructor(source: string) {
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
            .addHandler(new Handler.StringHandler())
    }

    addHandler(handler: any) {
        this.handlers.push(handler);
        return this;
    }

    parse(): TokenStream {
        const reader = new SourceReader(this.source);
        const stream = new TokenStream();

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
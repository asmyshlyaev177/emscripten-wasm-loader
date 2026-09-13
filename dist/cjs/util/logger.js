"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.enableLogger = void 0;
/**
 * Default log instance falls back to noop if not specified.
 */
let logInstance = () => {
    /* noop */
};
const log = (...args) => logInstance(...args);
exports.log = log;
/**
 * Enables logging internal behavior of hunspell-asm.
 * @param logger function to log.
 */
const enableLogger = (logger) => (logInstance = logger);
exports.enableLogger = enableLogger;
//# sourceMappingURL=logger.js.map
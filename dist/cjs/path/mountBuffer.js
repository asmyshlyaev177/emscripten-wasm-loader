"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountDirectory = exports.mountBuffer = void 0;
const nanoidModule = require("nanoid");
const logger_1 = require("../util/logger");
const isMounted_1 = require("./isMounted");
// nanoid v2 is CJS (`module.exports = fn`). Without esModuleInterop the CommonJS
// emit binds the function itself, while the ESM emit binds a namespace object whose
// `default` is the function - calling the namespace throws there, and bundlers warn
// on it (rolldown CANNOT_CALL_NAMESPACE). Resolve the callable for both emits.
const nanoid = nanoidModule.default ||
    nanoidModule;
/**
 * Creates a function to mount contents of file into wasm internal memory filesystem
 * to allow wasm can access.
 *
 * @param {FS} FS wasm module filesystem
 * @param {string} memPathId root path in memory filesystem to mount given arrayBuffer.
 * This prefix path is generated automatically each time wasm module is loaded.
 *
 * @return {(contents: ArrayBufferView, fileName?: string) => string} function to mount buffer under memory filesystem.
 * If filename is not provided, it'll be generated automatically. This function checks existing file mounted via filename,
 * does not validate contents of buffer to find out already mounted one.
 */
const mountBuffer = (FS, memPathId) => (contents, fileName) => {
    const file = fileName || nanoid(45);
    const mountedFilePath = `${memPathId}/${file}`;
    if (isMounted_1.isMounted(FS, mountedFilePath, 'file')) {
        logger_1.log(`mountTypedArrayFile: file is already mounted, return it`);
    }
    else {
        FS.writeFile(mountedFilePath, contents, { encoding: 'binary' });
    }
    return mountedFilePath;
};
exports.mountBuffer = mountBuffer;
/**
 * Stub function to support `browser` field in package.json. Do not use.
 *
 * @internal
 */
const mountDirectory = () => {
    throw new Error('not supported');
};
exports.mountDirectory = mountDirectory;
//# sourceMappingURL=mountBuffer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWasmEnabled = void 0;
const getroot_1 = require("getroot");
/**
 * Naïvely check if current runtime supports native web assembly.
 */
exports.isWasmEnabled = () => !!getroot_1.root.WebAssembly && !!getroot_1.root.WebAssembly.compile && !!getroot_1.root.WebAssembly.instantiate;
//# sourceMappingURL=isWasmEnabled.js.map
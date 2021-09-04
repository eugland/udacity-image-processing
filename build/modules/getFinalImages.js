"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalImages = void 0;
var fs_1 = __importDefault(require("fs"));
var finalImages = function (w, h, outDir) {
    return fs_1.default
        .readdirSync(outDir)
        .filter(function (file) {
        return "_" + w + "_" + h === file.substring(file.indexOf('_'), file.indexOf('.'));
    });
};
exports.finalImages = finalImages;
//# sourceMappingURL=getFinalImages.js.map
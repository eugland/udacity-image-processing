"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalImages = void 0;
var fs_1 = __importDefault(require("fs"));
var finalImages = function (w, h, outDir, img) {
    if (img === void 0) { img = null; }
    var scope = fs_1.default
        .readdirSync(outDir)
        .filter(function (file) {
        return "_" + w + "_" + h === file.substring(file.indexOf('_'), file.indexOf('.'));
    });
    if (img != null) {
        scope = scope.filter(function (f) { return f.startsWith(img); });
    }
    return scope;
};
exports.finalImages = finalImages;
//# sourceMappingURL=getFinalImages.js.map
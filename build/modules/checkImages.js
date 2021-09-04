"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfImagesExist = exports.ImgMeta = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils/utils");
var ImgMeta = /** @class */ (function () {
    function ImgMeta(unResized, inFiles, outFiles) {
        this.unResized = unResized;
        this.inFiles = inFiles;
        this.outFiles = outFiles;
    }
    return ImgMeta;
}());
exports.ImgMeta = ImgMeta;
var checkIfImagesExist = function (width, height) {
    var _a = utils_1.imagesPath(__dirname), inputPath = _a.inputPath, outputPath = _a.outputPath;
    var outputFiles = fs_1.default.readdirSync(outputPath);
    var inputFiles = fs_1.default.readdirSync(inputPath);
    inputFiles = utils_1.clearFiles(inputFiles);
    var unResized = inputFiles.filter(function (file) { return !outputFiles.includes(utils_1.createThumbnailName(file, width, height)); });
    return new ImgMeta(unResized, inputFiles, outputFiles);
};
exports.checkIfImagesExist = checkIfImagesExist;
//# sourceMappingURL=checkImages.js.map
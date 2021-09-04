"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbnailName = exports.clearFiles = exports.imagesPath = exports.ImgDirMeta = void 0;
var path_1 = __importDefault(require("path"));
var ImgDirMeta = /** @class */ (function () {
    function ImgDirMeta(inputPath, outputPath) {
        this.inputPath = inputPath;
        this.outputPath = outputPath;
    }
    return ImgDirMeta;
}());
exports.ImgDirMeta = ImgDirMeta;
var imagesPath = function (dirname) {
    var pathList = dirname.split(path_1.default.sep);
    pathList.pop();
    return new ImgDirMeta(path_1.default.join(pathList.join(path_1.default.sep), 'public', 'images', 'full'), path_1.default.join(pathList.join(path_1.default.sep), 'public', 'images', 'thumbnails'));
};
exports.imagesPath = imagesPath;
var clearFiles = function (files) {
    return files.filter(function (name) { return !name.startsWith('.'); });
};
exports.clearFiles = clearFiles;
var createThumbnailName = function (file, width, height) {
    var _a = file.split('.'), filename = _a[0], ext = _a[1];
    return filename + "_" + width + "_" + height + "." + ext;
};
exports.createThumbnailName = createThumbnailName;
//# sourceMappingURL=utils.js.map
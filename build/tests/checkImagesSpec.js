"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkImages_1 = require("../modules/checkImages");
var path_1 = __importDefault(require("path"));
var mockFilesInput = Object.create(null);
var MOCK_FILE_INFO_INPUT = {
    '/path/to/image1.jpg': 'image 1',
    '/path/to/.DS_Store': 'not an image'
};
for (var file in MOCK_FILE_INFO_INPUT) {
    var dir = path_1.default.dirname(file);
    if (!mockFilesInput[dir]) {
        mockFilesInput[dir] = [];
    }
    mockFilesInput[dir].push(path_1.default.basename(file));
}
describe('Check if images exist', function () {
    // jest.spyOn(utils, 'clearFiles').mockImplementation(() => ['image1.jpg']);
    // jest
    //   .spyOn(utils, 'createThumbnailName')
    //   .mockImplementation(() => 'image1_200_400.jpg');
    // jest.spyOn(utils, 'imagesPath').mockImplementation(() => {
    //   return {
    //     inputPath: '/path/to/full',
    //     outputPath: '/path/to/thumbnails'
    //   };
    // });
    // jest
    //   .spyOn(fs, 'readdirSync')
    //   .mockImplementation(() => mockFilesInput['/path/to']);
    it('Testing the default files exist before all else', function () {
        // do something that calls the genName function
        // console.log(checkIfImagesExist(null, null));
        expect(checkImages_1.checkIfImagesExist(null, null)).toBeInstanceOf(checkImages_1.ImgMeta);
    });
});
//# sourceMappingURL=checkImagesSpec.js.map
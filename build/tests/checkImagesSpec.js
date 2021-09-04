"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkImages_1 = require("../modules/checkImages");
describe('Check if images exist', function () {
    it('Testing the default files exist before all else', function () {
        // do something that calls the genName function
        // console.log(checkIfImagesExist(null, null));
        expect(checkImages_1.checkIfImagesExist(null, null)).toBeInstanceOf(checkImages_1.ImgMeta);
    });
});
//# sourceMappingURL=checkImagesSpec.js.map
/* eslint-disable no-undef */
// import isPrime from './isPrime';
import * as utils from '../utils/utils';
import fs from 'fs';
import { checkIfImagesExist, ImgMeta } from "../modules/checkImages";
import path from 'path';


const mockFilesInput = Object.create(null);
const MOCK_FILE_INFO_INPUT = {
  '/path/to/image1.jpg': 'image 1',
  '/path/to/.DS_Store': 'not an image'
};
for (const file in MOCK_FILE_INFO_INPUT) {
  const dir = path.dirname(file);
  if (!mockFilesInput[dir]) {
    mockFilesInput[dir] = [];
  }
  mockFilesInput[dir].push(path.basename(file));
}

describe('Check if images exist', () => {
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

  it('Testing the default files exist before all else', () => {
    // do something that calls the genName function
    // console.log(checkIfImagesExist(null, null));
    expect(checkIfImagesExist(null, null)).toBeInstanceOf(ImgMeta);
  });

  

});
